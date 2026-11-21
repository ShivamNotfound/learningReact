import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'
import Board from './Board.jsx'
import Workouts from './Workouts.jsx'
import Colors from './Colors.jsx'
import './App.css'
import React, {useState} from 'react'

function App() {
  const workouts = [{"name": "Push-ups", "muscle": "Chest", "type":"Endurance"},
                    {"name": "Pull-ups", "muscle": "Lat", "type":"Strength"},
                    {"name": "Pike push-ups", "muscle": "Shoulder", "type":"Endurance"},
  ]

  const [color, setColor] = useState("red");
  return (
    <>
      <Header/>
      <Colors color = {color} setColor = {setColor}></Colors>
      <Board color = {color}></Board>
      {/* <Footer/> */}
    </>
  )
}

export default App
