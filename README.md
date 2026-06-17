<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# toWords

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split a [64-bit unsigned integer][@stdlib/number/uint64/ctor] into a higher order word and a lower order word.

<section class="installation">

## Installation

```bash
npm install @stdlib/number-uint64-base-to-words
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var toWords = require( '@stdlib/number-uint64-base-to-words' );
```

#### toWords( a )

Splits a [64-bit unsigned integer][@stdlib/number/uint64/ctor] into a higher order word (32-bit unsigned integer) and a lower order word (32-bit unsigned integer).

```javascript
var Uint64 = require( '@stdlib/number-uint64-ctor' );

var a = new Uint64( 4294967296 );
var w = toWords( a );
// returns [ 1, 0 ]

var high = w[ 0 ];
// returns 1

var low = w[ 1 ];
// returns 0
```

The function returns an array containing two elements: a higher order word and a lower order word. The lower order word contains the less significant bits, while the higher order word contains the more significant bits.

#### toWords.assign( a, out, stride, offset )

Splits a [64-bit unsigned integer][@stdlib/number/uint64/ctor] into a higher order word (32-bit unsigned integer) and a lower order word (32-bit unsigned integer) and assigns results to a provided output array.

```javascript
var Uint32Array = require( '@stdlib/array-uint32' );
var Uint64 = require( '@stdlib/number-uint64-ctor' );

var out = new Uint32Array( 2 );

var a = new Uint64( 4294967296 );
var w = toWords.assign( a, out, 1, 0 );
// returns <Uint32Array>[ 1, 0 ]

var bool = ( w === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

```javascript
var Uint64 = require( '@stdlib/number-uint64-ctor' );
var toWords = require( '@stdlib/number-uint64-base-to-words' );

var a = new Uint64( 4294967296 );
var w = toWords( a );
// returns [ 1, 0 ]

a = new Uint64( 10000000000 );
w = toWords( a );
// returns [ 2, 1410065408 ]

a = new Uint64.of( 12, 34 );
w = toWords( a );
// returns [ 12, 34 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint64-base-to-words.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint64-base-to-words

[test-image]: https://github.com/stdlib-js/number-uint64-base-to-words/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-uint64-base-to-words/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint64-base-to-words/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint64-base-to-words?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint64-base-to-words.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint64-base-to-words/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint64-base-to-words/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-uint64-base-to-words/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-uint64-base-to-words/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-uint64-base-to-words/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-uint64-base-to-words/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-uint64-base-to-words/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-uint64-base-to-words/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint64-base-to-words/main/LICENSE

[@stdlib/number/uint64/ctor]: https://github.com/stdlib-js/number-uint64-ctor

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
