"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Destinations from "./components/Destinations";
import Aboutus from "./components/Aboutus";
import Northside from "./components/Northside";
import { useEffect } from "react";
import AOS from 'aos';
import Trips from "./components/Trips";
import Flights from "./components/Flights";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Ratedtrip from "./components/Ratedtrip";
import Insights from "./components/Insights";
import Happytraveller from "./components/Happytraveller";
import { logo, navbar, aboutus, destination, flights, newsletter, northside, ratedtrip, partners } from "./data/data";
export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar navdata={navbar} logo={logo} />
      <Hero />
      <Partners partnersdata={partners} />
      <Happytraveller />
      <Destinations destinationdata={destination} />
      <Aboutus aboutusdata={aboutus} />
      <Insights />
      <Ratedtrip ratedtripdata={ratedtrip} />
      <Northside northsidedata={northside} />
      <Trips />
      <Flights flightsdata={flights} />
      <Newsletter newsletterdata={newsletter} />
      <Footer />
    </>
  );
}