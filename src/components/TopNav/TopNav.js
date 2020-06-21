import React, { useContext, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from '@reach/router'
import { menuConfig } from './topNavMenuConfig'
import ThemeContext from '../../context/ThemeContext'

const TopNav = props => {
  let [ display, setDisplay ] = useState({})
  let context = useContext(ThemeContext)

  const handleClick = event => {
    toggleDisplay(event, 'none')
  }

  const mouseOver = event => {
    toggleDisplay(event, 'block')
  }

  const mouseOut = event => {
    toggleDisplay(event, 'none')
  }

  const toggleDisplay = (event, displayType) => {
    const menuName = event.target.getAttribute('menu-name')
    let newDisplay = { ...display }
    newDisplay[menuName] = displayType
    setDisplay(newDisplay)
  }

  const renderMenu = (menuConfig, index) => {
    //   console.log({menuConfig})
    if (menuConfig.type === 'button') {
        // console.log(`rendering button for ${menuConfig.name}`)
      return renderButton(menuConfig, index)
    }
    if (menuConfig.type === 'dropdown') {
        // console.log(`rendering dropdown for ${menuConfig.name}`)
      return renderDropDownMenu(menuConfig, index)
    }
  }

  const renderButton = (menuConfig, index) => {
    let menuName = menuConfig.name
    return (
      <div key={index} css={context.dropdown}>
        <Link to={menuConfig.link.to}>
          <button
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
            menu-name={menuName}
            css={context.dropbtn}
          >
            {menuName}
          </button>
        </Link>
      </div>
    )
  }

  const renderDropDownMenu = (menuConfig, index) => {
    let menuName = menuConfig.name
    return (
      <div key={index} css={context.dropdown}>
        <button
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          menu-name={menuName}
          css={context.dropbtn}
        >
          {menuName}
          <i className='fa fa-caret-down' />
        </button>
        <div
          style={{ display: [menuName] }}
          menu-name={menuName}
          onClick={handleClick}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          css={context.dropdownContent}
        >
          {menuConfig.items.map((menuItem, index) => {
            return (
              <Link key={index} menu-name={menuName} to={menuItem.to}>
                {menuItem.text}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div css={context.navbar}>
        {menuConfig.map((menu, index) => {
          return renderMenu(menu, index)
        })}
      </div>
    </div>
  )
}

export default TopNav
