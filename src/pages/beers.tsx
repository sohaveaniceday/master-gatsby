import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 10px;
    color: black;
  }
`;

const BeersPage = ({ data }) => {
  const beers = data.beers.nodes;

  return (
    <>
      <SEO title={`Beers! We have ${beers.length} Beers in stock`} />
      <h2 className="center">{`We have ${beers.length} Beers available`}</h2>
      <BeerGridStyles>
        {beers.map((beer) => {
          const rating = Math.round(beer.rating?.average);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {`⭐️`.repeat(rating)}
                <span style={{ filter: 'grayscale(100%)' }}>
                  {`⭐️`.repeat(5 - rating)}
                </span>
                <span>({beer.rating?.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
};

export default BeersPage;

export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        id
        price
        name
        rating {
          average
          reviews
        }
        image
      }
    }
  }
`;
