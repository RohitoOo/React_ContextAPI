import React from 'react'
import {Consumer} from '../../../context'
import Spinner from '../Spinner'
import Track from './Track'
const Tracks = () => {
        return(
            <Consumer>
       {value => {
           console.log("CHaNGE!!" , value)
         if(value.tracks.length === 0 || value.tracks === undefined ){
            
             return <Spinner/>
         } else {
            console.log('hereee', value)
            return ( 
            <div>
                <h2 className="text-center">{value.heading}</h2>
           
            <div className= "row">
            
             {value.tracks.map( (song , i) => {
            return (<div className="col-md-6">
             <ul className="list-group">
            <Track key={i} song={song}/>                 
            </ul>
            </div>   )
            })}
            </div>  
            </div>
            )
               
         
         }
          
       }}
            </Consumer>
        )
}

export default Tracks;

// Search And Tracks Components