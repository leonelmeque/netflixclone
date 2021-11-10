import React from 'react';
import styles from './index.module.css';
import Button from '@/components/@ui-elements/Button/Button';
import VideoJs from '@/components/VideoJs';
import Layout from '@/components/Layout';
import Spacer from '../@ui-elements/Spacer/Spacer';
import { FETCH_MOVIES } from '@/services/api/imdbApi';
import { useQuery } from '@apollo/client';
import client from '@/services/api/apollo-client';
/**
 * Tasks
 * Static big image
 * Video plays after a few seconds
 * When user is watching another trailer video pauses
 * When user scroll down until a certain height video pauses
 * Movie Title
 * Movie description
 * Add a play button
 * add a more info button
 * add PG
 *
 */
const AppHeroHeader = () => {
  const random = Math.random() * 10;
  const [catalog, setCatalog] = React.useState(null);
  const { loading, error, data } = useQuery(
    FETCH_MOVIES('popular', '1280'),
    {
      client: client,
    }
  );
  const videoPlayerRef = React.useRef(null);
  const [options, setOptions] = React.useState({
    autoplay: false,
    responsive: true,
    fluid: true,
    poster: '/images/stranger.jpeg',
    sources: [
      {
        src: '/video/stranger.mp4',
        type: 'video/mp4',
      },
    ],
  });

  const playTrailer = () => {
    videoPlayerRef.current.play();
  };

  const stopTrailer = () => {
    setOptions({ ...options, autoplay: false });
  };

  React.useEffect(() => {
    if (!loading) {
      const {
        movies: { ['popular']: { edges } = {} },
      } = data || {};
      setCatalog(edges);
    }
    return () => {
  
    };
  });
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <Layout column>
          <div className={styles.heroMovieTitle}>
            {catalog && (
              <h1>
                {catalog[random.toFixed(0)].node.title}
              </h1>
            )}
            <p className={styles.description}>
              
            </p>
          </div>
          <Spacer size='md' />
          <div className={styles.ctaButtons}>
            <Button
              label='Play'
              variant='secondary'
              icon='Play'
              size='lg'
              onClick={() => {
                playTrailer();
              }}
            />
            <Button
              label='More Info'
              variant='tertiary'
              icon='Plus'
              size='lg'
              onClick={() => {
                stopTrailer();
              }}
            />
          </div>
        </Layout>
      </div>
      <div className={styles.trailer}>
        {catalog && (
          <img
            style={{ width: '100%' }}
            src={catalog[random.toFixed(0)].node.backdrop}
          />
        )}
        {/* <VideoJs ref={videoPlayerRef} options={options} /> */}
      </div>
    </header>
  );
};

export default AppHeroHeader;
