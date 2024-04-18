import React from 'react'
import styles, { layout} from '../style'
import { features } from '../constants'
import Button from './Button'

function Business() {
	return (
		<section id="features" className={layout.section} >
			<div className={layout.sectionInfo} data-aos="fade-right" data-aos-duration="1500">
				<h2 className={`${styles.heading2} mb-5`}>You do the business, <br className="sm:block hidden" />we’ll handle the money.</h2>
				<p className={`${styles.paragraph} max-w-[470px] mb-10`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae ea corrupti earum? Nulla velit reprehenderit ipsum corrupti consequuntur facilis? Nesciunt, voluptatibus expedita! Totam, quas saepe.</p>

				<Button text={"Get started"} styles={""} />
			</div>
			<div className={`${layout.sectionImg} flex-col`} data-aos="fade-left" data-aos-duration="1500">
				{ features.map((feature, index) => (
					<FeatureCard key={feature.id} itemIndex={index} featureData={feature} />
				)) }
			</div>
		</section>
	)
}
export default Business

interface IFeatureCardProps {
	itemIndex: React.Key;
	featureData: {
		id?: string;
		icon: string;
		title: string;
		content: string;
	}
}

// -------------------------
// props sending a different way
{/* <FeatureCard key={feature.id} {...feature} itemIndex={index} /> */}

// function FeatureCard({ icon, title, content, itemIndex }) {}

function FeatureCard({ itemIndex, featureData }: IFeatureCardProps) {
	const {icon, title, content} = featureData;

	return (
		<div className={`flex flex-row p-6 rounded-[20px] ${itemIndex !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
			<div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue mr-3`}>
				<img className="w-1/2 h-1/2 object-contain" src={icon} alt="icon" />
			</div>
			<div className="flex-1 flex flex-col">
				<h4 className="font-poppins font-semibold text-white text-[18px] leading-6 mb-1">{ title }</h4>
				<p className="font-poppins font-normal text-dimWhite text-[16px] leading-6 mb-1">{ content }</p>
			</div>
		</div>
	)
}
