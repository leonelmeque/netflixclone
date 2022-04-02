import React from 'react';
import  CircleButton  from '-components/common/CircleButton';
import Spacer from '../Spacer/Spacer';
import VideoJs from '../../VideoJs';
import styles from './styles.module.css';
import YouTube from 'react-youtube'
import { WEB_API } from '-utilities/constants/constants';
import { Box } from '@chakra-ui/react';

type MovieCard = {
  isMovieInList: boolean;
  hasLike: boolean;
  hasDeslike: boolean;
  poster: string;
  genres: string[];
  isSkeleton?: boolean;
  trailerUrl?:string | string []
}
const MovieCard = (props) => {
  const {
    isMovieInList,
    hasLike,
    hasDeslike,
    poster,
    genres,
    isSkeleton,
    trailerUrl
  } = props;
  const _genres = genres?.slice(0, 3);
  const videoPlayerRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false) 
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

  const playTrailer = ()=>{
    new Promise((resolve, reject)=>{
      resolve(setTimeout(()=>{console.log('Playing video')}, 2000))
    })
  }

  const stopTrailer = () => {
    console.log('Stopping video')
  }
  return (
			<Box
				className={styles.container}
				onMouseEnter={playTrailer}
				onMouseLeave={stopTrailer}
				cursor='pointer'
				width='100%'
				paddingX={"4px"}
			>
				<Box width='100%' className={styles.movieCard}>
					{/* <VideoJs ref={videoPlayerRef} options={options} /> */}
					{isHovered ? (
						<Box zIndex='10'>
							<YouTube videoId={null} />
						</Box>
					) : (
						<img
							style={{ width: "100%", maxWidth:'300px' }}
							src={`https://image.tmdb.org/t/p/w500${poster}`}
						/>
					)}
					<div className={styles.movieCardContent}>
						<div className={styles.controls}>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName='Play'
							/>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName={isMovieInList ? "Check" : "Plus"}
							/>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName='ThumbsUp'
							/>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName='ThumbsDown'
							/>
							<CircleButton
								onClick={(e) => {}}
								style={{ marginLeft: "auto" }}
								size={16}
								iconName='ChevronDown'
							/>
						</div>
						<Spacer size='sm' />
						<div className={styles.movieInfo}>
							<span style={{ color: "#04cc04" }}>New</span>
							<span>13+</span>
							<span>1h 18m</span> <span>HD</span>
						</div>

						<ul className={styles.movieTags}>
							{_genres?.map((genre) => (
								<li>{genre.name}</li>
							))}
						</ul>
					</div>
				</Box>
			</Box>
		)
};

export default MovieCard;
