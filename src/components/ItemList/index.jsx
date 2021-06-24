import './styles.css';
import React from 'react';
import { useEffect, useState } from "react";
import { getData } from '../../utils/const';
import { Card } from '../Card/index';


export function ItemList() {
    let [productos, setProductos] = useState([]);
    useEffect(() => {
        const WaitForData = async() => {
            let data = await getData ('zapatillas');
            let aux = data.map(element => {
                return{
                    title:element.title,
                    img: element.thumbnail,
                    price: element.price,
                }
            })
            setProductos(aux);
        }

        WaitForData();
    },[])

    if (productos.lenght > 0) {
        console.log(productos);
    }

        return(      
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                                {productos.lenght === 0 ? 'si cargo' : 'no cargo' }
                                {productos.map((element,index) =>{
                                    return (
                                        <span key={index}>
                                            <Card title={element.title} img={element.img} price={element.price}/>
                                        </span>
                                    )
                                })}
                        </div>
                    </div>    
                </div>
        );
}


export default ItemList