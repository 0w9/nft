const axios = require("axios");

async function checkurl() {

const options = {
	method: 'POST',
	url: 'https://api.nftport.xyz/v0/duplicates/urls',
	headers: {
    	"Content-Type": 'application/json',
    	"Authorization": '1970291d-6325-4d02-956e-bf97900bedd7'
  	},

  	data: {
		url: "",
    		page_number: 1,
    		page_size: 50,
    		threshold: 0.9,
  		}
	};

	axios.request(options).then(function (response) {
		for(let similar_nft of response.data.similar_nfts) {
			if(similar_nft.contract_address.toLowerCase() != "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB".toLowerCase()) {
				console.log(similar_nft.contract_address);
			}
		}

	}).catch(function (error) {
  		console.error(error);
	});

}

checkurl();
