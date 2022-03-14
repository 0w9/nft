import React, {
    Component
} from 'react'
import {useState} from 'react';

import fetch from 'node-fetch';

const axios = require('axios');

export default class urlChecker extends Component {
    render() {
      
        function checkUrl() {
          const options = {
            method: 'POST',
            url: 'https://api.nftport.xyz/v0/recommendations/similar_nfts/urls',
            headers: {'Content-Type': 'application/json', Authorization: ''},
            data: {
              url: 'https://supermariorun.com/assets/img/stage/obj_mode1.png',
              page_number: 1,
              page_size: 50
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
        }

        return ( 
            <div>
                <form>
                    <input type="text" placeholder="enter image url" id="url"></input>
                    <button type="button" onClick={checkUrl}>Check</button>
                </form>
            </div>
        )
    }
}
