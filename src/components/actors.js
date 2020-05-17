import React, {Component} from 'react';
import Firebase from 'firebase';
import {Grid, Cell, Card} from "react-mdl";
import './css/actors.css';

const db = Firebase.firestore();
const storage = Firebase.storage();

class Actors extends Component{
    constructor(props){
        super(props);
        this.state = {loading: true, actor: [], name: props.match.params.name};
    }

    //get data stored in db
    async getInfo(){
        var {name} = this.state;
        var doc = await (await db.collection("actors").doc(`${name}`).get()).data();
        this.setState({loading: false}, this.setActor(doc));
    }

    setActor(doc){
        this.setState({actor: doc});
        this.changeImg();
    }

    changeImg(){
        var imgRef = storage.ref(`actor-pics/${this.state.actor.img}`);
        imgRef.getDownloadURL().then(function(url){
            console.log("got img");
            var img = document.getElementById("profile");
            img.src = `${url}`;
        }).catch(function(err){
            console.log("there was an issue: ", err);
        });
    }

    componentDidMount(){
        this.getInfo();
    }

    infoTemplate(i, m){
        const {actor} = this.state;
        return(
            <div>
                <Grid>
                <Cell col={4}>
                    <a className="category">{m}</a>
                </Cell>
                <Cell col={8}>
                    <a className="info">{actor[i]}</a>
                </Cell>
                </Grid>
            </div>
        )
    }

        charTemplate(m){
            const {actor} = this.state;
            return(
                <div>
                    <Grid>
                    <Cell col={4}>
                        <a className="category">{this.capital(m)}</a>
                    </Cell>
                    <Cell col={8}>
                        <a className="info">{this.formatChar(actor["characters"][m])}</a>
                    </Cell>
                    </Grid>
                </div>
            )
    }

    capital(str){
        var newStr = '';
        newStr = str.charAt(0).toUpperCase() + str.slice(1);
        return newStr;
    }

    formatChar(list){
        var str = '';
        var len = list.length;
        list.forEach((ea, i) =>{
            if (i === len - 1){
                str += ea;
            }
            else{
                str += ea + ', ';
            }
        })
        console.log(str);
        return str;
    }

    callEach(){
        const items = [];
        items.push(this.infoTemplate('about', 'Rólam'));
        items.push(<hr/>);
        items.push(<h3>Szerepek</h3>);
        const char = this.state.actor.characters;
        for (var play in char){
            items.push(this.charTemplate(play));
        }
        return items;
    }

    makePage(){
        const {loading, name, actor} = this.state;
        return(
            <div className="actor">
                <h1>
                {loading ? name : actor.lastName + " " + actor.firstName}
                </h1>
            <Grid className="actor-grid">
                <Cell col={6} className="lhs">
                    <img id = "profile" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFxUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKystLTctLS0tLS0rLSstNystNzcrKy0rLTctLS0tNy0tLSsrLS0rLTctLS03Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EAB0QAQEBAAICAwAAAAAAAAAAAAABERKRQYECIWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APH9TU0AKgC6WgBoaAaaixQNNQF1UgCiQoKalNBpEiyAsIRaByLUi0F5DKwFlXUNBdGMUGBF1ATTQFEgARUAVFUQoALAABQGYqaCqALIQAUqALCCQFVIUAQBlCiCLhAAWoC6gAGmgAi6oKACoAUhABYQAxSFAqooAagLFxmKBgAOYEQRcKoCAABgBQANCqKUAUgQEABYGICrGcWAqs61ASKmAKrMUBTiA54iiCAACoBCKkAAwBagooiwAEgKCghVSgspAgKuJhoNIrINCSiDWjOqDnUgUCrKyQFIIC0KQALABUwBQFCioCKYAIoAoAsEi2gqasSgKiwGuhkBjUoIBQ0DEXQEioQCVYiwC1UMUU0IgUIVRKACriLQRYEgLiCgFNAI1GZGqACg4lKiABABUAAAAAiwFF1ABSgAgUCLEaA1Yw1KCrqQ0AIoItolBelTiIOS0KAilAQMBUAACUCrqEUWFE0GiIAqEKCiLAFokBqVNRZQWKkAKUkIBoaA5mlMQAhgAAAJAWIChFgYChqAoAKhQBcTVBFABWVBopAAiRoEDBBzoqAioUBQBBaQECkUUNANVFARYgLBIqAqVVA1AFCkAq0AIqQtBrf0TAGEBBKLUAAAWRCAWkKmKNCFBYABQQBqMrKCrKzVoBAAqxJFAUKAGgLoaA5FBBRIUAAAKKJGmVBbEVICgAWmhgGGJFoKJAFgAKCAsLAgKqANehPsByMDUClADRFBAVRFTSgsEIDQIAomAoigYolAWJKSgoigosAFhADAUHFIoBEUQKeFAZICgUAVFAFoAJABasQAWADNPiANNQEFiTyCjTQAAA//2Q=="/>
                </Cell>
                <Cell col={6} className="rhs">
                    {loading ? "Egy pillanat..." : this.callEach()}
                </Cell>
            </Grid>
            </div>
        )
    }

    render(){
        return(
            <div className="actor-page">
                <div>
                    {this.makePage()}
                </div>
            </div>
        )
    }
}

export default Actors;