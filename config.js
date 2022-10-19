module.exports = {
  source: ['tokens/*.json'],
  parsers: [{
    pattern: /\.json$/,
    parse: ({ filePath, contents }) => {
      let json = JSON.parse(contents);
      return json['global'];
      //let converter = require('./transformTokens.js')
      //return converter.transformTokens(json)
    }
  }],
  platforms: {
    flutter: {
      transformGroup: 'flutter',
      buildPath: 'foo_project/lib/',
      files: [
        {
          destination: 'StyleDictionaryColors.dart',
          format: 'flutter/class.dart',
          className: 'StyleDictionaryColors',
          packageName: 'StyleDictionaryColors',
          filter: {
            attributes: {
              category: 'color'
            }
          }
        }
      ]
    },
    compose: {
      transformGroup: 'compose',
      buildPath: 'build/compose/',
      files: [
        {
          destination: 'StyleDictionaryColor.kt',
          format: 'compose/object',
          className: 'StyleDictionaryColor',
          packageName: 'StyleDictionaryColor',
          filter: {
            attributes: {
              category: 'color'
            }
          }
        },
        {
          destination: 'StyleDictionarySize.kt',
          format: 'compose/object',
          className: 'StyleDictionarySize',
          packageName: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size'
            }
          }
        },
        {
          destination: 'StyleDictionaryRadii.kt',
          format: 'compose/object',
          className: 'StyleDictionaryRadii',
          packageName: 'StyleDictionaryRadii',
          type: 'float',
          filter: {
            attributes: {
              category: 'radii'
            }
          }
        }
      ] 
    }
  }
};

