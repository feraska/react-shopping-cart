import React from "react"
import "./Filter.scss"
const Filter=(props)=>{
    const{handleFilterBySize,size}=props;
    const{handleFilterByOrder,sort}=props;
    const{productsNumber}=props;
    return(
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of Products: {productsNumber}</div>
            <div className="filter-by-size">
            <span>Filter</span>
            <select className="filter-select" value={size} onChange={handleFilterBySize}>
                <option value="ALL">ALL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
            </div>

            <div className="filter-by-order">
            <span>Order</span>
            <select className="filter-select" onChange={handleFilterByOrder} value={sort}>
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="hightest">Hightest</option>
            </select>
            </div>

        </div>
    )
}
export default Filter