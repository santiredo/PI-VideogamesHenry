import './App.css';
import { useLocation, Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home'
import Nav from './components/Nav/Nav';

function App() {

   const location = useLocation()

   console.log(location.pathname)

  if(location.pathname === '/'){
    return (
       <>
          <Routes>
            <Route path='/' element={<Landing/>}/>
          </Routes>
       </>
    )
 }else {
    return (
       <>
         <Nav />
         <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/detail' />
            <Route path='/form' />
         </Routes>
       </>
    );
 }
}

export default App;
