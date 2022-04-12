async function handleEnter(e) {
    
    e.preventDefault();
    const inputValue = document.querySelector('.js-search-input').value;
    const searchTerm = inputValue.trim();
    const searchFind = document.querySelector('.js-search-results');
    searchFind.innerHTML = '';
    const load = document.querySelector('.js-spinner');
    load.classList.remove('hidden');
    
    try {
      
      const results = await searchWikipedia(searchTerm);
      
      if (results.query.searchinfo.totalhits === 0) {
        alert('No results found. Try different keywords');
        return;
      }
      
      displayResults(results);} 
    
    catch (err) {
        
        console.log(err);
        alert('Wikipedia failed to load');} 
    
    finally {
        load.classList.add('hidden');}
  }
  
  async function searchWikipedia(searchTerm) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchTerm}`;
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
  }
  
  function displayResults(results) {
    const searchFind = document.querySelector('.js-search-results');
  
    results.query.search.forEach(result => {
      const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
  
      searchFind.insertAdjacentHTML(
        'beforeend',
        `
        <div class="result-item">
          <h3 class="result-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
          </h3>
          <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
          <span class="result-snippet">${result.snippet}</span><br>
        </div>`
      );
    });
  }
  
  const form = document.querySelector('.js-search-form');
  form.addEventListener('submit', handleEnter);
  