resource "aws_s3_bucket" "cv_demo" {
  bucket = "cv-demo-tonneau-${var.environment}"
}

resource "aws_s3_bucket_policy" "cv_demo" {
  bucket = aws_s3_bucket.cv_demo.id
  policy = data.aws_iam_policy_document.cloudfront_access_s3.json
}

resource "aws_s3_bucket_website_configuration" "cv_demo" {
  bucket = aws_s3_bucket.cv_demo.bucket
  index_document {
    suffix = "index.html"
  }
}