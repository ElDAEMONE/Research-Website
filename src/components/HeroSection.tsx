import React from 'react'
import promo from '/Promo.mp4'

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-16 bg-gray-50"
    >
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Welcome to <span className="text-orange-400">CardiCare</span>
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          CardiCare is your trusted digital healthcare partner. Our mission is to deliver innovative solutions by combining medical expertise with cutting-edge information technology. Through our research, we have developed a mobile application aimed at empowering individuals to take control of their heart health with confidence and ease.
        </p>
        <br />
        <p className="text-gray-600 text-lg mb-6">
          So we are happy to introduce <span className="text-fuchsia-950 font-bold">HEALTHY TICS</span> our innovative cardiovascular disease prediction system, designed to help you monitor and manage your heart health effectively. this is a mobile application that uses advanced machine learning algorithms to analyze your health data and provide personalized insights and recommendations. Whether you're looking to prevent heart disease or manage an existing condition, Healthy Tics is here to support you on your journey to better heart health.
        </p>
        <a
          href="#objectives"
          className="inline-block bg-orange-400 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition"
        >
          Explore Features
        </a>
      </div>
      {/* Promo Video */}
      <div className="md:w-1/2 flex justify-center">
        <video
          src={promo}
          controls
          className="max-h-96 w-auto rounded-lg shadow-lg"
          poster="/promo-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default HeroSection
