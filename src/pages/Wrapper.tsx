import React, {PropsWithChildren, useEffect} from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import axios from "axios";
import {User} from "../classes/user";
import {connect} from "react-redux";
import setUser from "../redux/actions/setUserAction";



const Wrapper = (props: PropsWithChildren<any>) => {
    useEffect( () => {
        (async () => {
            try {
                const response = await axios.get('user')

                const user:User = response.data.data

                props.setUser(new User(
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.email,
                    user.revenue
                ));
            }catch (e){
                props.setUser(null);
            }
        }) ();

    }, []);

    return (
        <>
            <Nav />


            <main>

                <Header />

                <div className="album py-5 bg-light">
                    <div className="container">
                        {props.children}
                    </div>
                </div>

            </main>
        </>
    );
};

// @ts-ignore
export default connect(state => ({user:state.user}), dispatch => ({setUser: user => dispatch(setUser(user))})) (Wrapper);