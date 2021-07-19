function findMatching(array, string){
  return array.filter(n =>
     n.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string){
  return array.filter(m =>
  m.toLowerCase() === string.toLowerCase().charAt[0]);
}

function matchName(array, string){
 return array.filter( m => m.name === string)
}
