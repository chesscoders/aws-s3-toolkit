# s3-fns

The s3-fns package provides helper functions for AWS S3 operations.

## Installation

To add this package to your project, run:

```sh
npm i s3-fns
# or, using Yarn
yarn add s3-fns
```

## Features

- Download and upload helper functions for AWS S3 compatible buckets

## Usage

```js
import { download, upload } from 's3-fns';

// Download
await download(filename);
// Upload
await upload(filename, data);
```

## Contributing

We welcome contributions to improve s3-fns. Please feel free to submit pull requests or report issues via the [GitHub repository](https://github.com/chesscoders/s3-fns).

## License

The s3-fns package is licensed under the MIT License. See the LICENSE file for more details.
