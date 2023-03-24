import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components"

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default SharedLayout