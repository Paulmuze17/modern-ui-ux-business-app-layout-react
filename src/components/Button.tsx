import React from 'react'

function Button({ styles, text }) {
	return (
		<button className={`rounded-lg capitalize py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`} type="button">{ text }</button>
	)
}

export default Button
