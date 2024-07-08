import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ProductCard from './ShopProductCard';
import './ShopProductCard.css';
import './Pagination.css';

const ShopProducts = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/shop');
        const productDetails = await Promise.all(
          response.data.map(async (product) => {
            const detailsResponse = await axios.get(`http://localhost:5001/api/shop/${product.id}/details`);
            return { ...product, ...detailsResponse.data };
          })
        );
        setProducts(productDetails);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    if (totalPages <= 1) return items;

    items.push(
      <Pagination.Item key={1} active={1 === currentPage} onClick={() => paginate(1)}>
        1
      </Pagination.Item>
    );

    if (currentPage > 3) {
      items.push(<Pagination.Ellipsis key="start-ellipsis" />);
    }

    if (currentPage > 2) {
      items.push(
        <Pagination.Item key={currentPage - 1} onClick={() => paginate(currentPage - 1)}>
          {currentPage - 1}
        </Pagination.Item>
      );
    }

    if (currentPage > 1 && currentPage < totalPages) {
      items.push(
        <Pagination.Item key={currentPage} active onClick={() => paginate(currentPage)}>
          {currentPage}
        </Pagination.Item>
      );
    }

    if (currentPage < totalPages - 1) {
      items.push(
        <Pagination.Item key={currentPage + 1} onClick={() => paginate(currentPage + 1)}>
          {currentPage + 1}
        </Pagination.Item>
      );
    }

    if (currentPage < totalPages - 2) {
      items.push(<Pagination.Ellipsis key="end-ellipsis" />);
    }

    items.push(
      <Pagination.Item key={totalPages} active={totalPages === currentPage} onClick={() => paginate(totalPages)}>
        {totalPages}
      </Pagination.Item>
    );

    return items;
  };

  return (
    <Container className="shop-products">
      <Row>
        {currentItems.map(product => (
          <Col key={product.id} xs={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Pagination className="custom-pagination">
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
        {renderPaginationItems()}
        <Pagination.Next onClick={() => paginate(currentPage + 1)} />
        <Pagination.Last onClick={() => paginate(totalPages)} />
      </Pagination>
    </Container>
  );
};

export default ShopProducts;
