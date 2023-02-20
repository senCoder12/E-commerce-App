import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Color from '../Components/Color'
import Meta from '../Components/Meta'

function CompareProducts() {
  return (
    <>
        <Meta title="Compare Product" />
      <Breadcrumb title="Compare Product" />
      <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img
                        src='images/cross.svg'
                        alt='cross'
                        className='position-absolute img-fluid cross'
                        />
                        <div className='product-card-image'>
                            <img src='images/watch.jpg' alt='watch' className='w-100'/>
                        </div>
                        <div className='product-card-details'>
                            <h5 className='title'>
                                Horon T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G 
                            </h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-details'>
                                    <h5>Brand</h5>
                                    <p className='mb-0'>Havels</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Type</h5>
                                    <p  className='mb-0'>Watch</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Availablity</h5>
                                    <p  className='mb-0'>In Stock</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Color</h5>
                                    <Color/>
                                </div>
                                <div className='product-details'>
                                    <h5>Size</h5>
                                    <div className='d-flex gap-10'>
                                    <p  className='mb-0'>S</p>
                                    <p  className='mb-0'>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className='col-3'>
                    <div className='compare-product-card position-relative'>
                        <img
                        src='images/cross.svg'
                        alt='cross'
                        className='position-absolute img-fluid cross'
                        />
                        <div className='product-card-image'>
                            <img src='images/watch.jpg' alt='watch' className='w-100'/>
                        </div>
                        <div className='product-card-details'>
                            <h5 className='title'>
                                Horon T1 7.0 1 GB RAM 7 Inch With Wi-Fi+3G 
                            </h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-details'>
                                    <h5>Brand</h5>
                                    <p className='mb-0'>Havels</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Type</h5>
                                    <p  className='mb-0'>Watch</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Availablity</h5>
                                    <p  className='mb-0'>In Stock</p>
                                </div>
                                <div className='product-details'>
                                    <h5>Color</h5>
                                    <Color/>
                                </div>
                                <div className='product-details'>
                                    <h5>Size</h5>
                                    <div className='d-flex gap-10'>
                                    <p  className='mb-0'>S</p>
                                    <p  className='mb-0'>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CompareProducts