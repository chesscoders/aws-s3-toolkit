# aws-s3-toolkit

The AWS S3 toolkit package provides helper functions for AWS S3 operations.

## Installation

To add this package to your project, run:

```sh
npm i aws-s3-toolkit
# or, using Yarn
yarn add aws-s3-toolkit
```

## Features

- Download and upload helper functions for AWS S3 compatible buckets

## Usage

```js
import { download, upload } from 'aws-s3-toolkit';

// Download
await download(filename);
// Upload
await upload(filename, data);
```

## Contributing

We welcome contributions to improve AWS S3 toolkit package. Please feel free to submit pull requests or report issues via the [GitHub repository](https://github.com/chesscoders/aws-s3-toolkit).

## License

The AWS S3 toolkit package is licensed under the MIT License. See the LICENSE file for more details.
