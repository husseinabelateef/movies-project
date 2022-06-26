import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useEffect,useState} from 'react';
import axiosInstance from '../axiosConfig/axiosOb'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Pagination from '../pagination/pagination'
const Movies = props => {
  const [products, setProducts] = useState([]);
const LoadState = useSelector((state)=>state.loader.isLoading);
const pageNumberLimit = 5;
const [currentPage, setCurrentPage] = useState(1);
const [maxPageLimit, setMaxPageLimit] = useState(5);
const [minPageLimit, setMinPageLimit] = useState(0);
const  totalPages = 34062;
    useEffect(() => {
        axiosInstance
          .get("movie/popular")
          .then((res) => {
            setProducts(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      useEffect(() => {
        axiosInstance
          .get(`movie/popular?page=${currentPage}`)
          .then((res) => {
            console.log(res.data);
            setProducts(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [currentPage]);
      const next = ()=>{
        if(currentPage < 34062)
        {
          setCurrentPage(currentPage + 1);

        }
      };

      const onPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber);
      }
      const onPrevClick = ()=>{
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(currentPage-1);
     }
     const onNextClick = ()=>{
      if(currentPage+1 > maxPageLimit){
          setMaxPageLimit(maxPageLimit + pageNumberLimit);
          setMinPageLimit(minPageLimit + pageNumberLimit);
      }
      setCurrentPage(currentPage+1);
   }

   const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    totalPages 
  };
    return (
      <>
     { LoadState && <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
     
        <Row xs={1} md={2} className="g-4">

      
      {products.map((product) => (
        <Col>
          <Card key = {product.id} style={{width:'400px'}}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{product.original_title}</Card.Title>
              <Card.Text>
            {
                product.overview
            }
              </Card.Text>
              <Link to={`/details/${product.id}`} > Details</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
       <div>
        
        {!LoadState ? <Pagination {...paginationAttributes} 
                          onPrevClick={onPrevClick} 
                          onNextClick={onNextClick}
                          onPageChange={onPageChange}/>
        : <div> Loading... </div>
        }
    </div>
    </Row>
    </>
    );
};


export default Movies;