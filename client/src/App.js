import './App.css';
import { useLocation, Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home'
import Nav from './components/Nav/Nav';
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changeRouteDetails, changeRouteHome } from './redux/action';

function App() {

   const location = useLocation()
   const dispatch = useDispatch()

   console.log(location.pathname)

   useEffect(() => {
      if(location.pathname !== '/home'){
         dispatch(changeRouteHome())
      } else if(location.pathname !== '/detail/:id'){
         dispatch(changeRouteDetails())
      }
   }, [dispatch, location.pathname])

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
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/form' element={<Form/>} />
         </Routes>
       </>
    );
 }
}

export default App;
