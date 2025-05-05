const { GetObjectCommand } = require('@aws-sdk/client-s3');
const streamToBuffer = require('./stream-to-buffer');
const s3Client = require('./s3-client');

/**
 * Downloads a file from an S3 bucket.
 *
 * @param {string} filename - The name of the file to download.
 * @returns {Promise<Buffer>} - A promise that resolves to the buffer containing the file data.
 * @throws {Error} - Throws an error if the download fails.
 */
const download = async (filename) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: process.env.AWS_S3_FOLDER ? `${process.env.AWS_S3_FOLDER}/${filename}` : filename,
  };

  const { Body } = await s3Client.send(new GetObjectCommand(params));
  return await streamToBuffer(Body);
};

module.exports = download;
