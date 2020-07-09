## ReactNative | Typescript | Redux Template

The purpose of this template is to create a consistent foundation for projects to build upon off as a guide. The idea is to create one for React Native and web, with very little interchange between the two.

### Project Structure

The idea is to make code as reuseable and clean as possible. A few tricks to achieving this is by:

- Using index.ts within folders to clean up the import noise
- Containing all components into their respective contexts, styles, tests, queries even + other components (directly related to a page) are all contained in a folder
- All global shared code goes in the lib folder, such as Types
- Supporting theming and localisation, aka no hardcoded strings

```
.
├── node_modules/
├── android/
├── ios/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── some-img.png
│   │   │   └── index.ts
│   │   ├── strings/
│   │   │   ├── languages/
│   │   │   │   └── en.ts
│   │   │   └── index.ts
│   │   └── themes/
│   │       ├── themes.json
│   │       └── index.ts
│   ├── components/
│   │   └── SomeComponent/
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   └── SomeComponent.test.tsx
│   │       ├── index.ts
│   │       ├── SomeComponent.tsx
│   │       └── SomeComponentStyles.ts
│   ├── lib/
│   │   │── Redux/
│   │   │   ├── Actions
│   │   │   │   └── example.ts
│   │   │   ├── Reducers
│   │   │   │   └── example.ts
│   │   │   ├── Store
│   │   │   │   └── index.ts
│   │   │   ├── Types
│   │   │   │   └── example.ts
│   │   │   └── Utils
│   │   │       └── index.ts
│   │   │── Authentication.ts
│   │   │── Constants.ts
│   │   │── Strings.ts
│   │   │── Theme.ts
│   │   │── Types.ts
│   │   └── Utils.ts
│   ├── navigation/
│   │   │── index.tsx
│   │   │── Types.ts
│   │   └── Utils.ts
│   ├── screens/
│   │   └── Home/
│   │       ├── components/
│   │       │   └── SomeComponent/
│   │       │       ├── __tests__
│   │       │       │   ├── __snapshots__
│   │       │       │   └── SomeComponent.test.tsx
│   │       │       ├── index.ts
│   │       │       ├── SomeComponent.tsx
│   │       │       └── SomeComponentStyles.ts
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   └── Home.test.tsx
│   │       ├── index.ts
│   │       ├── Home.tsx
│   │       └── HomeStyles.ts
│   └── App.tsx
├── .buckconfig
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierrc
├── .watchmanconfig
├── app.json
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── README.md
├── setupTests.js
├── tsconfig.json
└── yarn.lock
```

### Eslint + Prettier + Husky

Before every commit, Husky will run a pre-commit hook that will ensure that all altered files are formatted and linted correctly. As well as tests all passing.

### Redux

I have created an example Redux Component that utilises an example action, reducer and type. This can be used as a guide for use. I have also included global loading and the foundation for authentication. + Redux Persist. Note: For this i'm using axios over fetch compared to the web version.

### Styling

For Styling I have created a useTheme hook that can be used to access the theme, size, moderate size and props easily.

### Expo Support

I have included Expo Library support, you can use any expo library you want now.
https://www.npmjs.com/package/react-native-unimodules

### Reusable components

I have included a few reuseable components already set up. Buttons, Image, RotatedText, Screen and Text. These will all have default styles from the theme unless overridden.

### Setup

#### To install

`yarn`

#### To run

`yarn ios` or `yarn android`

#### To lint

`yarn lint`

#### To format

`yarn format`

- Andrew Sabato
