import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yang Zhong</h2>
        <h2>钟阳</h2>
        <p><a href="mailto:yangzhong0110@gmail.com">yangzhong0110@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yang. 
            I am a first-year PhD student at <a href="https://cse.osu.edu/">Computer Science and Engineering</a> department of <a href="https://www.osu.edu/">The Ohio State University</a>. 
            I am fortunate to work with my advisor Professor <a href="https://cocoxu.github.io/">Wei Xu</a>. Before that, I obtained my B.S. degree in Mathematics from <a href="https://www.utexas.edu/">University of Texas at Austin</a> and worked closely with Professor <a href="https://jjessyli.github.io/"> Jessy Li</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Yang Zhong<Link to="/">cs329yangzhong.github.io</Link>.</p>
    </section>
  </section>
);

export default Nav;
