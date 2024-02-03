import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, Button   } from 'react-bootstrap'
import {useParams} from 'react-router-dom'

const ProductDetail = () => {

    let {id} = useParams()
    const [productDetail, setProductDetail] = useState(null)

    const getProductDetail = async () => {
        // let url = `http://localhost:5000/products/${id}`;
        let url = `https://my-json-server.typicode.com/jungwonjoo/webhnm//products/${id}`;        
        let res = await fetch(url);
        let data = await res.json();
        setProductDetail(data);
    }

    useEffect(()=>{
        getProductDetail()
    },[])
    return (
        <Container>
            <Row>
                <Col >
                    <img src={productDetail?.img}/>
                </Col>
                <Col>
                    <p>{productDetail?.title}</p>
                    <p>{productDetail?.price}</p>
                    <p>{productDetail?.choice === true ? "Conscious choice": ""}</p>                   
                    <Form.Select aria-label="Default select example">
                        {productDetail?.size.map((size, index)=>(
                            <option value={size} key={index}>{size}</option>
                        ))}
                    </Form.Select>
                    <Button variant="dark">추가</Button>
                </Col>
            </Row>            
        </Container>
    )
}

export default ProductDetail
