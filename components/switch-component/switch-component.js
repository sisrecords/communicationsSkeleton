import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function SwitchComponent({label}) {
    const GreenSwitch = withStyles({
        switchBase: {
          color: grey[300],
          '&$checked': {
            color: green["A700"],
          },
          '&$checked + $track': {
            backgroundColor: green[500],
          },
        },
        checked: {},
        track: {},
      })(Switch);
    return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row> 
        <FormControlLabel
          value="end"
          control={<GreenSwitch/>}
          label={label}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}