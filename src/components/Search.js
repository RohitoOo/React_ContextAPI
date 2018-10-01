import React , {Component} from 'react'
import {Consumer} from '../context'
import axios from 'axios'

class Search extends Component {

    state = {
        trackTitle : '',
       
    }

    async findTrack(dispatch, e){
        e.preventDefault();
        console.log("EVENT" , e)
        axios
        .get(`http://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page=1&page_size=10&apikey=619b7024924823f798b0ffe2e046f466`)
        .then(res => {
            dispatch({
                type: "SEARCH_TRACKS",
                payload: res.data.message.body.track_list
            });
            this.setState({
                trackTitle : ''
            })
        })
     
            
    
        .catch(err => console.log(err))
    }

    componentDidMount(){
       
    }

    onChange = (e) => {
        e.target.value =  e.target.value.replace(/\W/g , "")
        this.setState({
            [e.target.name] : e.target.value 
        })    }
    render(){

        return(<Consumer>

            {value => {
                return(<div className=" form-group card card-body mb-4 p-4">
                <form onSubmit={this.findTrack.bind(this, value.dispatch)}>
                <input 
                type="text"
                className="form-control form-control-lg"
                placeHolder="Search By Song Title..."
                name="trackTitle"
                value={this.state.trackTitle}
                onChange={this.onChange}
                />
                 </form>
                </div>)
            }}

        </Consumer>)
    }
}

export default Search;