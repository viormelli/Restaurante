"use client";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <section className="" style={{
        position: 'relative',
        height: '100%',
        padding: '15px',
        padding: '0 70px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#3d4814'
      }}>
        <div className="container">
          <div className="content">
            {/* Swiper slide item 1 */}
            <div className="card" style={{
              position: 'relative',
              background: '#f3a620',
              borderRadius: "20px",
              margin: '20px 0',
              boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
            }}>
              <div className="card-content" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                widht:'160px',
                position: 'relative',
                zIndex: '100',
              }}>


                {/* Profile image */}
                <div className="image" >
                  <img src="beiju.svg" alt="Profile Image 1" style={{
                    height: '185px',
                    width: '150px',
                    borderRadius: '50%',
                    padding: '3px',
                    background: 'transparent'
                  }} />
                </div>
                {/* Social media icons */}
                <div className="media-icons" style={{
                  position: 'absolute',
                  top: '10px',
                  right: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <a>
                    <CiSearch />
                  </a>
                </div>
                {/* Name and profession */}
                <div className="name-profession" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '10px',
                  color:'#3d4814' ,
                }}>
                  <span className="name" style={{fontSize: '20px', fontWeight:'600'}}>Moqueca</span>
                  <span className="profession" style={{fontSize: '15px', fontWeight: '500'}}>bla bla bla bla bla</span>
                </div>
                {/* Rating */}
                <div className="rating" style={{  display: 'flex', alignItems: 'center', marginTop: '18px'}}>
                  {/* <i className="fas fa-star" style={{ fontSize:'18px', margin:'0 2px', color: '#7d2ae8'}} /> */}
                  <FaStar style={{ fontSize:'18px', margin:'0 2px', color: '#3d4814'}} />
                  <FaStar style={{ fontSize:'18px', margin:'0 2px', color: '#3d4814'}} />
                  <FaStar style={{ fontSize:'18px', margin:'0 2px', color: '#3d4814'}} />
                  <FaStar style={{ fontSize:'18px', margin:'0 2px', color: '#3d4814'}} />
                  <FaStar style={{ fontSize:'18px', margin:'0 2px', color: '#3d4814'}} />

                </div>
                {/* Buttons */}
                <div className="button" style={{width: '100%', display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px'}}>
                  <button className="aboutMe" style={{ background: '#7d2ae8', outline: 'none', border: 'none', color: '#fff', padding: '8px 22px',borderRadius: '20px', fontSize: '14px', transition: 'all 0.3s ease', cursor: 'pointer'}}>About Me</button>
                  <button className="hireMe">Hire Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >
    </>
  );
}
