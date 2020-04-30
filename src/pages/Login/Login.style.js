import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  header: {
    zIndex: 100,
    minHeight: '320px',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    position: 'fixed',
    top: 0,
    left: 0,
  },
  divider: {
    borderLeft: '2px solid #fff',
    maxWidth: '2px',
    height: '180px',
    padding: '0 32px',
  },
  paper: {
    marginTop: '320px',
    height: '65vh',
    display: 'flex',
    paddingTop: '8vh',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    padding: theme.spacing(1.5),
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textAlign: 'center',
    width: '100%',
    display: 'block',
  },
}));

export default useStyles;
