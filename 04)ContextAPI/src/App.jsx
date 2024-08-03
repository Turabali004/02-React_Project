import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import NewCompo from './components/NewCompo'

function App() {

  return (
    <UserContextProvider>
      <h1 className='heading1'>This is Context API'S</h1>
      <Login></Login>
      <Profile></Profile>
      <NewCompo></NewCompo>

    </UserContextProvider>
  )
}

export default App
