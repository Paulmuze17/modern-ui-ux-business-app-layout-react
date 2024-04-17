import React from 'react'

interface IButtonProps {
	styles?: string;
	text: string;
}

function Button({ styles, text }: IButtonProps) {
	return (
		<button className={`rounded-[10px] capitalize py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} type="button">{ text }</button>
	)
}

export default Button
