import { Card } from '../../components/Card/index';


export const ItemListContainer = () => {
    const product = [
        {id:1, name:'Zapatillas', price:14000},
        {id:2, name:'Remera', price:1000},
        {id:3, name:'Short', price:3000},
        {id:4, name:'Bicicleta', price:135000}
      ];
    return (
        <div className="App">
            <body>
                <Card productData={product[0]}/>
                <Card productData={product[1]}/>
                <Card productData={product[2]}/>
                <Card productData={product[3]}/>
            </body>
        </div>
    )
}

