// Fetching from Dog API
const url = 'https://dog.ceo/api/breeds/image/random';
fetch(url, {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
})
  .then(res => {
    res.json().then(json => {
      console.log(json);
    });
  })
  .catch(() => {
    console.log('Error in fetching data');
  });

// Card Creator
const cardCreator = data => {
  const container = document.querySelector('.data-container');
  const card = document.createElement('div');
};
