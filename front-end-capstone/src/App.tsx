import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { Main } from "./components/Main"





export const Layout = () => {
  return (
    <>
      <Nav/>
   
      <Main>
        <Outlet/>
      </Main>
      <Footer/>
    </>
  )
}
export default function Body() {
  return (
  <div className="body-grid">
    <h1>This is the main body</h1>
  </div>)
}

