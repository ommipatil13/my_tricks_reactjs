import React, { useState } from 'react';


const App = () => {

  const [change, setChange] = useState({

    name: 'test1',
    lastName: 'test2',
    address: {
      city: 'pune',
      country: 'bharat'
    }

  });

  const handleChange = () => {
    setChange({ ...change, address: { ...change.address, city: 'poona' } })
  }

  return (
    <div>

      <h1> {change.address.city} </h1>

      <button onClick={handleChange} >Change</button>


    </div>
  )
}

export default App