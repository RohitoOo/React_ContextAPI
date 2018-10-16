import React, {Component} from 'react'
import {Consumer} from '../../../context'
import axios from 'axios'
import Moment from 'react-moment';

class Lyrics extends Component {

    // If the radix parameter is omitted, JavaScript assumes the following:

    // If the string begins with "0x", the radix is 16 (hexadecimal)
    // If the string begins with "0", the radix is 8 (octal). This feature is deprecated
    // If the string begins with any other value, the radix is 10 (decimal)

    constructor(props){
        super(props)
        props.location.pathname = parseInt(props.location.pathname.replace('/', ""), 10)
    }

    state = {
        lyrics: "",
        date: ""
    }
    
    componentWillMount(){
        const id = this.props.location.pathname
        console.log("id" , this.props.location.pathname)
    axios
            .get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=619b7024924823f798b0ffe2e046f466`)
            
            .then(res => {
                this.setState({
                    lyrics : res.data.message.body.lyrics.lyrics_body,
                    date: res.data.message.body.lyrics.updated_time 
                })}
            )
            .catch(err => console.log(err))

    }

    render(){
        console.log(this.state.date)
        return (
            <Consumer>
                
            {value => {
              
                
                const result = value.tracks.filter( song => {
                    
    
                 return song.track.track_id === this.props.location.pathname
                
    
                })
            
     
               
                if(result.length !== 0 ) {
                    return  <div className="col-md-12">
                    <div className="card ">
                    <ul className="list-group">
                        <li key={result[0].track.track_id}className="list-group-item"> 
                           <h3>Track : {result[0].track.track_name}</h3>   
                        </li>
                        <li className="list-group-item">
                        <h5>Artist : {result[0].track.artist_name} </h5> 
                        </li>
                         <li className="list-group-item">
                        <h5>Updated Date : <Moment format="MM/DD/YYYY">{this.state.date}</Moment> </h5> 
                        </li>
                        </ul>
                        <div className="card-body">
                        <p> Lyrics : {this.state.lyrics}</p>
                        </div>
                    </div>
                   
                </div>
                } else {
                    console.log("do nothing")
                }
                }}
            </Consumer>
        )
    }

}

export default Lyrics
