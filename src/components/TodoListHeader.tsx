import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  header: {
    margin: '0 30px'
  },
  note: {
    borderBottom: '1px solid white'
  }
});

const TodoListHeader: React.FC<any> = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <h1>Todo List</h1>
      <p className={classes.note}>Get things done. one item at a time</p>
      {/* <style jsx>{`
        .header {
          margin: 0 30px;
        }
        p.note {
          border-bottom: 1px solid white;
        }
      `}</style> */}
    </div>
  );
};

export default withStyles(styles)(TodoListHeader);
