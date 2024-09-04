require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');
const endpointDetails = require('./endpoint-details');

// Extract region from endpoint details
const { endpoint, region } = endpointDetails();

// Initialize S3 client
const s3Client = new S3Client({
  endpoint,
  region,
  forcePathStyle: false,
  credentials: {
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
  },
});

module.exports = s3Client;
