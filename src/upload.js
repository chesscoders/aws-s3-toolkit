const { PutObjectCommand } = require('@aws-sdk/client-s3');
const s3Client = require('./s3-client');
const endpointDetails = require('./endpoint-details');

/**
 * Uploads a file to an S3 bucket.
 *
 * @param {string} filename - The name of the file to upload.
 * @param {Buffer|string|ReadableStream} data - The data of the file to upload.
 * @param {string} - The access control list (ACL) for the file. Default is 'public-read'.
 * @returns {Promise<Object>} - A promise that resolves to the response from the S3 service.
 * @throws {Error} - Throws an error if the upload fails.
 */
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
