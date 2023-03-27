import React, { useEffect } from "react";
import "./Dashboard.css";

const DashboardSlider = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelectorAll(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicatorsContainer = document.querySelector(".dev-slider-container");

    let slideIndex = 0;

    // console.log(slides);

    showSlide(slideIndex);

    function showSlide(index) {
      // hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      // show the current slide
      slides[index].classList.add("active");
    }

    function showSlide(index) {
      // Remove "active" class from all slides
      slides.forEach((slide) => slide.classList.remove("active"));

      // Add "active" class to slide at given index
      slides[index].classList.add("active");
    }

    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }

    setInterval(nextSlide, 5000); // Call nextSlide() every 5 seconds

    prevBtn.addEventListener("click", () => {
      slideIndex--;

      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      showSlide(slideIndex);
    });

    nextBtn.addEventListener("click", () => {
      slideIndex++;

      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }

      showSlide(slideIndex);
    });
  }, []);

  return (
    <div className="dashboard-slider mt-7">
      <div className="dev-slider-container">
        <div className="slider">
          <div className="slide active">
            <div className="dashboard-slider-items dashboard-slide-01 px-7">
              <article className="max-w-[70%] mr-auto">
                <h4 className="font-normal text-3xl text-white">
                  Download the new Freepik contributor app.
                </h4>
                <h3 className=" text-3xl text-white">
                  Now available in <strong>your country!</strong>
                </h3>
              </article>
            </div>
          </div>
          <div className="slide">
            <div className="dashboard-slider-items dashboard-slide-02 px-7 text-primary">
              <article className="md:max-w-[70%] mr-auto">
                <small>Search trends</small>
                <h4 className="font-normal text-2xl">
                  Discover the most popular <br /> search terms and keywords
                </h4>
                <button className="border-2 border-primary py-2 px-5 rounded-lg">
                  Explore trends
                </button>
              </article>
            </div>
          </div>
        </div>
        <button className="prev-btn hidden"></button>
        <button className="next-btn hidden"></button>
      </div>
    </div>
  );
};

export default DashboardSlider;
