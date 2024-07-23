import React from 'react'

export const ImageGallery = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>
            <div className="row">
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src="./gallery1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src="./gallery2.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src="./gallery3.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src="./gallery4.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-4 px-2">
                    <div className="my-3">
                        <img src="./gallery5.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="my-3">
                        <img src="./gallery6.jpg" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}