const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { upload, download, remove } = require('../index');

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

describe('Remove function', () => {
  it('should be defined', () => {
    expect(remove).to.be.a('function');
  });

  it('should remove a real file successfully', async () => {
    const response = await remove('hello-world.txt');
    expect(response.$metadata.httpStatusCode).to.equal(204);
  });
});
