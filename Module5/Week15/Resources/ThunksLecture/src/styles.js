import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,display: 'flex',
      justifyContent: 'center'
    },
    title: {
      flexGrow: 1,
    },
    user: {
      paddingTop: '20px',
      textAlign: 'center'
    },
}));

