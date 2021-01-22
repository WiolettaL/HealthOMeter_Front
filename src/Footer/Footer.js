import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="Footer">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <a rel="noreferrer" target="_blank" className="Footer-link" href="https://github.com/WiolettaL"><GitHubIcon/> WiolettaL</a>
                <a rel="noreferrer" target="_blank" className="Footer-link" href="https://github.com/ganzes"><GitHubIcon/> ganzes</a>
                <a rel="noreferrer" target="_blank" className="Footer-link" href="https://github.com/IzabelaRojek"><GitHubIcon/> IzabelaRojek</a>
                <a rel="noreferrer" target="_blank" className="Footer-link" href="https://github.com/Sephirot92"><GitHubIcon/> Sephirot92</a>
                <a rel="noreferrer" target="_blank" className="Footer-link" href="https://github.com/zh-betina"><GitHubIcon/> zh-betina</a>
            </Grid>
        </footer>
    )
}

export default Footer;