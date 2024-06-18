# React + TypeScript + Vite

## Database Design

Check and edit the database model at here:
[database](https://lucid.app/lucidchart/90c06bd1-b53f-45f2-9fb4-699e70969565/edit?viewport_loc=-11%2C-10%2C1576%2C853%2C0_0&invitationId=inv_978a158c-65bc-440a-9c18-ec3643ab240b)

## Style Guild

The initial css file is using _bootstrap_ framework for styling\
Check it from [here](https://getbootstrap.com/)\
Proper CSS resets are also done, and please try to use the css-custom-properties\

## Deploy Settings

To enable react history mode router, please setup the following rewrites:\

```
{
  "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp|html|xml|webmanifest|mp4)$)([^.]+$)/>",
  "target": "/index.html",
  "status": "200",
  "condition": null
},
{
  "source": "/<*>",
  "target": "/index.html",
  "status": "404-200",
  "condition": null
}
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run preview`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `dist` folder.\
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
