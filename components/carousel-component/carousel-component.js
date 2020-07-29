import Button from "@material-ui/core/Button";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { Checkbox } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const CarouselComponent = props => {
  var sliderArray, slideRef1, slideRef2, slideRef3, slideRef4, slideRef5;
  var labelArray, labelRef1, labelRef2, labelRef3, labelRef4, labelRef5;
  
  const moveLeft = () => {
    sliderArray = [slideRef1, slideRef2, slideRef3, slideRef4, slideRef5];
    for (let index = 0; index < sliderArray.length; index++) {
      if (sliderArray[index].checked === true) {
        if (sliderArray[index - 1] === undefined) {
          sliderArray[index].checked = false;
          index = 4;
          sliderArray[index].checked = true;
          return;
        } else {
          sliderArray[index].checked = false;
          sliderArray[index - 1].checked = true;
          return;
        }
      }
    }
  };

  const moveRight = () => {
    sliderArray = [slideRef1, slideRef2, slideRef3, slideRef4, slideRef5];
    for (let index = 0; index < sliderArray.length; index++) {
      if (sliderArray[index].checked === true) {
        if (sliderArray[index + 1] === undefined) {
          sliderArray[index].checked = false;
          index = 0;
          sliderArray[index].checked = true;
          return;
        } else {
          sliderArray[index].checked = false;
          sliderArray[index + 1].checked = true;
          return;
        }
      }
    }
  };

const [checked, setCheckBox] = React.useState(false);
const setBorderAndCheckBoxchecked = (labelRef) =>{
    if (checked === false) {
        labelRef.style.border = "3px solid #00c853";
    }
    else{
        labelRef.style.border = "";
    }
    setCheckBox(!checked);
}
  return (
    <section id="slider">
      <div className="arrow-icon arrow-icon-back">
        <ArrowBackIosRoundedIcon onClick={moveLeft}></ArrowBackIosRoundedIcon>
      </div>
      <div className="arrow-icon arrow-icon-forward">
        <ArrowForwardIosRoundedIcon
          onClick={moveRight}
        ></ArrowForwardIosRoundedIcon>
      </div>
      <input
        ref={el => (slideRef1 = el)}
        className="slider1"
        type="radio"
        name="slider"
        id="s1"
      />
      <input
        ref={el => (slideRef2 = el)}
        className="slider2"
        type="radio"
        name="slider"
        id="s2"
      />
      <input
        ref={el => (slideRef3 = el)}
        className="slider3"
        type="radio"
        name="slider"
        id="s3"
        defaultChecked
      />
      <input
        ref={el => (slideRef4 = el)}
        className="slider4"
        type="radio"
        name="slider"
        id="s4"
      />
      <input
        ref={el => (slideRef5 = el)}
        className="slider5"
        type="radio"
        name="slider"
        id="s5"
      />
      <label htmlFor="s1" id="slide1">
        <div className="single-slider-container">
          <h1 className="funds">$380,000</h1>
          <div className="fund-number">מר׳ קרנות: 1198543</div>
          <div className="company-names-container">
            <div className="company-name">
              - 671845397 <br></br>רפאל מערכות חימוש
            </div>
            <div className="company-name">
              740 - <br></br>מלט״מלטים
            </div>
          </div>
          <div className="carousel-images-conitaner">
            <img className="carousel-images" src="/images/rafael.jpg"></img>
            <img className="carousel-images" src="/images/malatim.png"></img>
          </div>
          <div className="project-number">019567 - שם הפרויקט</div>
          <div className="three-things-container">
            <div>
              :חברה<br></br> 1000
            </div>
            <div>
              :פרטי התחייבות<br></br> 2123214
            </div>
            <div>
              :קרן<br></br> 201845
            </div>
          </div>
          <div className="carousel-inputs-container">
            <input className="input-carousel" placeholder="מס emf"></input>
            <input
              className="input-carousel"
              placeholder="מס שורה בEMF"
            ></input>
          </div>
          <div className="carousel-btn">
            <Button variant="contained">בחר שורת משימה</Button>
          </div>
        </div>
      </label>
      <label htmlFor="s2" id="slide2">
        <div className="single-slider-container">
          <h1 className="funds">$450,000</h1>
          <div className="fund-number">מר׳ קרנות: 1198543</div>
          <div className="company-names-container">
            <div className="company-name">
              {" "}
              - 671845397 <br></br>רפאל מערכות חימוש
            </div>
            <div className="company-name">
              740 - <br></br>מלט״מלטים
            </div>
          </div>
          <div className="carousel-images-conitaner">
            <img className="carousel-images" src="/images/rafael.jpg"></img>
            <img className="carousel-images" src="/images/malatim.png"></img>
          </div>
          <div className="project-number">019567 - שם הפרויקט</div>
          <div className="three-things-container">
            <div>
              :חברה<br></br> 1000
            </div>
            <div>
              :פרטי התחייבות<br></br> 2123214
            </div>
            <div>
              :קרן<br></br> 201845
            </div>
          </div>
          <div className="carousel-inputs-container">
            <input className="input-carousel" placeholder="מס emf"></input>
            <input
              className="input-carousel"
              placeholder="מס שורה בEMF"
            ></input>
          </div>
          <div className="carousel-btn">
            <Button variant="contained" color="primary">
              בחר שורת משימה
            </Button>
          </div>
        </div>
      </label>
      <label htmlFor="s3" id="slide3" ref={el => (labelRef3 = el)}>
        <div className="single-slider-container">
          <h1 className="funds">$600,000</h1>
          <div className="fund-number">מר׳ קרנות: 1198543</div>
          <div className="company-names-container">
            <div className="company-name">
              {" "}
              - 671845397 <br></br>רפאל מערכות חימוש
            </div>
            <div className="company-name">
              740 - <br></br>מלט״מלטים
            </div>
          </div>
          <div className="carousel-images-conitaner">
            <img className="carousel-images" src="/images/rafael.jpg"></img>
            <img className="carousel-images" src="/images/malatim.png"></img>
          </div>
          <div className="project-number">019567 - שם הפרויקט</div>
          <div className="three-things-container">
            <div>
              :חברה<br></br> 1000
            </div>
            <div>
              :פרטי התחייבות<br></br> 2123214
            </div>
            <div>
              :קרן<br></br> 201845
            </div>
          </div>
          <div className="carousel-inputs-container">
            <input className="input-carousel" placeholder="מס emf"></input>
            <input
              className="input-carousel"
              placeholder="מס שורה בEMF"
            ></input>
          </div>
          <div className="carousel-btn">
            <Button variant="contained">
              בחר שורת משימה
              <GreenCheckbox
                 checked={checked}
                 onChange={() => setBorderAndCheckBoxchecked(labelRef3)}
              ></GreenCheckbox>
            </Button>
          </div>
        </div>
      </label>
      <label htmlFor="s4" id="slide4">
        <div className="single-slider-container">
          <h1 className="funds">$145,000</h1>
          <div className="fund-number">מר׳ קרנות: 1198543</div>
          <div className="company-names-container">
            <div className="company-name">
              {" "}
              - 671845397 <br></br>רפאל מערכות חימוש
            </div>
            <div className="company-name">
              740 - <br></br>מלט״מלטים
            </div>
          </div>
          <div className="carousel-images-conitaner">
            <img className="carousel-images" src="/images/rafael.jpg"></img>
            <img className="carousel-images" src="/images/malatim.png"></img>
          </div>
          <div className="project-number">019567 - שם הפרויקט</div>
          <div className="three-things-container">
            <div>
              :חברה<br></br> 1000
            </div>
            <div>
              :פרטי התחייבות<br></br> 2123214
            </div>
            <div>
              :קרן<br></br> 201845
            </div>
          </div>
          <div className="carousel-inputs-container">
            <input className="input-carousel" placeholder="מס emf"></input>
            <input
              className="input-carousel"
              placeholder="מס שורה בEMF"
            ></input>
          </div>
          <div className="carousel-btn">
            <Button variant="contained">
              בחר שורת משימה
            </Button>
          </div>
        </div>
      </label>
      <label htmlFor="s5" id="slide5">
        <div className="single-slider-container">
          <h1 className="funds">$134,000</h1>
          <div className="fund-number">מר׳ קרנות: 1198543</div>
          <div className="company-names-container">
            <div className="company-name">
              {" "}
              - 671845397 <br></br>רפאל מערכות חימוש
            </div>
            <div className="company-name">
              740 - <br></br>מלט״מלטים
            </div>
          </div>
          <div className="carousel-images-conitaner">
            <img className="carousel-images" src="/images/rafael.jpg"></img>
            <img className="carousel-images" src="/images/malatim.png"></img>
          </div>
          <div className="project-number">019567 - שם הפרויקט</div>
          <div className="three-things-container">
            <div>
              :חברה<br></br> 1000
            </div>
            <div>
              :פרטי התחייבות<br></br> 2123214
            </div>
            <div>
              :קרן<br></br> 201845
            </div>
          </div>
          <div className="carousel-inputs-container">
            <input className="input-carousel" placeholder="מס emf"></input>
            <input
              className="input-carousel"
              placeholder="מס שורה בEMF"
            ></input>
          </div>
          <div className="carousel-btn">
            <Button variant="contained" color="primary">
              בחר שורת משימה
            </Button>
          </div>
        </div>
      </label>
    </section>
  );
};

// const slides = [
//   {
//     title: "Machu Picchu",
//     subtitle: "Peru",
//     description: "Adventure is never far away",
//     image:
//       "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Chamonix",
//     subtitle: "France",
//     description: "Let your dreams come true",
//     image:
//       "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Mimisa Rocks",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Four",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   },
//   {
//     title: "Five",
//     subtitle: "Australia",
//     description: "A piece of heaven",
//     image:
//       "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//   }
// ];

// function useTilt(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };

//     let el = ref.current;

//     const handleMouseMove = (e) => {
//       if (!el) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = el.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       el.style.setProperty("--px", px);
//       el.style.setProperty("--py", py);
//     };

//     el.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);

//   return ref;
// }

// const initialState = {
//   slideIndex: 0
// };

// const slidesReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       slideIndex: (state.slideIndex + 1) % slides.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       slideIndex:
//         state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
//     };
//   }
// };

// function Slide({ slide, offset }) {
//   const active = offset === 0 ? true : null;
//   const ref = useTilt(active);

//   return (
//     <div
//       ref={ref}
//       className="slide"
//       data-active={active}
//       style={{
//         "--offset": offset,
//         "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
//       }}
//     >
//       <div
//         className="slideBackground"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       />
//       <div
//         className="slideContent"
//         style={{
//           backgroundImage: `url('${slide.image}')`
//         }}
//       >
//         <div className="slideContentInner">
//           <h2 className="slideTitle">{slide.title}</h2>
//           <h3 className="slideSubtitle">{slide.subtitle}</h3>
//           <p className="slideDescription">{slide.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [state, dispatch] = React.useReducer(slidesReducer, initialState);

//   return (
//     <div className="slides">
//       <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

//       {[...slides, ...slides, ...slides].map((slide, i) => {
//         let offset = slides.length + (state.slideIndex - i);
//         return <Slide slide={slide} offset={offset} key={i} />;
//       })}
//       <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
//     </div>
//   );
// }

// const elApp = document.getElementById("app");
// ReactDOM.render(<App />, elApp);

const GreenCheckbox = withStyles({
    root: {
      color: green[500],
      '&$checked': {
        color: green[400],
      },
    },
    checked: {},
  })((props) => <Checkbox key={123} color="default" {...props} />);