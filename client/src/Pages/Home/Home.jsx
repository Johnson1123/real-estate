import React, { useEffect, useState } from "react";
import images from "../../assets/images";
import axios from "axios";
import Property from "../../Component/Property";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Home.css";
import { LiaBedSolid } from "react-icons/lia";
import { PiShowerLight } from "react-icons/pi";
import { TbChartAreaLine } from "react-icons/tb";

function Home() {
  const [agent, setAgent] = useState([]);
  const [propertyAgent, setPropertyAgent] = useState(null);
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    const handleApi = async () => {
      const res = await axios.get("http://localhost:5000/api/get-agent");
      setAgent(res.data.agents.slice(0, 3));
      setPropertyAgent(res.data.agents[0]);
    };
    handleApi();
  }, []);
  return (
    <>
      <main className="relative home-main">
        <div className="overlay-container top-[-30px] w-[50%]">
          <div className="overlay-wrapper flex justify-around items-center">
            <div class="box">
              <img src={images.home4} alt="" />
              <div class="box-text">New Properties</div>
            </div>
            <div class="box">
              <img src={images.home1} alt="" />
              <div class="box-text">Contact Agent</div>
            </div>
            <div class="box">
              <img src={images.home2} alt="" />
              <div class="box-text">Building for Sale</div>
            </div>
            <div class="box">
              <img src={images.home4} alt="" />
              <div class="box-text">House for Sale</div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col  h-auto relative items-center">
          <h3 className="text-[24px] text-left w-[90%] text-[Purple] my-4">
            Featured Properties
          </h3>
          <div className="property-container flex gap-5 justify-between flex-wrap w-[90%]">
            <Property setToggle={setToggle} />
            <Property setToggle={setToggle} />
            <Property setToggle={setToggle} />
            <Property setToggle={setToggle} />
          </div>
          <button className="mt-10 go-page-btn">Go To Property Page</button>
        </div>

        <div class="team">
          <h2 class="team-title">WE BRING DREAM HOMES TO REALITY</h2>
          <p class="team-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>

          <div class="team-image-container-value">
            <div class="team-image-container">
              <img src="/images/background-3.jpg" alt="" />
            </div>
            <div class="team-value-container">
              <div class="team-box">
                <div class="team-image-box">
                  <i class="fa fa-home" aria-hidden="true"></i>
                </div>
                <div class="team-box-text">
                  <h2 class="">TOP RATED AGENTS</h2>
                  <p class="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
              <div class="team-box">
                <div class="team-image-box">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
                <div class="team-box-text">
                  <h2 class="">QUALITY PROPERTIES</h2>
                  <p class="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
              <div class="team-box">
                <div class="team-image-box">
                  <i class="fa fa-shield" aria-hidden="true"></i>
                </div>
                <div class="team-box-text">
                  <h2 class="">EASY & SAFE</h2>
                  <p class="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="counter-container">
            <div class="counter-box">
              <span>2,917</span>
              <p class=""># of Buy Properties</p>
            </div>
            <div class="counter-box">
              <span>5,917</span>
              <p class=""># of Sell Properties</p>
            </div>
            <div class="counter-box">
              <span>8,817</span>
              <p class=""># of All Properties</p>
            </div>
            <div class="counter-box">
              <span>817</span>
              <p class=""># of agents</p>
            </div>
          </div>
        </div>
        <div class="agent">
          <div class="agent-wrapper">
            <h2 class="team-title">WE BRING DREAM HOMES TO REALITY</h2>
            <p class="team-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              enim pariatur similique debitis vel nisi qui reprehenderit totam?
              Quod maiores.
            </p>
            <div class="agent-box-container">
              {agent.map((agent, i) => {
                return (
                  <div class="agent-box">
                    <img src={agent.image} alt="" />
                    <div class="">
                      <p class="name">{agent.name}</p>
                      <p class="font-[500] text-center">{agent.level}</p>
                      <p class="role">Real Estate Agent</p>
                    </div>
                    <p class="agent-des">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere officiis inventore cumque tenetur laboriosam, minus
                      culpa doloremque odio, neque molestias?
                    </p>
                    <div class="icons-container !w-[50%]">
                      <span>
                        <a href="">
                          <BsTwitter size={14} />
                        </a>
                      </span>
                      <span>
                        <a href="">
                          <BsInstagram size={14} className="agent-icon" />
                        </a>
                      </span>
                      <span>
                        <a href="">
                          <FaLinkedinIn size={14} />
                        </a>
                      </span>
                      <span>
                        <a href="">
                          <FaFacebookF size={14} />
                        </a>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      {toggle && <ProductPreview agent={propertyAgent} setToggle={setToggle} />}
    </>
  );
}

function ProductPreview({ agent, setToggle }) {
  return (
    <div className="fixed z-10 w-[100%] h-screen top-0 left-0 preview flex justify-center items-center">
      <div className="container bg-white w-[80%] h-[95%] p-4 rounded-md relative">
        <button
          className="absolute right-5 top-5 text-[25px] text-bold"
          onClick={() => setToggle(false)}
        >
          <AiOutlineClose className="" />
        </button>
        <div className="mt-5 flex ">
          <div className="left w-[50%] ">
            <img
              src={images.bg2}
              alt=""
              class="p-image"
              className="w-[90%] h-[450px] rounded-sm"
            />
            <div className="icon-image flex gap-5 mt-10 ">
              <img
                src={images.bg1}
                alt=""
                className="w-[70px] h-[70px] object-cover cursor-pointer hover:scale-105 rounded-sm"
              />
              <img
                src={images.bg1}
                alt=""
                className="w-[70px] h-[70px] object-cover cursor-pointer hover:scale-105 rounded-sm"
              />
              <img
                src={images.bg1}
                alt=""
                className="w-[70px] h-[70px] object-cover cursor-pointer hover:scale-105 rounded-sm"
              />
              <img
                src={images.bg1}
                alt=""
                className="w-[70px] h-[70px] object-cover cursor-pointer hover:scale-105 rounded-sm"
              />
              <img
                src={images.bg1}
                alt=""
                className="w-[70px] h-[70px] object-cover cursor-pointer hover:scale-105 rounded-sm"
              />
            </div>
          </div>
          <div className="right w-[50%] p-5">
            <h3 className="text-center w-full text-[20px] font-[500]">
              New Apartment Nice View
            </h3>
            <p className="mt-5">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before final copy is available.
            </p>
            <div className="mt-10 flex justify-between items-center">
              <button className="bg-[#111] w-[150px] text-white rounded-md h-[40px] py-2 text-[18px]">
                Compare
              </button>
              <div className="flex gap-5 justify-center">
                <span className="property-details-icon flex flex-col justify-center items-center gap-1">
                  <LiaBedSolid size={30} color="#888888" />
                  <span className="ml-1 text-[#888888]">4</span>
                </span>
                <span className="property-details-icon flex flex-col justify-center items-center gap-1">
                  <PiShowerLight size={30} />
                  <span className="ml-1 text-[#888888]">4</span>
                </span>
                <span className="property-details-icon flex flex-col justify-center items-center gap-1">
                  <TbChartAreaLine size={30} color="#888888" />
                  <span className="ml-1 text-[#888888]">1,456.87 m²</span>
                </span>
                <span className="property-details-icon flex flex-col justify-center items-center gap-1">
                  <TbChartAreaLine size={30} color="#888888" />
                  <span className="ml-1 text-[#888888]">300.26 m²</span>
                </span>
              </div>
            </div>
            <div className="mt-10 flex gap-5">
              <img
                src={agent.image}
                alt=""
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="">
                <p className="">+{agent.phone}</p>
                <p className="">{agent.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
