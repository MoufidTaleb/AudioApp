<?php
/*
    This file is handling the upload. He checks if the files are audio files, if there is a missing file, or if they're too big for our PHP configuration.
    If all is okay, he cleans up the target directory and save the 2 files in it.
    Then, he redirects to our Front App AudioPlayer.
 */

$currentDir = getcwd();
$uploadDirectory = "\uploads\\";

$errors = []; // Store all foreseen and unforseen errors here

$fileExtensions = ['ogg', 'mp3']; // Get all the file extensions

if (isset($_FILES['file1'])) {
    if ($_FILES['file1']['size'] > 0) {
        $fileName = $_FILES['file1']['name'];
        $fileSize = $_FILES['file1']['size'];
        $fileTmpName = $_FILES['file1']['tmp_name'];
        $fileType = $_FILES['file1']['type'];
        $fileNameArray = explode('.', $fileName);
        $fileExtension = strtolower(end($fileNameArray));
    } else {
        echo "Missing file (1)";
        die();
    }
} else {
    echo "Missing file (1)";
    die();
}

if (isset($_FILES['file2'])) {
    if ($_FILES['file2']['size'] > 0) {
        $fileName2 = $_FILES['file2']['name'];
        $fileSize2 = $_FILES['file2']['size'];
        $fileTmpName2 = $_FILES['file2']['tmp_name'];
        $fileType2 = $_FILES['file2']['type'];
        $fileNameArray2 = explode('.', $fileName);
        $fileExtension2 = strtolower(end($fileNameArray));
    } else {
        echo "Missing file (2)";
        die();
    }
} else {
    echo "Missing file (2)";
    die();
}


$uploadPath = $currentDir . $uploadDirectory . basename($fileName);
$uploadPath2 = $currentDir . $uploadDirectory . basename($fileName2);

$folder = $currentDir . $uploadDirectory;

//Get a list of all of the file names in the folder, then loop through the file list to delete them
$files = glob($folder . '/*');

foreach ($files as $file) {
    if (is_file($file)) {
        unlink($file);
    }
}

if (!in_array($fileExtension, $fileExtensions) || !in_array($fileExtension2, $fileExtensions)) {
    $errors[] = "This file extension is not allowed. Please upload an MP3 file";
}

if ($fileSize > 8000000 || $fileSize2 > 8000000) {
    $errors[] = "This file is more than 8MB. Sorry, it has to be less than or equal to 8MB";
}

if (empty($errors)) {
    $didUpload = move_uploaded_file($fileTmpName, $uploadPath);
    $didUpload2 = move_uploaded_file($fileTmpName2, $uploadPath2);

    if ($didUpload && $didUpload2) {
        echo "The files " . basename($fileName) . basename($fileName2) . " have been uploaded";
        header("Location: http://localhost:3000/audioPlayer");
    } else {
        echo "An error occurred somewhere. Try again or cry a bit and then, try again";
    }
} else {
    echo('error');
    foreach ($errors as $error) {
        echo $error . "These are the errors" . "\n";
    }
}


?>
