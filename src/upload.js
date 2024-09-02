require('dotenv').config();
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = require('./s3-client');

const upload = async (filename, data, acl = 'public-read') => {
  const params = {
    Bucket: process.env.DO_SPACES_BUCKET,
    Key: process.env.DO_SPACES_FOLDER ? `${process.env.DO_SPACES_FOLDER}/${filename}` : filename,
    Body: data,
    ACL: acl,
  };

  return await s3Client.send(new PutObjectCommand(params));
};

module.exports = upload;
