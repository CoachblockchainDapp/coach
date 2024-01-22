import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'


export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, pageCls }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)



    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
        // document.querySelector("body").classList.add("body")
    }, [])
    return (
        <>

            <div id="wrapper">
                <div id="page" className={`pt-40 ${pageCls ? pageCls : ""}`}>
                   
                    

                    {/* <MobileMenu /> */}

                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}

             
                  

                </div>
            </div>
            <BackToTop />

        </>
    )
}
