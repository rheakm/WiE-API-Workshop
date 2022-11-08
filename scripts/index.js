
const onload = () => {
  const app = document.getElementById('root');
  const logo = document.createElement('img');
  logo.src = 'images/logo.png';

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(logo);
  app.appendChild(container);
  
  fetch(
    /** TODO: use the knowledge learnt from the workshop and create your own request.
     * Examples of GET and POST requests are available in the github README.md file.
     * Refresh the page once you're confident of your request to see the response printed.
     * Check the request in the network tab if it doesn't look as expected.
     * Goodluck!
     **/
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
