import React, {useRef, useEffect} from 'react';
import { motion } from "framer-motion"
import style from "./Home.module.css"
import Typed from 'typed.js'
import { Link } from 'react-router-dom'
import coupleTraining from "../../assets/images/coupleTrain.svg"
import puzzlePiece from "../../assets/images/puzzlePiece.svg"
import girlFlyingBook from "../../assets/images/girlFlyingBook.svg"
import boyOverBook from "../../assets/images/boyOverBook.svg"
import { Helmet } from 'react-helmet-async';

function Home() {

  // Styling the header text animation
  const header = useRef(null);
  useEffect(() => {
    const typed = new Typed(header.current, {
      strings: ['A Healthy <span style="color:var(--accent-green); background-color:transparent";>Body</style>','Sustains a Healthy <span style="color:var(--accent-green); background-color:transparent">Mind</span>', '<span style="color:var(--accent-green); background-color:transparent">Mens Sana in Corpore Sano</span>'],
      typeSpeed: 50,
      loop:true,
      loopCount: Infinity,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <Helmet>
    <title>Croton - Home</title>
        <meta
          name="description"
          content="Explore Croton, Your Gateway To a Healthy Life"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Croton - Home" />
        <meta
          property="og:description"
          content="Explore Croton, Your Gateway To a Healthy Life"
        />
    </Helmet>
    <main className={style.wrapper}>
      <section className={style.hero}>
        <span ref={header} className={style.header}></span>
        <Link to='/signup' className={style.callToAction}>Join Now !</Link>
      </section>
      <section
       className={style.sections}>
        <h2 className={style.sectionHeader}>
            What's Croton
        </h2>
        <article 
        className={style.content}>
          <motion.p className={style.text}
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1}}
              transition={{
                ease: "easeIn",
                stiffness: 260,
                damping: 20,
                duration: 1,
            }}
          >
              Founded in C. 710 BC as the Achaean colony of <i className={style.italic}>Kroton</i>.<br/>
              <span className={style.green}>Croton  </span>was especially celebrated for its success in the olympic games from 588 BC onward.
              It was the home of great athletes and philossophers alike.<br/>
              Hence the symbolic meaning that you can become better by learning and training.
          </motion.p>
          <img src={coupleTraining} height={'400px'} width={'400px'} loading='lazy' alt='couple training' />
        </article>
      </section>
      <section className={style.sections}>
        <h2 className={style.sectionHeader}>
          What We Offer
        </h2>
        <article className={style.content}>
        <img src={puzzlePiece} height={'400px'} width={'400px'} loading='lazy' alt='puzzle piece' />
        <motion.div className={style.text}
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{
              ease: "easeIn",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
        >
        <span className={style.subHeader}>Ready To Count With us ?</span>
          <motion.ul className={style.list}
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1}}
                      transition={{
                        ease: "easeIn",
                        stiffness: 260,
                        damping: 20,
                        duration: 1,
                      }}
          >
            <li className={style.listItem}>We offer a huge library of <span className={style.green}>exercices</span> and <span className={style.green}>books</span>, to suit all your preferences!</li>
            <li className={style.listItem}>We have a beautiful Arcade that has multiple <span className={style.green}>games</span> for you to try and boost your instincts!</li>
            <li className={style.listItem}>If your looking to go on a diet and start eating healthy, we've got that covered for you as well within our <span className={style.green}>nutriction center</span> section, you will find <span className={style.green}>recipes</span> suggested by different users for you to pick whatever suits your diet plan.</li>
            <li className={style.listItem}>Ever felt like you wanted to test your <span className={style.green}>IQ</span> ? Well, guess what, there's also a place for that within our pages ! Feel free to take on different tests anytime you want.</li>
          </motion.ul>
        </motion.div>
        </article>
      </section>
      <section className={style.sections}>
        <h2 className={style.sectionHeader}>
          Our Aim
        </h2>
        <article className={style.content}>
        <img src={boyOverBook} height={'400px'} width={'400px'} loading='lazy' alt='boy over books' />
            <motion.p className={`${style.text} ${style.scrollable}`}
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{
              ease: "easeIn",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            >
            Our aim is to help build a better society with a better life style, most people focus on either building their strength , or their mind productivity. Only few really focus on the importance of builfing both sides for a healthier lifestyle and a more productive society.<br/>
            The idea is originated from the old greek civilization , <i className={style.italic}>-Hence the naming-</i>, Where almost all the population was skilled in various fields like philosophy, strengh, medicine, and many more. People back then were both warriors and great scholars at the same time, the criterias that made a very strong civilization that left its findings till the present day.
            </motion.p>
        <img src={girlFlyingBook} height={'400px'} width={'400px'} loading='lazy' alt='girl flying on book' />
        </article>
      </section>
      <section className={style.sections}>
        <h2 className={style.sectionHeader}>
          So what are you waiting for ?<br/>
          Start Now And Enjoy building a Better Life Style !
        </h2>
        <article className={style.content}>
          <div className={style.btnContainer}>
            Get Started
            <Link className={style.login} to='/login'>Log in</Link>
            <Link className={style.signup} to='/signup'>Sign up</Link>
          </div>
        </article>
      </section>
    </main>
    </>
  )
}

export default Home