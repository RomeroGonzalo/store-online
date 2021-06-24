import { Card } from '../../components/Card';


export const ItemListContainer = () => {
    const product = {
        title: "Zapatillas",
        price: 14000,
        stock: 7,
        img: '/images/zapas1.jpg'
    }
    const product2 = {
        title: "Casco",
        price: 6000,
        stock: 0,
        img: '/images/helmet1.jpg'
    }
    const product3 = {
        title: "Remera",
        price: 4500,
        stock: 3,
        img: '/images/remera1.jpg'
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">

                    <Card title={product.title} price={product.price} stock={product.stock} img={product.img} />
                </div>
                <div className="col">
                    <Card title={product2.title} price={product2.price} stock={product2.stock} img={product2.img} />
                </div>
                <div className="col">
                    <Card title={product3.title} price={product3.price} stock={product3.stock} img={product3.img} />
                </div>
            </div>
        </div>
    )
}

