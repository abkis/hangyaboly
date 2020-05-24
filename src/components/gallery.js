import React, {Component} from 'react';
import './css/gallery.css';
import Firebase from '../firebase';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

const db = Firebase.firestore();
const storage = Firebase.storage();

const slideImages = [
    { original: 'https://firebasestorage.googleapis.com/v0/b/hangyaboly-honlap.appspot.com/o/group-pics%2F87953123_2893352200711526_115118150168608768_n.jpg?alt=media&token=e57854f4-1461-4dad-a8a1-86fcaa1b1929',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/hangyaboly-honlap.appspot.com/o/group-pics%2F87953123_2893352200711526_115118150168608768_n.jpg?alt=media&token=e57854f4-1461-4dad-a8a1-86fcaa1b1929://eponaquest.com/wp-content/uploads/beautiful-scenery.jpg',
    }
];

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {loading: true, paths: [], correctFormat: []};
    }


    //to get user data
    async getPaths() {
        var picRef = db.collection("pics");
        const arr = await picRef.get().then(snapshot => snapshot.docs.map(doc => doc.data()));
        this.setState({paths: arr[0].imgNames});
        console.log("this.state.paths: ", this.state.paths, 'loading: ', this.state.loading);
        this.getPics();
    };

    getPics(){
        const {paths} = this.state;
        var len = paths.length;
        paths.forEach((ea, i) => {
            this.getURL(ea, i, len);
        })
    }

    getURL(ea, i, len){
        const {correctFormat} = this.state;
        var imgRef = storage.ref(`group-pics/${ea}`);
        imgRef.getDownloadURL().then((url) =>{
            correctFormat.push({original: url, thumbnail: url});
            if (i === (len - 1)){
                this.setState({loading: false});
            }
        });
    }

    componentDidMount(){
        this.getPaths();
    }

    render(){
    return(  
        <div className="pic-page">
        <div className="pics">
        <h1 style={{fontSize: '4vw'}}> Képek</h1>
            <ImageGallery items={this.state.loading ? slideImages : this.state.correctFormat}/>
        </div>
        </div>
        
    )}
}

export default Gallery;