import { useState } from "react";
import AppLogo from "./AppLogo"
import NavMenu from "./NavMenu"
import MainContent from "./MainContent";
import Routes from "../../Routes"

const Layout = ()=> {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
	const toggleMenu = ()=> {
		setMobileMenuIsOpen(!mobileMenuIsOpen)
	}

	return (
		<div className="App">
			<AppLogo isStatic={true} />
			<NavMenu toggleMenu={toggleMenu} mobileMenuIsOpen={mobileMenuIsOpen} />
			<MainContent onClickCallback={()=>{setMobileMenuIsOpen(false)}}>
				<Routes/>
			</MainContent>
		</div>
	)
}

export default Layout