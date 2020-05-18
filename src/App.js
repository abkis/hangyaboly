import React, { Component } from 'react';

import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';
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
    );
  }
}

export default App;
