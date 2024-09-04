const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = require('./s3-client');
const endpointDetails = require('./endpoint-details');

/**
 * Removes a file from an S3 bucket.
 *
 * @param {string} filename - The name of the file to remove.
 * @returns {Promise<Object>} - A promise that resolves to the response from the S3 service.
 * @throws {Error} - Throws an error if the removal fails.
 */
const remove = async (filename) => {
  const { bucket, folder } = endpointDetails();
  const params = {
    Bucket: bucket,
    Key: folder ? `${folder}/${filename}` : filename,
  };

  return await s3Client.send(new DeleteObjectCommand(params));
};

module.exports = remove;
