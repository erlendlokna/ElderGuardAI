import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';

import Hamburger from 'hamburger-react';
import * as ai from 'react-icons/ai';
import * as md from 'react-icons/md';
import * as bi from 'react-icons/bi';
import { TbHeartRateMonitor } from "react-icons/tb";
import { BiBrain } from 'react-icons/bi';
import { CiGps } from 'react-icons/ci';

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev);}}>
              {" "}
              <Hamburger toggled={expandNavbar}/>
            </button>
        </div>

        <div className='links'>
          
            <Link to='/'> < ai.AiOutlineHome /> Home </Link>
            <Link to='/Vitals'> < TbHeartRateMonitor /> Vitals </Link>
            <Link to='/Position'> < CiGps /> Position </Link>
            <Link to='/Stream'> < BiBrain /> ElderGuardian </Link>

        </div>
    </div>
  )
}

export default Navbar