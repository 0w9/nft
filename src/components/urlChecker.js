import React, {
  Component
} from 'react'


const axios = require('axios');

export default class urlChecker extends Component {
  render() {

      function checkUrl() {
        const options = {
          method: 'POST',
          url: 'https://api.nftport.xyz/v0/recommendations/similar_nfts/urls',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '1970291d-6325-4d02-956e-bf97900bedd7'
          },
          data: {
            url: document.getElementById("url").value,
            page_number: 1,
            page_size: 50
          }
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
                  <input type="text" placeholder="enter image url" id="url"></input>
                  <input type="file" placeholder="open a file" id="file"></input>
                  <button type="button" onClick={checkUrl}>Check</button>
              </form>
          </div>
      )
  }
}
