resource "aws_s3_bucket" "cv-demo" {
  bucket = "cv-demo-tonneau-${var.account_name}"
}

resource "aws_s3_bucket_policy" "cv-demo" {
  bucket = aws_s3_bucket.cv-demo.id
  policy = data.aws_iam_policy_document.cloudfront_access_s3.json
}