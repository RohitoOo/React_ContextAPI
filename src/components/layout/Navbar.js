import React  from 'react'
import {Consumer} from '../../context'

const Navbar = () => {
        return(
            <Consumer>
                {value => {
                    console.log("Available In Navbar Component",value)
                    return (
                    <nav className="navbar navbar-dark bg-dark mb-5">
                        <span className="navbar-brand mb-0 h1 mx-auto">Lyrics Finder</span>
                    </nav>)
                }}
            </Consumer>
            
        )
}

export default Navbar;