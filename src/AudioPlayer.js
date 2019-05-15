import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '@material-ui/core/IconButton';
import ReactPlayer from 'react-player';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

/*
    Let's talk about the player. He's simply reading audio files from an url. We can define the url from the file names, which are stored in the local storage.
    A button is controlling the play/pause action on the 2 react players simultaneously.
 */

const styles = {
    card: {
        minWidth: 275,
        backgroundColor: '#EEEEEE'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false,
        };
    };

    togglePlaying = () => {
        const isPlaying = this.state.playing;
        this.setState({
            playing: !isPlaying
        })
    };

    fileName1 = localStorage.getItem('fileName1');
    fileName2 = localStorage.getItem('fileName2');

    url1 = '//localhost/fileDownloader.php?fileName=' + this.fileName1;
    url2 = '//localhost/fileDownloader.php?fileName=' + this.fileName2;

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div style={{marginTop: '10%', display: 'inline-block'}}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                First File:
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.fileName1}
                            </Typography>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Second file:
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.fileName2}
                            </Typography>
                        </CardContent>
                        <CardActions style={{display: 'inline-block'}}>
                            <IconButton color="primary" variant="outlined">
                                <PlayArrowIcon onClick={this.togglePlaying} fontSize='52px' style={{ fontSize: 80 }}/>
                            </IconButton>
                        </CardActions>
                    </Card>

                    <ReactPlayer url={this.url1} playing={this.state.playing} controls height='10%'/>
                    <ReactPlayer url={this.url2} playing={this.state.playing} controls height='10%'/>
                </div>
            </React.Fragment>
        )
    }
}


export default withStyles(styles)(AudioPlayer);
