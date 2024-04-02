import './App.css';
import React, { useEffect, useState } from 'react'
import Loading from './assets/Loading';

const App = () => {

  const [pro, setPro] = useState([]);
  const [loadMore, setLoadMore] = useState(3);
  const [load, setLoad] = useState("");

  const api = "https://dummyjson.com/products";

  const fetchApi = async () => {
    const data = await fetch(api);
    const res = await data.json();
    console.log(res.products);
    setPro(res.products);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  const slicePro = pro.slice(0, loadMore);

  const loading = () => {
    setLoad(true)
    setTimeout(() => {
      setLoadMore(loadMore + loadMore);
      setLoad(false)
    }, 2000)
  }

  return (
    <React.Fragment>

      <div className='head'>
        <h1>Amazing Shooping</h1>
      </div>

      <div className='card'>
        {
          load ? <Loading /> : <>
            {
              slicePro.map((item) => {
                return (

                  <div key={item.id} className='card_body'>
                    <img src={item.images[1]} alt="" />
                    <h2> {item.title} </h2>
                    <h3>Rs {item.price} </h3>
                  </div>


                )
              })
            }
          </>
        }
      </div>

      <div className='btn'>
        <button className='btn_load_more' onClick={loading} >Load More....</button>
      </div>


    </React.Fragment>
  )
}

export default App
