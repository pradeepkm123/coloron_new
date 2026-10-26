const https = require('https');

const redirectUrl = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKF8zyIEWUEaeV3b8A1UIBBQicKjGFTmsm1pC_H2bD6dh8yKhCJb3cBEQw2BRq1D8Gd0pYMHLWQh8neo9ZQF8tvKcHvpRNWiyPDh4PVvcWgvgtdR7Y7oJFPxq84FzEkj1haRi-64q9lxX83kl_CxWv_oFmppB67m5mpkDpXwNARL4LzBajCTKuxrIO';

https.get(redirectUrl, res => {
  console.log('Status:', res.statusCode);
  console.log('Location:', res.headers.location);
}).on('error', err => console.error(err.message));
