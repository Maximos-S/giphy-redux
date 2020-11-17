import React from 'react';

// TODO: Take in an destructure the `urls` prop

const GifsList = ({gifUrls}) => (
  <div>
    {/* {console.log(gifUrls)} */}
    {gifUrls.map(gifUrl => {return <img key={gifUrl} src={gifUrl} alt='gif'/>})}
  </div>
  // TODO: Render a `<div>` as the parent element of your `GifsList` component.
  // TODO: Map over your `urls` array to render an `<img>` for each `url`.
);

export default GifsList;
