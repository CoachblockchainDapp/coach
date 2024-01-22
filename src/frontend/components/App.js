import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {
  Navigation,
  NavigationLogin,
  TopNav,
  Home,
  About,
  Course,
  Create,
  Dashboard,
  MyListedItems,
  MyPurchases,
  PricingBoxes,
  NFTDetails,
  BLUE,
  YELLOW
} from '../components';

import Footer from './layout/footer/Footer1'
import Footer2 from './layout/footer/Footer2'
import HomeAbout from '../screens/about/about-us'
import Explora from '../pages/explore-1'
import Detalles from '../pages/product-detail-1'
import Contact from '../pages/contact-us'

import MarketplaceAbi from '../contractsData/Marketplace.json';
import MarketplaceAddress from '../contractsData/Marketplace-address.json';
import NFTAbi from '../contractsData/NFT.json';
import NFTAddress from '../contractsData/NFT-address.json';
import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';



function App() {

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts)
    setAccount(accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    })

    loadContracts(signer);
  }

  const loadContracts = async (signer) => {
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  }

  return (
    <BrowserRouter>
      <div className='App'>

        {loading ? (<>
          <Navigation web3Handler={web3Handler} account={account} />
          <TopNav backgroundColor={BLUE} textColor="white" height="15px" top={55} />
          <TopNav backgroundColor={YELLOW} textColor="white" height="5px" top={70} />
        </>) : (<>
          <NavigationLogin web3Handler={web3Handler} account={account} />
          <TopNav backgroundColor={BLUE} textColor="white" height="15px" top={55} />
          <TopNav backgroundColor={YELLOW} textColor="white" height="5px" top={70} /> </>)}

        <div>
          {loading ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80vh',
              background: "white",
            }}>
              <Routes>
                <Route path="/" element={
                  <Home marketplace={marketplace} nft={nft} />
                } />

                <Route path="/about" element={
                  <About marketplace={marketplace} nft={nft} />
                } />

                <Route path="/community" element={
                  <>
                    <HomeAbout /></>
                } />

                <Route path="/explore" element={
                  <Explora />
                } />

                <Route path="/contact-us" element={
                  <Contact />
                } />

                <Route path="/detalles" element={
                  <Detalles />

                } />

                <Route path="/packages" element={
                  <PricingBoxes marketplace={marketplace} nft={nft} />
                } />

                <Route path="/formacion" element={
                 <Course marketplace={marketplace} nft={nft} />
                } />


              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <Dashboard marketplace={marketplace} nft={nft} />
              } />

              <Route path="/create" element={
                <Create marketplace={marketplace} nft={nft} />
              } />

              <Route path="/my-listed-items" element={
                <MyListedItems marketplace={marketplace} nft={nft} account={account} />
              } />

              <Route path="/my-purchases" element={
                <MyPurchases marketplace={marketplace} nft={nft} account={account} />
              } />

              <Route path="/packages" element={
                <PricingBoxes marketplace={marketplace} nft={nft} />
              } />

              <Route path="/Basic-Course" element={
                <Course marketplace={marketplace} nft={nft} />
              } />
              <Route path="/nft-details" element={
                <NFTDetails marketplace={marketplace} nft={nft} />
              } />


            </Routes>
          )}
        </div>


        {loading ? (<>
          <Footer />
        </>) : (<>
          <Footer2 /></>)}

      </div>
    </BrowserRouter>
  );
}

export default App;