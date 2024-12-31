import {Box} from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"

import Home_page from "./pages/homePage"
import CreatePage from "./elements/Rent_info"
import Application from "./pages/application"

function App() {
  return (
    
    <Box>
      <Routes>
        <Route path='/' element={<Home_page />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/application' element={<Application />} />
      
      </Routes>
    </Box>

   
  )
}

export default App
