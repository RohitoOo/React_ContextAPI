import React from 'react'
import {Consumer} from '../../../context'



const Lyrics = (props) => {

    props.location.pathname = parseInt(props.location.pathname.replace('/', ""))
    return (
        <Consumer>
            
        {value => {
            
            const result = value.tracks.filter( song => {
                
             console.log(song.track.track_id ,  props.location.pathname)  

             return song.track.track_id == props.location.pathname
            

            })
           
            {if(result.length != 0 ) {
                return  <div className="col-md-12">
                <div className="card ">
                    <li key={result[0].track.track_id}className="list-group-item"> 
                       <h3>{result[0].track.track_name}</h3>   {result[0].track.artist_name} 
                    </li>
                </div>
            </div>
            } else {
                console.log("do nothing")
            }
        }
           

      

            // console.log("Inside Lyrics Component" , value.track_id, props.location.pathname)
        }}
        </Consumer>
    )
}

export default Lyrics
