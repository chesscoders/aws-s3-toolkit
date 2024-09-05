# AWS S3 toolkit

The AWS S3 toolkit package provides helper functions for AWS S3 operations.

## Installation

To add this package to your project, run:

```sh
npm i aws-s3-toolkit
# or, using Yarn
yarn add aws-s3-toolkit
```

## Configuration

Before using the AWS S3 toolkit package, set your environment variables based on the credentials provided by AWS.

```sh
AWS_S3_KEY="XXXXXXXXXXXXXXXXXXXX"
AWS_S3_SECRET="XXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
AWS_S3_URL="https://region-name.amazonaws.com/bucket-name"
```

## Features

- Download, upload and remove helper functions for AWS S3 compatible buckets.

## Usage

```js
import { download, remove, upload } from 'aws-s3-toolkit';

// Read file
const fileName = 'hello-world.txt'
const testFileData = fs.readFileSync(path.resolve(__dirname, fileName));

// Upload to AWS S3 with public-read access
// Use the `uploadPrivate` function for uploads with private access
await upload(fileName, testFileData);
// Download from AWS S3
await download(fileName);
// Remove from AWS S3
await remove(fileName);
```

## Contributing

We welcome contributions to improve the AWS S3 toolkit package. Please feel free to submit pull requests or report issues via the [GitHub repository](https://github.com/chesscoders/aws-s3-toolkit).

## License

The AWS S3 toolkit package is licensed under the MIT License. See the LICENSE file for more details.
