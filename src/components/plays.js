//info about each play here
import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, List, ListItemContent, ListItem} from "react-mdl";
import Firebase from 'firebase';
import './css/plays.css';

const db = Firebase.firestore();
const storage = Firebase.storage();

class Plays extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0, loading: true, plays: [], data: [], docName: []};
    }

    async getInfo(){
        var doc = await (await db.collection("about").doc("plays").get()).data();
        this.setState({data: doc});
        console.log(doc);
        for (var play in doc){
            this.state.plays.push(doc[play].title + ' – ' + doc[play].author);
            this.state.docName.push(play);
        }
        return false;
    }

    async componentDidMount(){
        var dummy = await this.getInfo();
        this.setState({loading: dummy});
        this.changeImg();
    }

    setTabs(){
        //makes number of tabs depending on no. plays
        const {plays} = this.state;
        const items = [];
        plays.forEach((play) =>{
            items.push(<Tab className="tab" style={{fontSize: '1vw'}}>{play}</Tab>)
        });
        return items;
    }

    changeImg(){
        const {data, docName, activeTab} = this.state;
        var imgRef = storage.ref(`plays/${data[docName[activeTab]].img}`);
        imgRef.getDownloadURL().then(function(url){
            console.log("got img");
            //return(url)
            var img = document.getElementById("poster");
            img.src = `${url}`;
            
        }).catch(function(err){
            console.log("there was an issue: ", err);
        });
    }

    listActor(){
        const {data, docName, activeTab} = this.state;
        var items = [];
        var current = data[docName[activeTab]].roles;
        for (var actor in current){
            items.push(
                <ListItem>
                    <ListItemContent style={{fontFamily: 'Anton', fontSize: "20px"}}>
                        {actor}
                    </ListItemContent>
                </ListItem>
            )
        }
        return items;
    }

    listRoles(){
        const {data, docName, activeTab} = this.state;
        var items = [];
        var current = data[docName[activeTab]].roles;
        for (var actor in current){
            items.push(
                <ListItem>
                    <ListItemContent style={{fontFamily: "Allegrya", fontSize: '20px'}}>
                        {current[actor]}
                    </ListItemContent>
                </ListItem>
            )
        }
        return items;
    }

    listContent(){
        const {data, docName, activeTab} = this.state;
        var items = [];
        var current = data[docName[activeTab]].roles;
        for (var actor in current){
            items.push(
                <ListItem>
                    <ListItemContent>
                        <a style={{fontFamily: 'Anton', fontSize:"2vw" /*20px */}}>{actor} </a>
                        <a style={{fontFamily: "Allegrya", fontSize:"2vw", textAlign: 'center', paddingInlineStart: '15px'}}>{current[actor]}</a>
                    </ListItemContent>
                </ListItem>
            )
        }
        return items;
    }

    pageLayout(){
        const {activeTab, plays, data, loading, docName} = this.state;
        return(
            <div className="play-body">
                <h1>{loading? "Egy pillanat..." : plays[activeTab]}</h1>
                <hr/>
                <div className="info">
                    <Grid className="play-grid">
                        <Cell col={6} className="lhs">
                            <img id="poster" src={loading? "" : this.changeImg()}/>
                        </Cell>
                        <Cell col={6} className="rhs">
                            <div>{loading? "Egy pillanat..." : data[docName[activeTab]].about}</div>
                        </Cell>
                    </Grid>
                    <hr/>
                    <h3>Szereplők</h3>
                    <Grid className="actor-list">
                        <Cell col={8} className="list-lhs" style={{margin: 'auto'}}>
                            <List className="list-actor">
                                {loading? "..." : this.listContent()}    
                            </List>                    
                        </Cell>
                    </Grid> 
                </div>
            </div>
        )
    }

    render(){
        var item = [];
        item.push(this.setTabs());
        return(
            <div>
                <Tabs id="tabs" activeTab={this.state.activeTab} onChange={(tabID)=> this.setState({activeTab: tabID})} ripple>
                    {item}
                </Tabs>
                <div className="content">{this.pageLayout()}</div>
            </div>
        )
    }
};

export default Plays;