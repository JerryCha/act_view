import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Overlay} from "./components/Overlay"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="dashboard" element={<>456</>} />
      </Routes>
    </div>
  )
}

export default App
