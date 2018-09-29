import React , { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {

    state = {
        tracks_list : [
            {track: [{track_name : "abc"}, {track_lyrics : "Lyricsabc"}] },
            {track: [{track_name : "123"}, {track_lyrics : "Lyricsabc"}] } 
        ],
        heading : "Top 10 Tracks"
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