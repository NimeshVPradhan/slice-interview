export const validList = ['class', 'function', 'var'];

Array.prototype.getWordList = function(chars){
  var list = [];
  this.forEach(word=>{
    if(word.includes(chars)){
      list.push(word);
    }
  })
  return list;
}

export const outputpanelregex = /\bclass\b|\bfunction\b|\bvar\b|'.*?'|".*?"| ((\+|\-)?[0-9]+.?[0-9])+/g
