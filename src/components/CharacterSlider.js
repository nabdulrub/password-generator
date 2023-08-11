import React, { useState } from "react";
import styled from "styled-components";

const Slider = styled.input`
  width: 100%;
  font-weight: 900;
  -webkit-appearance: none;
  height: 0.5rem;
  background-color: var(--background-clr);
  opacity: 0.7;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background: var(--background-clr);
    border-radius: 50%;
    outline: 2px solid var(--accent-clr);
    cursor: pointer;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background: red;
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    box-shadow:
      1px 1px 1px #000000,
      0px 0px 1px #0d0d0d;
    background: var(--accent-clr);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-ms-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
`;

const CharacterSlider = ({ setLength, length }) => {

  return (
    <>
      <div className=" flex flex-col gap-6 w-full">
        <div className="flex items-end justify-between">
          <h2 className="text-text-clr font-semibold">Character Length</h2>
          <h2 className="text-accent-clr text-2xl">{length}</h2>
        </div>
        <Slider
          type="range"
          min="0"
          max="20"
          defaultValuevalue={length}
          className="w-full font-extrabold"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
    </>
  );
};

export default CharacterSlider;
