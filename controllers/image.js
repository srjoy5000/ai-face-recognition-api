const PAT = '46595bce7ea54e3ca101f5068c4f9f31';
const USER_ID = 'wiqd7xgtljgo';
const APP_ID = 'face-detector';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'; // image placeholder

function getRequestOptions(URL) {
    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": URL
                        // "base64": IMAGE_BYTES_STRING
                    }
                }
            }
        ]
    })

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    }

    return requestOptions
}

const callAPI = (req, res) => {
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", getRequestOptions(req.body.input))
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => res.status(400).json('API connection failure'))
}

const handleImage = (req, res, db) => {
    const { id } = req.body
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => res.json(entries[0].entries))
        .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    callAPI,
    handleImage
}


