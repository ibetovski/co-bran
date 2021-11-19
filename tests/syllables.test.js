import {
  assertEquals
} from "./dependencies.js";

import { splitIntoSyllables } from '../src/syllable.js';

Deno.test('Easy words', () => {
  assertEquals(
    splitIntoSyllables('врата'),
    ['вра', 'та']
  );

  assertEquals(
    splitIntoSyllables('слушам'),
    ['слу', 'шам']
  );

  assertEquals(
    splitIntoSyllables('пожарогасител'),
    ['по', 'жа', 'ро', 'га', 'си', 'тел']
  );

  assertEquals(
    splitIntoSyllables('големи'),
    ['го', 'ле', 'ми']
  );

  assertEquals(
    splitIntoSyllables('страховит'),
    ['стра', 'хо', 'вит']
  );
});


Deno.test('Two silent letters that are the same next to each other', () => {
  assertEquals(
    splitIntoSyllables('пролетта'),
    ['про', 'лет', 'та']
  );
});

Deno.test('Special cases', () => {
  assertEquals(
    splitIntoSyllables('мънички'),
    ['мъ', 'нич', 'ки']
  );

  assertEquals(
    splitIntoSyllables('праволинеен'),
    ['пра', 'во', 'ли', 'не', 'ен']
  );

  assertEquals(
    splitIntoSyllables('пачки'),
    ['пач', 'ки']
  );
});