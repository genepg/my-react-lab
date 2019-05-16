import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white'
  },
  TODOSwitchBase: {
    '&$TODOChecked': {
      '& + $TODOBar': {
        backgroundColor: theme.palette.grey[50]
      }
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  TODOChecked: {
    transform: 'translateX(15px)',
    '& + $TODOBar': {
      opacity: 1
    }
  },
  TODOBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -14,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  TODOIcon: {
    width: 20,
    height: 20,
    color: '#ff9494'
  },
  TODOIconChecked: {
    boxShadow: theme.shadows[1]
  }
});

const MoveDoneSwitch: React.FC<any> = (props: any) => {
  const { classes } = props;
  const [isChecked, setIsChecked] = useState(false);

  const switchOnChange = (event: any) => {
    props.moveDoneChagne(event.target.checked);
    setIsChecked(event.target.checked);
  };
  return (
    <div className={classes.root}>
      <p>Move done items at the end? </p>
      <Switch
        checked={isChecked}
        onChange={switchOnChange}
        disableRipple
        classes={{
          switchBase: classes.TODOSwitchBase,
          bar: classes.TODOBar,
          icon: classes.TODOIcon,
          iconChecked: classes.TODOIconChecked,
          checked: classes.TODOChecked
        }}
      />
    </div>
  );
};
export default withStyles(styles)(MoveDoneSwitch);
