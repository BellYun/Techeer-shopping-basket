import { Outlet } from "react-router-dom"
import { Header } from "../components/common/Header"
import '../css/index.css'
import '../css/common/reset.css'

export const Layout = () =>{

  return(
    <div className="body">
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}