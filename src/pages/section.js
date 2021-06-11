import Logo from "../components/logo"
import About from './about'
import Contact from "./contact"

const Section = () => {
  return (
    <>
      <section className='header' >
        <div className='container'>
          <Logo />

          <div className='header-text'>
            <h1>Bridging the gap to building on Ethereum and web3 accessiblity</h1>

            <span className='span'></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam mollitia, error quod quae adipisci blanditiis sed itaque! Totam, earum, doloribus inventore molestias, porro quia distinctio voluptatem error quibusdam dicta quo? </p>

            <button className='common-btn'>Get Started</button>

          </div>
        </div>
      </section>
      <About />
      <Contact />

    </>
  )
}

export default Section
