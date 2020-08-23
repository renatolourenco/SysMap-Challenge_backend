const fetch = require('node-fetch');

const options = {
    headers: {
        'Content-Type': 'application/json',
        'Accept-Encoding': 'UTF-8'
    }
};

function connection(method, path, objInfo = null) {
    return new Promise((resolve, reject) => {
        options['method'] = method;
        if (method != 'get') {
            options['body'] = JSON.stringify(objInfo);
        }

        fetch(`${process.env.NP_MAIN_URI}/${path}`, options)
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err));

    });
}

module.exports = {
    connection
};
