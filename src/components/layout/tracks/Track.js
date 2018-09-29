import React from 'react'
import {Link} from 'react-router-dom'


const Track = (props) => {
    const {song} = props
    console.log(song)
    return (
        <div className="col-md-12">
            <div className="card ">
                <li key={song.track.track_id}className="list-group-item"> 
                   <h3>{song.track.track_name}</h3>   {song.track.artist_name} 
                   <Link to={`/${song.track.track_id}`}>
                     <strong> <i className="fas fa-play"></i> </strong>
                </Link>
                </li>
            </div>
        </div>
    )
}

export default Track