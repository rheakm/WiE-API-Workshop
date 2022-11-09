
const onload = () => {
  const app = document.getElementById('root');
  const logo = document.createElement('img');
  logo.src = 'images/logo.png';

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(logo);
  app.appendChild(container);
  
  fetch(`https://api.spoonacular.com/mealplanner/rheakm/items?`  + new URLSearchParams({
    apiKey: '0e24609870c84901b83b80355954fd81',
    hash: '7541c966d819144e8927946e91e25b8a8c33c32b'
   }),
     {
      method: 'POST',
      body: JSON.stringify({
            'date': 1589500800,
            'slot': 1,
            'position': 0,
            'type': 'INGREDIENTS',
            'value': {
                'ingredients': [
                    {
                        'name': '1 banana'
                    }
                ]
            }
        })
    }
)
    .then((response) => {
      // parse the response into Javascript objects
      return response.json()
    })
    .then((data) => {
      Object.keys(data).forEach((key) => {

        // Create a div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1');
        h1.textContent = key;

        // Create a p and set the text content to the film's description
        const p = document.createElement('p');
        const text = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        p.textContent = `${text}`; // End with an ellipses

        // Append the cards to the container element
        container.appendChild(card);

        // Each card will contain an h1 and a p
        card.appendChild(h1);
        card.appendChild(p);
      })
    })
    .catch((err) => {
      // Do something for an error here
      console.log(err)
    })
}
