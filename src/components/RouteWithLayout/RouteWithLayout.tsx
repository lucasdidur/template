import React from 'react';
import { Route } from 'react-router-dom';


const RouteWithLayout = (props: RouteWithLayoutPropTypes) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

type RouteWithLayoutPropTypes = {
  component: any,
  layout: any,
  path?: string
};

export default RouteWithLayout;
