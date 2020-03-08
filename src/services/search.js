import data from '../data/data.json'

const search = (query, K) => {
  let searchedData = []
  const searchQuery = new RegExp(query, 'g');
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
  }
  return searchedData;
}

export default search;