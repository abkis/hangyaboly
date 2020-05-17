import React, {Component} from 'react';
import {Grid, Cell, Card} from "react-mdl";
import {Link} from 'react-router-dom';
import './css/people.css';
import Firebase from '../firebase';

const db = Firebase.firestore();
const storage = Firebase.storage();

const plays = ['hangyaboly', 'gyertyak', 'totek'];

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {loading: true, data: []};
    }

    //to get user data
    async getActors() {
        var actorRef = db.collection("actors");
        const actors = await actorRef.get().then(snapshot => snapshot.docs.map(doc => doc.data()));
        this.setState({data: actors});
        console.log("this.state.data: ", this.state.data, 'loading: ', this.state.loading);
        this.state.data.forEach((ea, i) => {
            this.getURL(ea['img'], i);
        })
        this.setState({loading: false});
    };

    componentDidMount(){
        this.getActors();
    }
/*
    filterActors(){
        //only select actors actually in the play
        const {activeTab, data, activeActors} = this.state;
        console.log("Active Actors Func");
        console.log(data);
        console.log(activeActors);
        var onPlay = plays[activeTab];
        data.forEach((ea, i) =>{
            if (ea[onPlay]){
                activeActors.push(ea);
                this.getURL(ea['img'], i);
            }
        });
        console.log('active: ', activeActors);
    } */

    getURL(name, i){
        var imgRef = storage.ref(`actor-pics/${name}`);
        imgRef.getDownloadURL().then(function(url){
            console.log("got img");
            var card = document.getElementById(`card${i}`).style;
            card.background = `url(${url})`;
            card.backgroundSize = '300px';
        }).catch(function(err){
            console.log("there was an issue: ", err);
        });
    }

    cardTemplate(i){
        const {loading, data} = this.state;
        return(
            <Link className="link" to={loading? "/tagok" : `/tagok/${data[i].url}`}>
                <Card className = "card" id={`card${i}`} shadow={5}>
                    <a className="about">
                    {loading? "Egy pillanat..." : data[i].lastName + " " + data[i].firstName}
                    </a>
                </Card>
                </Link>
        )
    }

    toggleCategories(i) {
        const {loading, data} = this.state;
        var indices = [];
        for (var j = i; j <= (i + 2); ++j){
            console.log(j);
            if (j == data.length) break;
            indices.push(j);
        }
        var toRender = [];
        indices.forEach((ea) =>{
            toRender.push(this.cardTemplate(ea));
        })
        return(
            <div className="projects-grid">
                {toRender}
            </div>
        )
        /*
        console.log("i: ", i, "data.length: ", data.length);
            return(    
                <div className="projects-grid">
                <Link className="link" to={loading? "/tagok" : `/tagok/${data[i].url}`}>
                <Card className = "card" id={`card${i}`} shadow={5}>
                    <a className="about">
                    {loading? "Egy pillanat..." : data[i].lastName + " " + data[i].firstName}
                    </a>
                </Card>
                </Link>

                <Link className="link" to={loading? "/tagok" : `/tagok/${data[++i].url}`}>
                <Card className = "card" id={`card${i}`} shadow={5}>
                    <a className="about">
                    {loading? "Egy pillanat..." : data[i].lastName + " " + data[i].firstName}
                    </a>
                </Card>
                </Link>

                <Link className="link" to={loading? "/tagok" : `/tagok/${data[++i].url}`}>
                <Card className = "card" id={`card${i}`} shadow={5}>
                    <a className="about">
                    {loading? "Egy pillanat..." : data[i].lastName + " " + data[i].firstName}
                    </a>
                </Card>
                </Link>

                </div> 
            )*/
    }

    render(){
        //this.test();
        var len = this.state.data.length;
        var item = [];
        for (var i = 0; i < len; i += 3){
            item.push(<div className="content">{this.toggleCategories(i)};</div>);
        }
        return(
            <div className="people">
                <h1>Tagok</h1>
                <hr />
                   <Grid>
                       <Cell col={12}>
                           {item}
                      </Cell>
                   </Grid>      
            </div>
        )
    }
};

export default Projects;