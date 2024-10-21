import React, { useState, useEffect } from 'react';

const Navbar = () => {

   const [color, setColor] = useState('#252422');

  const colors = ['#252422', '#eb5e28'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) => {
        const currentIndex = colors.indexOf(prevColor);
        return currentIndex === colors.length - 1 ? colors[0] : colors[currentIndex + 1];
      });
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const navbar = {
    backgroundColor: '#eb5e28',
    color: '#252422',
    boxShadow: '0 4px 4px -2px #eb5e28',
    fontFamily: "'Lobster' , sans-serif ",
    fontSize: '1.2rem',
  }
  return (
    <div style={navbar} className='nav-class ' >
      <div className="d-flex flex-wrap mx-2 align-items-center">
        <div className="col-4">
          <div className="d-flex align-items-center flex-wrap ">
            <div className="fs-3 mx-2" >Colhit</div>
            <div style={{ color: color , fontSize:'1rem' }} className='mx-2'>Delivery in 60 minutes</div>
          </div>
        </div>
        <div className="col-3" >search bar</div>
        <div className="d-flex flex-wrap col-5 justify-content-end">
          <div className="mx-2">Collection</div>
          <div className="mx-2">Trends</div>
          <div className="mx-2">Wishlist</div>
          <div className="mx-2">Looks</div>
          <div className="mx-2">Bag</div>
          <div className="mx-2">User</div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
