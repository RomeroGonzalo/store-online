import './styles.css';
import { Counter } from "../ItemCount/index";


export const Card = ({name,price,stock}) => {    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                        <div className="card">
                            <img src="../../images/beau-runsten-mR-N67XjTHg-unsplash.jpg" className="card-img-top" href="#" alt="imagenProducto"/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <strong>${price}</strong>  
                                <Counter stock={stock}/>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}


