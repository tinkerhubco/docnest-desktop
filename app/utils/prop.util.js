const PropUtil = {
  getPropsByPrefix: (prefix = '', props = {}) =>
    Object.keys(props).reduce((accumulator, currentValue) => {
      const splittedKey = currentValue.split('-');
      let newProps = accumulator;
      if (splittedKey.length > 1 && splittedKey[0] === prefix) {
        newProps = Object.assign(newProps, {
          [splittedKey[1]]: props[currentValue]
        });
      }
      return newProps;
    }, {})
};

export default PropUtil;
