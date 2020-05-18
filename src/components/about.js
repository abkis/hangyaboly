import React, {Component} from 'react';
import './css/about.css';
import {Cell, Grid} from 'react-mdl';


class About extends Component {
    render(){
        return(
            <div className="about-page">
                <div className="about-header">
                    <h1>Rólunk</h1>
                    <hr/>
                </div>
                <div className="about-body">
                    <Grid className="about-grid">
                        <Cell col={6} style={{boxShadow: '0 0 10px rgb(6, 114, 6)', borderRadius: '5px', backgroundColor: 'rgba(128, 128, 128, 0.171)'}}>
                            <h3>A Színházról</h3>
                            <p>
                            Oyan szinházat szeretnénk létrehozni, ahol nemcsak a nézők, de a szinészek is tanulhatnak valami újat, miközben játszanak, szórakoznak. Elsősorban tanitani szeretnénk, és csak másodsorban szórakoztatani. Éppen ezért olyan szindarabok lesznek / voltak megálmodva szinpadra, amin nemcsak nevetni, sirni es gondokodni lehet, de valami újat is tanulni.
                            </p>
                        </Cell>
                        <Cell col={6} style={{boxShadow: '0 0 10px rgb(6, 114, 6)', borderRadius: '5px', backgroundColor: 'rgba(128, 128, 128, 0.171)'}}>
                            <h3>A Tagokról</h3>
                            <p>valami arrol, hogy egyszeru emberek, miert szeretik, stb, gyors osszefoglalo</p>
                        </Cell>
                    </Grid>
                    <hr/>
                    <div className="sponsors">
                        <h3>Támogatóink</h3>
                        <Grid className="sponsor-grid">
                            <Cell className="cell1" col={1}>
                            <a style={{color: 'black'}} href="https://www.hccc.org/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-home" aria-hidden="true"/>
                            </a>
                            </Cell>
                            <Cell className = "cell2" col={11}>
                                <p>blah blah blah koszi szepen mhaz</p>
                            </Cell>
                        </Grid>  
                    </div>
                </div>
            </div>
        )
    }
};

export default About;