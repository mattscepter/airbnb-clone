import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
        </Switch>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
