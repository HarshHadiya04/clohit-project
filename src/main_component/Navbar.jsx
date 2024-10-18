import React from 'react';

const Navbar = () => {
  const font = {
    fontFamily: 'Lobster',
    fontSize: '2rem'
  }
  return (
    <div className='nav-class bg-black text-white fs-3'>
      <div className="row">
        <div className="col-4 row" >
          <div className="col-4 " style={font}>colhit</div>
          <div className="col-8">Delivery in 60 minutes</div>
        </div>
        <div className="col-3">serch bar</div>
        <div className="col-5">menubar</div>
      </div>
    </div>
  );
};

export default Navbar;
