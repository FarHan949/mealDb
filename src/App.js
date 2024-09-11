import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'



function App() {
const route = createBrowserRouter([
  {
    path : '/' ,
  element: <Main></Main>,
  children: [
  {path: '/', element: <Home></Home>},
  {path: 'home', element: <Home></Home>},
  {path: 'about', element: <About></About>},

  {path: 'services', loader : async()=>{ 
    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)}
    , element: <Services></Services>},

  
  {path: 'contact', element: <Contact></Contact>}
  ]
},

])

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>    
    </div>
  );
}

export default App;
