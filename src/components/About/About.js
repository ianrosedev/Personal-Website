import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import ImageMedium from '../ImageMedium/ImageMedium';

const About = () => (
  <div className='about'>
    <ContentCentered>
      <h1>A bit about me.</h1>
      <ImageMedium
        image={require('../../media/images/ian-with-bricks.jpg')}
        alt='Ian headshot'
        float='left'
      />
      <p>
        Hi! My name is Ian and I live in Durham, North Carolina with my
        awesome wife and mischievous dog. When I’m not coding or hanging
        out with the family, you can find me cooking and fixing up retro
        Japanese game systems.
      </p>
      <p>
        I previously worked at a startup in San Francisco creating their
        website and have also taken on other small development projects. After
        first learning and using HTML and CSS for work, I became really
        interested in JavaScript and have since focused on learning as much as
        I can about it. I have put a lot of work and long hours into advancing
        my skillset and taking it to the next level. When I was looking at
        frameworks, I gravitated toward React so that I could really further
        my JavaScript skills. I love it and am excited about all the new things
        happening in the React and JavaScript world.
      </p>
      <p>
        Before that, I have had a few jobs that I think will be valuable now as
        a developer. I was a bicycle courier for many years and worked my way up
        from beginner, to being a law specialist, to being a dispatcher and
        manager for legal couriers. Teamwork, detail and time sensitivity were
        all top priorities in that field and I can see how that will now help
        on a development team. After the courier industry, I worked in
        fulfillment shipping products for smaller businesses. I interacted
        daily with clients and their customers, and ensured that the products
        consistently got out on time through the tangle of the post office.
        Both industries have in common customer service as a top priority.
      </p>
      <p>
        I have had an interest with programming ever since I was a child and
        used Basic, and with the support of my family, I have taken time off of
        working to learn as much as possible. I’m confident that I can make a
        great asset to your team and company!
      </p>
    </ContentCentered>
  </div>
);

export default About;
