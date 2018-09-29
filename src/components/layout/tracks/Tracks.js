import React from 'react'
import {Consumer} from '../../../context'
import Spinner from '../Spinner'
import Track from './Track'
const Tracks = () => {
        return(
            <Consumer>
       {value => {
         if(value.tracks.length === 0 || value.tracks === undefined ){
             console.log('here')
             return <Spinner/>
         } else {

            return (<div>
                <h2 className="text-center">{value.heading}</h2>
             <ul className="list-group">
                 {value.tracks.map( (song , i) => {
                    return (
                        <Track key={i} song={song}/>
                    // <li key={song.track.track_id}className="list-group-item"> 
                    // {song.track.track_name} - {song.track.artist_name} 
                    // </li>
                    )
                 })}
            </ul>
            </div>     
            )
               
         
         }
          
       }}
            </Consumer>
        )
}

export default Tracks;

// Search And Tracks Components