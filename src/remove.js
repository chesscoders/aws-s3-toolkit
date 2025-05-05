const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = require('./s3-client');

/**
 * Removes a file from an S3 bucket.
 *
 * @param {string} filename - The name of the file to remove.
 * @returns {Promise<Object>} - A promise that resolves to the response from the S3 service.
 * @throws {Error} - Throws an error if the removal fails.
 */
const remove = async (filename) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: process.env.AWS_S3_FOLDER ? `${process.env.AWS_S3_FOLDER}/${filename}` : filename,
  };

  return await s3Client.send(new DeleteObjectCommand(params));
};

module.exports = remove;
