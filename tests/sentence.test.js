import {
  assertEquals
} from './dependencies.js';

import { encodeSentence, splitIntoWords } from '../src/sentence.js';

Deno.test("Sentence should be splitted into words", () => {
  assertEquals(
    splitIntoWords("Мишо, жив и здрав, много бира в корема, хмел в магазина и пачки в джоба."),
    [
      "Мишо",
      ",",
      " ",
      "жив",
      " ",
      "и",
      " ",
      "здрав",
      ",",
      " ",
      "много",
      " ",
      "бира",
      " ",
      "в",
      " ",
      "корема",
      ",",
      " ",
      "хмел",
      " ",
      "в",
      " ",
      "магазина",
      " ",
      "и",
      " ",
      "пачки",
      " ",
      "в",
      " ",
      "джоба",
      "."
    ]
  );
})

Deno.test("Sentence should be encoded", () => {
  assertEquals(
    encodeSentence("Мишо, жив и здрав, много бира в корема, хмел в магазина и пачки в джоба"),
    "Шоми, жив и вардз, гомно раби в мареко, лемх в назигама и кипач в баджо"
  );
})