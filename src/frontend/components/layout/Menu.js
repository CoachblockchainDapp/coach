import React from "react";
import { Link } from "react-router-dom";
//import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()
  // Simulación de la ruta actual
  const currentPath = window.location.pathname;
    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/home" ? "menu-item current-item" : "menu-item"}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul id="menu-primary-menu" className="menu">
                <li className="menu-item menu-item-has-children">
                    <a>Home</a>
                    <ul className="sub-menu">
                        <li className={currentPath  == "/" ? "menu-item current-item" : "menu-item"}><Link to="/">Home 1</Link></li>
                        <li className={currentPath  == "/home-2" ? "menu-item current-item" : "menu-item"}><Link to="/home-2">Home 2</Link></li>
                        <li className={currentPath  == "/home-3" ? "menu-item current-item" : "menu-item"}><Link to="/home-3">Home 3</Link></li>
                        <li className={currentPath  == "/home-4" ? "menu-item current-item" : "menu-item"}><Link to="/home-4">Home 4</Link></li>
                        <li className={currentPath  == "/home-5" ? "menu-item current-item" : "menu-item"}><Link to="/home-5">Home 5</Link></li>
                        <li className={currentPath  == "/home-6" ? "menu-item current-item" : "menu-item"}><Link to="/home-6">Home 6</Link></li>
                        <li className={currentPath  == "/home-7" ? "menu-item current-item" : "menu-item"}><Link to="/home-7">Home 7</Link></li>
                        <li className="menu-item has-item">
                            <Link to="#">Home Slider Style</Link>
                            <ul className="nav-sub-menu">
                                <li className="nav-menu-item"><Link to="/slider-3d">Slider 3d</Link></li>
                                <li className="nav-menu-item"><Link to="/slider-scroll">Slider Scroll</Link></li>
                                <li className="nav-menu-item"><Link to="/slider-animation">Slider Animation</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={currentPath  == "/home" ? "menu-item current-item" : "menu-item"}>
                    <Link to="/#">About us</Link>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a>Explore</a>
                    <ul className="sub-menu">
                        <li className={currentPath  == "/explore-1" ? "menu-item current-item" : "menu-item"}><Link to="/explore-1">Explore Style 1</Link></li>
                        <li className={currentPath  == "/explore-2" ? "menu-item current-item" : "menu-item"}><Link to="/explore-2">Explore Style 2</Link></li>
                        <li className={currentPath  == "/explore-3" ? "menu-item current-item" : "menu-item"}><Link to="/explore-3">Explore Style 3</Link></li>
                        <li className={currentPath  == "/explore-4" ? "menu-item current-item" : "menu-item"}><Link to="/explore-4">Explore Style 4</Link></li>
                        <li className={currentPath  == "/product-detail-1" ? "menu-item current-item" : "menu-item"}><Link to="/product-detail-1">Product Detail 1</Link></li>
                        <li className={currentPath  == "/product-detail-2" ? "menu-item current-item" : "menu-item"}><Link to="/product-detail-2">Product Detail 2</Link></li>
                        <li className={currentPath  == "/product-detail-3" ? "menu-item current-item" : "menu-item"}><Link to="/product-detail-3">Product Detail 3</Link></li>
                        <li className={currentPath  == "/ranking" ? "menu-item current-item" : "menu-item"}><Link to="/ranking">Ranking</Link></li>
                        <li className={currentPath  == "/upcoming" ? "menu-item current-item" : "menu-item"}><Link to="/upcoming">Upcoming Projects</Link></li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a>Pages</a>
                    <ul className="sub-menu">
                        <li className="menu-item has-item">
                            <Link to="/#">Market</Link>
                            <ul className="nav-sub-menu">
                                <li className="nav-menu-item"><Link to="/market-create">Create</Link></li>
                                <li className="nav-menu-item"><Link to="/market">Market</Link></li>
                                <li className="nav-menu-item"><Link to="/market-active-bid">Active Bid</Link></li>
                                <li className="nav-menu-item"><Link to="/market-explore">Explore</Link></li>
                                <li className="nav-menu-item"><Link to="/market-collection">My collection</Link></li>
                                <li className="nav-menu-item"><Link to="/market-favorite">My favorite</Link></li>
                                <li className="nav-menu-item"><Link to="/market-wallet">Wallet</Link></li>
                                <li className="nav-menu-item"><Link to="/market-history">History</Link></li>
                                <li className="nav-menu-item"><Link to="/market">Settings</Link></li>
                            </ul>
                        </li>
                        <li className={currentPath  == "/author-1" ? "menu-item current-item" : "menu-item"}><Link to="/author-1">Authors Style 1</Link></li>
                        <li className={currentPath  == "/author-2" ? "menu-item current-item" : "menu-item"}><Link to="/author-2">Authors Style 2</Link></li>
                        <li className={currentPath  == "/terms-condition" ? "menu-item current-item" : "menu-item"}><Link to="/terms-condition">Terms &amp; Condition</Link></li>
                        <li className={currentPath  == "/no-result" ? "menu-item current-item" : "menu-item"}><Link to="/no-result">No Result</Link></li>
                        <li className={currentPath  == "/faq" ? "menu-item current-item" : "menu-item"}><Link to="/faq">FAQs</Link></li>
                        <li className={currentPath  == "/coming-soon" ? "menu-item current-item" : "menu-item"}><Link to="/coming-soon">Coming Soon</Link></li>
                        <li className={currentPath  == "/maintenance" ? "menu-item current-item" : "menu-item"}><Link to="/maintenance">Maintenance</Link></li>
                        <li className={currentPath  == "/404" ? "menu-item current-item" : "menu-item"}><Link to="/404">404</Link></li>
                        <li className={currentPath == "/login" ? "menu-item current-item" : "menu-item"}><Link to="/login">Login</Link></li>
                        <li className={currentPath  == "/sign-up" ? "menu-item current-item" : "menu-item"}><Link to="/sign-up">Sign up</Link></li>
                    </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                    <a>Blog</a>
                    <ul className="sub-menu">
                        <li className={currentPath  == "/blog-grid" ? "menu-item current-item" : "menu-item"}><Link to="/blog-grid">Blog Grid</Link></li>
                        <li className={currentPath  == "/blog-grid-1" ? "menu-item current-item" : "menu-item"}><Link to="/blog-grid-1">Blog Grid 1</Link></li>
                        <li className={currentPath  == "/blog-list" ? "menu-item current-item" : "menu-item"}><Link to="/blog-list">Blog List</Link></li>
                        <li className={currentPath  == "/blog-list-1" ? "menu-item current-item" : "menu-item"}><Link to="/blog-list-1">Blog List 1</Link></li>
                        <li className={currentPath  == "/blog-detail" ? "menu-item current-item" : "menu-item"}><Link to="/blog-detail">Blog Details</Link></li>
                    </ul>
                </li>
                <li className={currentPath  == "/contact-us" ? "menu-item current-item" : "menu-item"}>
                    <Link to="/#">Contact</Link>
                </li>
            </ul>
        </>
    )
}
