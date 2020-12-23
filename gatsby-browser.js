import React from 'react';
/* eslint-disable import/no-unresolved */
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <Layout {...props}>{element}</Layout>
);
