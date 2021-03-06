import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "./LoginForm.scss";

const LoginForm = () => {
    const useStyles = makeStyles((theme) => ({
        btnOutlined: {
            color: "#21665e",
            "&:hover": {
                backgroundColor: "#f9fcf7"
            },
            margin: ".8rem"
        },
        btnFilled: {
            color: "#ffe3de",
            backgroundColor: "#11698e",
            margin: ".8rem",
            "&:hover": {
                backgroundColor: "#51adcf"
            }
        },
        rowButtons: {
            margin: "2rem"
        }
    }));

    const classes = useStyles();
    return (
        <form className="Login-form" noValidate autoComplete="off">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h1 className="Login-heading">Logowanie</h1>
                <TextField
                    required
                    id="standard-required"
                    label="Login"
                    color="primary"
                />
                <TextField
                    id="standard-password-input"
                    label="Hasło"
                    type="password"
                    autoComplete="current-password"
                    color="primary"
                />
            </Grid>
            <Grid className={classes.rowButtons}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Link to="/logged"><Button className={classes.btnFilled} variant="outlined">Zaloguj</Button></Link>
                <Button className={classes.btnOutlined} variant="contained">Przypomnij hasło</Button>
            </Grid>
        </form >


    )
}

export default LoginForm;