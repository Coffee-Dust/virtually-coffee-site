import React from 'react'
import style from '../assets/styles/pages/virtually8bit.module.css'
import DemoVideo from '../components/pages/virtually8bit/DemoVideo'

const Virtually8bit = () => {

	return (
		<div className={style.page}>

			<div className={style.title}>
				<h1>Virtually 8-bit!</h1>
				<a href="//download.virtually8bit.virtually.coffee"><img src="/images/Download_on_the_App_Store_Badge.svg" alt="download" /></a>
			</div>

			<hr color='#72f093'/>

			<div className={style.intro}>
				<h2>This isn&apos;t just a game or an app. <br />It&apos;s an entire handheld gaming console!</h2>
				<p>With gaming consoles, you aren&apos;t just limited to playing one game. <br />It&apos;s the same on Virtually 8-bit! It comes with multiple different games right out of the box!</p>
			</div>

			<h2 style={{ fontSize: "2.2em", color: 'white', marginTop: 90 }}>Available Games</h2>
			<hr style={{ width: '80%' }} />
			<div className={style.demoVideosContainer} style={{ marginTop: 20 }}>

				{/* Game Demo - Meteoroids */}
				<div className={style.demoVideo}>

					<div className={style.gameTitle}>
						<img src="images/meteoroidsAssets/spaceship.png" alt="" />
						<h2>Meteoroids</h2>
						<span><img src="images/meteoroidsAssets/asteroid2Frozen.png" alt="" /></span>
					</div>

					<p className={style.demoCaption}>Playing one of the available games, a space-shooter called Meteoroids</p>
					<DemoVideo id="demo1" videoID='kkipzYJs21U' mobileThumbnail='meteoroids1.PNG'/>

					{/* Sub Video - Meteoroids features */}
					<div className={style.demoVideo} style={{ float: 'right', width: '85%', textAlign: 'right' }}>
						<h3 style={{ fontSize: '1.5em' }}>Powerups & Upgrades!</h3>
						<p className={style.demoCaption}>Demonstration of navigating menus and purchasing features on Meteoroids</p>
						<DemoVideo id="demo1.1" videoID='TrNs3jTOOSk' mobileThumbnail='meteoroids2.1.PNG' />
					</div>
				</div>

				{/* Game Demo - Bit-Breaker */}
				<div className={style.demoVideo}>

					<div className={style.gameTitle}>
						<img src="images/bitbreakerAssets/ballnpaddle.png" alt="" />
						<h2>Bit-Breaker</h2>
						<span><img src="images/bitbreakerAssets/blockDamaged.png" alt="" /></span>
					</div>

					<p className={style.demoCaption}>Playing BitBreaker, a Breakout style game currently in early access.</p>
					<DemoVideo id='demo2' videoID='RTu6rLbiNuY' mobileThumbnail='bitbreaker1.PNG'/>
				</div>

				<p>And there will be more games available in the future!</p>
			</div>

		</div>
	)
}

export default Virtually8bit
