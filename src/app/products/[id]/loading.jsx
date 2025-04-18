"use client";
import React from "react";
import styled from "styled-components";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen" >
      <StyledWrapper>
        <div className="loader">
          <span className="loader-text">Loading...</span>
        </div>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    overflow: hidden;
    border-right: 3px solid;
    width: 0px;
    animation: typewriter 2s steps(10) infinite alternate,
      blink 0.5s steps(10) infinite;
  }

  .loader-text {
    font-size: 40px;
    font-weight: 700;
    background: linear-gradient(to right, #159957, #155799);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes typewriter {
    0% {
      width: 0px;
    }

    100% {
      width: 240px;
    }
  }

  @keyframes blink {
    0% {
      border-right-color: rgba(255, 255, 255, 0.75);
    }

    100% {
      border-right-color: transparent;
    }
  }
`;

export default loading;
