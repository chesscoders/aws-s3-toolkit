const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const upload = require('../src/upload');
const download = require('../src/download');

describe('Upload function', () => {
  it('should be defined', () => {
    expect(upload).to.be.a('function');
  });

  it('should upload a real file successfully', async () => {
    const testFile = fs.readFileSync(path.resolve(__dirname, 'hello-world.txt'));
    const response = await upload('hello-world.txt', testFile);
    expect(response.$metadata.httpStatusCode).to.equal(200);
  });
});

describe('Download function', () => {
  it('should be defined', () => {
    expect(download).to.be.a('function');
  });

  it('should download a real file successfully', async () => {
    const response = await download('hello-world.txt');
    expect(response).to.be.an.instanceof(Buffer);
  });
});
