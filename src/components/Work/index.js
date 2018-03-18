import React from "react";
import styled from "styled-components";

const WorkWrapper = styled.section`
  margin: 5% 10% 5% 10%;
  max-width: 530px;
`;

const WorkItem = styled.div`
  margin-bottom: 12.5%;
  ${"" /* border: red solid 1px; */};
`;

const WorkTitle = styled.h4`
  font-size: 2.14em;
  margin-bottom: 0.6em;
  font-weight: bold;
  color: white;
`;

const WorkBody = styled.p`
  font-size: 1.18em;
  color: white;
`;

const Link = styled.a`
  font-size: 1.18em;
  color: white;
  padding: 4px 4px 4px 0;
  border-bottom: 1px solid #ffd659;
  text-decoration: none;
`;

const Work = () => (
  <WorkWrapper>
    <WorkItem>
      <WorkTitle>Avenue</WorkTitle>
      <WorkBody>
        Product consultancy that helps companies scale. Coaching and business
        guides to start, organize, and grow your business.
      </WorkBody>
      <Link href="https://www.theavenue.io">theavenue.io</Link>
    </WorkItem>
    <WorkItem>
      <WorkTitle>Open Source Code</WorkTitle>
      <WorkBody>
        Personal GitHub repositories with a focus on full-stack javascript,
        react, and solidity.
      </WorkBody>
      <Link href="https://github.com/ryanbozarth">github.com/ryanbozarth</Link>
    </WorkItem>
    <WorkItem>
      <WorkTitle>Blockchain Investor</WorkTitle>
      <WorkBody>
        Focused on supporting tokens that create the infrascture of a
        decentralized internet.
      </WorkBody>
      <Link href="#">Fund Coming Soon</Link>
    </WorkItem>
  </WorkWrapper>
);

export default Work;
