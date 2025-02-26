import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Faqs from '../components/Navbar/Faqs'
import "./FAQ.css";

export default function FAQs() {
  return (
    <div>
        <Navbar />

        <div className="faqs">
            <h1>Frequently Asked Questions</h1>
            <p>This page provides help with the most common questions about Global Farms. </p>
            <Faqs />
        </div>

        <Footer />
    </div>
  )
}

