import styles from "../style"
import Button from "./Button"

function CallToAction() {
	return (
		<section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow gap-10`}>
			<div className="flex-1 flex flex-col gap-5">
				<h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
				<p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut commodi ex iusto eligendi, eos sapiente.</p>
			</div>
			<div className={`${styles.flexCenter} sm:ml-10`}>
				<Button text={"Get Started"} />
			</div>
		</section>
	)
}

export default CallToAction
