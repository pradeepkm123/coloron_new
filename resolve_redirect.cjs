const https = require('https');

const redirectUrl = 'https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE_gaIZtwtC0RZVW_1mPq_qVSy00fj_yIz8-d1eO3m7hnYtBshwVT0m3qh597A0qOmrfa41eGzbDsAdT2egl-xgDEmQ1SQdSkIzfQwoLpY3QC5pK9TFZ9XPfEzP3ypkB_yuLd6U4uat0lEESRpJIDRLDKGiPyD5I0GOibGAJ19GW68-UfI0wIlmYbf0tX7pWUJ6GFs_6AxK1qJ1j2yCXAdFxJjGcTqTz-R6blxjI0qmUQNnBOfTF4kZn6iY700VQZbd_CBYAHu7';

https.get(redirectUrl, res => {
  console.log('Status:', res.statusCode);
  console.log('Location:', res.headers.location);
}).on('error', err => console.error(err.message));
