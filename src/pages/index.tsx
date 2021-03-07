import React from 'react';
import { LoadingGrid } from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

const CurrentlySlicing = ({ slicemasters }) => (
  <div>
    <h2 className="center">
      <span className="mark tilt"> Slicemasters on</span>
    </h2>
    <p>Standing by - ready to slice you up</p>
    {!slicemasters && <LoadingGrid count={4} />}
    {slicemasters && slicemasters?.length < 1 && (
      <p>No one is working right now</p>
    )}
    {slicemasters?.length && <ItemGrid items={slicemasters} />}
  </div>
);
const HotSlices = ({ hotSlices }) => (
  <div>
    <h2 className="center">
      <span className="mark tilt"> Hot slices on</span>
    </h2>
    <p>Pizzas by the slice</p>
    {!hotSlices && <LoadingGrid count={4} />}
    {hotSlices && hotSlices?.length < 1 && <p>No one is working right now</p>}
    {hotSlices?.length && <ItemGrid items={hotSlices} />}
  </div>
);
const Homepage = () => {
  const { slicemasters, hotSlices } = useLatestData();
  return (
    <div className="center">
      <h1>Best Pizza Downtown</h1>
      <p>Open 11am to 11pm Every day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={slicemasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
};

export default Homepage;
