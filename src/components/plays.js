//info about each play here
import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from "react-mdl";

class Plays extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '170px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>
                    React Project 1
                    </CardTitle>
                    <CardText>Dummy Text</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '170px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>
                    React Project 2
                    </CardTitle>
                    <CardText>Dummy Text</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '170px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}>
                    React Project 3
                    </CardTitle>
                    <CardText>Dummy Text</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if (this.state.activeTab === 1){
            return(
                <div><h1>Angular</h1></div>
            )
        }else if (this.state.activeTab === 2){
            return(
                <div><h1>Vue.js</h1></div>
            )
        }else if (this.state.activeTab === 3){
            return(
                <div><h1>MongoDB</h1></div>
            )
        }
    }

    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabID)=> this.setState({activeTab: tabID})} ripple>
                    {/*each tab rep by a # starting from 0*/}
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vue.js</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()};</div>
                        </Cell>
                    </Grid>
                    
            </div>
        )
    }
};

export default Plays;