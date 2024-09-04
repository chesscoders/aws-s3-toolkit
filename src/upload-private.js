const upload = require('./upload');

/**
 * Uploads a file to an S3 bucket with private access.
 *
 * @param {string} filename - The name of the file to upload.
 * @param {Buffer|string|ReadableStream} data - The data of the file to upload.
 * @returns {Promise<Object>} - A promise that resolves to the response from the S3 service.
 * @throws {Error} - Throws an error if the upload fails.
 */
const uploadPrivate = async (filename, data) => {
  return await upload(filename, data, 'private');
}

module.exports = uploadPrivate;
