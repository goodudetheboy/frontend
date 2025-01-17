import React, { Component } from 'react'
import Slide from './slide'
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'
import img1New from '../photos/mark.png'
// import img1 from "../photos/markPhoto.jpg"
import img2 from "../photos/rebecca_photo.png"
import img3 from "../photos/yawo.png"
import "./style.scss"
import bquote from "../photos/bquote.png";
import fquote from "../photos/fquote.png";
import arrow from '../photos/searchArrow.png'
import  Link  from "react-router-dom";
import button from "./button.svg"
import leftArrowSvg from "./arrow-left-solid.svg"
import rightArrowSvg from "./arrow-right-solid.svg"


export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
      img1New,img2,img3
      
      ],
      title: [
        'What is it like to work while traveling?',
        'Mold some creative time with a ceramic artist',
        'just test'
      ],
   
      body1:[
        'Mark hosts the shadowing experience “The Photo Essay: Describing a Story Through Images” to open visual doors for anyone, from novice to advanced photographers.',
        "Rebecca hosts shadowing experience in her own pottery studio. Get a feel for the daily life of a ceramic artist, seeing the space she works in and the process of creating functional ceramic work."
      ],
      body2:[
        'Mark’s photography assignments have taken him to more than 100 countries on six continents. Among Mark’s numerous accolades are CLIO, ACE, Aurora Gold, and IPA awards. His books include Faces of the Twentieth Century: Master Photographers and Their Work, The Way of the Japanese Bath, Wanderlust, North Korea, South Korea, Inside Iran and The Travel Photo Essay: Describing A Journey Through Images. He is currently putting the final touches on The People of the Forest, a book about orangutans.',
        "Rebecca enjoys creating pottery that is casual and functional — making pots for everyday use. She took her business from a hobby to a full-time career. The inspiration for her pottery stems from the unique qualities of nature. She loves the way that every leaf on a tree belong together in a collection, but each has its own unique color pattern and detail. Much like a pile of leaves, her different collections of pottery have an overarching theme, but upon close inspection, every piece has its own color detail and personality."
      ],
      currentIndex: 1,
      //translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
   /* if(this.state.currentIndex === 1) {
      return this.setState({
        currentIndex: this.state.images.length - 1 ,
        //translateValue: -(this.state.images.length-1)*(this.slideWidth())
      })
    }
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    //  translateValue: prevState.translateValue + (this.slideWidth())
    }));
    */
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
  /*  if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 1,
        //translateValue: 0
      })
    }
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      //translateValue: prevState.translateValue + -(this.slideWidth())
    }));*/
  }

  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    const Link = require("react-router-dom").Link;

    return (
      <div className='container-fluid' >

        {/* add some white space before the first featured story */}
              <div className='row'>
                <div className=''  style={{background: 'black',  height:"3.5rem", width: "20px"}}>
                       {/* fix yellow box layout */}
                  {/* <div className="mt-0 pt-0 col-lg-3 col-md-3  row d-flex justify-content-center" style={{position: "absolute", zIndex:"10",background: "#F2C94C", height:"412px", left: "1100px", width: "500px"}}></div> */}
                  {/* <div className="mt-0 pt-0 col-lg-3 col-md-3  row d-flex justify-content-center" style={{position: "absolute", zIndex:"9",background: "#F2C94C", height:"412px", right: "0px", width: "100px"}}></div> */}
                  </div>
            </div>
       
            <div className='row ' >
                  <div className='FeatureStoryTitle col-lg-4 offset-1 d-flex justify-content-center' >
                       <div className='row' style = {{width: "92%"}}>
                        <h2 className="" style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                        > Featured Story </h2>
                        <h2 className=""style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"45px",lineHeight:"67px",color:"#30233D"}}
                        >  {this.state.title[0]} </h2>
                        <h3 className="pt-2"style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"29px","color":"#776C82",textAlign:"justify"}}
                        > {this.state.body1[0]} </h3>
                        <h3 className="pt-2"style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"160%","color":"#30233D", textAlign:"justify"}}
                        > {this.state.body2[0]} </h3>
                       
                       <div className='row mb-2 mt-0'>
                        <Link to='/explore'>
                                  {/* <button className="mt-5 learnmore justify-content-center" style={{fontFamily:"Mplus 1p",fontStyle: "normal" ,fontWeight: '500',fontSize: '1vw',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',color: '#150433'}}>     Learn More   </button> */}
                                  <button className="mt-5 learnmore justify-content-center" style={{fontFamily:"Mplus 1p",fontStyle: "normal" ,fontWeight: '500',fontSize: '1vw',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px'}}>     Learn More  </button>
                        </Link>
                      </div>
                      </div>
                  </div>



                <div className="col-xl-4 col-lg-4 col-md-3 align-self-center" style={{zIndex:"20", left: "2%"}}>

                <img src={this.state.images[0]} 
                alt="picture of a photographer"

                />

                </div>
  

                  <div className="  mt-0 pt-0 col-lg-3 col-md-3  row d-flex justify-content-center yellowbox" style={{zIndex:"50"}}>
                        <div className=" row d-flex justify-content-center" style={{ height:"2rem",}}>
                          <div style={{display:"flex"}}>
                            <img src={fquote} alt="" />
                            <br />
                          </div>
                        </div>
                        <div className=" row  d-flex justify-content-center" >
                            <p style={{display:"flex",width: "40%", fontFamily: "Noticia Text",fontStyle: "italic",fontWeight: "normal",fontSize: "20px",lineHeight: "177.42%",display: "flex",alignItems: "center" }}>
                            Yolo Shadow open doors for an eye-opening experience. What are alternative ways to live your life?
                            </p>
                        </div>
                        <div className=" row  d-flex justify-content-center" style={{ height:"2rem",}}>
                          <div style={{display:"flex"}}>                         
                           <img src={bquote} alt="" />
                          </div>
                        </div>
                  </div> 

                   
                  
        
                  

            </div>
           
            <div className='row'>
                <div  style={{background: '#F2C94C',  height:"3rem", width: "1000px"}}></div>
            </div>

            <div className='row ' >
                  {/* <div className='col-1' style={{background: '#F2C94C'}}></div> */}
                  <div style={{background: '#F2C94C', width: "1000px"}}>
                  <div className='FeatureStoryTitle  offset-2' style={{background: '#F2C94C'}}>
                        <div className='row' style={{width:"80%"}}>
                          <h2 className="" style={{textAlign:"justify",fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                          > Featured Story </h2>
                          <h2 className=""style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"45px",lineHeight:"67px",color:"#30233D"}}
                          >  {this.state.title[this.state.currentIndex]} </h2>
                          <h3 className="pt-2"style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"29px","color":"#776C82",textAlign:"justify"}}
                          > {this.state.body1[this.state.currentIndex]} </h3>
                          <h3 className="pt-2"style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"450","fontSize":"18px","lineHeight":"160%","color":"#30233D", textAlign:"justify"}}
                          > {this.state.body2[this.state.currentIndex]} </h3>
                        </div>
                        
                        <div className='row ' style={{background: '#F2C94C'}}>
                          <Link to='/explore'>
                          <button className="mt-5 learnmore d-flex  justify-content-center" style={{fontStyle: "normal" ,fontWeight: '500',fontSize: '14px',  lineHeight: '20px',display: 'flex',alignItems: 'center',  letterSpacing: '2px',color: '#150433',background:'#F2C94C'}}>     Learn More   </button>
                          </Link>
                        </div>
                  </div>
                  </div>
                



                  <div className="slider col-xl-4 col-lg-4 col-md-12 lign-self-center " style = {{}} >
                    <div >
                        {/* <Slide key={this.state.currentIndex} image={this.state.images[this.state.currentIndex]} /> */}
                        <img src={this.state.images[this.state.currentIndex]} 
                alt="picture of a woman"

                />
                    </div>
                  </div>



            
{/* 
                  <div className='col-1 pt-4 ' id="">

                    <div className='d-flex flex-column'>
                      <h3 className='pt-5 mt-1' style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"black","transform":"rotate(90deg)"}}>
                      Start </h3>
                      <h3 className='pt-5 mt-1' style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"black","transform":"rotate(90deg)"}}> your</h3>
                      <h3 className='pt-5  mt-1' style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"black","transform":"rotate(90deg)"}}> journey</h3>
                    
                      <a className='mt-5 pt-5 pr-3' href="#whyYolo" style={{  "transform":"rotate(90deg)"}}>  <img src={arrow}></img></a>
                    </div>

                  </div> */}


            </div>

           

            <div className='row'>
              <div className='col-10' style={{height:'100px',background:'#F2C94C'}}>
              </div>

              <div className='col-1' style={{background:'#150433'}}>
                <h3 className='pt-3 mt-1 offset-4' style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px",color:"white"}}>
                      1/3 </h3>
                </div>
                 
           

              <div className='col-1' style={{background:'#150433'}}>
               
                {/* need to be fixed when using LeftArrow component */}
                {/* <LeftArrow  goToprevSlide={this.goToPrevSlide}/> */} 
                <img className='pt-3 mt-2' src={leftArrowSvg} style={{ width:'20%'}} />
                {/* <RightArrow goToNextSlide={this.goToNextSlide} /> */}
                <img className='pt-3 mt-2 offset-3' src={rightArrowSvg} style={{width:'20%'}} />         
              </div>
            </div>
      </div>


    );
  }
}