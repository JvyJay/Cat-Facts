// Fetching from cat-facts API
const proxy = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://cat-fact.herokuapp.com/facts/random';
fetch(proxy + url)
  .then(res => {
    console.log(res);
    res.json();
  })
  .catch(() => {
    console.log('Error in fetching data');
  });

// Card Creator
const cardCreator = data => {
  const container = document.querySelector('.data-container');
  const card = document.createElement('div');
};
