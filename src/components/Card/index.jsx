import './styles.css';

export const Card = ({productData}) => {
    
    return (
        <div className="card">
            <img src="../images/beau-runsten-mR-N67XjTHg-unsplash.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{productData.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <strong>{productData.price}</strong>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

