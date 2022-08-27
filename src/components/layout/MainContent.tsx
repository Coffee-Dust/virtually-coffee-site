import {ReactNode} from "react";
import styleFX from "../../assets/styles/effects.module.css"

interface PageContent {
	children?: ReactNode,
	onClickCallback?: ()=>void
}
export default function MainContent({children, onClickCallback}: PageContent) {
	return(
		<main className={`App-content-container ${styleFX.blurBackdrop}`} onClick={onClickCallback}>
			{children}
		</main>
	)
}