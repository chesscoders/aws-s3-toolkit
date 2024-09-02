const { S3Client } = require('@aws-sdk/client-s3');
const endpointDetails = require('./endpoint-details');

// Extract region from endpoint details
const { region } = endpointDetails();

// Initialize S3 client
const s3Client = new S3Client({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  forcePathStyle: false,
  region,
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
  },
});

module.exports = s3Client;
