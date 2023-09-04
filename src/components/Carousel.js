import React from 'react'
import pic from '../assets/food (2).jpg'

const Carousel = () => {
  return (
    

<div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic}  className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>“Tell me what you eat, and I will tell you who you are.” “So long as you have food in your mouth you have solved all questions for the time being.” “There is no sincere love than the love of food.” “If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.”</p>
            </div>
          </div>




          <div className="carousel-item">
            <img src={pic} className="d-block w-100"   alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>



          <div className="carousel-item">
            <img src= {pic} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>


          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>


        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>


    </div>
  )
}

export default Carousel