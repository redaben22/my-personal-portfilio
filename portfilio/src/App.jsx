import MainPage from "./Components/MainPage/MainPage"
import ErrorPage from "./Components/ErrorPage/ErrorPage"
import {createBrowserRouter,createRoutesFromElements,RouterProvider , Route, Outlet,Routes} from 'react-router-dom'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<MainPage/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </>
  ))

  return(
    <RouterProvider router={router}/>
  )
 
}

export default App
