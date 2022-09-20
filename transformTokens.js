class DesignToken {
    constructor(path, type, value) {
      this.path = path;
      this.type = type;
      this.value = value;
    }
  }

var _ = require('lodash');

module.exports= {
    /**
     * Converts design tokens from FigmaTokens into a format StyleDictionary can read
     * @param {Object} json FigmaTokens Output
     * @returns {Object} JSON a StyleDictionary can read
     */
    transformTokens: function(json) {
        let returnvalue = {};
        var tokenList = recursiveDive("", json[Object.keys(json)[0]]);
        let unmerged = buildTokens(tokenList);
        unmerged.forEach(obj => {
            _.merge(returnvalue, obj);
        });
        console.log(JSON.stringify(returnvalue));
        return returnvalue;
    }
} 

function buildTokens(tokenList){
    let results = [];
    tokenList.forEach(token => {
      let lastObject = {value : token.value};
      let levels = token.path.split(".").slice().reverse();
      levels.forEach(level => {
        lastObject = {[level]: lastObject};
      });
      results.push(lastObject);
    });
    return results;
  }
  
  function cleanNames(tokenList) {
    let tokens = tokenList
    tokens.forEach(token => {
      token.path = token.path.slice(1,token.path.length);
    });
    return tokens;
  }
  
  function recursiveDive(path, restOfJsonTree){
    if(restOfJsonTree["value"] == null){
      let tokenList = [];
      for (var prop in restOfJsonTree){
        let tempTokenList = recursiveDive(path+"."+prop, restOfJsonTree[prop]);
        for (let i = 0; i< tempTokenList.length; i++) {
          tokenList.push(tempTokenList[i]);
        }
      }
      return tokenList;
    } else {
      let tokenType = restOfJsonTree["type"];
      let tokenPath = tokenType + path;
      let tokenValue = restOfJsonTree["value"];
      if (tokenValue[0]=="{") {
        tokenValue = tokenValue.replace("{", "{" + tokenType + ".");
      }
      let token = new DesignToken(tokenPath, tokenType, tokenValue);
      console.log(token);
      return [token];
    }
  }