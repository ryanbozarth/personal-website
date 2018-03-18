import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.section`
  margin: 5% 10% 5% 10%;
  max-width: 745px;
`;

const FooterList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const FooterListItem = styled.li`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 4px 4px 4px 0;
  margin-right: 20px;
  text-decoration: none;
  border-bottom: 1px solid black;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #ffd659;
  }
`;

const Hyperlink = styled.a`
  text-decoration: none;
  color: white;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterList>
      <FooterListItem>
        <Hyperlink href="https://www.linkedin.com/in/ryanbozarth/">
          LinkedIn
        </Hyperlink>
      </FooterListItem>
      <FooterListItem>
        <Hyperlink href="https://github.com/ryanbozarth">Github</Hyperlink>
      </FooterListItem>
      <FooterListItem>
        <Hyperlink href="https://twitter.com/ryanbozarth_">Twitter</Hyperlink>
      </FooterListItem>
    </FooterList>
  </FooterWrapper>
);

export default Footer;
