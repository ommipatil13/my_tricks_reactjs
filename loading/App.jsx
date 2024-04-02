import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import Error from './Error'
import axios from 'axios'

function MyComponent() {

  const [pro, setPro] = useState([])
  const [load, setLoad] = useState(true)

  const getData = async () => {
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res.data.products);
    setPro(res.data.products);

  }
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
      getData();
    }, 2000)
  }, [])


  return (
    <div>
      {
        load ? "loading...." :
          <>
            <ul>

              {
                pro.map((v) => {
                  return (
                    <>

                      <li> {v.title} </li>
                    </>
                  )
                })
              }

            </ul>
          </>
      }

    </div>
  );
}

export default MyComponent;