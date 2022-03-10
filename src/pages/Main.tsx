import React, {useEffect, useState} from 'react';
import Wrapper from "./Wrapper";
import axios from "axios";
import {Product} from "../classes/product";

const Main = () => {

    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState('')


    useEffect(() => {
        (async () => {
            const response = await axios.get(`products?s=${searchText}`)
            setProducts(response.data.data)
        })
        ()
    }, [searchText])




    return (
        <Wrapper>
        <div>
            <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                    onKeyUp={e => setSearchText((e.target as HTMLInputElement).value)}
                />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                {products.map((product: Product) => {
                    return (
                        <div className="col" key={product.id}>
                            <div className="card shadow-sm">
                                <img src={product.image} height="200" />

                                <div className="card-body">
                                    <p className="card-text">{product.title}</p>
                                    <div className="d-flex justify-content-between align-items-center">

                                        <small className="text-muted">${product.price}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
        </Wrapper>
    );
};

export default Main;