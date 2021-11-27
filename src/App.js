import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Newnav from './components/Newnav';
import Home from './components/Home';
import SimpleCard from './components/ProjectCard/SimpleCard';
import Projects from './components/Projects';
import { BrowserRouter as Routes ,Switch, Route  } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <Card/>
      <Routes>
      <Newnav/>
      <Switch>
        <Route exact path = "/" component={Home}></Route>
        <Route exact path = "/Projects" component={Projects}></Route>
        <Route exact path = "/Contact" component={Contact}></Route>
        {/* <Route exact path = "/" component={}></Route> */}

      
      </Switch>
      </Routes>
    </div>
  );
}

export default App;
