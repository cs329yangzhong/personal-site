import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Yang Zhong's website</Link></h2>
          {/* <p>A beautiful, responsive, react app written with modern Javascript.</p> */}
        </div>
      </header>
      <p>I am a first-year PhD student at <a href="https://cse.osu.edu/">Computer Science and Engineering</a> department of <a href="https://www.osu.edu/">The Ohio State University</a>. 
            I am fortunate to work with my advisor Professor <a href="https://cocoxu.github.io/">Wei Xu</a>. Before that, I obtained my B.S. degree in Mathematics from <a href="https://www.utexas.edu/">University of Texas at Austin</a> and worked closely with Professor <a href="https://jjessyli.github.io/"> Jessy Li</a>.
      </p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">publication</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
