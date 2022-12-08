import React from "react";
import styled from "styled-components";
const YoutubeVideo = () => {
  return (
    <YoutubeWrapper>
      <div className="embeded-video">
        <iframe
          src="https://www.youtube.com/embed/ylVJ4mP6sTc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </YoutubeWrapper>
  );
};

export default YoutubeVideo;

const YoutubeWrapper = styled.div`
background-color: #0b1b2a;  
padding: 2rem;
.embeded-video {
    display: flex;
    align-items: center;
    justify-content: center;
   
  
  }
  .embeded-video iframe {
    width: 70%;
    height: 30rem;
}
  @media screen and (max-width: 600px) {
    .embeded-video iframe {
    width: 100%;
    height: 10rem;
}
  }
  /* @media screen and (min-device-width: 380px) and (max-device-width: 900px) {
    @media screen and (max-width: 600px) {
    .embeded-video iframe {
    width: 90%;
    height: 10rem;
} */
  
`;
