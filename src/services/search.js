import data from '../data/data.json'

const search = (query, K) => {
  var searchQuery = new RegExp(query, 'g');
  for(let i=0; i< data.summaries.length; i++) {
    if(data.summaries[i].summary.match(searchQuery)){
      console.log(data.summaries[i].summary.match(searchQuery).length)
    } 
  }
  return data;
}

export default search;