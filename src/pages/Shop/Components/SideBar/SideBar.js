import React, { useState } from 'react';
import './SideBar.css';
import Slider from 'react-slider';

const Sidebar = () => {
    const [priceRange, setPriceRange] = useState([0, 290]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSliderChange = (values) => {
        setPriceRange(values);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Search query:', searchQuery);
    };

    return (
        <div className="sidebar ml-5">
         <h2 className="search-title mb-3 ml-1">Search</h2>
            <div className="search-bar">
                
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search product"
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">SEARCH</button>
            </div>
            <div className="price-filter">
                <h3 className="mb-5">Filter by price</h3>
                <Slider
                    className="slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    defaultValue={[0, 290]}
                    min={0}
                    max={290}
                    value={priceRange}
                    onChange={handleSliderChange}
                    renderTrack={(props, state) => {
                        const { index } = state;
                        if (index === 0) {
                            return <div {...props} className="track track-left" />;
                        } else if (index === 1) {
                            return <div {...props} className="track track-right" />;
                        }
                    }}
                />
                <button className="filter-button">FILTER</button>
                <p>Price: ${priceRange[0]} — ${priceRange[1]}</p>
            </div>
            <div className="product-categories">
                <h3>Product categories</h3>
                <ul>
                    <li>Birds Supplies <span>(8)</span></li>
                    <li>Cat Supplies <span>(139)</span></li>
                    <li>Dog Supplies <span>(161)</span></li>
                    <li>Fish Supplies <span>(1)</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
