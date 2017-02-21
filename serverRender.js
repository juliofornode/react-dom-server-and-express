import React from 'react';
//we use react-dom/server to make our react code visible to the search engines
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import config from './config';
import App from './src/components/app';


//we are not in the front end, so we need to require the full url
// const serverRender = () =>
//   axios.get(`${config.serverUrl()}/api/contests`)
//     .then(response => {
//       return ReactDOMServer.renderToString(
//         <App initialData={response.data.contests}/>
//       );
//     });

//Doing that allows us to make the React content visible to the search engines,
//but it causes an error in the browser because our application is
//getting the same data twice (from here and also in the componentWillMount
//function in the App component).
//We can fix this error by using just one call, the one we make in this file
//(server side), or the one we use in React (client side).
//We will test both approaches in src/index.js


const serverRender = () =>
  axios.get(`${config.serverUrl()}/api/contests`)
    .then(response => {
      return {
        initialMarkup: ReactDOMServer.renderToString(<App initialData={response.data.contests}/>),
        initialData: response.data
      };
    });


export default serverRender;
