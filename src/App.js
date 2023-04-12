// import React from 'react'


// const App =() => {
//     let color = "red"
//     let a = 2323
//     return (
//         <div style={{backgroundColor:color}}>
//             tha value of a is {a}
//         </div>
//     )

// }
// export default App;

// import React from 'react'
// import './style.css'
// export const App = () => {
//     let a = {
//         backgroundColor:"red", 
//         fontSize:"48px",
//         border:"10px solid black"
//     }
//   return (
//     <div style={a}//these are called as atribute
//     >App</div>
//   )
// }
// export default App;

// import React from 'react'
// import './style.css'
// export const App = () => {

//   return (
//     <div className="box"
//     >App</div>
//   )
// }
// export default App;

// import React from 'react'
// import Main from './components/Main'
// export const App = () => {
//   return (
//     <div className='box'>App
//         <Main />
//     </div>
    
//   )
// }
// export default App;


// import React from 'react'
// import style from './App.module.css'
// export const App = () => {
//     console.log("hello world")
//   return (
//     <div className={style.box}>App</div>
//   )
// }


// import React from 'react'
// import style from './App.module.css'
// import Main from './components/Main'
// export const App = () => {
//   return (
//     <div>App
//         <Main />
//     </div>

//   )
// }

// export default App;

// import React from 'react'
// import Container from './components/Container'
// export const App = () => {
//   return (
//     < Container/>
//   )
// }
// export default App

// import React from 'react'
// import {data} from './data'
// const App = () => {
//   return (
//     <div id='container'>
//       {
//         data.map((e, i) => (
//           <div key={i} id='card' style={{background:i%2===0?"red":"blue"}}>
//             <h1>Title:{e.title} </h1>
//             {/* <h3>Username:{e.username}</h3>
//             <p>Email{e.email}:</p> */}
//           </div>
//         ))
//       }
//     </div>
//   )
// }
// export default App

import React from 'react'
import {photos} from './post'
const App = () => {
  return (
    <div id='container'>
      <div>
        <h1 id='head'>Tourist Places</h1>
        <div id='body'>
          {
            photos.map((e, i) => (
              <div key={i} id='card' >
                <h3>{e.title} </h3>
                <img src={e.url} alt="descriptive text"/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default App

// import React from 'react'

// const App = () => {
//   const a = true
//   if (a){
//     return (
//       <div>App</div>
//     )
//   }
  
// }

// export default App

// import React, {useState} from 'react'
// import Main from './Main'
// const App = () => {
//   let a = 10

//   const [show, func] = useState(1)
//   return (
//     <div onClick={}>App {a}
//       <Main random={""} />
//     </div>
    
//   )
// }

// export default App


// import { tab } from '@testing-library/user-event/dist/tab'
// import React, { useState } from 'react'

// const App = () => {
//   const [tabs, setTabs] = useState("red")

//   return (
//     <div>
//       <div>
//         <button onClick={() => setTabs("red")}>Red</button>
//         <button onClick={() => setTabs("blue")}>Green</button>
//         <button onClick={() => setTabs("green")}>Blue</button>
//       </div>
//       <div>
//         {
//           tabs=="red"
//           ? <div style={{height:"90vh", backgroundColor:tabs}}></div>
//           : tabs=="blue" 
//           ? <div style={{height:"90vh", backgroundColor:tabs}}></div>
//           :  <div style={{height:"90vh", backgroundColor:tabs}}></div>
//         }
//       </div>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [button, inCreamnt] = useState(0)

//   return (
//     <div>
//       <div>
//         <h1>Count: {button}</h1>
//         <div>
//           {
//             button < 100
//               ? <button onClick={() => inCreamnt(button+10)}>increament</button>
//               : <button>increament</button>
//           }
//           {
//             button > 0
//               ? <button onClick={() => inCreamnt(button-10)}>decrement</button>
//               : <button>decrement</button>
//           }
//         </div>
//         <button onClick={() => setTabs("blue")}>Green</button>
//         <button onClick={() => setTabs("green")}>Blue</button>
//       </div>
//       <div>
//         {
//           button<50
//           ? <div style={{height:"90vh", backgroundColor:"red"}}></div>
//           : button>50 &&  button<75
//           ? <div style={{height:"90vh", backgroundColor:"blue"}}></div>
//           :  <div style={{height:"90vh", backgroundColor:"green"}}></div>
//         }
//       </div>
//     </div>
//   )
// }

// export default App
