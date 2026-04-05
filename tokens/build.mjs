import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

register(StyleDictionary);

const prefix = 'sai';

const sd = new StyleDictionary({
  source: ['tokens/global/**/*.json', 'tokens/semantic/**/*.json', 'tokens/component/**/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      prefix,
      transformGroup: 'tokens-studio',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        },
      ],
    },
    ts: {
      prefix,
      transformGroup: 'tokens-studio',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log('Design tokens built successfully.');
