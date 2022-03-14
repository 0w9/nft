const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://api.nftport.xyz/v0/recommendations/similar_nfts/urls',
  headers: {
    'Content-Type': 'application/json',
    Authorization: '1970291d-6325-4d02-956e-bf97900bedd7'
  },
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
