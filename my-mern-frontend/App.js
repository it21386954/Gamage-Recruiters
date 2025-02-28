import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Replace this with your backend URL
    axios.get('http://localhost:5000')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []); 

  return (
    <div className="App">
      <h1>{data || 'Loading...'}</h1>
    </div>
  );
}

export default App;
