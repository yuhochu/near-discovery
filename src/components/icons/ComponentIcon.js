import React from "react";
import styled from "styled-components";

const StyledComponentIcon = styled.div`
  display: flex;
  width: 20px;
  flex-direction: column;
  align-items: center;
`;

function Ellipsis() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="4" stroke="white" stroke-width="2" />
    </svg>
  );
}

function Rectangle() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="8" height="6" stroke="white" stroke-width="2" />
    </svg>
  );
}

function Polygon() {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3L8.4641 12H1.5359L5 3Z" stroke="white" stroke-width="2" />
    </svg>
  );
}

export function ComponentIcon() {
  return (
    <StyledComponentIcon>
      <Ellipsis />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Polygon />
        <Rectangle />
      </div>
    </StyledComponentIcon>
  );
}
