export const validList = ['class', 'function', 'var'];

Array.prototype.getWordList = function(chars){
  var list = [];
  if(chars=='')return list;

  this.forEach(word=>{
    if(word.includes(chars)){
      list.push(word);
    }
  })
  return list;
}


export const outputpanelregex = /\bclass\b|\bfunction\b|\bvar\b|'.*?'|".*?"| \b\d+(.\d+)?\d*\b/g
