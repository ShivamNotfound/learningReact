import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'
import Board from './Board.jsx'
import Workouts from './Workouts.jsx'
import Colors from './Colors.jsx'
import './App.css'
import React, {useState, createContext} from 'react'

export const ColorContext = createContext();
export const SetColorContext = createContext();

function App() {

  const [color, setColor] = useState("red");
  return (
    <>
      <Header/>
      <ColorContext.Provider value={color}>
        <SetColorContext.Provider value = {setColor}>
          <Colors/>
        </SetColorContext.Provider>
      </ColorContext.Provider>

      <Board color = {color}></Board>
      {/* <Footer/> */}
    </>
  )
}

export default App
