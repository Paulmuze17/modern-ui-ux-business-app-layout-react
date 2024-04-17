import styles from "./style";
import Components from "./components";
import 'animate.css';

function App() {
	return (
		<div>
			<div className="bg-primary w-full overflow-hidden">
				<div className={`${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Components.NavBar />
					</div>
				</div>

				<div className={`bg-primary ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Components.Hero />
					</div>
				</div>

				<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
					<div className={`${styles.boxWidth}`}>
						<Components.Stats />
						<Components.Business />
						<Components.Billing />
						<Components.CardDeal />
						<Components.Testimonials />
						<Components.Clients />
						<Components.CallToAction />
						<Components.Footer />
					</div>
				</div>
			</div>
		</div>
	)
}

// const App = () => (
// 	<></>
// );

export default App
