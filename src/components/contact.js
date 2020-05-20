import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import './css/contact.css';

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Csatlakozzon Hozzánk!</h2>
                        <img 
                            src="https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/88350754_2893350730711673_1437086638378319872_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=05tT-vA2aYwAX-MykZJ&_nc_ht=scontent.fybz2-1.fna&oh=4ad9e8fcebadbcb1b4e874de2cd70eda&oe=5EE365A0"
                            alt="group-pic-contact"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin:'auto', fontSize: '15px', paddingTop: '1em'}}>Ha van bármi kérdése, írjon nekünk! Szívesen fogadjuk az érdeklödőket.</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Elérhetőségek</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (416) 786 5282
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                                    <a style={{color: 'black'}} href="https://www.facebook.com/torontoimagyarszinhazcsapat/?ref=page_internal" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                                    </a>
                                    Hangyaboly Torontoi Magyar Szinhaz Csapat
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                                <a style={{color: 'black'}} href="mailto:hangyabolytoronto@gmail.com">
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    </a>
                                    hangyabolytoronto@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton', marginLeft: '13px'}}>
                                    <a href="https://www.google.com/maps/place/Hungarian+Canadian+Cultural+Centre/@43.7169428,-79.3145311,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cdb7dee9d18b:0xfeb24f21676bd304!8m2!3d43.7169428!4d-79.3123424" rel="noopener noreferrer" target="_blank">
                                    <i style={{color: 'black', marginRight: '8px'}} className="fa fa-map-marker" aria-hidden="true"/>
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