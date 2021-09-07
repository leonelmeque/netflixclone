import React from 'react';
import { CircleButton } from '../Button/Button';
import Spacer from '../Spacer/Spacer';
import VideoJs from '../VideoJs';
import styles from './styles.module.css';

const MovieCard = (props) => {
  const { isMovieInList, hasLike, hasDeslike, poster } = props;
  const videoPlayerRef = React.useRef(null);
  const [options, setOptions] = React.useState({
    autoplay: false,
    responsive: true,
    fluid: true,
    poster: poster,
    sources: [
      {
        src: '/video/stranger.mp4',
        type: 'video/mp4',
      },
    ],
  });
  return (
    <div className={styles.container}>
      <div className={styles.movieCard}>
        <VideoJs ref={videoPlayerRef} options={options} />
        <div className={styles.movieCardContent}>
          <div className={styles.controls}>
            <CircleButton
            onClick={(e)=>{}} size={16} icon='Play' />
            <CircleButton
            onClick={(e)=>{}}
              size={16}
              icon={isMovieInList ? 'Check' : 'Plus'}
            />
            <CircleButton
            onClick={(e)=>{}} size={16} icon='ThumbsUp' />
            <CircleButton
            onClick={(e)=>{}} size={16} icon='ThumbsDown' />
            <CircleButton
            onClick={(e)=>{}}
              style={{ marginLeft: 'auto' }}
              size={16}
              icon='ChevronDown'
            />
          </div>
          <Spacer size='sm' />
          <div className={styles.movieInfo}>
            <span style={{ color: '#04cc04' }}>New</span>
            <span>13+</span>
            <span>1h 18m</span> <span>HD</span>
          </div>
          {/* <Spacer size='sm' /> */}
          <ul className={styles.movieTags}>
            <li>Adventure</li>
            <li>Exciting</li>
            <li>Action</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
