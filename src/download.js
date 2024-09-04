const { GetObjectCommand } = require('@aws-sdk/client-s3');
const streamToBuffer = require('./stream-to-buffer');
const s3Client = require('./s3-client');
const endpointDetails = require('./endpoint-details');

/**
 * Downloads a file from an S3 bucket.
 *
 * @param {string} document - The name of the document to download.
 * @returns {Promise<Buffer>} - A promise that resolves to the buffer containing the file data.
 * @throws {Error} - Throws an error if the download fails.
 */
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
