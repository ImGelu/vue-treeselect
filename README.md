# vue-treeselect
[![npm](https://badgen.now.sh/npm/v/@imgelu/vue-treeselect)](https://www.npmjs.com/package/@imgelu/vue-treeselect) [![Coverage](https://badgen.net/codecov/c/github/imgelu/vue-treeselect)](https://codecov.io/gh/imgelu/vue-treeselect?branch=main)
![npm monthly downloads](https://badgen.now.sh/npm/dm/@imgelu/vue-treeselect)
![Known Vulnerabilities](https://snyk.io/test/github/imgelu/vue-treeselect/badge.svg) ![License](https://img.shields.io/github/license/ImGelu/vue-treeselect)

> A multi-select component with nested options support for Vue 3.
> 
## Requires Vue 3.0+. For Vue 2.0, use [the original library](https://github.com/riophae/vue-treeselect).

> **I've opened this repo because the Vue 3 repo by [megafetis](https://github.com/riophae/vue3-treeselect) is archived, and no one can contribute. There may be several bugs, so feel free to send pull requests.**

Breaking changes from [the original library](https://github.com/riophae/vue-treeselect) (Vue 2):

* property `value` => `modelValue`
* event `input` => `updated:modelValue`
* Now use slots with `<template>`

![Vue TreeSelect Screenshot](https://raw.githubusercontent.com/imgelu/vue-treeselect/main/screenshot.png)

### Features

- Single & multiple select with nested options support
- Fuzzy matching
- Async searching
- Delayed loading (load data of deep level options only when needed)
- Keyboard support (navigate using <kbd>Arrow Up</kbd> & <kbd>Arrow Down</kbd> keys, select option using <kbd>Enter</kbd> key, etc.)
- Rich options & highly customizable
- Supports a wide range of browsers (see [below](#browser-compatibility))
- RTL support

### Getting Started

It's recommended to install vue-treeselect via npm, and build your app using a bundler like [webpack](https://webpack.js.org/).

```bash
npm install --save @imgelu/vue-treeselect
```

This example shows how to integrate vue-treeselect with your [Vue SFCs](https://vuejs.org/v2/guide/single-file-components.html).

```vue
<!-- Vue SFC -->
<template>
  <div id="app">
    <TreeSelect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
  // import the component
  import TreeSelect from 'vue-treeselect'
  // import the styles
  import 'vue-treeselect/dist/vue-treeselect.css'

  export default {
    // register the component
    components: { Treeselect },
    data() {
      return {
        // define the default value
        value: null,
        // define options
        options: [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        } ],
      }
    },
  }
</script>
```

### CDN tutorial coming soon.

### Documentation for Vue 2 & Live Demo. Be careful with breaking changes above (component name is now TreeSelect).

[Visit the website](https://vue-treeselect.js.org/)

_Note: please use a desktop browser since the website hasn't been optimized for mobile devices._

### Browser Compatibility

- Chrome
- Edge
- Firefox
- Safari

It should function well on IE9, but the style can be slightly broken due to the lack of support of some relatively new CSS features, such as `transition` and `animation`. Nevertheless it should look 90% same as on modern browsers.

### Bugs

You can [open an issue](https://github.com/imgelu/vue-treeselect/issues/new).

### Contributing

1. Fork & clone the repo
2. Install dependencies by `yarn` or `npm install`
3. Check out a new branch
4. `npm run dev` & hack
5. Push your changes & file a pull request

### Credits

This project is inspired by [vue-treeselect](https://github.com/riophae/vue-treeselect).

This project is a fork of the original Vue 3-compatible component, developed by [megafetis](https://github.com/riophae/vue3-treeselect).

Special thanks go to their respective authors!

Some icons used in this project:

- "link" icon made by [Smashicons](https://www.flaticon.com/authors/smashicons) is licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
- "spinner" icon from [SpinKit](https://github.com/tobiasahlin/SpinKit) is licensed under the [MIT License](https://github.com/tobiasahlin/SpinKit/blob/master/LICENSE)
- "caret" icon made by [Dave Gandy](https://www.flaticon.com/authors/dave-gandy) is licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
- "delete" icon made by [Freepik](https://www.flaticon.com/authors/freepik) is licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)
- "checkmark symbol" & "minus symbol" icons made by [Catalin Fertu](https://www.flaticon.com/authors/catalin-fertu) are licensed under [CC 3.0 BY](https://creativecommons.org/licenses/by/3.0/)

### License

Released under the [MIT License](https://github.com/imgelu/vue-treeselect/blob/master/LICENSE).
