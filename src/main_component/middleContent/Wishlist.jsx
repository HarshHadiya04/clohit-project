import React, { useEffect } from 'react';
import { useWishlist } from '../../WishlistContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
    const {wishlist} = useWishlist();
    
    const heartClick = (item) => {
            wishlist.filter(likedItem => likedItem.Description !== item.Description);
            console.log('remove');
    };
    return ( <>
    <div className="d-flex flex-wrap justify-content-center">
                {wishlist.map((item) => (
                    <div className="p-4 m-2" style={{ marginBottom: '20px', width: '350px', height: '500px' }} key={item.Description}>
                        <img className="rounded" src={item.Image} alt={item.Description} style={{ width: '300px', height: '300px' }} />
                        <h4 style={{ textAlign: 'center' }}>{item.Brand}</h4>
                        <p style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 2, // This limits the text to 2 lines
                            lineClamp: 2,
                            textAlignLast: 'center'
                        }}>{item.Description}</p>
                        <p>MRP: ₹{item.Mrp}</p>
                        <p>Price: ₹{item.Price}</p>
                        <FontAwesomeIcon
                            icon={faHeartSolid} 
                            onClick={() => heartClick(item)} 
                            style={{ cursor: 'pointer' }} 
                        />
                        
                        
                    </div>
                    
                ))}
            </div>
    </> );
}

export default Wishlist;