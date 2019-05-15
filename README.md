## Prerequisite:
- Having installed WAMP server and runned it
- Having moved the files fileUploadHandler.php et fileDownloader.php to the /www WAMP directory
- Having created /www/uploads in WAMP directory
- Having installed Node.JS
- Having installed Git
- Having fixed the upload_max_size to 8Mbs in the php.ini file

##Downloading the project

Just run this command in your chosen directory: 



## Running the project

In the project directory, you can run:

### `npm install`

Once all is installed, you can run the development environment: 

### `npm start`

**What is this App doing, exactly?**

The App is able to upload 2 different audio files to a server, and to play them simultaneously. 

We can control the sound of the two files separately, but we also can use only one button to play/pause the 2 files.

**Note about the project:**

I had really little time to write the app, so I made some choices to earn developing time.

If I had more, I would have wrote a RESTful API to handle the file upload/download, but it was too long.

It would have been way more elegant, and allows React to make Ajax calls using Axios library for posting and getting the files.
Without any redirection. 

The design also can appear summary and it lacks some additional features. 

React is designed to work with stateful components, or with "global state" components library like Redux.

With it, and an API, the App would have been more secured: no dirty local storage usage to store the file names!

I tried to let some comments in the code, and I hope you will enjoy the App.


