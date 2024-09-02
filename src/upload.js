require('dotenv').config();
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = require('./s3-client');
const endpointDetails = require('./endpoint-details');

const upload = async (filename, data, acl = 'public-read') => {
  const { bucket, folder } = endpointDetails();
  const params = {
    Bucket: bucket,
    Key: folder ? `${folder}/${filename}` : filename,
    Body: data,
    ACL: acl,
  };

  return await s3Client.send(new PutObjectCommand(params));
};

module.exports = upload;
