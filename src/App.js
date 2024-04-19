
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/Signup';
import Private from './components/Private';
import Login from './components/Login';
import AddActivity from './components/AddActivity';
import Activitylist from './components/Activitylist';
import UpdateActivity from './components/UpdateActivity';
import Home from './components/Home';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<Private/>}>
        <Route path="/" element={<Activitylist/>}/>
        <Route path="/add" element={<AddActivity/>}/>
        <Route path="/update/:name" element={<UpdateActivity/>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        <Route path="/home" element={<Home/>}/>
       
        </Route>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
