import styles from './styles.module.css';
import Layout from '@/components/Layout';
import React from 'react';
import Spacer from '@/components/@ui-elements/Spacer/Spacer';
import MovieCard from '@/components/@ui-elements/Card/Card';

import { useQuery } from '@apollo/client';
import client from '@/services/api/apollo-client';
import Carousel from '@/components/@ui-elements/Carousel/Carousel';

const StreamingCatalog = (props) => {
  const { catalogTitle, query, resource } = props || {};
  const [catalog, setCatalog] = React.useState(null);
  const { loading, error, data } = useQuery(query, {
    client: client,
  });

  React.useEffect(() => {
    if (!loading) {
      const {
        movies: { [resource]: { edges } = {} },
      } = data || {};
      setCatalog(edges);
    }
    return () => {};
  });

  if (loading) {
    return (
      <div style={{ fontSize: 34, color: 'white' }}>
        <MovieCard />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Layout column>
        <div className={styles.seeMoreTitle}>
          <h2>{catalogTitle}</h2>
          <p>Explore More</p>
        </div>
        <Spacer size='sm' />
        {/* TODO: add react carousel */}
        <Carousel>
          {catalog?.map(({ node }) => (
            <MovieCard
              poster={node.backdrop}
              genres={node.genres}
              // trailerUrl = {}
            />
          ))}
        </Carousel>
      </Layout>
    </div>
  );
};

export default StreamingCatalog;
