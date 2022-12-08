import React from "react";
import styled from "styled-components";
const YoutubeVideo = () => {
  return (
    <YoutubeWrapper>
      <div className="embeded-video">
        <iframe
          src="https://www.youtube.com/embed/ylVJ4mP6sTc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </YoutubeWrapper>
  );
};

export default YoutubeVideo;

const YoutubeWrapper = styled.div`
background-color: #0d253a;  
.embeded-video {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  
  }
  .embeded-video iframe {
    width: 70%;
    height: 30rem;
}
  @media screen and (max-width: 600px) {
    .embeded-video iframe {
    width: 70%;
    height: 10rem;
}
  }
  @media screen and (min-device-width: 380px) and (max-device-width: 900px) {
    @media screen and (max-width: 600px) {
    .embeded-video iframe {
    width: 70%;
    height: 10rem;
}
  }
`;
