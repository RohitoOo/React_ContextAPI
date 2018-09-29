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
        posts : []
    }

    componentWillMount(){
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        // .then(res => console.log(res.data))
        // .then(res => console.log(res.data) )
        .then(res => this.setState({
            posts : res.data
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