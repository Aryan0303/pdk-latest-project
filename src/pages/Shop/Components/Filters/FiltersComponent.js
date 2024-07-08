import React from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FiltersComponent.css';

const FiltersComponent = () => {
  return (
    <div className="filter-container-custom">
      <Dropdown as={ButtonGroup} className='space-btw-dropdowns mr-4'>
        <Dropdown.Toggle variant="custom" id="dropdown-sorting" className="btn-custom">
          Sorting
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-custom">
          <Dropdown.Item href="#" className="dropdown-item-custom">Sorting</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Title</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Price</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Number Of Sales</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Rating</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Last Modified</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Unsorted</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Menu Order</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="custom" id="dropdown-ascending" className="btn-custom">
          Ascending
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-custom">
          <Dropdown.Item href="#" className="dropdown-item-custom">Default</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Ascending</Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-item-custom">Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FiltersComponent;
