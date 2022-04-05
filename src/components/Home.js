import React from "react";
import styled from "styled-components";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/Home.css";
import Contact from './Contact';
import Nails1 from "../assets/nails1.JPEG";
import Nails2 from "../assets/nails2.JPEG";
import Nails3 from "../assets/nails3.JPEG";
import Nails4 from "../assets/nails4.JPEG";
import Nails5 from "../assets/nails5.JPEG";
import Nails6 from "../assets/nails6.JPEG";

const images = [
  {
    original: Nails1
  },
  {
    original: Nails2
  },
  {
    original: Nails3
  },
  {
    original: Nails4
  },
  {
    original: Nails5
  },
  {
    original: Nails6
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery 
            items={images} 
            thumbnailHeight={'500px'}
          />;
  }
}

const GalleryDiv = styled.div`
  margin: auto;
  width: 50%;
  z-index: -2;

  & div {
    z-index: -2;
  }

  & button {
    z-index: 0;
  }

  @media (max-width: 1000px) {
    width: 80%;
`;
 
function Home(props) {
  return (
    <div className="pageContent">
      <GalleryDiv>
        <MyGallery />
      </GalleryDiv>
      <Contact />
    </div>
  )
}
 
export default Home;