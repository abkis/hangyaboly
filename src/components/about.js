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
                            Oyan színházat szeretnénk létrehozni, ahol nemcsak a nézők, de a színészek is tanulhatnak valami újat, miközben játszanak, szórakoznak. Elsősorban tanítani szeretnénk, és csak másodsorban szórakoztatani. Éppen ezért olyan színdarabok lesznek / voltak megálmodva színpadra, amin nemcsak nevetni, sírni és gondokodni lehet, de valami újat is tanulni.
                            </p>
                            <h5>Boda-Lázár Judith, a Magyar Ház elnökének üzenete:</h5>
                            <p className="description">
                            A Magyar Ház elnökeként nagy öröm volt számomra, mikor értesültem arról, hogy hosszú évek után amatőr színjátszócsoport alakul a Kanadai Magyar Kultúrközpont falai között Kis Csilla szervezésében. A Magyar Ház vezetőségének minden tagja első perctől támogatta az ötlet megvalósulását.
                            <br/>A társulat egy új kulturális színfoltot jelent programjaink palettáján, amin keresztül megélhetjük hagyományainkat és felidézhetjük azokat a pillanatokat, melyek összekötnek bennünket az anyaországgal és a határon túli területekkel. Gyermekkorom jó részét Kolozsváron töltöttem, ahol szüleimmel mi is rendszeres színházlátogatók voltunk.
                            <br/>A Hangyaboly Torontói Magyar Színjátszócsoportot hiánypótló kezdeményezésnek tartom. Büszkeséggel tölt el, hogy már számos környéki magyar közösségbe kaptak meghívást, valamint, hogy tavaly novemberben a második alkalommal megrendezett, Kanadai Magyar Amatőr Színházi Fesztiválon (KAMASZ) is felléptek. 
                            <br/>Bízom benne, hogy a tavaly tavasszal bemutatott első színdarabjuk sikere után további felejthetetlen előadásokkal ajándékoznak meg bennünket, és a magyar nyelvű színházi élet ismét virágzásnak indul közösségünkben.
                            </p>
                        </Cell>
                        <Cell col={6} style={{boxShadow: '0 0 10px rgb(6, 114, 6)', borderRadius: '8px'}}>
                            <h3>A Tagokról</h3>
                            <p className="description"> Amatőr színház lévén minden tagunk amatőr, de mindenképp szívvel-lélekkel játszani vágyó, nagyon is tehetséges nők, férfiak, gyerekek. 
                                Szívesen várjuk olyan egyének jelentkezését, akik úgy érzik hozzájárulnának az előadásokhoz, akár színpadon, akár a színpad mögött valósitanák meg magukat szívesen.</p>
                            <h4>„Mit jelent nekem a Hangyaboly?”</h4>
                            <p className="testimonials">
                            „Sokat, nagyon sokat... az újrakezdést, a folytatást. Amióta ráeszméltem a világra imádom a színházat, és nemcsak nézni, csinálni is... <br/>
                            Egészen kicsi koromban nekem is sokszor feltették a kérdést: Mi leszel ha nagy leszel?... Gondolkodás nélkül a válasz mindig ugyanaz volt... 
                            Színésznő. Persze sokan megmosolyogták a választ, de én mindig tudtam, hogy ott bent, valahol legbelül én ezt komolyan gondolom. <br/>
                            Úgy nézett ki, igazam lett.... éltem, játszottam a színhazat... aztán közbeszólt a sors és évtizedekig csak nézőként jártam színházba, 
                            de minden egyes alkalommal amikor felgördült a függöny egy picit belehaltam... ott szeretnék lenni, ott fent a szinpadon... 
                            és akkor jött a Hangyaboly... és én ott lehettem... Köszönöm!!!!”<br/>
                            <a className="pretty">–Gabriela Schneman</a>
                            </p>
                            <br/>
                            <p className="testimonials">
                            „A Hangyaboly együttlét, jó társaság, jó hangulat, kihívás, izgalmak, sikerélmény, szórakozás közös játék és szép
                            emlékek! Már nagyon várom, hogy újra együtt játszhassunk! :) ”
                            <br/><a className="pretty">–Tarnai Tünde</a>
                            </p>
                            <br/>
                            <p className="testimonials">
                            „A Hangyaboly számomra egy színes közösség, ahol álarcok nélkül, de mégis álarcokkal lehetek önmagam, 
                            az a valaki, aki nagyon szeret játszani, más sorsok mögé tekinteni, más bőrébe bújni egy kicsit, és tehetem mindezt magyarul, az anyanyelvemen.”
                            <br/><a className="pretty">–Antal Anikó</a>
                            </p>
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