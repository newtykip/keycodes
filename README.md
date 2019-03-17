# keycodes

A simple web app which gets the keycode of whichever key you press on the keyboard.

## Running locally

1. First, you need to clone the repository using git

```bash
> git clone https://github.com/jsmiith/keycodes
```

2. Next, install all the required dependencies using yarn (or npm)...

```bash
> yarn
```

3. Finally, you need to run the React development server!
   
```bash
> yarn start
```

### NOTE:

If you would like a production build of this project, once you have installed all of the required dependencies (step 2), you may run the following command instead of starting the React development server using `yarn start`.

```bash
> yarn build
```

That command shall create a folder in the root directory called `build` which will contain a compiled version of the project, ready to be hosted and used in the browser.

If you want to get rid of the build folder, you can run `yarn clean`.

<sub>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)</sub>