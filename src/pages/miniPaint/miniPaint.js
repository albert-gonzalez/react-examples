import React from 'react';
import Hero from '../../components/hero/hero';
import Section from '../../components/section/section';
import MiniPaintContainer from '../../containers/miniPaint/miniPaint';

const MiniPaintPage = () => {
  return (
    <div>
      <Hero>
        Mini Paint example
        <span className="emoji" role="img" aria-label="brush">
          🖌️
        </span>
      </Hero>
      <Section>
        <MiniPaintContainer instance="miniPaint" />
        <hr />
      </Section>
    </div>
  );
};
export default MiniPaintPage;
