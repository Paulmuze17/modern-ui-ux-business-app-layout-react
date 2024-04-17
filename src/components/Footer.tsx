import { logo } from "../assets"
import { companyInfo, footerLinks, socialMedia } from "../constants"
import styles from "../style"

function Footer() {
	return (
		<footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full gap-10`}>
				<div className="flex-1 flex flex-col justify-start">
					<img className="w-[266px] h-[72px] origin-center mb-4" src={ logo } alt="hoobank" />
					<p className={`${styles.paragraph} max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
				</div>

				<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap">
					{ footerLinks.map((footerLink) => (
						<div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px] gap-6">
							<h4 className="font-poppins font-medium text-[18px] leading-7 text-white">{ footerLink.title }</h4>
							<ul className="list-none flex flex-col gap-3">
							{ footerLink.links.map((link) => (
								<li key={link.name} className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite  hover:text-secondary cursor-pointer`}><a href={link.link}>{ link.name }</a></li>
							))}
							</ul>
						</div>
					)) }
				</div>
			</div>

			<div className="w-full flex md:justify-between items-center gap-6 md:flex-row flex-col pt-8 border-t-[1px] border-t-[#3f3e45]">
				<p className="font-poppins font-normal text-[18px] leading-7 text-white text-center">Copyright &copy; 2024 {companyInfo.name}. All Rights Reserved.</p>

				<ul className="flex flex-row gap-6">
					{ socialMedia.map((item) => (
						<li key={item.id}><a className="w-[21px] h-[21px]" aria-label={item.name} href={item.link}><img className="w-full h-full object-contain" src={item.icon} alt={item.name} /></a></li>
					)) }
				</ul>
			</div>
		</footer>
	)
}

export default Footer
