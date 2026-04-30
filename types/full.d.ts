export {
  Trie,
  ConverterFactory,
  ConverterBuilder,
  CustomConverter,
  HTMLConverter
} from './core';

export type {
  ConverterFunction,
  ConverterOptions,
  DictGroup,
  DictLike,
  HTMLConvertHandler,
  LocalePreset
} from './core';

import type { ConverterFunction, ConverterOptions } from './core';
import * as Locale from './preset';

export function Converter(options: ConverterOptions): ConverterFunction;
export { Locale };
