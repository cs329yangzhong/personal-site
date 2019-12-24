import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';

// const Cell = ({ data }) => (
//   <div className="cell-container">
//     <article className="mini-post">
//       <header>
//         <h3><a href={data.link}>{data.title}</a></h3>
//         <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
//       </header>
//       <a href={data.link} className="image">
//         <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
//       </a>
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>
//   </div>
// );

const Cell = ({data}) => (
  <div className="cell-container">
    {/* <article className="mini-post"> */}
      <header>
        <h3><a href={data.links}>{data.title}</a></h3>
      </header>
        {data.authors}
        <br></br>
        
        <i>{data.conferenceName}</i>
        <p><a href={data.links}>[pdf]</a>   <a href={data.code}>[code/data]</a></p>
        
          {/* <b>Yang Zhong</b>, Chao Jiang, Wei Xu, Junyi Jessy Li
          <br></br>
          <em>AAAI 2020</em> <b>(Oral Presentation)</b><br></br>
          [<a href="https://arxiv.org/abs/1911.10384">arXiv</a>]
       */}
        <br></br>
      
  </div>
);


Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    authors: PropTypes.any,
    conferenceName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    code:PropTypes.string.isRequired,
    // desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
