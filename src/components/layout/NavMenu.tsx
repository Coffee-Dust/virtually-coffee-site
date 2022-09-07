import { NavLink } from "react-router-dom"
import React from "react"
import AppLogo from "./AppLogo"

export default function NavMenu(props: {toggleMenu: ()=>void, mobileMenuIsOpen: boolean}) {
	const navRef = React.useRef<HTMLDivElement>(null)

	function calcScaleFactor(element: Element): string {
		const scaleFactor: Number = Number(getComputedStyle(element).width.slice(0, 3)) * 0.0065
		return `--scale-factor: ${(scaleFactor > 1.1) ? scaleFactor : 1.1};`
	}

	React.useLayoutEffect(()=> {
		const navArea = navRef.current as HTMLDivElement
		navArea.setAttribute('style', calcScaleFactor(navArea))
	}, [])

	const onNavClick = () => {
		document.querySelector(".App-content-container")?.scrollTo({ top: 0 })
		props.toggleMenu()
	}

	return (
		<div className={"App-nav-menu" + ((props.mobileMenuIsOpen) ? " opened" : "")} >
			<AppLogo isStatic={false}/>
			<div className="Mobile-open-menu" onClick={props.toggleMenu}><span>menu</span></div>
			<nav ref={navRef}>
				<NavLink exact to="/" onClick={onNavClick}>Home</NavLink>

				<NavLink to="/virtually8bit" onClick={onNavClick}>Virtually 8-bit</NavLink>

				<NavLink to="/support" onClick={onNavClick}>Support</NavLink>
				
				<a href="https://john.virtually.coffee">John Dust</a>
			</nav>	
			{/* <SocialLinks /> */}
		</div>
	);
}