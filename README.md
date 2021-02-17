# A Nextjs, Tailwind CSS, Storybook Starter Template

A starter template for Storybook using the following tech:

- Nextjs,
- Tailwind CSS,
- Storybook
- Styled Components
- Twin.Macro

The following installs are outlined briefly, please refer to the official documentation online.

Configuring Storybook is sometimes not that easy, and requires some brute force, please check the latest issues on
their official documentation site, and GitHub.

The Storybook Theme has been customised, to show how it can be branded.

## Install Nextjs - Empty project

```npm

npm react react-dom next

```

Add the following to package.json scripts

```json

    "dev": "next dev",
    "build": "next build",
    "start": "next start",

```

## Install Storybook

Try both these commands, you can ommit the first if you want an empty setup

Had to you use --force due to breaking dependencies "React v17.0.1"

```npm

npx -p @storybook/cli sb init

npm install -D @storybook/react @babel/core babel-loader babel-preset-react-app --force

```

Add the following to package.json scripts

```json
{
  "storybook": "start-storybook -s ./public -p 5005",
  "storybook:build": "build-storybook"
}
```

You should now be able to run Storybook on port 5005

## Install and Configure Tailwind CSS

```npm

npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

```

To create minimal tailwind config file(s) - tailwind.config.js - postcss.config.js

```npm
npx tailwindcss init -p

```

Configuring the purge of unused tailwind styles, add this to Tailwind config file:

```json
 purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

```

Include tailwind css in `_app.js` and create file under styles

```css

import '../styles/global.css'

```

Add tailwind components to `globals.css`

```
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

```

## [PostCSS 7 compatibility build](https://tailwindcss.com/docs/installation)

This is required otherwise you get a PostCSS error message when running v6+ of Storybook,
since its not yet up-to-date with PostCSS 8

```error
Error: PostCSS plugin tailwindcss requires PostCSS 8.

```

### [Install](https://github.com/tailwindlabs/tailwindcss)

as follows:

```npm

npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

```

## Storybook Notes

### Serving Images, Fonts and Assets

Static resources can be configure to be served from the Public folder...

- [Storybook: Serving Static Files](https://storybooks.netlify.app/configurations/)
- [Storybook: Images, fonts, and assets](https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook)
  serving-static-files/)
- [Image component does not work with Storybook](https://github.com/vercel/next.js/issues/18393)
- [Storybook and Static Images](https://stephencharlesweiss.com/storybook-and-static-images/)

To serve images from static/ public directories we can add the use the following script amendment `-s ./public`.

```npm

"storybook": "start-storybook -s ./public -p 5005",

```

Its possible to add more than 1 folder to serve static resources from e.g.

```code
 -s ./public, ./static
```

We can use this for more than just images.

However, to complete the override of the next Image we need to add the following to the `preview.js` file:

### Overriding Next Images

The static method `Object.defineProperty()` defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

```code

// Replace next/image for Storybook

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

```
