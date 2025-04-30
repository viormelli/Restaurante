"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DepoimentosSection() {
    return (
        <>
            <section className="" style={{
                position: 'relative',
                height: ' 450px',
                padding: '15px',
                padding: '0 70px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <HiArrowNarrowLeft />
                <div className="container"> 
                    <div className="title" style={{textAlign:'center', color:'#f3a620', marginTop:'20px'}}>
                                <h1>Depoimentos dos nossos clientes</h1>
                            </div>
                    <div className="content">
                       
                        <div className="card" style={{
                            position: 'relative',
                            background: '#fff',
                            borderRadius: "20px",
                            margin: '20px 0',
                            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
                            border:'none'
                        }}>
                           
                            <div className="card-content" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '30px',
                                position: 'relative',
                                zIndex: '100',
                            }}>


                                {/* Profile image */}
                                <div className="image" >
                                    <img src="MulherUm.svg" alt="Profile Image 1" style={{
                                        height: '185px',
                                        width: '150px',
                                        borderRadius: '50%',
                                        padding: '3px',
                                        background: 'transparent',
                                        border: 'none'
                                    }} />
                                </div>
                                {/* Name and profession */}
                                <div className="name-profession" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginTop: '10px'
                                }}>
                                    <span className="name" style={{ fontSize: '20px', fontWeight: '60', color: '#f3a620' }}>Juliana M.</span>
                                    <span className="profession" style={{ fontSize: '18px', fontWeight: '50', textAlign: 'center' }}>Comida incrível e propósito inspirador! Fui pela curiosidade gastronômica e saí apaixonada pela proposta do restaurante. Os pratos têm sabores autênticos da culinária africana e asiática, e o cardápio traz histórias de comunidades indígenas que o restaurante apoia. Saber que parte do valor é revertido para projetos sociais me fez sentir parte de algo maior.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HiArrowNarrowRight />
            </section >
        </>
    );
}
