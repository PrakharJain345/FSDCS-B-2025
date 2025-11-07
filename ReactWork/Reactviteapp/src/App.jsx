import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div>
      {/* <h2>Welcome to ReactVite.</h2> */}

       {/* {/<Gallery/> }
       {/<StateHandling />/} */}
       {/* <ImageManipulation/> */}

       <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
       </Routes>
       </BrowserRouter>

  
    </div>
  )
}

export default App