import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './css/home.css';
import Pic from "../img/group-pic.jpg";

class Home extends Component {
    render(){
        return(
            <div className="body">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src={Pic}
                        alt="group-pic"
                        className="group-img"
                        />
                        <div className="banner-text">
                            <h1>Hangyaboly Színjátszó Társulat</h1>
                            <hr/>
                            <p style={{fontSize:'2vw' /*30px*/}}>A Torontói Magyar Ház Amatőr Színtársulata</p>
                            <p style={{marginBottom: '6px'}}>Hangyaboly | A Gyertyák Csonking Égnek | Tóték</p>
                            {/*

                            <div className="social-links">
                                
                                {/*LinkedIn 
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/*Github *
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/*youtube *
                                <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                                </a>
                            </div>
                            */}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Home;