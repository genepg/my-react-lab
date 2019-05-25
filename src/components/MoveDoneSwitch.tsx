import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = ((theme: any) => ({
  host: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: 'white'
  },
  switchRoot: {
    margin: '0 10px 0 20px',
    width: 32,
    height: 18,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: '#ff9494',
    '&$checked': {
      transform: 'translateX(12px)',
      color: '#ff9494',
      '& + $track': {
        opacity: 1,
        backgroundColor: 'white',
        borderColor: 'white',
      },
    },
  },
  thumb: {
    width: 14,
    height: 14,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))

const MoveDoneSwitch: React.FC<any> = (props: any) => {
  const { classes } = props;
  const [isChecked, setIsChecked] = useState(false);

  const switchOnChange = (event: any) => {
    props.moveDoneChagne(event.target.checked);
    setIsChecked(event.target.checked);
  };
  return (
    <div className={classes.host}>
      <p> Move done items at the end? </p>
      <Switch
        checked={isChecked}
        onChange={switchOnChange}
        classes={{
          root: classes.switchRoot,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
      />
    </div>
  );
};

export default withStyles(styles)(MoveDoneSwitch);
