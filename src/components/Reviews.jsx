import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardFooter } from "react-bootstrap";
import "./Reviews.css"

export const Reviews = () => {
  return (
    <div className="reviews-section container">
        <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
        <div className="row g-4">
            <div className="col-lg-6">
                <Card className="h-100 shadow">
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                            Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src="./person1.jpg" alt="" className="img-fluid rounded-circle mx-3 shadow" />
                        <CardTitle className="text-success">Modou Bol</CardTitle>
                    </CardFooter>
                </Card>
            </div>

            <div className="col-lg-6">
                <Card className="h-100 shadow">
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                            Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src="./person2.jpg" alt="" className="img-fluid rounded-circle mx-3 shadow" />
                        <CardTitle className="text-success">Anna NDIAYE</CardTitle>
                    </CardFooter>
                </Card>
            </div>

            <div className="col-lg-6">
                <Card className="h-100 shadow">
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                            Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src="./person3.jpg" alt="" className="img-fluid rounded-circle mx-3 shadow" />
                        <CardTitle className="text-success">Fatou WARE</CardTitle>
                    </CardFooter>
                </Card>
            </div>

            <div className="col-lg-6">
                <Card className="h-100 shadow">
                    <CardBody>
                        <div className="p-4">
                            <CardText>
                            Lorem ipsum dolor sit amet. Vel rerum sint est eaque earum aut enim quisquam sed amet ipsum qui molestiae sint! In architecto eaque ut voluptatem cupiditate sit explicabo dolor aut voluptates reiciendis.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className="d-flex align-items-center">
                        <img src="./person4.jpg" alt="" className="img-fluid rounded-circle mx-3 shadow" />
                        <CardTitle className="text-success">Ablaye NDIAYE</CardTitle>
                    </CardFooter>
                </Card>
            </div>

        </div>
    </div>
  )
}
