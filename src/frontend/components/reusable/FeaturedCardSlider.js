// ProductCard.js
import { Link } from "react-router-dom";
import styles from './ProductCard.module.css';

const ProductCard = ({ delay, author, authorLink, imageSrc, itemName, itemLink, currentBid, handleBidModal }) => {
  return (
    <div data-wow-delay={delay} className={`wow fadeInUp ${styles.productCard}`}>
      <div className="tf-card-box style-4">
        <div className="author flex items-center">
          <div className="avatar">
            <img src={author.avatar} alt="Author Avatar" />
          </div>
          <div className="info">
            <span>Creado Por:</span>
            <h6><Link to={authorLink}>{author.name}</Link> </h6>
          </div>
        </div>
        <div className={`card-media ${styles.cardMedia}`}>
          <Link to={itemLink}>
            <img src={imageSrc} alt="" />
          </Link>
          <span className="wishlist-button icon-heart" />
        </div>
        <h5 className="name"><Link to={itemLink}>{itemName}</Link></h5>
        <div className="meta-info flex items-center justify-between">
          
          <div className="button-place-bid">
            <a onClick={handleBidModal} to="#" className="tf-button"><span>Únete</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedCardSlider = ({ productData }) => {
    const chunkedProductData = chunkArray(productData, 4); // Función para dividir en grupos de 4 elementos
  
    return (
      <div>
        {chunkedProductData.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((product, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <ProductCard
                  delay={product.delay}
                  author={product.author}
                  authorLink={product.authorLink}
                  imageSrc={product.imageSrc}
                  itemName={product.itemName}
                  itemLink={product.itemLink}
                  currentBid={product.currentBid}
                  handleBidModal={product.handleBidModal}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  // Función para dividir el array en grupos de tamaño especificado (en este caso, 4)
  function chunkArray(arr, size) {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  }
  
  export default FeaturedCardSlider;
