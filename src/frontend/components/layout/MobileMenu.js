import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <nav id="mobile-main-nav" className="mobile-main-nav">
                <ul id="menu-mobile-menu" className="menu">
                    <li className="menu-item menu-item-has-children-mobile current-menu-item" onClick={() => handleToggle(1)}>
                        <a className="item-menu-mobile">Home</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li className="menu-item current-item"><Link to="/">Home 1</Link></li>
                            <li className="menu-item"><Link to="/home-2">Home 2</Link></li>
                            <li className="menu-item"><Link to="/home-3">Home 3</Link></li>
                            <li className="menu-item"><Link to="/home-4">Home 4</Link></li>
                            <li className="menu-item"><Link to="/home-5">Home 5</Link></li>
                            <li className="menu-item"><Link to="/home-6">Home 6</Link></li>
                            <li className="menu-item"><Link to="/home-7">Home 7</Link></li>
                            <li className="menu-item"><Link to="/slider-3d">Slider 3d</Link></li>
                            <li className="menu-item"><Link to="/slider-scroll">Slider Scroll</Link></li>
                            <li className="menu-item"><Link to="/slider-animation">Slider Animation</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" to="/about-us">About us</Link>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(2)}>
                        <a className="item-menu-mobile">Explore</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link to="/explore-1">Explore Style 1</Link></li>
                            <li className="menu-item"><Link to="/explore-2">Explore Style 2</Link></li>
                            <li className="menu-item"><Link to="/explore-3">Explore Style 3</Link></li>
                            <li className="menu-item"><Link to="/explore-4">Explore Style 4</Link></li>
                            <li className="menu-item"><Link to="/product-detail-1">Product Detail 1</Link></li>
                            <li className="menu-item"><Link to="/product-detail-2">Product Detail 2</Link></li>
                            <li className="menu-item"><Link to="/product-detail-3">Product Detail 3</Link></li>
                            <li className="menu-item"><Link to="/ranking">Ranking</Link></li>
                            <li className="menu-item"><Link to="/upcoming">Upcoming Projects</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(3)}>
                        <a className="item-menu-mobile">Pages</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link to="/market">Market</Link></li>
                            <li className="menu-item"><Link to="/market-create">Create</Link></li>
                            <li className="menu-item"><Link to="/market-active-bid">Active Bid</Link></li>
                            <li className="menu-item"><Link to="/market-explore">Explore</Link></li>
                            <li className="menu-item"><Link to="/market-collection">My collection</Link></li>
                            <li className="menu-item"><Link to="/market-favorite">My favorite</Link></li>
                            <li className="menu-item"><Link to="/market-wallet">Wallet</Link></li>
                            <li className="menu-item"><Link to="/market-history">History</Link></li>
                            <li className="menu-item"><Link to="/market">Settings</Link></li>
                            <li className="menu-item"><Link to="/author-1">Authors Style 1</Link></li>
                            <li className="menu-item"><Link to="/author-2">Authors Style 2</Link></li>
                            <li className="menu-item"><Link to="/terms-condition">Terms &amp; Condition</Link></li>
                            <li className="menu-item"><Link to="/no-result">No Result</Link></li>
                            <li className="menu-item"><Link to="/faq">FAQs</Link></li>
                            <li className="menu-item"><Link to="/coming-soon">Coming Soon</Link></li>
                            <li className="menu-item"><Link to="/maintenance">Maintenance</Link></li>
                            <li className="menu-item"><Link to="/404">404</Link></li>
                            <li className="menu-item"><Link to="/login">Login</Link></li>
                            <li className="menu-item"><Link to="/sign-up">Sign up</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(4)}>
                        <a className="item-menu-mobile">Blog</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link to="/blog-grid">Blog Grid</Link></li>
                            <li className="menu-item"><Link to="/blog-grid-1">Blog Grid 1</Link></li>
                            <li className="menu-item"><Link to="/blog-list">Blog List</Link></li>
                            <li className="menu-item"><Link to="/blog-list-1">Blog List 1</Link></li>
                            <li className="menu-item"><Link to="/blog-detail">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" to="/contact-us">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
