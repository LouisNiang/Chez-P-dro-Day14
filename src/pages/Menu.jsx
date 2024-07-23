   import React from 'react'
   import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
   import "./Menu.css"

   const breakfast = [
    {
      id: 1,
      name: "English Breakfast",
      description: "smoked bacon, sausage, tomato, muhsrooms, black pudding, baket beans, eggs",
      price: "12$"
    },
    {
      id: 2,
      name: "Avocado Toast",
      description: "poaches eag, avocado, tomato, bread ",
      price: "8$"
    },
    {
      id: "3",
      name: "Burrito",
      description: "tortilla, egg, cheese, potatoes, pork meat",
      price: "12$"
    }
   ]

   const lunch = [
    
      {
        id: 1,
        name: 'Caesar Salad',
        description: 'chicken breast, romaine lettuce, croutons, parmesan',
        price: '£15'
    },
    {
        id: 2,
        name: 'Spaghetti Carbonara',
        description: 'spaghetti, pancetta, garlic, eggs, parmesan, pepper',
        price: '£14'
    },
    {
        id: 3,
        name: 'Pizza',
        description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
        price: '£12'
    }
    
   ]

   const dinner = [
    
      {
        id: 1,
        name: 'Spicy Beef',
        description: 'spicy beef, potatoes, carrots, cheese sauce, spices',
        price: '£17'
    },
    {
        id: 2,
        name: 'Spaghetti Bolognese',
        description: 'onion, carrot, celery, minced meat, spaghetti, parmesan',
        price: '£15'
    },
    {
        id: 3,
        name: 'Chickpea Curry',
        description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
        price: '£12'
    }
    
   ]

   const dessert = [
    
      {
        id: 1,
        name: 'Lemon Cake',
        description: 'flour, sugar, baking powder, lemon',
        price: '£9'
    },
    {
        id: 2,
        name: 'Cinnamon Rolls',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: '£11'
    },
    {
        id: 3,
        name: 'Vegan Pancakes',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: '£8'
    }
    
   ]
   
   const Menu = () => {
     return (
       <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Menu</h1>
          </div>
        </header>
        <div className="breakfast my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Breakfast</h2>
            <div className="row flex-column-reserve flex-lg-row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src=".\breakfast.jpg" alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around">
                  {
                    breakfast.map((breakfast) =>(
                      <div key={breakfast.id}>
                        <Card className="border-0">
                          <CardBody>
                            <CardTitle className="text-center fs-3">
                              {breakfast.name}
                            </CardTitle>
                            <CardText className="text-center fs-5">{breakfast.description}</CardText>
                            <CardText className="text-center fs-3 fw-bold text-success">{breakfast.price}</CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>

        <div className="lunch bg-dark py-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Lunch</h2>
            <div className="row ">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
                  {
                    lunch.map((lunch) =>(
                      <div key={lunch.id}>
                        <Card className="border-0 bg-dark text-light">
                          <CardBody>
                            <CardTitle className="text-center fs-3">
                              {lunch.name}
                            </CardTitle>
                            <CardText className="text-center fs-5">{lunch.description}</CardText>
                            <CardText className="text-center fs-3 fw-bold text-success">{lunch.price}</CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))
                  }
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img src=".\lunch.jpg" alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
              </div>

              
              
            </div>

            
            
          </div>
        </div>

        <div className="dinner my-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Dinner</h2>
            <div className="row flex-column-reserve flex-lg-row">
              <div className="col-lg-6 d-flex justify-content-center">
                <img src=".\dinner.jpg" alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-around">
                  {
                    breakfast.map((dinner) =>(
                      <div key={dinner.id}>
                        <Card className="border-0">
                          <CardBody>
                            <CardTitle className="text-center fs-3">
                              {dinner.name}
                            </CardTitle>
                            <CardText className="text-center fs-5">{dinner.description}</CardText>
                            <CardText className="text-center fs-3 fw-bold text-success">{dinner.price}</CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        </div>

        <div className="dessert bg-dark text-light py-5">
          <div className="container">
            <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success">Lunch</h2>
            <div className="row ">
            <div className="col-lg-6 d-flex flex-column justify-content-around">
                  {
                    dessert.map((dessert) =>(
                      <div key={dessert.id}>
                        <Card className="border-0 bg-dark text-light">
                          <CardBody>
                            <CardTitle className="text-center fs-3">
                              {dessert.name}
                            </CardTitle>
                            <CardText className="text-center fs-5">{dessert.description}</CardText>
                            <CardText className="text-center fs-3 fw-bold text-success">{dessert.price}</CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ))
                  }
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <img src=".\dessert.jpg" alt="" className="img-fluid w-75 mt-4 mt-lg-0" />
              </div>

              
              
            </div>

            
            
          </div>
        </div>

       </div>
     )
   }
   
   export default Menu
    