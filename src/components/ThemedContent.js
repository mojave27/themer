// import React, { useContext } from 'react'
import React, { useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Router } from '@reach/router'
import TopNav from './TopNav/TopNav'
import Home from './Home'
import Test from './Test'
import Themer from './Themer'
import ThemeContext from '../context/ThemeContext'

const ThemedContent = () => {

  let context = useContext(ThemeContext)

  let styles = {
    minHeight: '100vh', 
    backgroundColor: context.theme.color5.hex,
    color: context.theme.color5_text.hex,
    padding: '10px'
  }

  return (
    <React.Fragment>
            <TopNav />
              <CssBaseline />
              <div style={{ ...styles }}>
                  <Router>
                    <Home path='/' /> 
                    <Test path='/test' /> 
                    <Themer path='/themer' />
                 </Router> 
            </div>
    </React.Fragment>
    )
}

export default ThemedContent
