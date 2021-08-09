const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



//function findMatching(array, string) {
//    let matching = array.filter(element => element === string)
//    return matching 
//}



function findMatching(array, string) {
    let matching = array.filter(element => element.toLowerCase() === string.toLowerCase())
    return matching 
}



function fuzzyMatch(arr, str) {
    let matching = arr.filter(element => element.startsWith(str))
    return matching
}



function matchName(arr, str) {
    let matching = arr.filter(element => element.name === str)
    return matching
}