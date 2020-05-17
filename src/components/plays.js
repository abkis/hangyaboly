//info about each play here
import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from "react-mdl";
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
        const {plays, data} = this.state;
        const items = [];
        plays.forEach((play) =>{
            items.push(<Tab className="tab">{play}</Tab>)
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