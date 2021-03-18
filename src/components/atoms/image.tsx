import React from 'react';
import LazyLoad from 'react-lazyload';

interface ImageProps {
  src: string;
  alt: string;
  height: number;
}

const Image = (props: ImageProps) => {
  const {src, alt, height} = props;
  return (
    <LazyLoad height={height}>
      <img src={src} alt={alt} />
    </LazyLoad>
  );
}

export default Image;
