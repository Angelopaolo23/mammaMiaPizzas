import React from 'react';

export default function HeroImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: 300 }}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>¡Pizzería Mamma Mia!</h1>
              <h4 className='mb-3'>Bienvenido a la auténtica pizzería italiana</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};