import React, { useState } from 'react';
import './header.css'
import logo from '../../assets/logo.svg';
import { GoPerson } from "react-icons/go";
import { CgShoppingCart } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineEuroSymbol } from "react-icons/md";


function header() {

    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <header>
            <a href="#"><img src={logo} className='logo' /></a>

            <ul className='headerul'>
                <li><a href="#">Multi-day tours</a></li>
                <li><a href="#">Day trips</a></li>
                <li><a href="#">Visa-free shore tours</a></li>
                <li><a href="#">Visa informations</a></li>
            </ul>
            <div className="btnsdv">
                <div className="lftbtnsdv">

                    <button><GoPerson size={20} className='icon' strokeWidth={1} /></button>
                    <button><CgShoppingCart size={20} className='icon' /></button>
                    <button onClick={handleClick}><MdOutlineEuroSymbol size={20} className='icon' /> <RiArrowDownSLine strokeWidth={1} size={16} style={{ transform: isRotated ? 'rotate(180deg)' : 'none' }} /></button>

                </div>

                <div className="rghtbtnsdv">
                    <button className='chcktbtn'>Checkout</button>
                </div>
            </div>
        </header>
    )
}

export default header