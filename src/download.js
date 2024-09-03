const { GetObjectCommand } = require('@aws-sdk/client-s3');
const streamToBuffer = require('./stream-to-buffer');
const s3Client = require('./s3-client');
const endpointDetails = require('./endpoint-details');

const download = async (document) => {
  const { bucket, folder } = endpointDetails();
  const params = {
    Bucket: bucket,
    Key: folder ? `${folder}/${document}` : document,
  };

  const { Body } = await s3Client.send(new GetObjectCommand(params));
  return await streamToBuffer(Body);
};

module.exports = download;
