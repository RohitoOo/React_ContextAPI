import React from 'react'
import {Consumer} from '../../../context'

const Tracks = () => {
        return(
            <Consumer>
                { value => {
                    console.log("Available In Tracks Component")

                    return <div>
                    <h1>Tracks</h1>

                    { value.posts.length !== 0  &&  
                        <ul className="list-group">

                        
                       {value.posts.map( (post,i) => {
                           return <li key={i} className="list-group-item">{post.id} -  {post.title} </li>
                       })}
                        </ul>
                    }
                    </div>
                }}
            </Consumer>
        )
}

export default Tracks;

// Search And Tracks Components