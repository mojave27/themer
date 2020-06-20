// import React, { useContext } from 'react'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Router } from '@reach/router'
import TopNav from './TopNav/TopNav'
import Home from './Home'
import Test from './Test'
import Themer from './Themer'

const ThemedContent = () => {

  return (
    <React.Fragment>
            <TopNav />
            //   <CssBaseline />
              <div
                // style={{
                //   backgroundColor: `${context.theme.color5.hex}`,
                //   height: '300vh',
                //   maxWidth: '80%',
                //   margin: '20px auto'
                // }}
              >
                  <Router>
                    <Home path='/' /> 
                    <Test path='/test' /> */}
                    <Themer path='/themer' />
                 </Router>
            </div>
    </React.Fragment>
    )
}

export default ThemedContent
