# Learning React core concepts

# npm --->  Install any package using npm
# npx ---> exceuting the package

# .parcel-cache
.parcel-cache is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# Tree Shaking
Tree shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code

# Parcel
   - Dev build
   - Local server
   - HMR -> Hot Module Replacement
   - File watching Algorithm ---- written in c++
   - Caching  --- Faster Builds
   - Image Optimization
   - Minification
   - bundling
   - compress
   - Consistent Hashing : ParcelJS utilizes a consistent hashing algorithm to generate unique filenames for cache busting
   - Code Splitting
   - Differential Bundling
   - Error Handling
   - Https

# BrowserList : https://browserslist.dev/

# Differences : 1. Vite
                2. Webpack
                3. parcel

** Vite uses the native ES modules feature in the browser to handle imports.
** while webpack and Parcel use a more traditional approach of bundling all the files together.
** Vite has a relatively limited plugin ecosystem compared to webpack or Parcel
** Vite is primarily focused on development builds and may not have as many features for production builds as webpack or Parcel


# Parcel:  is a zero configuration web application bundler that is fast and easy to use.
# webpack is a module bundler that bundles JavaScript files for usage in a browser.
** Consider Parcel if you want a fast and easy to use bundler for your web application.
** Consider webpack if you want a bundler that can bundle your JavaScript files for usage in a browser

# bable: It convert the JSX code into a javascript code ( React )
Parcel is a manager of bable

# Benefits of JSX: 
JSX enables React to display error and warning messages, which aids in debugging. With JSX, you can write large pieces of code in a more organized and simplified manner.



