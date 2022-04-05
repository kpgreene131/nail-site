import React, {useState, useEffect, useRef} from "react";
import {Link, useLinkClickHandler} from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png"

const MyNavBar = styled.div`
  height: 100px;
  margin-bottom: 0px;
  display: flex;
  background-color: white;

  & li {
    list-style-type: none;
  }

  @media (max-width: 400px) {
    height: 80px;
  }
`;

const NavName = styled.div`
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  margin: 0 auto;
`

const NavItems = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;

  & li {
    display: inline;
    flex-basis: calc(25% - 20px);
    margin: 0 auto;
    min-width: 126px;
    
    padding-top: 30px;
    
    font-size: 26px;
    
  }

  & li a {
    text-decoration: none;
    color: rgb(210, 0, 0);
  }

  @media (max-width: 1000px) {
    display: none
  }
`;

const NavButton = styled.button`
  display: none;

  margin-top: 25px;
  margin-left: 10px;
  min-width: 60px;
  height: 50px;
  border: 2px solid cornsilk;
  border-radius: 5px;
  background-color: rgb(190, 139, 139);

  z-index: 2;

  & span {
    
    width: 100%;
    height: 5px;
    border-radius: 5px;

    background-color: cornsilk;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media (max-width: 400px) {
    margin-top: 21px;
  }
`
const SideNav = styled.div`
  height: 100%;
  background-color: white;
  box-shadow: 2px 0px 1000px rgb(0,0,0,1);
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;

  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & ul {
    position: fixed;
  }

  & li a {
    display: block;
    padding: 16px;
    padding-top: 32px;
    text-decoration: none;
    font-size: 30px;
    color: rgb(210, 0, 0);
  }
`

function NavToggleButton(props) {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = event => {
    setIsOpen(!isOpen);
    ref.current.classList.toggle("show");
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if(isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
        ref.current.classList.toggle("show");
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen])



  return(
    <div>
      <NavButton onClick={handleClick}>
        <span />
        <span />
        <span />
      </NavButton>
      {isOpen &&
        <SideNav ref={ref} show={isOpen}>
          <li><Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link></li>
          <li><Link to="/Contact" onClick={() => setIsOpen(!isOpen)}>Contact Us</Link></li>
        </SideNav>
      }
    </div>
  )
}

function Navbar(props) {
  return (
    <div>
      <MyNavBar>
          <NavToggleButton />
          
          <NavItems>
            <li><Link to="/">Home</Link></li>
          </NavItems>
          <NavName />
          <NavItems>
            <li><Link to="/Contact">Contact Us</Link></li>
          </NavItems>
      </MyNavBar>
    </div>
  )
}
 
export default Navbar;