import { useRouter } from "next/router";
import { initialState } from "../../store/reducers/mainTableReducer";
import { useState } from "react";
import { connect } from "react-redux";
import mainTableReducer from "../../store/reducers/mainTableReducer";
import * as actions from "../../store/actionCreators";

export function SingleRequest(props) {
  const router = useRouter();
  //console.log(router.query.id);
  const [dataObject, setDataObject] = useState(
    initialState.mainTableData[router.query.id]
  );
  // const pageObject = () => {
  //   debugger;
  //   if (
  //     props.mainTableDataProp !== undefined &&
  //     router.query.id !== undefined
  //   ) {
  //     let pageObject = props.mainTableDataProp.filter(
  //       row => row.id == router.query.id
  //     );
  //     return pageObject[0];
  //   }
  // };
  //console.log(dataObject);
  //debugger;
  // const onChangeHandler = (event) =>{
  //     debugger;
  //     if (dataObject !== undefined && event !== undefined) {
  //         event.target.value = dataObject.description
  //     }
  // }
  //console.log((props.mainTableDataProp.filter(row => row.id === router.query.id))[0].description);
  const getDescription = () => {
    if (
      props.mainTableDataProp !== undefined &&
      router.query.id !== undefined
    ) {
      let smthing = props.mainTableDataProp.filter(
        row => row.id == router.query.id
      );
      return smthing[0].description;
    }
  };
  return (
    <form>
      <div className="background-headline"> פרטי תיק</div>
      <div className="label-input-container">
        <label>תיאור</label>
        <input
          className="input-large"
          type="text"
          id="description"
          name="description"
          value={getDescription()}
        ></input>
      </div>
      <div className="label-input-container">
        <label>ענף</label>
        <select className="select" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="label-input-double-container">
        <label className="label-half">סוג תיק
        <input
          className="input-small"
          type="text"
          id="description"
          name="description"
          value={getDescription()}
        ></input>
        </label>
        <label className="label-half">סיווג
        <input
          className="input-small"
          type="text"
          id="description"
          name="description"
          value={getDescription()}
        ></input>
        </label>
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
    onInitMainTable: tags => dispatch(actions.initMainTable(tags))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRequest);
