import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  margin: 10% 10% 5% 10%;
  max-width: 745px;
`;

const Title = styled.h1`
  font-weight: bold;
  color: white;
`;

const Tagline = styled.h3`
  font-weight: 400;
  color: white;
`;

const Underline = styled.span`
  border-bottom: 1px solid #ffd659;
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  color: #000;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 1.18em;
  font-weight: 600;
  margin-top: 1.45rem;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Ryan Bozarth</Title>
    <Tagline>
      Product lead and developer with a focus on how new{" "}
      <Underline>technology can create economic empowerment.</Underline>
    </Tagline>
    <form action="mailto:ryan.bozarth@gmail.co">
      <Button type="submit">Contact</Button>
    </form>
  </HeaderWrapper>
);

export default Header;
