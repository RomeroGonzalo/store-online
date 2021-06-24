import React, { useState } from 'react'
import { NavBar } from '../NavBar'
import './style.css';

export const Counter = ({ stock }) => {
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const manualChange = (e) => {
        let value = e.target.value
        if (value > stock) {
            setCounter(stock)
        } else {
            setCounter(value)
        }
    }
    const onAdd = () => {
        console.log(`Compraste ${counter} de este artículo`)
    }
    return (

        <div>
            <NavBar counter={counter} />
            {stock > 0 ?
                <>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><button onClick={restar}>-</button></span>
                        <input type="text" className="form-control counter" value={counter} onChange={manualChange} aria-label="Username" aria-describedby="basic-addon1" />
                        <span className="input-group-text" id="basic-addon1"><button onClick={sumar}>+</button></span>
                    </div>
                    <p className="text-muted">Stock Disponible: {stock}</p>
                    <button onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
                </>
                :
                <p>Sin Stock</p>
            }

        </div>
    )
}
