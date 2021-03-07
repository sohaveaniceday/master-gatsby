import { useState, useEffect } from 'react';
import gql from './gql';

const useLatestData = () => {
  const [hotSlices, setHotSlices] = useState();
  const [slicemasters, setSlicemasters] = useState();
  const deets = `
      name
      _id
      image {
        asset {
          url
          metadata {
            lqip
          }
        }
      }`;
  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemasters {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    }).then((res) =>
      res.json().then((jsonRes) => {
        setSlicemasters(jsonRes.data.StoreSettings.slicemasters);
        setHotSlices(jsonRes.data.StoreSettings.hotSlices);
      })
    );
  }, []);

  return { hotSlices, slicemasters };
};

export default useLatestData;
