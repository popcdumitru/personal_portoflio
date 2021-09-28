import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Here you can follow my progress and use all the existing resources
      </SectionText>
      <Button onClick={() => window.location.href="#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;