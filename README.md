# React Native Posts App

This project is a React Native application designed to fetch and display posts from a public API. It demonstrates the use of hooks like `useEffect`, `useState`, `useCallback`, and concepts like memoization and optimization for heavy computational tasks. The app includes functionality such as displaying a list of posts, performing heavy computations for each post item, and fetching detailed post information upon user interaction.

## Features
- Fetch data from a public API and display it in a list format.
- Optimize heavy computation using `useMemo` hook.
- Navigate to item details screen on item click.
- Display item details including `ID`, `Title`, and `Body`.
- Memoize callback function using `useCallback` hook to prevent unnecessary re-renders.
  

## Performance Optimization
### Memoization

https://github.com/vivekjm/tasks/assets/24496671/e87aa70f-10f6-4438-95f7-fdf2ef3b99fc


Memoization is a technique used to optimize performance by caching the results of expensive computations. In this project, memoization is achieved using the `useMemo` hook. The `computeDetails` function, which performs heavy computation on each item, is memoized using `useMemo`. This ensures that the result of the computation is cached and only recalculated when the dependencies change. By memoizing the heavy computation, unnecessary re-computation is avoided, leading to improved performance and responsiveness of the application.

### `computeDetails` Function
The `computeDetails` function takes an item's data as input and returns computed details, such as complex calculations or transformations. In this project, the `computeDetails` function concatenates the title of the item with the word "processed" and logs the time taken for the computation. This function is memoized using the `useMemo` hook to optimize performance by preventing unnecessary re-computation. By memoizing the `computeDetails` function, the application avoids redundant computations, resulting in faster rendering and improved user experience.

## Setup and Run

To run this project, you need to have Node.js and React Native environment set up on your machine. Follow the steps below to get the project up and running:

1. **Clone the Repository**



```
ignite-project
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   └── app.tsx
├── assets
│   ├── icons
│   └── images
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   └── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the `app` directory looks similar to the following:

```
app
├── components
├── config
├── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./assets directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('../assets/images/my_image.png')} />
  );
};
```

