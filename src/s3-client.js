const { S3Client } = require('@aws-sdk/client-s3');
const endpointDetails = require('./endpoint-details');

// Extract region from endpoint details
const { region } = endpointDetails();

// Initialize S3 client
const s3Client = new S3Client({
  endpoint: process.env.AWS_S3_ENDPOINT,
  forcePathStyle: false,
  region,
  credentials: {
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
  },
});

module.exports = s3Client;
