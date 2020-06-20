import React from 'react'
import ThemeContext from './ThemeContext'
import { themes } from '../styles/main-styles'

class ThemeProvider extends React.Component {
    state = {
        activeTheme: themes.siberianWinter
    }
    

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.activeTheme,
                changeTheme: async themeName => {
                    console.log(`provider changing theme to ${themeName}`)
                    console.log(`new theme will be: ${JSON.stringify(themes[themeName])}`)
                    await this.setState({ activeTheme: themes[themeName] })
                },
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }

}

export default ThemeProvider