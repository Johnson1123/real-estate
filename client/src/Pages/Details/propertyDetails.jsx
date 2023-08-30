import React from "react";
import "./propertyDetails.css"
import { AiOutlineSend } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import {BiSolidStarHalf}from "react-icons/bi"
import Footer from "../../Layout/Footer/Footer";

function Details(){
    return(
        <>
      <h1 className="h1">Details</h1>
      <div className="all">
        <div className="first">
          <div className="image">
         <img src="https://media.istockphoto.com/id/1437658111/photo/house-with-palm-by-the-water-at-the-resort-in-spain.webp?b=1&s=170667a&w=0&k=20&c=FqsAGNY36p6btEjIzlvD2aZWx08y4yA92jGtnifiUGE=" alt="" />
          </div>
          <div>
            <div className="span"> 
            <hr style={{height:"20px"}} />
            <div className="abs">
            <span>Roll over image to zoom in</span>
            </div>
            </div>
          <div className="each">
             <img src="https://media.istockphoto.com/id/1455375812/photo/luxury-single-story-home-exterior-surrounded-by-trees.webp?b=1&s=170667a&w=0&k=20&c=a14PkjKmtTkan1TLaQZDAOCMqB8_zLwUYFzWmNGThk0=" alt="" />
             <img src="https://media.istockphoto.com/id/1455374627/photo/single-story-suburban-home-exterior-with-large-driveway.webp?b=1&s=170667a&w=0&k=20&c=tComMql95oxAvFe_f-qwN7c1zjadva-3113qBbvZVV8=" alt="" />
             <img src="https://images.unsplash.com/photo-1597047084897-51e81819a499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
             <img src="https://media.istockphoto.com/id/1449163384/photo/view-of-balcony-in-mid-beach-in-miami-beach.webp?b=1&s=170667a&w=0&k=20&c=Pp3BQ_EXI5yuK48egd-oh1GBRp23b6-itNx9mYCVRYQ=" alt="" />
          </div>
          </div>
        </div>
        <div className="second">
            <div className="title">
            <h2>Medline Standard Steel Folding Rollator Walker with 8" Wheels, Supports up to 350 lbs, Blue</h2>
            <a href="/property-page">Visit the property site</a>
            </div>
            <div className="stars">
              <div className="ics">
                <AiFillStar className="icss"/>
                <AiFillStar className="icss"/>
                <AiFillStar className="icss"/>
                <AiFillStar className="icss"/>
                <BiSolidStarHalf className="icss"/>
              </div>
              <span>21 ratings</span>
            </div><hr />
            <div className="but">
                 <button>Deal</button>
            </div>
            <div className="p">
              <p>List Price: <del>$393.98</del><small>i</small></p>
              <p>Deal Price: <b>$313.90</b></p>
              <p>You Save: <b>$82.98</b></p>
            </div>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias ullam quia, repellendus dignissimos esse sed providen.</h4>
          <div className="loca">
            <div><b>Location</b> <span>Aja Phase 2,Lagos State</span></div>
            <div><b>Type</b> <span>Bungallow</span></div>
            <div><b>Shape</b> <span>Rectangular Shape</span></div>
          </div>
          <div className="read">
           <a href="">Read More......</a>
          </div>
          <form className="form">
        <input type="text" className="input" placeholder="Write a comments........."/>
         <button type="submit"> <AiOutlineSend className="ai"/></button>
       </form>
        </div>
     
      </div>
      
        <Footer/>
        </>
    )
}
export default Details  