# DocNest Desktop App

## Description
Doctor Nest Desktop is built from React + Electron for the doctors of tomorrow 🔥 🔥 🔥

## Install

* **Note: requires a node version >= 7 and an npm version >= 4.**
* **If you have installation or compilation issues with this project, please see [the debugging guide](https://github.com/chentsulin/electron-react-boilerplate/issues/400)**

Installing dependencies with yarn:

```bash
$ yarn
```

Installing dependencies with npm:
```bash
$ npm install
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ npm run dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ npm run start-renderer-dev
$ npm run start-main-dev
```

## Storybook

To start the `storybook` UI Development Environment

```bash
$ npm run storybook
```

## FAQ

See the [documentation](https://github.com/tinker-hub/docnest-desktop/wiki).
