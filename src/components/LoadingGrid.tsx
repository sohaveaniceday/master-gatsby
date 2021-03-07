import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export const LoadingGrid = ({ count }) => (
  <ItemsGrid>
    {Array.from({ length: count }, (_, i) => (
      <ItemStyles key={i}>
        <p className="mark">
          <span className="mark">...Loading</span>
        </p>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAYAAABGM/VAAAAAE0lEQVR42mP8z/CfiQENMFImCACVJQgF4YIqkwAAAABJRU5ErkJggg=="
          className="loading"
          alt="Loading"
          width="500"
          height="400"
        />
      </ItemStyles>
    ))}
  </ItemsGrid>
);
