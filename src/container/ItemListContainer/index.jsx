import { Card } from '../../components/Card';


export const ItemListContainer = () => {
    const product = {
        name: "Zapatillas",
        price: 14000,
        stock: 7,
    }
    const product2 = {
        name: "Short",
        price: 6000,
        stock: 0,
    }
    const product3 = {
        name: "Remera",
        price: 4500,
        stock: 3,
    }
    return (
        <div className="App">    
                <Card name={product.name} price={product.price} stock={product.stock}/>
                <Card name={product2.name} price={product2.price} stock={product2.stock}/>
                <Card name={product3.name} price={product3.price} stock={product3.stock}/> 
        </div>
    )   
}

