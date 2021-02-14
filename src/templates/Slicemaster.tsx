import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

export const SingleSlicemasterPage = ({ data: { slicemaster } }) => {
  const SlicemasterGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  `;
  return (
    <>
      <SEO title={slicemaster.name} image={slicemaster.image.asset.src} />
      <SlicemasterGrid>
        <Img fluid={slicemaster.image.asset.fluid} />
        <div>
          <h2 className="mark">{slicemaster.name}</h2>
          <p>{slicemaster.description}</p>
        </div>
      </SlicemasterGrid>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
    }
  }
`;

export default SingleSlicemasterPage;
