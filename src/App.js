import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/common/heading/Header'



const router = createBrowserRouter([{
  path: "/",
  element: <Header></Header>,
}])


function App() {
  return <RouterProvider router={router} />
}

export default App