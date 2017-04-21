# Submitter's Notes
Jeff Cooper
jecoopr.com

## Tasks
* When items are checked off the store is updated and the dispatcher emits the change event. React re-renders and styles are applied accordingly.

* When items are deleted the store is updated and the dispatcher emits the change event. React re-renders.

* The gulp watch task is set to watch javascript, scss, and html independently, so a build when running `gulp watch` only updates the part that changed.

* List item contents are centered with flex positioning. I also removed the hard-coded height on these elements so that the styling supports multiline text. **Add a long todo item and see how that is not supported.**

## Bonus
* I created a new gulp task `gulp prod`, which does a production build. `js` is minified with webpack, and `css` with `scss`. I also pass a new version of `webpack` to `webpack-stream` for both dev or production builds. There are now both `dev` and `production` webpack configs.

* I added a number of style updates. The app is responsive, and I added a meta tag for viewport scaling on mobile. The input also now focuses on load, and its value is cleared when a todo item is added.

## Next Steps
Some further improvements that could be done:
* Validate input for value before adding to list
* Minify html for production build
* Store todo list between sessions with local storage or a server side option
* Button to filter tasks between completed/incomplete
* Button to clear all completed items

___

# Overview
This is a to-do list app written with React, Sass, Webpack, Babel, and gulp. It also uses a tiny event emitter called Mitt as a Flux inspired dispatcher. Important features are unimplemented. There is no gulp task to watch the source for changes.

An understanding of ES2015 syntax will be necessary, but in your solutions you can use the syntax you feel most comfortable with.

# Setup

 * `npm install`
 * `gulp` to build the app
 * `gulp connect` to serve the app on port 8080

# Tasks

 * ~~Implement the ability to check items off. This should result in a strike-through being applied to the item text using CSS. The UI already exists and interaction events are already wired up to the store.~~
 * ~~Implement the ability to delete items.  The UI already exists and interaction events are already wired up to the store.~~
 * ~~Set up a gulp task to watch the src folder and trigger a build when its files are changed.~~
 * ~~Center the list item contents vertically without modifying the margin or padding of list items~~

### Bonus

* ~~Minify built source code using Webpack or Gulp~~
* ~~Improve the appearance of the UI to your liking~~
