
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import router from './main';

function App() {
 

  return (
    <>

<Header />
<Home />
    </>
  )
}

export default App
