import React from 'react'
import styles from "../style";
import { discount, robot } from "../assets";
import Components from '.';

function Hero() {
	return (
		<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
			<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
				<div className="animate__delay-2s animate__slow animate__animated animate__fadeIn flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<img className="w-[32px] h-[32px] mr-2" src={discount} alt="discount" />
					<p className={`${styles.paragraph} capitalize`}><span className="text-white">20%</span> discount for {" "}
					<span className="text-white">1 Month</span> account</p>
				</div>

				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="animate__slow animate__animated animate__fadeInLeft capitalize flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"><span className="">the next</span> <br className="sm:block hidden" /><span className=" text-gradient">generation</span></h1>

					<div className="animate__delay-1s animate__slow animate__animated animate__fadeInDownBig ss:flex hidden md:mr-4 mr-0">
						<Components.GetStarted />
					</div>
				</div>

				<h2 className="animate__slower animate__animated animate__fadeInLeft capitalize font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full mb-5">payment method.</h2>
				<p className={`animate__slower animate__animated animate__fadeInUp ${styles.paragraph} max-w-[470px] `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut vero unde qui aliquid harum officiis eligendi reiciendis debitis sint deserunt voluptatem alias numquam, dolorem, laboriosam iusto. Quasi, excepturi a.</p>
			</div>
			<div className={`animate__animated animate__slideInRight flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
			{/* <div className={``}> */}
				<img className="w-full h-full relative z-[5] object-contain" src={robot} alt="billing" />

				<div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>
				<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
				<div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
			</div>
			<div className={`ss:hidden ${styles.flexCenter}`}>
				<Components.GetStarted />
			</div>
		</section>
	)
}

export default Hero
