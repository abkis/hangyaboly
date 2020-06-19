import React, { Component } from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive'

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  header(){
    var width = this.state.width;
    if (width <= 500){
      //phone
      return(
        <>
        <span class="mdl-layout-title" style={{width:'12vw',marginLeft:'0',  marginTop: '0', paddingTop: '0', lineHeight: '0'}}>
              <a href="/"style={{paddingLeft: '0', paddingRight: '0', fontFamily: 'Allan', fontSize: '3vw' /*'40px'*/, textDecoration: 'none', color: 'white'}}>
              Hangyaboly
              </a>
        </span>
        <div class="mdl-layout-spacer" style={{width: '2.8vw', flexGrow: "0"}}></div>
        </>
      )
    }
    if (width <= 1000){
      //handheld device
      return(
        <>
        <span className="mdl-layout-title" style={{width:'35vw',  marginLeft:'0',  marginTop: '0', paddingTop: '0'}}>
              <a href="/" style={{paddingLeft: '0', paddingRight: '0', fontFamily: 'Allan', fontSize: '2.8vw' /*'40px'*/, textDecoration: 'none', color: 'white'}}>
              Hangyaboly Színjátszó Társulat
              </a>
        </span>
        <div className="mdl-layout-spacer" style={{width: '3vw', flexGrow: "0"}}></div>
        </>
      )
    }
    return(
      <>
      <span  className="mdl-layout-title" style={{width:'30vw'}}>
              <a href="/" style={{paddingLeft: '0', paddingRight: '0', fontFamily: 'Allan', fontSize: '2.8vw' /*'40px'*/, textDecoration: 'none', color: 'white'}}>
              Hangyaboly Színjátszó Társulat
              </a>
      </span>
      <div className="mdl-layout-spacer" style={{width: '15vw', flexGrow: "0"}}></div>
      </>
    )
  }

  render() {
    
    return (
      <div>
      <Layout fixedHeader>
        <header className="mdl-layout__header header-color is-casting-shadow">
          <div className="mdl-layout__header-row" style={{paddingLeft: '4vw', paddingRight: '4vw'}}>
            {this.header()}
            <Navigation style={{marginRight:'4vw'}}>
                <Link to="/" style={{fontFamily: 'Allan', fontSize: '2vw' /*30px*/, marginLeft: '0'}}>Főoldal</Link>
                <Link to="/rolunk" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Rólunk</Link>
                <Link to="/tagok" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Tagok</Link>
                <Link to="/szerepek" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Szerepek</Link>
                <Link to="/kapcsolat" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Kapcsolat</Link>
                <Link to="/galeria" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Galéria</Link>
              </Navigation>
          </div>
        </header> {/*
          <Header className="header-color" title={<Link style={{paddingLeft: '0', paddingRight: '0', fontFamily: 'Allan', fontSize: '2.8vw' , textDecoration: 'none', color: 'white'}} to="/" scroll='true'>Hangyaboly Színjátszó Társulat</Link>} >
              <Navigation >
                <Link to="/" style={{fontFamily: 'Allan', fontSize: '2vw', marginLeft: '0'}}>Főoldal</Link>
                <Link to="/rolunk" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Rólunk</Link>
                <Link to="/tagok" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Tagok</Link>
                <Link to="/szerepek" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Szerepek</Link>
                <Link to="/kapcsolat" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Kapcsolat</Link>
                <Link to="/galeria" style={{fontFamily: 'Allan', fontSize: '2vw'}}>Galéria</Link>
              </Navigation>
          </Header>*/}
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
