import React from 'react'
import {Link} from 'react-router-dom'


const Track = (props) => {
    const {song} = props
    return (
        <div className="row">
        <div className="col-md-12">
                <div className="card ">
                   
                    <li key={song.track.track_id}className="list-group-item"> 
                    <a href= {'https://www.google.ca/search?q=' + song.track.track_name + song.track.artist_name} ><h3>{song.track.track_name}</h3>   </a>  {song.track.artist_name} <br/>
                    <Link to={`/${song.track.track_id}`}>
                        <strong> View Lyrics <i className="fas fa-play"></i> </strong>
                    </Link>
                    </li>
            </div>
           
        </div>
        </div>
    )
}

export default Track