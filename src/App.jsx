
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {



  const [ shantami , pritytome]  = useState([])




  useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => pritytome(json))} , [])








  
  return (
    <>








    <div className="main flex flex-wrap gap-10">
    {
    shantami.map((box)=>{
      return(
        <div className="card  w-[350px] h-[500px] bg-orange-400 rounded-[20px] flex flex-wrap flex-col items-center gap-[20px]">
        <div className="img w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src="https://sm.mashable.com/t/mashable_in/photo/default/snapinstaapp-366964348-606489991628217-154200707557988423-n_vwna.720.jpg" alt="photo" />
                 
        </div>
        <div className="text">
            <p className='text-lg font-semibold text-white'> id: {box.id} </p>
            <h1 className='text-xl font-bold text-white'> user name: {box.name} </h1>
            <p className='text-lg font-semibold text-white'> email: {box.email} </p>
        </div>
        </div>
      )
        })
    }
    </div>




















    
      
    </>
  )
}

export default App
