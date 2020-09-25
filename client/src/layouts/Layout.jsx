import React from 'react'

import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'rbx'

const Header = styled.nav`
  display: flex;
  background-color: black;
  height: 5.5rem;
  color: #f9c767;
  justify-content: space-between;

  div.right-group {
    flex: 0 0 45%;
    display: flex;
    justify-content: flex-end;
    div.nav-links {
      display: flex;
      justify-content: space-around;
      align-self: center;
      button {
        margin: 0 2rem; 
      }
      @media screen and (max-width : 750px) {
        display: none;
      }
    }
  }
  img {
    width: 4.75rem;
    margin: 0.8rem;
  }
  div.burger-menu {
    margin: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    @media screen and (min-width: 750px) {
      display: none;
    }
  }
  span {
    width: 60px;
    height: 4px;
    background-color: #f9c767;
    display: inline-block;
  }
`

const CurtainMenu = styled.div`
  height: ${(props) => (props.showCurtainMenu ? '100%' : '0%')};
  transition: 0.2s;
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
    display: ${(props) => (props.currentUser ? '' : 'none')};
  }
  * {
    display: ${(props) => (props.showCurtainMenu ? 'block' : 'none')};
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }
`

export default function Layout(props) {
  const {
    currentUser,
    showCurtainMenu,
    setShowCurtainMenu,
    handleLogout,
  } = props
  const { pathname } = useLocation()

  return (
    <>
      <CurtainMenu
        id='curtain-menu'
        onClick={() => setShowCurtainMenu((prevState) => !prevState)}
        showCurtainMenu={showCurtainMenu}
        currentUser={currentUser}
      >
        <div className='content-wrapper'>
          <Link to='/login'>
            {currentUser ? '' : 'Login/Register'}
          </Link>
          {pathname === '/green-room' ? (
            <Link to='/'>Home & Scheduling</Link>
          ) : (
            <Link to='/green-room'>Green Room</Link>
          )}

          <Link id='logoff' onClick={handleLogout}>
            Log Off
          </Link>
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

        <div className='right-group'>
          <div className='nav-links'>
            {pathname !== '/' ? (
              <Button className='nav-link' color='warning'>
                <Link to='/'>Home & Scheduling</Link>
              </Button>
            ) : (
              <Button className='nav-link' color='warning'>
                <Link to='/green-room'>Green Room</Link>
              </Button>
            )}

            {currentUser ? (
              <Button className='nav-link' color='warning'>
                <Link onClick={handleLogout}>Log Off</Link>
              </Button>
            ) : (
              <Button className='nav-link' color='warning'>
                <Link to='/login'>Login</Link>
              </Button>
            )}
          </div>

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
        </div>
      </Header>

      <main>{props.children}</main>
    </>
  )
}
