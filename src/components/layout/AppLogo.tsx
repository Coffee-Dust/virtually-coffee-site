
export default function AppLogo(props: { isStatic: boolean }) {
	return (
		<img src="/images/logo.svg" className={props.isStatic ? "App-logo-static" : "App-logo"} alt="logo"/>
	)
}