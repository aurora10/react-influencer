import React, {PropsWithRef} from 'react';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

const Nav = (props: PropsWithRef<any>) => {

    let menu;

    if (props.user) {
        menu = (
            <>
                <nav className= "my-2 my-md-0 mr-md-3 ">
                    <Link to={'/login'} onClick = {() => localStorage.clear()} className="p-2 text-dark">Logout</Link>

                </nav>


                <Link to={'/profile'} className="btn btn-outline-primary">{props.user.first_name}</Link>
            </>
        )

    }else{
        menu = (
            <Link to={'/login' } className="btn btn-outline-primary text-right ">Login</Link>
        )
    }
    return (

        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
            <Link to={'/' } className="navbar-brand my-0 mr-md-auto font-weight-normal ">Influencer</Link>

            {menu}

        </div>
    );
};

// @ts-ignore
export default connect(state => ({user:state.user})) (Nav);