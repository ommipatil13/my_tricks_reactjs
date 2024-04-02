
// import React, { useState } from 'react'

// const App = () => {
//   const [check, setCheck] = useState({
//     c1: false,
//     c2: false,
//   })
//   return (
//     <>

//       <div>

//         <input type="checkbox" checked={check.c1 && check.c2} onChange={() => setCheck({ ...check, c1: !check.c1, c2: !check.c2 })} />
//         Select All
//         <input type="checkbox" checked={check.c1} onChange={() => setCheck({ ...check, c1: !check.c1 })} />
//         <input type="checkbox" checked={check.c2} onChange={() => setCheck({ ...check, c2: !check.c2 })} />

//       </div>

//     </>
//   )
// }

// export default App

import React, { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  // const countAdd = () => {
  //   setCount(count + 1)
  // }
  return (
    <>

      <p>
        count is : {count}
      </p>

      {/* <button onClick={countAdd}>+</button> */}
      <button onClick={() => setCount(count + 1)}>+</button>

    </>
  )

}

export default App