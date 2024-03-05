import React from 'react'
import Greeting from './Greeting.js'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>

    </div>
  )
}

export default App