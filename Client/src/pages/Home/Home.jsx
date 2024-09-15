import { NavLink } from "react-router-dom"
import {Analytics} from "../../components/Analytics";
import {useAuth} from "../../store/Auth"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Wheather from "./Components/Wheather";
import CropFilteration from "./Components/CropFilteration";
import Profile from "./Components/Profile";
import CropAssesment from './Components/CropAssesment';
import Nutrients from "./Components/Nutrients";
import Activities from './Components/Activities';
import Footer from './Components/Footer';
import { Navbar } from "../../components/Navbar";

export const Home=()=>{

    const {user} =useAuth();
   
   
      
    return (
        <>
        <main className="bg-blue-200">
            <Navbar/>
            <section className="px-28">
                <div className="  grid-two-cols">
                <div className=' '>
                        <div className=' '>
 
  <Wheather/>
  <div className='flex gap-6 '>
  <Profile className="flex-1"/>
  <CropAssesment className="flex-1"/>
</div>


  <div className='flex gap-6'>
  {/* <Nutrients className='w-1/2'/>
  <Activities className='w-1/2'/> */}
  </div>
  <CropFilteration />
  <Footer/>
</div>
                        
                       
                        </div>

                       
                        </div>
                        </section>
                        </main>
                        </>
    )
}