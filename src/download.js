require('dotenv').config();
const { GetObjectCommand } = require('@aws-sdk/client-s3');
const streamToBuffer = require('./stream-to-buffer');
const s3Client = require('./s3-client');

const download = async (document) => {
  const params = {
    Bucket: process.env.DO_SPACES_BUCKET,
    Key: process.env.DO_SPACES_FOLDER ? `${process.env.DO_SPACES_FOLDER}/${document}` : document,
  };

  const { Body } = await s3Client.send(new GetObjectCommand(params));
  return await streamToBuffer(Body);
};

module.exports = download;
