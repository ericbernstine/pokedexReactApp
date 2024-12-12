import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Pokemon from './pages/Pokemon';
import Updates from './pages/Updates';
import Layout from './pages/Layout';
import './App.css';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/> }/>
        <Route path='pokemon' element={<Pokemon/>} />
        <Route path='updates' element={<Updates/>} />
        <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
