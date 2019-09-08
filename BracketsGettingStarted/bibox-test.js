/* jshint node: true */
const http = require('http');
const https = require('https');
const querystring = require('querystring'); // we need this to build our post string
const fs = require('fs');                   // access local file system
const CryptoJS = require("crypto-js");      // node.js

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    var apikey = 'ed53421b02f7dbc9816a481c881ba19fd812c69d';
    var secret = 'e1e7b44f1ff11a925d09f2f4b3679b1d857b3402';
    
    //var cmds = '[{"cmd":"user/userInfo","body":{}}]';
    //PostApi("/v1/user", cmds, apikey, secret);
    
    //var cmds = '[{"cmd":"transfer/coinList","body":{}}]';
    //PostApi(cmds, apikey, secret);
    
    var cmds = '[{"cmd":"api/pairList","body":{}}]';
    PostApi("/v1/mdata", cmds, apikey, secret);
    
    //res.end('sign:' + sign + '\n');
    res.end('Done.\n');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function TestRequest() {
    request('https://example.com/url?a=b', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });
}

function PostApi(path, cmds, apikey, secret) {
    var sign = CryptoJS.HmacMD5(cmds, secret).toString();
    console.log("sign:" + sign);

    // Build the post string from an object
    var post_data = querystring.stringify({
      'cmds' : cmds,
      'apikey': apikey,
      'sign': sign
    });

  // An object of options to indicate where to post to
  var post_options = {
      host: 'api.bibox.com',    // https://tapi.bibox.com // test path
      port: '443',  //'80',
      path: path,
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };

    
  // Set up the request
  //var post_req = http.request(post_options, function(res) {
  var post_req = https.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

    
  // post the data
  post_req.write(post_data);
  post_req.end();
}

function TestPost() {
    // This is an async file read
    fs.readFile('LinkedList.js', 'utf-8', function (err, data) {
      if (err) {
        // If this were just a small part of the application, you would
        // want to handle this differently, maybe throwing an exception
        // for the caller to handle. Since the file is absolutely essential
        // to the program's functionality, we're going to exit with a fatal
        // error instead.
        console.log("FATAL An error occurred trying to read in the file: " + err);
        process.exit(-2);
      }
      // Make sure there's data before we post it
      if(data) {
          //PostCode(data);
          console.log(data);
      }
      else {
        console.log("No data to post");
        process.exit(-1);
      }
    });
}

