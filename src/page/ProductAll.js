import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import {Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {

    const [product, setProduct] = useState([]);
    const [query, setQuery] = useSearchParams();
    
    const getProducts = async() => {

        let searchQuery = query.get('q') || '';

        // let url = `http://localhost:5000/products?q=${searchQuery}`;
        let url = `https://my-json-server.typicode.com/jungwonjoo/webhnm/products?q=${searchQuery}`;
         
        let res = await fetch(url)
        let data = await res.json();
        setProduct(data);
        console.log(data);
    }

    useEffect(()=>{
        getProducts()
    },[query])

  return (
    <div>
        <Container> 
            <Row>
                {product.map((item, index)=>(                    
                    <Col lg={3} key={index}>
                        <ProductCard item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll
