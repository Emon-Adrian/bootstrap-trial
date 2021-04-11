import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import logo from './logo.svg';
import './App.css';
import Footer from './components/inc/Footer';


function App() {
  return ( 
    
    <Router>
    <Navbar/>  
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
