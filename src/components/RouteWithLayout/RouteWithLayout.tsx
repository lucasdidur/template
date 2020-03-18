import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from "../../Auth";
import {User} from 'firebase/app';


const RouteWithLayout = (props: RouteWithLayoutPropTypes) => {
    const {layout: Layout, component: Component, ...rest} = props;

    const currentUser = useContext<User | null>(AuthContext);

    return (
        <Route
            {...rest}
            render={matchProps =>
                (currentUser && !props.public) || props.public ? (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                ) : (
                    <Redirect to={"/sign-in"}/>
                )
            }
        />
    );
};

type RouteWithLayoutPropTypes = {
    component: any,
    layout: any,
    path?: string,
    public?: boolean;
};

export default RouteWithLayout;
