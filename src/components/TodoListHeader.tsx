import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    margin: '0 30px'
  },
  title: {
    color: 'white',
  },
  note: {
    color: 'white',
    borderBottom: '1px solid white'
  }
}))

const TodoListHeader: React.FC<any> = (props: any) => {
  const classes = useStyles();
  // const { classes } = props;
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Todo List</h1>
      <p className={classes.note}>Get things done. one item at a time</p>
    </div>
  );
};

export default TodoListHeader;
