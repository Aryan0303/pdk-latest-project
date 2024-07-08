import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').filter(x => x);

    return (
        <Breadcrumb className="breadcrumb-custom mt-2">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }} className="first-item">Home</Breadcrumb.Item>
            {pathname.map((value, index) => {
                const to = `/${pathname.slice(0, index + 1).join('/')}`;

                return index === pathname.length - 1 ? (
                    <Breadcrumb.Item active key={to}>{value}</Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={to}>
                        {value}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
