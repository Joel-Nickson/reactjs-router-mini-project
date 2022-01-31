import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Products from './components/Products';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Redirect to="/home" />
            )
          }}
        />
        <Switch>
          <Route path='/home' >
            <Home />
          </Route>
        </Switch>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>

        <Switch>
          <Route path='/services'>
            <Services />
          </Route>
        </Switch>

        <Switch>
          <Route path='/products'>
            <Products />
          </Route>
        </Switch>

        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
