import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Gallery = ({ currentCategory }) => {
  const { name, description } = currentCategory;

  return (
    // React.createElement('tag',{},[
    // React.createElement('tag',{}, 'text of tag'),
    // React.createElement('tag',{}, 'text of tag')
    // ])
    <section className="my-5">
      <h1 data-testid='h1tag'>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>

  );
}

export default Gallery;
