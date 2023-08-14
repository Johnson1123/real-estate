import React, { useEffect, useState } from "react";
import "./Header.css";
import images from "../../assets/images";

function Header() {
  const [navbarSticky, setNavbarSticky] = useState(false);
  const bgImages = [images.bg1, images.bg2, images.bg3];
  let [count, setCount] = useState(2);

  useEffect(() => {
    const interver = setInterval(() => {
      if (count < 2) {
        setCount(count++);
      } else {
        setCount((count = 0));
      }
    }, 1500);

    return () => clearInterval(interver);
  }, [count]);
  const x = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 21) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  });

  return (
    <header class="">
      <div class="">
        <div class="carousel-container h-[100vh]">
          <img
            src={bgImages[count]}
            alt=""
            class="carousel-box box-1 h-[100%] w-[100%]"
          />
        </div>
        <div class="header-content">
          <div
            className={`nav py-4 w-[80%] md:py-5 px-5 bg-white rounded-md shadow-md mt-5 flex justify-between items-center cursor-pointer text-red-600 ${
              navbarSticky && "sticky"
            }`}
          >
            <a href="/" class="text-seal-500 text-lg font-bold">
              BHome
            </a>
            <div className="">
              <nav className="flex gap-3 nav-link">
                <li>
                  <a href="/property-page" rel="noopener noreferrer">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="" rel="noopener noreferrer">
                    Best Deal
                  </a>
                </li>
                <li>
                  <a href="/" rel="noopener noreferrer">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/sign-up-as-agent" rel="noopener noreferrer">
                    Apply
                  </a>
                </li>
                <li>
                  <a href="/" rel="noopener noreferrer">
                    About
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div class="">
            <p class="header-title text-center">FIND A PERFECT DREAM HOUSE</p>
          </div>
          <form action="/search-data" class="search-container" method="post">
            <div class="search-input">
              <input type="text" id="search" name="search" />
            </div>
            <input
              class="search-btn text-white text-center"
              type="submit"
              value="Search"
            />
          </form>
          <p class="header-text text-[18px] text-center font-[400] shadow-md">
            Let us find the home of your dreams. Whether its an apartment in the
            historic Banna island, a sprawling estate in popular area or a
            beautiful beach front home in Abuja, we at BHome have you and your
            family covered.
          </p>

          {/* <span class="flex items-center mt-15 header-link-container">
            <a href="" class="header-link lead-0">
              veiw homes
            </a>
            <i class="fa-solid fa-arrow-right text-white"></i>
          </span> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
