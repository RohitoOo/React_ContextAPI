import React from 'react'
import {Consumer} from '../../../context'
import Spinner from '../Spinner'
const Tracks = () => {
        return(
            <Consumer>
       {value => {
         if(value.tracks.length == 0 || value.tracks == undefined ){
             console.log('here')
             return <Spinner/>
         } else {

            return (
              
   
             <ul className="list-group">
                 {value.tracks.map( song => {
                    return <li className="list-group-item">{song.track.artist_name} </li>
                 })}
             
                
            </ul>     
            )
               
         
         }
          
       }}
            </Consumer>
        )
}

export default Tracks;

// Search And Tracks Components