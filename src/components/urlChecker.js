import React, {
  Component
} from 'react'


const axios = require('axios');

export default class urlChecker extends Component {
  render() {

      function checkUrl() {
        const fileInput = document.getElementById('file');

        const form = new FormData();
        form.append("file", fileInput.files[0]);

        const options = {
          method: 'POST',
          url: 'https://api.nftport.xyz/v0/recommendations/similar_nfts/files',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '1970291d-6325-4d02-956e-bf97900bedd7',
            'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
          },
          data: form
        };

        axios.request(options).then(function (response) {
          response.data.nfts.forEach(x => {
            console.log(x.metadata);
          })
        }).catch(function (error) {
          console.error(error);
        });
      }

      return (
          <div>
              <form>
                  <h1>Find similar nfts</h1>
                  <input type="file" placeholder="open a file" id="file"></input>
                  <br />
                  <button type="button" onClick={checkUrl}>Check</button>
              </form>
          </div>
      )
  }
}
