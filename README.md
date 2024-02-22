Overview of the files in the repo:

public/index.html: This is the HTML file that serves as the entry point of your React app. It contains a div element with the ID "root", which is where your React components get rendered.

src/index.js: This is the JavaScript entry point for your React application. It imports the main App component, and uses ReactDOM.render to render this component into the "root" div in your index.html file.

src/App.js: This file defines the App component, which is the top-level component of your React app. It imports and renders the Players component.

src/api/puppyBowlApi.js: This file uses Redux Toolkit's RTK Query to define an API slice for the Puppy Bowl API. It exports a hook, useFetchPlayersQuery, which your components can use to fetch data from this API.

src/app/store.js: This file creates your Redux store using Redux Toolkit's configureStore function. It includes the reducer and middleware from puppyBowlApi.

src/features/players/Players.js: This file defines the Players component, which fetches and displays data about Puppy Bowl players using the useFetchPlayersQuery hook from puppyBowlApi.

src/index.css: This file contains global styles for your app.
