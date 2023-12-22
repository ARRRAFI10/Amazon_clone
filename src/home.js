import React from 'react';
import amazonImage from './amazon.jpg';
import bag from './bag.jpg';
import chair from './chair.jpg';
import cpuImage from './cpu.jpg';
import "./home.css";
import ipod from './ipod.jpg';
import laptop from './laptop.jpg';
import monitor from './monitor.jpg';
import Product from './product.js';
import speaker from './speaker.jpg';

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={amazonImage} alt="Amazon" />
      <div className="home__row">
        <Product 
            id="1"
            title="iBuyPower Y40 Gaming PC Computer Desktop Y40WI7N46T01 (Intel Core i7 13700KF, RTX 4060Ti 8GB, 32GB DDR5 5200 RGB (16x2), 2TB NVMe SSD, Windows 11 Home)"
            price={50000}
            rating={5}
            image={cpuImage}
        />
        <Product 
            id="2"
            title="OnePlus Pad 11.61 LCD Display, 8GB RAM,128GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet"
            price={100000}
            rating={4}
            image={ipod}
        />
      </div>

      <div className="home__row">
        <Product 
            id="3"
            title="TP-Link Deco AXE5400 Tri-Band WiFi 6E Mesh System(Deco XE75) - Covers up to 5500 Sq.Ft, Replaces WiFi Router and Extender, AI-Driven Mesh, New 6GHz Band, 2-Pack"
            price={5500}
            rating={3}
            image={speaker}
        />
        <Product 
            id="4"
            title="PHILIPS 322E1C 32 Super-Curved Frameless Monitor, Full HD VA, 104% sRGB, Adaptive-Sync 75Hz, VESA, 4Yr Advance Replacement Warranty, Black/Silver"
            price={10000}
            rating={3}
            image={monitor}
        />
        <Product 
            id="5"
            title="Maelstrom Travel Backpack for Women Men,35L Laptop Backpack Fits 17-Inch Laptop,Waterproof Carry On Backpack for Airplanes with Detachable Crossbody Bag&Shoe Compartment,Black, Large"
            price={11900}
            rating={3}
            image={bag}
        />
      </div>
      <div className="home__row">
        <Product 
                id="6"
                title="acer Aspire 5 A515-57G-58R7 Slim Laptop | 15.6 Full HD IPS | Intel Core i5-1240P | NVIDIA GeForce RTX 2050 | 8GB DDR4 | 512GB SSD | Wi-Fi 6 | Thunderbolt 4 | Fingerprint Reader | Backlit KB | Win 11"
                price={150000}
                rating={3}
                image={laptop}
            />
            <Product 
                id="7"
                title="BestOffice High-Back Gaming Chair PC Office Chair Computer Racing Chair PU Desk Task Chair Ergonomic Executive Swivel Rolling Chair with Lumbar Support for Back Pain Women, Men,White"
                price={10000}
                rating={5}
                image={chair}
            />
      </div>
    </div>
  );
}

export default Home;
