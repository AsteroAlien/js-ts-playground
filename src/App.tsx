import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import './App.css'

function App() {
  return (
    <>
      <Outlet/>
      <TanStackRouterDevtools/>
    </>
  )
}

export default App
