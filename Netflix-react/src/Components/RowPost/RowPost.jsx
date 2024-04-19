/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { imageUrl, API_KEY } from '../../constants/constants';
import Youtube from 'react-youtube';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch(() => {
        alert('Network error');
      });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          alert('No trailer available');
        }
      });
  };

  const CloseClick = () => {
    setUrlId('');
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => {
              handleClick(obj.id);
            }}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            key={obj.id}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      
      {urlId && (
        <button className='close' onClick={CloseClick}> <AiOutlineCloseCircle /></button>
      )}
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
