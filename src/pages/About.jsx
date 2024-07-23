import React from 'react'
import { ImageGallery } from "../components/ImageGallery";
import { Reviews } from "../components/Reviews";
import "./About.css"

const About = () => {
  return (
    <div className="about-page">

      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
        Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
Vel corporis sunt nam aspernatur autem hic numquam minima ut delectus dignissimos. Ea debitis deserunt in sapiente nihil non animi assumenda et sequi voluptas. Eum voluptas veniam nam omnis duciamus ut porro nihil ea dolores accusamus nam soluta sunt ut molestiae internos eum quia perspiciatis.
Id eaque repudiandae ea facere tenetur aut saepe Quis eum deleniti perferendis. Ut neque assumenda et obcaecati deserunt ab sequi laudantium a odit numquam.
        </p>
        <p>
        Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
Vel corporis sunt nam aspernatur autem hic numquam minima ut delectus dignissimos. Ea debitis deserunt in sapiente nihil non animi assumenda et sequi voluptas. Eum voluptas veniam nam omnis duciamus ut porro nihil ea dolores accusamus nam soluta sunt ut molestiae internos eum quia perspiciatis.
Id eaque repudiandae ea facere tenetur aut saepe Quis eum deleniti perferendis. Ut neque assumenda et obcaecati deserunt ab sequi laudantium a odit numquam.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <img src=".\about-chef1.jpg" alt="" className="img-fluid my-4" />
          </div>
          <div className="col-lg-6">
            <img src=".\about-chef2.jpg" alt="" className="img-fluid my-4" />
          </div>
        </div>
        <p>
        Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
Vel corporis sunt nam aspernatur autem hic numquam minima ut delectus dignissimos. Ea debitis deserunt in sapiente nihil non animi assumenda et sequi voluptas. Eum voluptas veniam nam omnis duciamus ut porro nihil ea dolores accusamus nam soluta sunt ut molestiae internos eum quia perspiciatis.
Id eaque repudiandae ea facere tenetur aut saepe Quis eum deleniti perferendis. Ut neque assumenda et obcaecati deserunt ab sequi laudantium a odit numquam.
        </p>
      </div>

      <div className="bg-dark text-light">
      <ImageGallery></ImageGallery>
      </div>

      <div className="my-5">
        <Reviews></Reviews>
      </div>
      
    </div>
  )
}

export default About
