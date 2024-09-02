data "aws_iam_policy_document" "cloudfront_access_s3" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    effect    = "allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.cv-demo.arn}/*"]
    condition {
      test     = "StringEquals"
      values   = [aws_cloudfront_distribution.cv-demo.arn]
      variable = "AWS:SourceArn"
    }
  }
}