import { useState } from 'react'
import './App.css'
import Middle from './components/Middle'
import Navbar from './components/Navbar'
import Table from './components/Table'

function App() {

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    document.body.style.backgroundColor = isOn ? '#191d28'  : '#f8f9fa'; 
  };

  return (
    <>
      <div>
        <Navbar isOn ={isOn} toggleSwitch ={toggleSwitch} />
        <Middle isOn ={isOn} />
        <Table isOn ={isOn}/>
      </div>
     
    </>
  )
}

export default App
