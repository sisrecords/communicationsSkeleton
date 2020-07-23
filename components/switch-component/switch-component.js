// import React from 'react';
// import Switch from '@material-ui/core/Switch';

// export default function SwitchComponent() {
//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//   });

//   const handleChange = (event) => {
//     setState({ ...state, [event.target.name]: event.target.checked });
//   };

//   return (
//     <div>
//       <Switch
//         checked={state.checkedB}
//         onChange={handleChange}
//         color="primary"
//         name="checkedB"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
//       />
//     </div>
//   );
// }

import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function SwitchComponent({label}) {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row> 
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label={label}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}