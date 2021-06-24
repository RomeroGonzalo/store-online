import './styles.css';
import { Counter } from "../ItemCount/index";


export const Card = ({ title, price, stock, img }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={img} className="card-img-top" href="#" alt="imagenProducto" />
                        <div className="card-body cardBody">
                            <h5 className="card-title">{title}</h5>
                            <strong>${price}</strong>
                            <Counter stock={stock} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


