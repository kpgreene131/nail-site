import React from "react";
import styled from "styled-components";
import MapContainer from "./MapContainer.js";

const MyContactPage = styled.div`
  width: 80%;
  margin: auto;

  font-size: 18px;
`;

const MyContact = styled.div`
  width: 30%;
  float: left;

  text-align: center;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 100%;
    float: none;
    margin: auto;
  }
`;

const MyHours = styled.div`
  width: 20%;
  float: left;

  text-align: center;

  @media (max-width: 1200px) {
    float: right;
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 100%;
    float: none;
  }
`;

const MyDirections = styled.div`
  width: 50%;
  float: right;
  flex-direction: column;

  text-align: center;

  @media (max-width: 1200px) {
    width: 100%;
    float: clear;
  }
`;
 
function Contact(props) {
  return (
    <div className="pageContent">
      <MyContactPage>
        <MyContact>
          <h1> Contact </h1>
          <p> Phone: 781-862-2897 </p>
          <p> Email: bostonnailslexington@gmail.com </p> 
        </MyContact>
        <MyHours>
          <h1> Hours </h1>
          <p> Mon: CLOSED </p>
          <p> T-F: 9:30am - 7pm </p>
          <p> Sat: 9:30am-6pm </p>
          <p> Sun: 10:00am - 4pm </p>
        </MyHours>
        <MyDirections>
          <h1> Directions </h1>
          <p> 313 Marrett Rd. </p>
          <p> Lexington, MA 02421 </p>
          <a href="https://goo.gl/maps/A7ko2hMKzQbSv9vZ9">Get Directions</a>
          <MapContainer />
        </MyDirections>
      </MyContactPage>
    </div>
  )
}
 
export default Contact;

