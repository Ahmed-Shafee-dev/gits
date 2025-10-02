import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import CustomCountainer from "../customContainer/CustomCountainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

export default function Banner({ customclass, data }) {
    return (
        <>
            <section>
                <CustomCountainer>
                    <div className="h-[80vh] rounded-4xl overflow-hidden">
                        <Swiper
                            effect={"fade"}
                            modules={[Autoplay, EffectFade]}
                            speed={2000}
                            autoplay={{
                                delay: 2500,
                            }}>
                            {data.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div className="Banner relative h-[82vh] bg-red-800">
                                        <div className="Banner-overlay absolute top-0 left-0 w-full h-full px-8 py-4">
                                            <h2 className="text-3xl font-medium mb-4 text-amber-700">{item.title}</h2>
                                            <p className="text-2xl font-sans text-amber- max-w-[22em]">{item.description}</p>
                                        </div>
                                        <img className="Banner-img w-full h-full" src={item.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <NavLink className=" text-white rounded-r-2xl bg-black text-4xl font-semibold py-2 px-4 top-147 left-2 absolute hover:text-yellow-400 duration-300 animate-pulse" to={"/GetStarted"}>
                            Get Started
                        </NavLink>
                    </div>
                </CustomCountainer>
            </section>
        </>
    );
}
