
import Layout from "../components/layout/Layout"
import { useState } from "react"
import FeaturedCardSlider from '../components/reusable/FeaturedCardSlider'
import DropdownComponent from '../components/reusable/DropdownComponent'

const delay = '0s'
const name = 'Coach Blockchains'
const itemName = 'COLECCIÓN TERRA NFT'
const prirce = '0.17'
const avatar = '/assets/images/avatar/TERRA.png'
const productData = [
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '../public/assets/images/box-item/card-item-29.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-30.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-09.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-56.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-58.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-24.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-50.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },
    {
        delay: delay,
        author: { name: name, avatar: avatar },
        authorLink: '/author-2',
        imageSrc: '/assets/images/box-item/card-item-10.jpg',
        itemName: itemName,
        itemLink: '/item-link-1',
        currentBid: prirce,
        handleBidModal: () => {
            // Lógica para manejar el modal de ofertas
        },
    },


];

export default function Home() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center"><span style={{ color: 'black' }}>Explora los NFTs</span></h1>
                                
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="tf-section-2 discover-item loadmore-12-item">
                        <div className="themesflat-container">
                            <DropdownComponent></DropdownComponent>
                            <FeaturedCardSlider productData={productData}></FeaturedCardSlider>
                            

                        </div>
                    </div>
                </div>

               
            </Layout>
        </>
    )
}