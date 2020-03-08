import data from '../data/data.json'

const search = (query, K) => {
  let searchedData = [];
  let finalData = [];
  const searchQuery = new RegExp(query, 'gi');
  console.log(searchQuery)
  for(let i=0; i< data.summaries.length; i++) {
    if(data.summaries[i].summary.match(searchQuery)){
      let result = {
        title: data.titles[i],
        summaries: data.summaries[i],
        authors: data.authors[i],
        found:  data.summaries[i].summary.match(searchQuery).length
      }
      searchedData.push(result)
    } 
  }
  if(searchedData.length > K) {
    searchedData.sort(function(a, b){return b.found - a.found})
    for(let j=0; j<K; j++){
      finalData.push(searchedData[j]);
    }
  }
  return finalData;
}

export default search;