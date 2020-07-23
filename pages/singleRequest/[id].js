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

export function SingleRequest(props) {
  const router = useRouter();
  const getObjectPropValue = objectProperty => {
    if (
      props.mainTableDataProp !== undefined &&
      router.query.id !== undefined
    ) {
      let rowSelected = props.mainTableDataProp.filter(
        row => row.id == router.query.id
      );
      return rowSelected[0][objectProperty];
    }
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //#region datepicker consts
  const [selectedStartDate, setSelectedStartDate] = React.useState();
  const [selectedEndDate, setSelectedEndDate] = React.useState();

  const [
    selectedActualStartDate,
    setSelectedActualStartDate
  ] = React.useState();
  const [selectedActualEndDate, setSelectedActualEndDate] = React.useState();

  const handleDateChangeStart = date => {
    setSelectedStartDate(date);
  };
  const handleDateChangeEnd = date => {
    setSelectedEndDate(date);
  };

  const handleActualDateChangeStart = date => {
    setSelectedActualStartDate(date);
  };
  const handleActualDateChangeEnd = date => {
    setSelectedActualEndDate(date);
  };
  //#endregion

  return (
    <form>
      <div className="background-headline"> פרטי תיק</div>
      <div className="form-container">
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
            <img src="/images/mafat.jpg" 
            ></img>
            <img
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
            <DatePickerComponent label={"מועד התחלה "}></DatePickerComponent>
            <DatePickerComponent label={"מועד סיום "}></DatePickerComponent>
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
