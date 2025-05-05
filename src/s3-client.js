require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');

// Initialize S3 client
const s3Client = new S3Client({
  endpoint: process.env.AWS_S3_ENDPOINT,
  region: process.env.AWS_S3_REGION,
  forcePathStyle: false,
  credentials: {
    accessKeyId: process.env.AWS_S3_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET,
  },
});

module.exports = s3Client;
