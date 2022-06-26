import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import {useEffect,useState} from 'react';
import{ useParams } from 'react-router-dom'
import axiosInstance from '../axiosConfig/axiosOb'
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
const MovieDetail = props => {
   const params = useParams();
   const [product, setProduct] = useState({});
   const LoadState = useSelector((state)=>state.loader.isLoading);
   useEffect(() => {
     axiosInstance
       .get(`movie/${params.id}`)
       .then((res) => {
         console.log(res.data);
         setProduct(res.data);
       })
       .catch((err) => console.log(err));
   }, []);
    return (
      <>
       { LoadState && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
      
        <Card style={{width:'400px'}}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`} />
        <Card.Body>
          <Card.Title>{product.original_title}</Card.Title>
          <Card.Text>
          {
                product.overview
            }
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    );
};


export default MovieDetail;