// import React from 'react'
// import { card } from '../assets';
import styles from '../style';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

function Testimonials() {
	return (
		<section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
			<div className="absolute z-0 w-3/5 h-3/5 -right-1/2 rounded-full blue__gradient"></div>

			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className={`${styles.heading2} md:mt-0 mt-6`}>What people are <br className="sm:block hidden" />saying about us</h2>
				<div className="w-full">
					<p className={`${styles.paragraph} text-left max-w-[450px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptas, architecto unde incidunt laboriosam consectetur.</p>
				</div>
			</div>

			<div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
				{ feedback.map((card) => (
					<FeedbackCard key={card.id} {...card} />
				)) }
			</div>
		</section>
	)
}

export default Testimonials
