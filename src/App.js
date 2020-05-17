import React, { Component } from 'react';
/*import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';*/
import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';
/*import HomePage from './pages/home';
import AboutPage from './pages/about';
import EventListPage from './pages/events-list-page';
import EventPage from './pages/events';
import MemberPage from './pages/members';
import NavBar from './navbar';
import NotFound from './pages/not-found';*/
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
      <Layout fixedHeader>
          <Header className="header-color" title={<Link style={{fontFamily: 'Allan', fontSize: '40px', textDecoration: 'none', color: 'white'}} to="/">Hangyaboly Színház</Link>} >
              <Navigation>
                <Link to="/" style={{fontFamily: 'Allan', fontSize: '30px'}}>Főoldal</Link>
                <Link to="/rolunk" style={{fontFamily: 'Allan', fontSize: '30px'}}>Rólunk</Link>
                <Link to="/tagok" style={{fontFamily: 'Allan', fontSize: '30px'}}>Tagok</Link>
                <Link to="/szerepek" style={{fontFamily: 'Allan', fontSize: '30px'}}>Szerepek</Link>
                <Link to="/eloadasok" style={{fontFamily: 'Allan', fontSize: '30px'}}>Előadásaink</Link>
                <Link to="/kapcsolat" style={{fontFamily: 'Allan', fontSize: '30px'}}>Kapcsolat</Link>
                <Link to="/galeria" style={{fontFamily: 'Allan', fontSize: '30px'}}>Galéria</Link>
              </Navigation>
          </Header>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
       </Layout>

  </div>
/*
      <Router>
      <div className = "App">
      <NavBar/>
      <Switch>
        <Route path="/" component ={HomePage} exact/>
        <Route path="/about" component = {AboutPage}/>
        <Route path="/events-list" component = {EventListPage}/>
        <Route path="/events/:name" component={EventPage}/>
        <Route path="/members" component = {MemberPage}/>
        {/*no path => match by default; will always display unless use switch  
        <Route component = {NotFound} />
      </Switch>
      </div>
</Router> */
    );
  }
}

export default App;
