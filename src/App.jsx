import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'
import Workouts from './Workouts.jsx'
import './App.css'

function App() {
  const workouts = [{"name": "Push-ups", "muscle": "Chest", "type":"Endurance"},
                    {"name": "Pull-ups", "muscle": "Lat", "type":"Strength"},
                    {"name": "Pike push-ups", "muscle": "Shoulder", "type":"Endurance"},
  ]
  return (
    <>
      <Header/>
      <List list = {workouts}/>
      <Footer/>
    </>
  )
}

export default App
