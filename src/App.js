
import './App.css';
import React, {useState,useEffect} from 'react'
import axios from 'axios'

function App() {

 const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('/test').then((res)=>{
      setData(res.data)
      console.log(res)
    })
  })



  return (
 
    <div className="App">
      {data.length ==0   ? <p>loading</p>    :    
      <>
      {data.map((el)=>{
        return (
          <div>
            <p>{el.property-from-your-databasetable}</p>

            </div>

        )
      })}
      </>
      }
    </div>
  );
}

export default App;
