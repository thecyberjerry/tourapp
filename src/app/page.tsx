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

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Destinations />
      <Aboutus />
      <Northside />
      <Trips />
      <Flights />
    </>
  );
}