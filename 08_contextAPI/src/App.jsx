import UserContextProvider from "./context/UserContextProvider.jsx";
import './App.css'
import Login from "./components/Login.jsx";
import Profile from "./components/Profle.jsx";

function App() {

  return (
    <>
        <UserContextProvider>
            <h1>HELLO WORLD</h1>
            <Login/>
            <Profile/>
        </UserContextProvider>
    </>
  )
}

export default App
