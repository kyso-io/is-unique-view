
# is-unique-view

This library lets you check if a pageview is unique.
Unique being defined as a user has not viewed the page
in the last 30minutes.

Its pretty easy to install and use.

Install

```
npm install @kyso/is-unique-view
or
yarn add @kyso/is-unique-view
```

Usage

```
const isUniqueView = require('@kyso/is-unique-view')

if (isUniqueView()) {
  // view is unique
} else {
  // view is not unique
}
```
