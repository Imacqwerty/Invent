import { Link } from 'react-router-dom';
import style from './styles/Homestyle.module.css';
import { useRef, useEffect, useState } from 'react';

function Home() {
const hero4Ref = useRef(null);
const titleref = useRef(null);
const homeref = useRef(null);

//Below is for Parallax Effect
const hero1Ref = useRef(null);
const hero2Ref = useRef(null);
const hero3Ref = useRef(null);
const [isHero1Visible, setIsHero1Visible] = useState(false);
const [isHero2Visible, setIsHero2Visible] = useState(false);
const [isHero3Visible, setIsHero3Visible] = useState(false);
const [isHero4Visible, setIsHero4Visible] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    // Hero 1
    if (hero1Ref.current) {
      const rect = hero1Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsHero1Visible(true);
      } else {
        setIsHero1Visible(false);
      }
    }

    // Hero 2
    if (hero2Ref.current) {
      const rect = hero2Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsHero2Visible(true);
      } else {
        setIsHero2Visible(false);
      }
    }

    // Hero 3
    if (hero3Ref.current) {
      const rect = hero3Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsHero3Visible(true);
      } else {
        setIsHero3Visible(false);
      }
    }

    // Hero 4
    if (hero4Ref.current) {
      const rect = hero4Ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsHero4Visible(true);
      } else {
        setIsHero4Visible(false);
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

//Ending for Parallax Effect


  const scrollToHero4 = () => {
    hero4Ref.current?.scrollIntoView({ behavior: 'smooth'});
  }

  const scrolltoproj = () => {
    titleref.current?.scrollIntoView({ behavior: 'smooth'});
  }

  const scrolltohome = () => {
    homeref.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    
    <div className={style.wholecanvas}  ref={homeref}>
      <nav className={style.nav}>
      <div className={style.webname}>Invent</div>
      <div className={style.navlinks}>
      
        <div className={style.linkstyle}><a onClick={scrolltohome} style={{ cursor: 'pointer'}}>Home</a></div>
        <div className={style.linkstyle}><a onClick={scrolltoproj} style={{ cursor: 'pointer'}}>Projects</a></div>
        <div className={style.linkstyle}><a onClick={scrollToHero4} style={{ cursor: 'pointer'}}>About Me</a></div>

      </div>
      </nav>



    {/*HERO 1 */}
    <section className={`${style.homehero1} ${isHero1Visible ? style.visible : ''}`} ref={hero1Ref}>
      <img src="/Invent/1.jpg" className={style.hero1img}></img>
        <div className={style.hero1intro1}>
          <h1><strong>Welcome to Invent</strong></h1>
          <p>Created with ReactJS Framework</p>
          <p>By Kent Quilao</p>
          </div>
        
    </section>
    {/*END HERO 1 */}

        {/*TITLE */}
    <section className={style.title} ref={titleref}>
      <div><h1>PROJECTS</h1></div>
    </section>

    {/*HERO 2 */}
    <section className={`${style.homehero2} ${isHero2Visible ? style.visible : ''}`} ref={hero2Ref}>
      <div className={style.hero2intro1}>
        <h1>Alumni System</h1>
        <p>Made with HTML, CSS, JavaScript, Php and MySQL</p>
        <p>By Kent Quilao</p>
        </div>
        <div className={style.hero2intro2}>
          <img src="/Invent/alumni.png"></img>
        </div>
    </section>
    {/*END HERO 2 */}

    {/*HERO 3 */}

    <section className={`${style.homehero3} ${isHero3Visible ? style.visible : ''}`} ref={hero3Ref}>

       <div className={style.hero3intro2}>
        <img src="/Invent/Ace.png"></img>
      </div>

      <div className={style.hero3intro1}>
        <h1>Scholarship Submission Application</h1>
        <p>Made with HTML, CSS, JavaScript, Php and MySQL</p>
        <p>By Kent Quilao</p>
      </div>
      
    </section>
    {/*END HERO 3 */}

        {/*HERO 4 */}

    <section className={`${style.homehero4} ${isHero4Visible ? style.visible : ''}`} ref={hero4Ref}>

       <div className={style.hero4intro1}>
        <h1>ABOUT ME</h1><br />
        <p>Computer Science student with hands-on experience in IT support and networking, including LAN/WLAN troubleshooting, VLAN configuration, and user support in academic environments. 
         <br /> Familiarity in React and Laravel web development. Seeking an IT Support, Networking, or Web Development Internship to expand technical expertise, strengthen problem-solving skills, 
          and gain practical experience with industry-standard technologies and best practices.</p>
      </div>
      <br /><br />
      <div className={style.hero4intro2} ref={hero4Ref}>
        <h2>Technology Stacks</h2>
        <div className={style.techstacks}>
          <div className={style.techimage}><img src="/Invent/react.png" className={style.img1}/></div>
          <div className={style.techimage}><img src="/Invent/laravel.png" className={style.img2}/></div>
          <div className={style.techimage}><img src="/Invent/html.png" className={style.img3}/></div>
          <div className={style.techimage}><img src="/Invent/css.png" className={style.img4}/></div>
          <div className={style.techimage}><img src="/Invent/javascript.png" className={style.img5}/></div>

          
          
          
          
          

        </div>
      </div>
      
    </section>
    {/*END HERO 4 */}

    <footer className={style.homefooter}>
      <p>Invent 2026</p>
      <p>Made with ReactJS</p>
      <a href="https://imacqwerty.github.io/Hireme-Kent/" className={style.profile2}>2nd Portfolio</a>
    </footer>


    </div>
  );
}

export default Home;