import { useRouter } from "next/router";
import { connect } from "react-redux";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import SwitchComponent from "../../components/switch-component/switch-component";
import DatePickerComponent from "../../components/date-picker/date-picker-component";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
// import CarouselComponent from "../../components/carousel-component/carousel-component"
export function SingleRequest(props) {
  const router = useRouter();
  var selectedRowObject;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  //= props.mainTableDataProp[singlePageId];
  debugger;
  const getObjectPropValue = objectProperty => {
    if (
      props.mainTableDataProp !== undefined &&
      router.query.id !== undefined
    ) {
      selectedRowObject = props.mainTableDataProp.filter(
        row => row.id == router.query.id
      )[0];
      return selectedRowObject[objectProperty];
    }
  };
  const getClassName = organizationName => {
    if (selectedRowObject !== undefined) {
      return selectedRowObject["organization"] === organizationName
        ? "img-active"
        : "img";
    }
  };

  const displayForm = pageNumber => {
    if (pageNumber == currentPageNumber) {
      return true;
    } else {
      return false;
    }
  };

  const goToNextPage = () => {
    setCurrentPageNumber(currentPageNumber + 1);
  };
  return (
    <form>
      <div
        className="form-container"
        style={displayForm(2) ? {} : { display: "none" }}
      >
        <div className="background-headline"> פרטי תיק</div>
        <div className="half-form-container">
          <div className="label-input-container">
            <label>תיאור</label>
            <input
              className="input-large"
              type="text"
              id="description"
              name="description"
              value={getObjectPropValue("description")}
            ></input>
          </div>
          <div className="label-input-container">
            <label>ענף</label>
            <select value="asdads" name="cars" id="cars">
              <option value="volvo">ענף</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="label-input-double-container">
            <label className="label-half">
              סוג תיק
              <br></br>
              <select name="cars" id="cars">
                <option value="volvo">סוג תיק</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </label>
            <label className="label-half">
              סיווג
              <select name="cars" id="cars">
                <option value="volvo">סיווג</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </label>
          </div>
          <label>גוף דורש</label>
          <div className="images-conitaner">
            <img
              className={getClassName("מפא״ת")}
              src="/images/mafat.jpg"
            ></img>
            <img
              className={getClassName("צה״ל")}
              src="/images/Israel-Defense-Forces.svg.png"
            ></img>
          </div>
          <div className="label-input-container">
            <label>פרויקט</label>
            <input
              className="input-large"
              type="text"
              id="project"
              name="project"
              value={getObjectPropValue("project")}
              readOnly="true"
            ></input>
          </div>
          <div className="label-input-double-container">
            <input placeholder="אחוז השתתפות ספק"></input>
          </div>
          <div className="label-input-double-container">
            <input
              className="input-small"
              type="text"
              id="project"
              name="project"
              value={getObjectPropValue("amount")}
              readOnly="true"
            ></input>
            <div
              className="label-input-double-container"
              style={{ marginTop: "0px" }}
            >
              <div className="currency">ILS</div>
              <div className="currency">USD</div>
            </div>
          </div>
        </div>
        <div className="half-form-container">
          <div className="date-picker-container">
            <DatePickerComponent label={"מועד התחלה"}></DatePickerComponent>
            <DatePickerComponent label={"מועד סיום"}></DatePickerComponent>
          </div>
          <div className="date-picker-container">
            <DatePickerComponent
              label={"מועד התחלה בפועל"}
            ></DatePickerComponent>
            <DatePickerComponent
              label={"מועד סיום בפועל"}
            ></DatePickerComponent>
          </div>
          <div className="label-input-container">
            <label>
              תכונות נוספות
              <select name="cars" id="cars">
                <option value="sresearch">מחקרים בד״ס</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </label>
          </div>
          <div className="label-input-container">
            <label className="label-half">
              <select name="cars" id="cars">
                <option value="cs&ts">cs&ts</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </label>
          </div>
          <div className="switch-container">
            <SwitchComponent label="תיק מימוש תמורת GTG"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="מכיל תקציב מת״ט"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="תיק GTG"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="אור ירוק"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="תלמ״י"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="רכוש בהול"></SwitchComponent>
          </div>
        </div>
      </div>
      <div
        className="form-container"
        style={displayForm(3) ? {} : { display: "none" }}
      >
        <div className="background-headline">פרטי תיק - נתונים משניים</div>
        <div className="half-form-container">
          <div className="label-input-container">
            <label>מספר דרישה בERP</label>
            <input
              className="input-large"
              type="text"
              id="description"
              name="description"
              value={getObjectPropValue("description")}
            ></input>
          </div>
          <div className="label-input-container">
            <label>מספר הזמנה בERP</label>
            <input
              className="input-large"
              type="text"
              id="description"
              name="description"
              value={getObjectPropValue("description")}
            ></input>
          </div>
          <div className="label-input-container">
            <label>מספר EMF</label>
            <input
              className="input-large"
              type="text"
              id="description"
              name="description"
              value={getObjectPropValue("description")}
            ></input>
          </div>
          <div className="label-input-container">
            <label>הערות</label>
            <textarea rows="14" cols="50"></textarea>
          </div>
          <div className="label-input-container">
            <label>מוקד ידע</label>
            <select value="asdads" name="cars" id="cars">
              <option value="volvo">מוקד ידע</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="half-form-container">
          <div className="switch-container">
            <SwitchComponent label="מה״ג"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="רכוש משרד הביטחון"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="תיק משוחזר"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="מפתח יחיד"></SwitchComponent>
          </div>
          <div className="switch-container">
            <SwitchComponent label="מימון משותף"></SwitchComponent>
          </div>
          <fieldset className="contacts-container">
            <legend>איש קשר</legend>
            <input
              placeholder="שם מלא"
              className="input-large"
              type="text"
              id="description"
              name="description"
            ></input>
            <input
              className="input-large"
              placeholder="טלפון"
              type="text"
              id="description"
              name="description"
            ></input>
          </fieldset>
          <fieldset className="contacts-container-dashed">
            <legend>נוצר ע״י</legend>
            <input
              className="contact-input"
              placeholder="שם יוצר"
              type="text"
              id="description"
              name="description"
            ></input>
          </fieldset>
          <fieldset className="contacts-container-dashed">
            <legend>תאריך פתיחה</legend>
            <input
              className="contact-input"
              placeholder="2.6.2020"
              type="text"
              id="description"
              name="description"
            ></input>
          </fieldset>
          <fieldset className="contacts-container-dashed">
            <legend>תאריך הגעה לתחנה</legend>
            <input
              className="contact-input"
              placeholder="2.6.2020"
              type="text"
              id="description"
              name="description"
            ></input>
          </fieldset>
        </div>
      </div>
      <div
        className="form-container"
        style={displayForm(1) ? {} : { display: "none" }}
      >

<div id="app"></div>

<a href="https://youtu.be/5ptXXNjuUfg" target="_blank" data-keyframers-credit style="color: #FFF"></a>
<script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>
      <CarouselComponent></CarouselComponent>
      </div>
      <div className="continue-btn">
        <Button onClick={goToNextPage} variant="contained" color="primary">
          המשך
        </Button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    mainTableDataProp: state.mainTableReducer.mainTableData
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRequest);
