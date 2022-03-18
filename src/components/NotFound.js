import styled from "styled-components";

import React from "react";

const NotFound = () => {
  return <Container>Don't Enter Random URLs Bro...</Container>;
};

const Container = styled.div`
  font-size: 50px;
  color: white;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NotFound;
