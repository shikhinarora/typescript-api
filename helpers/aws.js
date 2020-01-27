const AWS = require('aws-sdk');

// Currently keeping bucket settings static. Can pick from environment if required
const BUCKET_NAME = `${REGION}-user-bucket`;
const FILE_NAME = 'userData.json';
const REGION = 'ap-southeast-1';

const s3 = new AWS.S3({
  region: REGION
});

const insertIntoS3 = async users => {
  // List buckets
  const list = await s3.listBuckets().promise();

  const bucket = list['Buckets'].find(buck => buck.Name === BUCKET_NAME);

  // Create bucket if does not exists
  if (!bucket) {
    await s3.createBucket({Bucket: BUCKET_NAME}).promise();
  }

  const params = {
    Bucket: BUCKET_NAME,
    Key: FILE_NAME,
    Body: JSON.stringify(users),
    ContentType: 'application/json',
    CacheControl: 'public, max-age=86400'
  };

  // Insert data in bucket
  await s3.putObject(params).promise();
  return;
};

module.exports = {
  insertIntoS3
}