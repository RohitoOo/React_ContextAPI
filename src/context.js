import React , { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {

    // state = {
    //     tracks_list : [
    //         {track: [{track_name : "abc"}, {track_lyrics : "Lyricsabc"}] },
    //         {track: [{track_name : "123"}, {track_lyrics : "Lyricsabc"}] } 
    //     ],
    //     heading : "Top 10 Tracks"
    // }

    state = {
        tracks : [],
        heading : "Top 10 Tracks"
    }


    componentDidMount(){
        axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=619b7024924823f798b0ffe2e046f466`)
        .then(res => this.setState({
            tracks : res.data.message.body.track_list
        }))
        .catch(err => console.log(err))
    }
    render(){
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
            )
  }
}

export const Consumer = Context.Consumer;

// The state in this component will be accessible in the child components wrapped around <Provider/>