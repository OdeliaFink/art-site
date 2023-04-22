import React from 'react';
import styled from 'styled-components';
import ArtCard from '../components/ArtCard';

const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
`;

const HeroContent = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 24px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const HomePage = () => {
  return (
    <HeroSectionWrapper>
      <HeroContent>
        <Heading>Chicago Art Institute Wiki</Heading>
        <Description>
          Here's a brief description of what you can find on my website.
        </Description>
      </HeroContent>
      <ArtCard />
    </HeroSectionWrapper>
  );
};

export default HomePage;
