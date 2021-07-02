import React from 'react';
import ContentLoader from 'react-content-loader';

const PreLoaderPizza = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="6" y="287" rx="0" ry="0" width="267" height="77" />
    <rect x="4" y="377" rx="0" ry="0" width="268" height="71" />
    <circle cx="138" cy="134" r="130" />
  </ContentLoader>
);

export default PreLoaderPizza;
