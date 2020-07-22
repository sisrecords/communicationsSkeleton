import { useRouter } from "next/router";
import { initialState } from "../../store/reducers/mainTableReducer";
import { useState } from "react";
import { connect } from "react-redux";
import mainTableReducer from "../../store/reducers/mainTableReducer";
import * as actions from "../../store/actionCreators";

export function SingleRequest(props) {
  const router = useRouter();
  const getObjectPropValue = objectProperty => {
    if (
      props.mainTableDataProp !== undefined &&
      router.query.id !== undefined
    ) {
      let smthing = props.mainTableDataProp.filter(
        row => row.id == router.query.id
      );
      return smthing[0][objectProperty];
    }
  };
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
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
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
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </label>
            <label className="label-half">
              סיווג
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </label>
          </div>
          <label>גוף דורש</label>
          <div className="images-conitaner">
            <img src="/images/mafat.jpg"></img>
            <img
              src="/images/Israel-Defense-Forces.svg.png"
              style={{ height: "100px", marginTop: "20px" }}
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
        <div className="half-form-container"></div>
      
      
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
  return {
    //onInitMainTable: tags => dispatch(actions.initMainTable(tags))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRequest);
