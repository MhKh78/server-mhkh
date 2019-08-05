import React from 'react';

const NotFoundPage = ({ staticContext }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h1>Ooops, route not found.</h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};
