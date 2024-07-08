// src/pages/Shop/SHOP.js
import React from 'react';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import Sidebar from '../Shop/Components/SideBar/SideBar';
import DynamicPageTitle from '../../pages/DynamicPageTitle';
import FiltersComponent from '../Shop/Components/Filters/FiltersComponent';
import ShopProducts from '../Shop/Components/ShopProductsDisplay/ShopProductsdisplay';

const Shoppage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="container mt-3">
        <div className="row">
          <div className="col-12 col-md-4 d-none d-sm-block d-md-block sidebarside">
            <Sidebar />
          </div>
          <div className="col-12 col-md-8">
            <DynamicPageTitle />
            <FiltersComponent /> 
            <ShopProducts /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoppage;
