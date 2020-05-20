import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import './css/home.css';

class Home extends Component {
    render(){
        return(
            <div className="body">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img src="https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/62082786_300307117329766_1862532947530219520_n.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=rHGxUmksEyEAX-ZhSdh&_nc_ht=scontent.fybz2-1.fna&oh=b1ac76dae04678e33bcad1f8f6f4eb12&oe=5EE0B349"
                        alt="group-pic"
                        className="group-img"
                        />
                        <div className="banner-text">
                            <h1>Hangyaboly Színjátszó Társulat</h1>
                            <hr/>
                            <p style={{fontSize:'30px'}}>A Torontói Magyar Ház Amatőr Színtársulata</p>
                            <p style={{marginBottom: '6px'}}>Hangyaboly | Gyertyák Csonking Égnek | Tóték</p>
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