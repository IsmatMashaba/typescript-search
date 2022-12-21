import React, {useEffect, useState} from 'react';
import './App.css';

import ProductItem from "./component/ProductItem";
import SearchForm from "./component/SearchForm";

const url= 'https://fakestoreapi.com/products'

export type Product = {
    id:number;
    title:string
    description: string;
    category: string;
    price:number;
    image:string;
rating:{
    rate:number;
    count:number
};

}

function App() {
    /*get data*/
    const [products,setProducts]= useState<Product[]>([]);
    /*get user input*/
    const [userInput,setUserInput] = useState('');
    /*get filtered products*/
   /* const [filteredProduct,setFilteredProducts]=useState<Product[]>([])
      let result;
*/
    /*either way the search function is not working*/
useEffect(()=>{
    fetch(url)
        .then((res)=>res.json())
        .then((data)=>setProducts(data))
},[])

    /*search logic*/
    /*if(!userInput){
        result=products;
    } else {
        result=filteredProduct; /!*Q: why filteredProduct not filteredProducts*!/
    }*/
    /*we used useEffect here as the error showed too many re rendering, to avoid repeatation we use useEffect */
    useEffect(()=>{
        const filteredProducts= products.filter((product)=>{
            return   product.title.toLowerCase().includes(userInput.toLowerCase())
        })
        setProducts(filteredProducts)
       /* setFilteredProducts(filteredProducts)*/
    },[userInput])



    return (
    <div className="App">
        <SearchForm userInput={userInput} setUserInput={setUserInput}/>
        {/*result.map*/}{/*for the first way*/}
        {products.map((item)=>{
          return  <ProductItem key={item.id} product={item}/>
        })}
    </div>
  );
}


export default App;
