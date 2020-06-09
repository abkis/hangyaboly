import React, {Component} from 'react';
import {Grid, Cell, Card} from "react-mdl";
import {Link} from 'react-router-dom';
import './css/people.css';
import Firebase from '../firebase';

const db = Firebase.firestore();
const storage = Firebase.storage();

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {loading: true, width: window.innerWidth, data: []};
    }
      
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

    //to get user data
    async getActors() {
        var actorRef = db.collection("actors");
        const actors = await actorRef.get().then(snapshot => snapshot.docs.map(doc => doc.data()));
        this.setState({data: actors});
        this.state.data.forEach((ea, i) => {
            this.getURL(ea['img'], i);
        })
        this.setState({loading: false});
    };

    componentDidMount(){
        this.getActors();
    }

    getURL(name, i){
        var imgRef = storage.ref(`actor-pics/${name}`);
        imgRef.getDownloadURL().then(function(url){
            var card = document.getElementById(`card${i}`).style;
            card.background = `url(${url})`;
            card.backgroundSize = '19vw'; /*300px */
        }).catch(function(err){
            console.log("there was an issue: ", err);
        });
    }

    cardTemplate(i){
        const {loading, data, width} = this.state;
        return(
            <Link className="link" to={loading? "/tagok" : `/tagok/${data[i].url}`}>
                <Card style={{width: '19vw', minHeight: '1vw'}} className = "card" id={`card${i}`} shadow={5}>
                    <a className="about" style={{height: 'auto'}}>
                    {loading? "Egy pillanat..." : data[i].lastName + " " + data[i].firstName}
                    </a>
                </Card>
                </Link>
        )
    }

    toggleCategories(i) {
        const {data, width} = this.state;
        var isPhone = width <= 500;
        var isHandheld = width <= 1000;
        var indices = [];
       /* if (isPhone){
            //only display one card
            return(
                <div className="projects-grid">
                    {this.cardTemplate(i)}
                </div>
            )
        }
        if (isHandheld){
            //display two cards
            for (var j = i; j <= (i + 1); ++j){
                if (j === data.length) break;
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
        }*/
        for (var j = i; j <= (i + 2); ++j){
            if (j === data.length) break;
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
    }

    render(){
        //this.test();
        var len = this.state.data.length;
        var item = [];
        var j = 3;
        /*if (this.state.width <= 1000){
            if (this.state.width <= 500){
                j = 1;
            }
            j = 2;
        }*/
        for (var i = 0; i < len; i += j){
            item.push(<div className="content">{this.toggleCategories(i)}</div>);
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