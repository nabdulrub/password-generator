import React, { useState } from "react";
import styled from "styled-components";
import { Slider } from "./ReusableTags";

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
          min="1"
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
