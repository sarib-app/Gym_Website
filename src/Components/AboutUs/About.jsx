import React,{useState , useEffect} from 'react';
import AboutBread from '../img/about-bread.jpg';
import AboutUs from '../img/about-us.jpg'
import BlogOne from '../img/trainer/trainer-1.jpg';
import BlogTwo from '../img/trainer/trainer-2.jpg';
import BlogThree from '../img/trainer/trainer-3.jpg';
import BlogFour from '../img/trainer/trainer-4.jpg';
import tesitmonailImg from '../img/price-bg.jpg';
import {Link} from 'react-router-dom';
import { EncryptStorage } from 'encrypt-storage';
import baseURLImg from '../URL/baseURLImg.js';
import baseURL from '../URL/BaseURL.js';
import globalID from '../GlobalD.js';
import axios from 'axios';


const About = () => {

  const [aboutUs , setAboutUS] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadingSpinner =  async  ()=>{
    // Wait for two second
    await new Promise((r) => setTimeout(r, 1000));

    // Toggle loading state
    setLoading(false);
}
  const encryptStorageTwo = new EncryptStorage('secret-key', {
    prefix: '@instance2',
  });

  const localStorage = async ()=>{

    try {
      let userID = await encryptStorageTwo.getItem('userID');
  
  
      if ( userID !== null) {
     
        gettingAboutSecData(userID)
      }
    } catch {
      return null;
    }
  }


  const gettingAboutSecData = (userID)=>{
    axios.get(`${baseURL}aboutuslist/${globalID}`)
    .then((res)=>{
      setAboutUS(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    localStorage();
    loadingSpinner();
    
  }, [])
  



  return (

    <>
{
loading?
  <>
 <div id="preloder">
  <div className="loader" />
</div> 
</>
:
  <>


  {/* Breadcrumb Section Begin */}
  <section className="breadcrumb-section set_bg spad mt-5" data-setbg="img/about-bread.jpg"  style={{backgroundImage:`url(${AboutBread})`, backgroundRepeat:"no-repeat",	backgroundSize:"cover"
}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>About Us</h2>
            <div className="breadcrumb-controls">
              <Link to="/"><i className="fa fa-home" /> Home</Link>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb End */}
  {/* Aboutus Section Begin */}
  <section className="aboutus-section spad">
    <div className="container">
      <div className="aboutus-page-text">
        <div className="row">
        {
          aboutUs.map((items)=>{
            return(
            <>
                   <div className="col-xl-9 col-lg-10 m-auto">
            <div className="section-title">
              {
                items.sec1_para === ''? <h2>WHO WE ARE &amp; WHAT WE DO</h2> :
                <h2>{items.sec1_para}</h2>
              }
              <p>CrossFit is a cutting-edge functional fitness system that can help everyday men. There is
                a significant portion of the population here in North America, that actually want
                and need success to be hard!</p>
            </div>
          </div>

            </>
            )
          })
        }
   

        </div>
        <img src={AboutUs} alt="About-US" />
        <div className="row">
        {
          aboutUs.map((items)=>{
            return(
              <>
                 <div className="col-lg-6">
            <div className="about-us">
              <h4>ABOUT US</h4>
              {
                  items.about_us_para === ''?
                  <p>
                    Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking about after the infant is brought home from the hospital. It’s always the same thing, by the time they have their third child they have it all figured out, but with number one it’s a learning thing. Baby monitors help you hear your baby’s needs without you having to be in the room with the baby. Some baby monitors are portable, or “mobile” and are small enough that you can carry it in your pocket as you do your daily chores around the house. Depending on your price range it’s best to have a base unit that plugs into the wall. The receiving unit can be like your portable phone, you can carry it around with you, and plug it back into the base unit to be recharged.
                  </p>
                  :
                  <p>
                {
                  items.about_us_para
                }
              </p>
                }
            
            </div>
          </div>

          
          <div className="col-lg-6">
            <div className="about-quality">
              <h4>OUR QUALITY</h4>
              <ul>
                {
                   items.our_quality_para === ''?
                   <li><i className="fa fa-check-circle-o" />
                  Donec enim ipsum porta justo integer at velna vitae auctor integer congue magna at risus auctor purus unt pretium ligula rutrum integer sapien ultrice ligula luctus undo magna risus Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite vivamus interdum. Integer pulvinar ante nulla, ac fermentum ex congue id vestibulum ensectetur. Proin blandit nibh in quam semper iaculis lorem ipsum dolor salama ender. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                   </li>
                   :
                   <li><i className="fa fa-check-circle-o" />
                   {
                     items.our_quality_para
                   }
                   </li>
                }
              
              </ul>
            </div>
          </div>

              </>
            )
          })
          
        }
        </div>
      </div>
    </div>
  </section>
  {/* Aboutus Section End */}
  {/* Testimonial Section End */}
  <section className="testimonial-section set-bg spad" data-setbg="img/testimonial-bg.jpg" style={{backgroundImage:`url(${tesitmonailImg})`}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="testimonial-slider owl-carousel">
            <div className="ts-item">
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                for hernia. Initially intended for correcting inguinal hernia.</h4>
              <div className="author-name">
                <h5>Stacy Mc Neeley</h5>
                <span>CEP’s Director</span>
              </div>
              <div className="author-pic">
                <img src="img/author-pic.png" alt />
              </div>
            </div>
            <div className="ts-item">
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                for hernia. Initially intended for correcting inguinal hernia.</h4>
              <div className="author-name">
                <h5>Stacy Mc Neelek</h5>
                <span>CEP’s Director</span>
              </div>
              <div className="author-pic">
                <img src="img/author-pic.png" alt />
              </div>
            </div>
            <div className="ts-item">
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
              <h4>The “Minimal-Repair Technique” is a revolutionary surgical procedure in the treatment
                for hernia. Initially intended for correcting inguinal hernia.</h4>
              <div className="author-name">
                <h5>Stacy Mc Neelel</h5>
                <span>CEP’s Director</span>
              </div>
              <div className="author-pic">
                <img src="img/author-pic.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section End */}
  {/* Trainer Section Begin */}
  <section className="trainer-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>OUR Trainer</h2>
            <p>Our Crossfit experts can help you discover new training techniques.</p>
          </div>
        </div>
      </div>
      <div className="row">
        {
          aboutUs.map((items)=>{
            return(
              <>
                   <div className="col-lg-3 col-sm-6">
          <div className="trainer-item">
            <div className="ti-pic">
              {
                items.trainer1_img !==''?
                <img src={`${baseURLImg}${items.trainer1_img}`} alt="trainer" />
                :
               <img src={BlogOne} alt="trainer" />
              }
              <div className="ti-links">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-pinterest" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
              <div className="trainer-text">
                <h5>{items.trainer1_name} <span>- Gymer</span></h5>
              </div>
            </div>
          </div>
        </div>
              </>
            )
          })

        }
   
   {
          aboutUs.map((items)=>{
            return(
              <>
                   <div className="col-lg-3 col-sm-6">
          <div className="trainer-item">
            <div className="ti-pic">
              {
                items.trainer2_img !==''?
                <img src={`${baseURLImg}${items.trainer2_img}`} alt="trainer" />
                :
               <img src={BlogTwo} alt="trainer" />
              }
              <div className="ti-links">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-pinterest" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
              <div className="trainer-text">
                <h5>{items.trainer2_name} <span>- Gymer</span></h5>
              </div>
            </div>
          </div>
        </div>
              </>
            )
          })

        }

{
          aboutUs.map((items)=>{
            return(
              <>
                   <div className="col-lg-3 col-sm-6">
          <div className="trainer-item">
            <div className="ti-pic">
              {
                items.trainer3_img !==''?
                <img src={`${baseURLImg}${items.trainer3_img}`} alt="trainer" />
                :
               <img src={BlogThree} alt="trainer" />
              }
              <div className="ti-links">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-pinterest" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
              <div className="trainer-text">
                <h5>{items.trainer3_name} <span>- Gymer</span></h5>
              </div>
            </div>
          </div>
        </div>
              </>
            )
          })

        }

{
          aboutUs.map((items)=>{
            return(
              <>
                   <div className="col-lg-3 col-sm-6">
          <div className="trainer-item">
            <div className="ti-pic">
              {
                items.trainer4_img !==''?
                <img src={`${baseURLImg}${items.trainer4_img}`} alt="trainer" />
                :
               <img src={BlogFour} alt="trainer" />
              }
              <div className="ti-links">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-pinterest" /></a>
                <a href="#"><i className="fa fa-linkedin" /></a>
              </div>
              <div className="trainer-text">
                <h5>{items.trainer4_name} <span>- Gymer</span></h5>
              </div>
            </div>
          </div>
        </div>
              </>
            )
          })

        }

      </div>
    </div>
  </section>
  {/* Trainer Section End */}
  {/* Cta Section Begin */}
  <section className="cta-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-text">
            <h3>GeT Started Today</h3>
            <p>New student special! $30 unlimited Gym for the first week anh 50% of our member!</p>
          </div>
          <a href="#" className="primary-btn cta-btn">book now</a>
        </div>
      </div>
    </div>
  </section>
  {/* Cta Section End */}

</>
}

    </>
  )
}

export default About