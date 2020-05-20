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
                        <Cell col={6} style={{boxShadow: '0 0 10px rgb(6, 114, 6)', borderRadius: '8px'}}>
                            <h3>A Színházról</h3>
                            <p className="description">
                            Oyan szinházat szeretnénk létrehozni, ahol nemcsak a nézők, de a szinészek is tanulhatnak valami újat, miközben játszanak, szórakoznak. Elsősorban tanitani szeretnénk, és csak másodsorban szórakoztatani. Éppen ezért olyan szindarabok lesznek / voltak megálmodva szinpadra, amin nemcsak nevetni, sirni es gondokodni lehet, de valami újat is tanulni.
                            </p>
                        </Cell>
                        <Cell col={6} style={{boxShadow: '0 0 10px rgb(6, 114, 6)', borderRadius: '8px'}}>
                            <h3>A Tagokról</h3>
                            <p className="description"> Amatőr szinház lévén minden tagunk amatőr, de mindenképp szivvel-lélekkel játszani vágyó, nagyon is tehetséges nők, férfiak, gyerekek. 
                                Szívesen várjuk olyan egyének jelentkezését, akik úgy érzik hozzájárulnának az előadásokhoz, akár színpadon, akár a színpad mögött valósitanák meg magukat szivesen.</p>
                            <h4>„Mit jelent nekem a Hangyaboly?”</h4>
                            <p className="testimonials">
                            „Sokat, nagyon sokat... az újrakezdést, a folytatást. Amióta ráeszméltem a világra imádom a szinházat, és nemcsak nézni, csinálni is... <br/>
                            Egészen kicsi koromban nekem is sokszor feltették a kérdést: Mi leszel ha nagy leszel?... Gondolkodás nélkül a válasz mindig ugyanaz volt... 
                            Szinésznő. Persze sokan megmosolyogták a választ, de én mindig tudtam, hogy ott bent, valahol legbelül én ezt komolyan gondolom. <br/>
                            Úgy nézett ki, igazam lett.... éltem, játszottam a szinhazat... aztán közbeszólt a sors és évtizedekig csak nézőként jártam szinházba, 
                            de minden egyes alkalommal amikor felgördült a függöny egy picit belehaltam... ott szeretnék lenni, ott fent a szinpadon... 
                            és akkor jött a Hangyaboly... és én ott lehettem... Köszönöm!!!!”<br/>
                            <a style={{marginLeft: '60%'}} className="pretty">–Gabriela Schneman</a>
                            </p>
                            <br/>
                            <p className="testimonials">
                            „A Hangyaboly együttlét, jó társaság, jó hangulat, kihívás, izgalmak, sikerélmény, szórakozás közös játék és szép
                            emlékek! Már nagyon várom, hogy újra együtt játszhassunk! :) ”
                            <a className="pretty">–Tarnai Tünde</a>
                            </p>
                            <br/>
                        </Cell>
                    </Grid>
                    <hr style={{ marginTop: '5px'}}/>
                    <div className="sponsors">
                        <h3>Támogatóink</h3>
                        <Grid className="sponsor-grid">
                            <Cell className="cell1" col={1}>
                            <a style={{color: 'black'}} href="https://www.hccc.org/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-home" aria-hidden="true"/>
                            </a>
                            </Cell>
                            <Cell className = "cell2" col={11}>
                                <p>Főtámogatónk a Torontoi Magyar Ház</p>
                            </Cell>
                        </Grid>  
                        <p style={{textAlign:"center", marginTop: '0', marginBottom: '15px', fontSize: "15px", fontStyle:"italic"}}>Adományokat, kellékeket, egyéb felajánlásokat a Társulat szívesen fogad</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;