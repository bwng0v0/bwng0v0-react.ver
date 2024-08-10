import { Link,Routes,Route } from "react-router-dom"
import styled from "styled-components"
import Blog from "./pages/Blog"
import { Menu } from 'lucide-react';
import View from "./pages/View";

function App() {

  return (
    <div>

      <Nav>
      <Navleft><Link to="/"><>bwng0v0</></Link></Navleft>
      <Navright> <Menu /> </Navright>
      </Nav>  

      <Routes>
      <Route path='/' element={<Blog />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/view' element={<View />} />
      {/* <Route path='/profile' element={<Profile />} /> */}
      </Routes>

      <Footer>
      <div>ⓒ bwng0v0, All Rights Reserved.</div>
      </Footer>

      
      </div>
  )
}

const Nav = styled.div`
  margin: auto;
  max-width: 800px;
  height: 56px;
  box-sizing: border-box;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navleft = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`
  
const Navright = styled.div`
  display: flex;
  gap:20px;
`

const Footer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  color: #A6A6A6;
  display: flex;
  justify-content: center;
  align-items: center;
`



export default App
