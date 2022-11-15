import style from '../assets/styles/pages/index.module.css'

const Home = () => (
  <div className={style.page}>

    <div className={style.title}>
      <h1>Welcome to Virtually.Coffee!</h1>
      <hr />
    </div>

    <a href="https://apps.apple.com/us/app/virtually-8-bit-game-console/id1634501013" target={"_blank"}>
    <img className={style.virt8bitImage} src="/images/downloadVirtually8bit.svg" alt="download" />
    </a>

    <div className={style.virt8bit}>
      <h2>The Studio Behind <em style={{color: 'white'}}>Virtually 8-bit!</em></h2>
      <p>It&apos; s the first mobile game of it&apos;s kind. It simulates a classic handheld gaming console and features multiple different games to play all inside the same app!</p>
      <h3>Download today on the <a href="https://apps.apple.com/us/app/virtually-8-bit-game-console/id1634501013" target={"_blank"}>App Store</a>!</h3>
    </div>

    <a href="https://john.virtually.coffee" className={style.john}>
      <img src="/images/my_face.jpg" alt="my_face" />
      <h2>The Developer - <span style={{color: 'white'}}>John Dust</span></h2>
      <h3>Learn more about the person responsible for everything at Virtually.Coffee including the game Virtually 8-bit!</h3>
    </a>
  </div>
)

export default Home
