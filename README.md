# DocNest Desktop App

## Description
Doctor Nest Desktop is built from React + Electron for the doctors of tomorrow 🔥 🔥 🔥

## Install

* **Note: requires a node version >= 7.**
* **We highly recommended [yarn](https://yarnpkg.com/) package manager to avoid installation issues.**

Installing dependencies with yarn:

```bash
$ yarn
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ yarn start-renderer-dev
$ yarn start-main-dev
```

## Storybook

To start the `storybook` UI Development Environment

```bash
$ yarn storybook
```

## FAQ

See the [documentation](https://github.com/tinker-hub/docnest-desktop/wiki).
