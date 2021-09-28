const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  DeleteBucketCommand,
} = require('@aws-sdk/client-s3');

const s3 = new S3Client({ region: process.env.AWS_REGION });

const createBucket = async () => {
  try {
    const data = await s3.send(new CreateBucketCommand({
      Bucket: process.env.AWS_S3_BUCKET,
    }));
    console.log(`Success. Bucket created: ${process.env.AWS_S3_BUCKET}`);
  } catch (err) {
    console.log(`${process.env.AWS_S3_BUCKET} already exists`);
  }
};

const uploadToS3 = async (fileName, fileBody, fileType = '', encoding = '') => {
  try {
    const results = await s3.send(new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: fileName,
      Body: fileBody,
      ContentType: fileType,
      ContentEncoding: encoding,
      CacheControl: 'max-age=30'
    }));
    console.log(`Successfully uploaded data to ${process.env.AWS_S3_BUCKET}/${fileName}`);
  } catch (err) {
    console.log('Error', err);
  }
};

module.exports = {
  createBucket,
  uploadToS3,
};

