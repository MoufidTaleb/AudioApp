import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

/*
    We upload the files in the state. Then, on submit, we check if the 2 files are stored. If not, we display an alert.
    If yes, we save the file names in the local storage. Then, we send the files to a php file to save them on the server.
    After it, the server redirects us to the audioPlayer.
 */

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            file2: null,
        };
    };

    onChange = (e) => {
        console.log(typeof (e.target.files[0]));
        if (e.target.id === 'file1') {
            this.setState({
                file: e.target.files[0],
            });
        } else {
            this.setState({
                file2: e.target.files[0],
            });
        }
    };

    onUpload = (e) => {
        console.log(this.state);
        if (this.state.file === null || this.state.file2 === null) {
            e.preventDefault();
            alert('Hey, youy didn\'t uploaded 2 files!');
        } else {
            localStorage.setItem('fileName1', this.state.file.name);
            localStorage.setItem('fileName2', this.state.file2.name);
        }
    };

    render() {
        return (
            <form encType="multipart/form-data" action="//localhost/fileUploadHandler.php" method="post">
                <h1>File Upload</h1>
                <Input id="file1" type="file" name="file1" onChange={this.onChange}/>
                <br/>
                <Input id="file2" type="file" name="file2" onChange={this.onChange}/>
                <br/>
                <Button id="buttonSubmit" type="submit" color="primary" variant="contained"
                        onClick={this.onUpload}>Upload</Button>
                <br/>
            </form>
        )
    }
}

export default FileUpload
