
import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useState } from "react"
const currentTime = new Date()
import FeaturedCardSlider from '../reusable/FeaturedCardSlider'
import DropdownComponent from '../reusable/DropdownComponent'

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
        imageSrc: '/assets/images/box-item/card-item-29.jpg',
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


export default function DiscoverItem1() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    return (
        <>
            <div className="tf-section-3 discover-item ">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-30">
                                <h2 className="tf-title">COLECCIÓN TERRA NFT</h2>
                                <Link href="/explore-1" className="white-link">Descubre más <i className="icon-arrow-right2" /></Link>
                            </div>

                        </div>

                        <DropdownComponent></DropdownComponent>

                        <FeaturedCardSlider productData={productData}></FeaturedCardSlider>

                    </div>
                </div>
            </div>
            {/* <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} /> */}
        </>
    )
}
