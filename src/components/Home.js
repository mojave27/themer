import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Home = props => {
    let context = useContext(ThemeContext)
    return(<div style={{}}>Home</div>)
}

export default Home;