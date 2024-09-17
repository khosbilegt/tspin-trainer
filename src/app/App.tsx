import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RenderLayout from '../layouts/RenderLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <RenderLayout />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
