import data from '../data/data.json'

const search = (query, K) => {
  let searchedData = [];
  let finalData = [];
  const searchQuery = new RegExp(query, 'gi');
  for(let i=0; i< data.summaries.length; i++) {
    if(data.summaries[i].summary.match(searchQuery)){
      let result = {
        title: data.titles[i],
        summary: data.summaries[i],
        author: data.authors[i],
        found:  data.summaries[i].summary.match(searchQuery).length
      }
      searchedData.push(result)
    } 
  }
  searchedData.sort(function(a, b){return b.found - a.found})
  if(searchedData.length > K) {
    for(let j=0; j<K; j++){
      finalData.push(searchedData[j]);
    }
  } else {
    finalData = searchedData
  }
  return finalData;
}

export default search;