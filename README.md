# Co-bran

## Motivation:
A silly project that revereses word's syllables in a sentance. Written for Cyrillic alphabet and bulgarian language's rules.

`Co-bran` is named after a person I know who loves speaking and writing in this way. (I don't judge anybody).

It is meant to be run in Deno. Actually it was a project meant to test Deno's features.

## Expected result:

**input**: `"Мишо, жив и здрав, много бира в корема, хмел в магазина и пачки в джоба"`

**expected output** (still debatable how correct the "encoding" is): `"Шоми, жив и вардз, гомно раби в мареко, лемх в назигама и кипач в баджо"`

## Usage:

In a Deno project import the url for the latest code:

```js
import {
  encodeSentence
} from 'https://raw.githubusercontent.com/ibetovski/co-bran/master/src/sentence.js'
```

or specify a version:

```js
import {
  encodeSentence
} from 'https://raw.githubusercontent.com/ibetovski/co-bran/v0.0.1/src/sentence.js'
```

Then use it as:

```js
console.log(
  encodeSentence(
    "Some silly sentance in bulgarian language here (in cyrillic)"
  )
);
```

## Tests:

Still not all tests are completed. Needs more work on the word splitting in syllables.

```bash
$ deno test
```

