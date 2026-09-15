import React, { useState, useEffect } from "react";
import { heroData } from "../data/hero";
import { Section, AArrowDown, ArrowDown } from "lucide-react";
import HeroPic from "../assets/giyuu.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Hero = () => {

    const scrollToAbout = () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24 md:py-10">
            {/* Background Elements*/}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-green-400 to-blue-600 rounded-full opacity-30 blur-3xl animate-pulse delay-100"></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center p-10 space-x-0 md:space-x-10">
                {/* Gambar Profile */}
                <div className="mb-4 md:mb-0 md:mr-8">
                    <img
                        src={HeroPic}
                        alt="Profile"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Nama */}
                <div className="">
                    <p className="text-2xl text-slate-900">{heroData.greeting}</p>
                    <h1 className="font-bold text-4xl mb-5">{heroData.name}</h1>
                    {/* Description */}
                    <p className="text-slate-700">I am an Information Systems student at Gunadarma University with a passion </p>
                    <p className="text-slate-700">for programming, system development, and design tools.  I have experience </p>
                    <p className="text-slate-700">in data science and strong skills in Python, SQL, and data visualization</p>   
                
                    {/* Social Buttons */}
                    {/* <div className="flex mt-6 space-x-7 cursor-pointer">
                        <BsGithub size={35} className="hover:opacity-75 rounded-full transitio-transform duration-500 hover:scale-115"/>
                        <BsLinkedin size={35} className="hover:opacity-75 rounded-full transitio-transform duration-500 hover:scale-115"/>
                        <MdEmail size={35} className="hover:opacity-75 rounded-full transitio-transform duration-500 hover:scale-115"/>
                    </div> */}

                    {/* Social Buttons with Map*/}
                    <div className="flex mt-6 space-x-7 cursor-pointer">
                        {heroData.socialLinks.map((social, index) => {
                            const IconComponent = social.icon === 'Github' ? BsGithub : social.icon === 'Linkedin' ? BsLinkedin : MdEmail;
                            return (
                                <a key={index} href={social.url} className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-100 hover:-translate-y-1">
                                    <IconComponent size={35} className="hover:opacity-75 rounded-full transitio-transform duration-500"/>
                                </a>
                            );
                        })}
                    </div>
                    
                </div>
            </div>

            <div className="mt-10 md:mt-0 md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 flex justify-center animate-bounce">
                <button onClick={scrollToAbout} className="group flex flex-col items-center text-gray-600 hover:text-black transition-colors cursor-pointer">
                    <span className="text-sm mb-2">Learn More</span>
                    <ArrowDown className="w-6 h-6 group-hover:transform group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default Hero;