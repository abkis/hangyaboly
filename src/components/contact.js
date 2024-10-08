import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import './css/contact.css';
import Pic from "../img/group-pic-contact.jpg"

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Csatlakozzon Hozzánk!</h2>
                        <img 
                            src={Pic}
                            alt="group-pic-contact"
                            style={{height: '19vw'}} /*250px*/
                        />
                        <p style={{width: '75%', margin:'auto', fontSize: '1.5vw' /*15px*/, paddingTop: '1em'}}>Ha van bármi kérdése, írjon nekünk! Szívesen fogadjuk az érdeklődőket.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Elérhetőségek</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '2vw' /*26px*/, fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (416) 786 5282
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '2vw', fontFamily: 'Anton'}}>
                                    <a style={{color: 'black'}} href="https://www.facebook.com/torontoimagyarszinhazcsapat/?ref=page_internal" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                    </a>
                                    Hangyaboly Torontoi Magyar Szinhaz Csapat
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '2vw', fontFamily: 'Anton'}}>
                                <a style={{color: 'black'}} href="mailto:hangyabolytoronto@gmail.com">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    </a>
                                    hangyabolytoronto@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '2vw', fontFamily: 'Anton'}}>
                                    <a href="https://www.google.com/maps/place/Hungarian+Canadian+Cultural+Centre/@43.7169428,-79.3145311,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cdb7dee9d18b:0xfeb24f21676bd304!8m2!3d43.7169428!4d-79.3123424" rel="noopener noreferrer" target="_blank">
                                    <i style={{color: 'black', paddingLeft: '1vw'}} className="fa fa-map-marker" aria-hidden="true"/>
                                    </a>
                                    141 Sunrise Ave, North York, ON M4A 1A9
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
};

export default Contact;