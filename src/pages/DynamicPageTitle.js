import React from 'react';
import { useLocation } from 'react-router-dom';
import './DynamicPageTitle.css';

const DynamicPageTitle = () => {
    const location = useLocation();
    const pageTitle = location.pathname.split('/').filter(x => x).join(' ');

    return (
        <h1 className="dynamic-page-title">
            {pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1) || 'Home'}
        </h1>
    );
};

export default DynamicPageTitle;
