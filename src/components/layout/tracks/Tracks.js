import React from 'react'
import {Consumer} from '../../../context'

const Tracks = () => {
        return(
            <Consumer>
                {value => {
                    console.log("Available In Tracks Component",value)

                    return <h1>Tracks</h1>
                }}
            </Consumer>
        )
}

export default Tracks;

// Search And Tracks Components