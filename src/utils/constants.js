export const validList = ['class', 'function', 'var'];

Array.prototype.getWordList = function(chars){
  var list = [];
  this.forEach(word=>{
    if(word.includes(chars)){
      list.push(list);
    }
  })
  return list;
}
