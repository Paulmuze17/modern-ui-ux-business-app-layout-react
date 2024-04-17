import React from 'react'
import { quotes } from '../assets';

interface IFeedbackCardProps {
	content: string;
	name: string;
	title: string;
	img: string;
}

function FeedbackCard({ content, name, title, img}: IFeedbackCardProps) {
	return (
		<div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
			<img className="w-[42px] h-[27px] object-contain" src={ quotes } alt="double quotes" />
			<p className="font-poppins font-normal text-[18px] leading-8 text-white my-10">{ content }</p>

			<div className="flex flex-row gap-4 items-center">
				<img className="w-12 h-12 rounded-full" src={ img } alt={name} />
				<div className="flex flex-col">
					<h4 className="font-poppins font-semibold text-[20px] leading-8 text-white">{ name }</h4>
					<p className="font-poppins font-normal text-[16px] leading-6 text-dimWhite">{ title }</p>
				</div>
			</div>
		</div>
	)
}

export default FeedbackCard
