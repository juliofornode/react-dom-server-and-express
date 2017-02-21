import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import axios from 'axios';

//this is one option: retrieve data from the server:
// axios.get('/api/contests')
//   .then(response => {
//     ReactDOM.render(
//       <App initialData={response.data.data} />,
//       document.getElementById('root')
//     );
//   })
//   .catch(console.error);


//the second option is better, since it keeps the data in the client and
//that improves the performance of the application.

ReactDOM.render(
  <App initialData={window.initialData.data} />,
  document.getElementById('root')
);
