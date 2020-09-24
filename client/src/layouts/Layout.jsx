import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.nav`
display: flex;
background-color: black;
height: 5rem;
color: #f9c767;
justify-content: space-between;

img {
  width: 4.75rem;
  margin: 0.8rem;
}
div.burger-menu {
  margin: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
}
span {
  width: 60px;
  height: 4px;
  background-color: #f9c767;
  display: inline-block;
}
`

const CurtainMenu = styled.div`
height: ${props => props.showCurtainMenu ? '100%' : '0%'};
transition: 0.5s;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(225, 225, 225, 0.9);
z-index: 101;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.content-wrapper {
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 102;
}
a#logoff {
  display: ${props => props.currentUser ? '' : 'none'};
}
* {
  display: ${props => props.showCurtainMenu ? 'block' : 'none'};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}
`

export default function Layout(props) {
  const { currentUser, showCurtainMenu, setShowCurtainMenu, handleLogout } = props

  return (
    <>
      <CurtainMenu
        id='curtain-menu'
        onClick={() => setShowCurtainMenu((prevState) => !prevState)}
        props={props}
      >
        <div className='content-wrapper'>
          <Link to='/login'>
            {currentUser ? '' : 'Login/Register'}
          </Link>
          <Link to='/green-room'>Green Room</Link>
          <Link id='logoff' onClick={handleLogout}>Log Off</Link>
        </div>
      </CurtainMenu>
      <Header>
        <Link to='/'>
          <div className='img-wrapper'>
            <img
              src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.andrewmale.net%2Fwp-content%2Fuploads%2F2014%2F05%2FBeehiveLogoIcon.png&f=1&nofb=1'
              alt='bee-hive logo'
            />
          </div>
        </Link>

        <div
          className='burger-menu'
          onClick={() =>
            setShowCurtainMenu((prevState) => !prevState)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Header>

      <main>{props.children}</main>
    </>
  )
}
