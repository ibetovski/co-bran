import {
  assertEquals
} from "./dependencies.js";

import { reverseSyllables } from '../src/words.js';

Deno.test('Should reverse array of syllables', () => {
  assertEquals(
    reverseSyllables(['по', 'жа', 'ро', 'га', 'си', 'тел']),
    ['тел', 'си', 'га', 'ро', 'жа', 'по']
  );
});

Deno.test('Should keep the first letter capital', () => {
  assertEquals(
    reverseSyllables(['По', 'жа', 'ро', 'га', 'си', 'тел']),
    ['Тел', 'си', 'га', 'ро', 'жа', 'по']
  );
});