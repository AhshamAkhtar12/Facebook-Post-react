import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SlOptions } from "react-icons/sl";
import { GrLike } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";

function App() {
  return (
    <>
    <h1>Facebook Posts</h1>
    <div className="Facebook-main">
      <div className="post-1">
        <div className="post-header-1">
          <div className="post-user-detail-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSJBGP-lx9nShi6hP6Ix25YMvZMQMHrlCHA&s"
              alt=""
              className="dp-1"
            />
            <div className="post-dispaly-1">
              <h3>Lamborgini Cars</h3>
              <span>10 min ago</span>
            </div>
          </div>
            <SlOptions />
        </div>
        <p>
        The Lamborghini Sián is a limited-edition hybrid supercar that combines cutting-edge technology with Lamborghini's iconic performance and design. Unveiled in 2019, the Sián features a 6.5-liter V12 engine paired with a 48-volt electric motor, producing a combined 819 horsepower. It accelerates from 0 to 60 mph in under 2.8 seconds, reaching a top speed of over 217 mph. The Sián also showcases innovative features, including Lamborghini’s unique supercapacitor hybrid system, which is lighter and more efficient than traditional lithium-ion batteries. Its striking, futuristic design is matched by advanced aerodynamics and a lightweight carbon fiber structure. Limited to just 63 units, the Sián is a testament to Lamborghini’s commitment to pushing the boundaries of performance and design.
        </p>
       
        <img
          src="https://i.ytimg.com/vi/QWjVYegj5Ho/maxresdefault.jpg"
          alt="post image"
          className="post-photo-1"
          id="my-id"
        />
        <hr />
        <div id="mainDiv-1">
          <div className="footer1">
            <GrLike />
            <h4>like</h4>
          </div>
          <div className="footer1">
            <FaRegCommentDots />
            <h4>Comment</h4>
          </div>
          <div className="footer1">
            <IoMdShareAlt />
            <h4>Share</h4>
          </div>
        </div>
      </div>

 

      <div className="post-2">
        <div className="post-header-2">
          <div className="post-user-detail-2">
            <img
              src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="dp-2"
            />
            <div className="post-dispaly-2">
              <h3>Mountains Informative</h3>
              <span>55 min ago</span>
            </div>
          </div>
            <SlOptions />
        </div>
        <p>
        A mountain is a large landform that rises prominently above its surroundings, typically with steep slopes, a defined summit, and significant elevation differences. Mountains are formed through tectonic forces, volcanic activity, or erosion over millions of years. They can be part of mountain ranges, like the Himalayas or the Rockies, and are often characterized by rugged terrain, diverse ecosystems, and challenging climates. Mountains have long been places of natural beauty, adventure, and cultural significance, providing habitats for unique wildlife and opportunities for outdoor activities like hiking, climbing, and skiing.
        </p>
        <img
          src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="post image"
          className="post-photo-2"
          id="my-id"
        />
        <hr />
        <div id="mainDiv-2">
          <div className="footer2">
            <GrLike />
            <h4>like</h4>
          </div>
          <div className="footer2">
            <FaRegCommentDots />
            <h4>Comment</h4>
          </div>
          <div className="footer2">
            <IoMdShareAlt />
            <h4>Share</h4>
          </div>
        </div>
      </div>


      <div className="post-3">
        <div className="post-header-3">
          <div className="post-user-detail-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yIqEuhr8IadVYBkHy9ykdsImcyGuJGyUjUIa-9lZvQZla5LY7ZclVWshUW7OZH_iZQ8&usqp=CAU"
              alt=""
              className="dp-3"
            />
            <div className="post-dispaly-3">
              <h3>Mountains Informative</h3>
              <span>2 hours ago</span>
            </div>
          </div>
            <SlOptions />
        </div>
        <p>
        A camera is a device used to capture images or video by recording light onto a sensor or film. Modern digital cameras use electronic sensors, such as CCD or CMOS, to convert light into digital data, while traditional film cameras rely on photographic film. Cameras come in various types, from compact point-and-shoot models to professional DSLR and mirrorless systems, offering features like zoom lenses, manual controls, and high-resolution imaging. They are widely used in photography, filmmaking, security, and everyday life, allowing people to document moments, express creativity, and communicate visually.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2023/11/14/15/46/nikon-8388022_1280.jpg"
          alt="post image"
          className="post-photo-3"
          id="my-id"
        />
        <hr />
        <div id="mainDiv-3">
          <div className="footer3">
            <GrLike />
            <h4>like</h4>
          </div>
          <div className="footer3">
            <FaRegCommentDots />
            <h4>Comment</h4>
          </div>
          <div className="footer3">
            <IoMdShareAlt />
            <h4>Share</h4>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
