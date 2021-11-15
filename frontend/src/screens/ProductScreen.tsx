import React from 'react'
import { Link, useParams, useNavigate} from "react-router-dom"
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  const { id } = useParams(); //useParams to catch the id of each product
  const product = products.find(p => p._id === id)
  console.log(product)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row></Row>
    </>
  )
}

export default ProductScreen
