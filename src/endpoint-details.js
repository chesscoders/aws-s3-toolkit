/**
 * Extracts region, bucket, and folder details from the given endpoint URL.
 *
 * @param {string} endpoint - The endpoint URL to extract details from.
 * @returns {Object} An object containing the region, bucket, and folder.
 * @property {string} bucket - The bucket name extracted from the endpoint.
 * @property {string} folder - The folder name extracted from the endpoint.
 * @property {string} endpoint - The endpoint URL.
 * @property {string} region - The region extracted from the endpoint.
 */
const endpointDetails = (endpoint) => {
  // Initialize endpoint with value from environment variable if not provided
  if (!endpoint) {
    endpoint = process.env.AWS_S3_URL || process.env.AWS_S3_ENDPOINT;
  }

  try {
    const [url, bucket, folder] = endpoint.replace('https://', '').split('/');
    return {
      bucket,
      folder,
      endpoint: `https://${url}`,
      region: url.split('.')[0],
    };
  } catch {
    return {
      bucket: '',
      folder: '',
      endpoint: '',
      region: '',
    };
  }
};

module.exports = endpointDetails;
