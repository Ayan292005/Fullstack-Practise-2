
import './App.css'
import Routes from './routes/Routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const routes=createBrowserRouter(Routes)

function App() {


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
