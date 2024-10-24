import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { useWishlist } from '../../../WishlistContext';
import { useAddbag } from '../../../AddbagContext';

function Male() {
    const {wishlist,setWishlist} = useWishlist();
    const {Addbag,setAddbag} = useAddbag();
    const mens = [
        {
            Image: 'media/images/men_1.jpg',
            Brand: 'Van Heusen',
            Description: "Men's Solid Polo T Shirt",
            Mrp: '1099',
            Price: '599'
        },
        {
            Image: 'media/images/men_2.jpg',
            Brand: 'Leriya Fashion',
            Description: 'Men Casual Half Sleeve Polo Oversized Fit T-Shirt',
            Mrp: '1999',
            Price: '380'
        },
        {
            Image: 'media/images/men_3.jpg',
            Brand: 'CB-COLEBROOK',
            Description: "CB-COLEBROOK Men's Regular Fit Solid Soft Touch Cotton Casual Shirt with Pocket Design with Spread Collar & Full Sleeves",
            Mrp: '1849',
            Price: '495'
        },
        {
            Image: 'media/images/men_4.jpg',
            Brand: 'EYEBOGLER',
            Description: "EYEBOGLER Men's Trendy Polo Neck Half Sleeves Regular Fit Checkered T-Shirt",
            Mrp: '1299',
            Price: '259'
        },
        {
            Image: 'media/images/men_5.jpg',
            Brand: 'Lymio',
            Description: 'Lymio Men Jeans || Men Jeans Pants || Denim Jeans || Baggy Jeans for Men (Jeans-06-07-08)',
            Mrp: '4999',
            Price: '649'
        },
        {
            Image: 'media/images/men_6.jpg',
            Brand: 'Urbano Fashion',
            Description: "Urbano Fashion Men's Loose Baggy Fit Cut and Sew Panelled Jeans Non-Stretchable",
            Mrp: '2299',
            Price: '789'
        },
        {
            Image: 'media/images/men_7.jpg',
            Brand: 'Campus',
            Description: "Campus North Plus Sports Running Walking Gym Shoes for Men | Comfortable Shoes for Men with Vamp Upper for Airflow | Stylish Lace-Up Closure | Men's Shoes with Air Capsule Unit",
            Mrp: '1899',
            Price: '1101'
        },
        {
            Image: 'media/images/men_8.jpg',
            Brand: 'Kraasa',
            Description: "Kraasa Extra Soft Men's Classic Casual Sports Clogs/Sandals with Adjustable Back Strap for Adult | Comfortable & Lightweight| Stylish & Anti-Skid| Waterproof & Everyday Use Mules for Gents/Boys",
            Mrp: '1999',
            Price: '699'
        },
        {
            Image: 'media/images/men_9.jpg',
            Brand: 'U.S. POLO ASSN.',
            Description: "Men's Regular Fit T-Shirt",
            Mrp: '799',
            Price: '559'
        },
        {
            Image: 'media/images/men_10.jpg',
            Brand: 'London Hills',
            Description: "London Hills Men's Casual Printed Round Neck, Oversized Longline Drop Shoulder Boho Style T-Shirt",
            Mrp: '1299',
            Price: '249'
        },
    ];
    const heartClick = (item) => {
        const isLiked = wishlist.some(likedItem => likedItem.Description === item.Description);
        if (isLiked) {
            setWishlist(wishlist.filter(likedItem => likedItem.Description !== item.Description));
        } else {
            setWishlist([...wishlist, item]);
        }
    };

    const bagClick = (item) => {
        const isLiked = Addbag.some(likedItem => likedItem.Description === item.Description);
        if (!isLiked) {
            setAddbag([...Addbag, item]);
        }
    };
    return (
        <>
            <div className="d-flex p-3 flex-wrap justify-content-evenly">
                {mens.map((item) => (
                    <div className="m-2 p-3 border rounded-4 shadow" style={{ marginBottom: '20px', width: '300px' }} key={item.Description}>
                        <img className="rounded m-3" src={item.Image} alt={item.Description} style={{ width: '250px' ,height:'350px', objectFit:'contain'}} />
                        
                        <h4 className='m-1' style={{ textAlign: 'center' }}>{item.Brand}</h4>
                        <p style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            WebkitLineClamp: 1, // This limits the text to 2 lines
                            lineClamp: 2,
                            textAlignLast: 'center'
                        }}>{item.Description}</p>
                        <p>MRP: ₹{item.Mrp}</p>
                        <p>Price: ₹{item.Price}</p>
                        
                        
                        <div className="d-flex p-3 border-top border-dark pb-3 flex-wrap justify-content-evenly">
                        <FontAwesomeIcon
                            icon={wishlist.some(wishItem => wishItem.Description === item.Description) ? faHeartSolid : faHeartRegular} 
                            onClick={() => heartClick(item)} 
                            style={{ cursor: 'pointer' ,height:'1.8rem'}} 
                        />
                        
                        <button type="button" class="btn btn-dark rounded-3" onClick={() => bagClick(item)}>Add to Bag</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </>
    )
}

export default Male