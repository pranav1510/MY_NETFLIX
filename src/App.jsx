import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'

function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])

export default App
