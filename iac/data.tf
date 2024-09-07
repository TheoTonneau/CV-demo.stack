data "aws_iam_policy_document" "cloudfront_access_s3" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.cv_demo.arn}/*"]
    condition {
      test     = "StringEquals"
      values   = [aws_cloudfront_distribution.cv_demo.arn]
      variable = "AWS:SourceArn"
    }
  }
}

data "aws_acm_certificate" "cv_demo" {
  provider = aws.acm_global
  statuses = ["ISSUED"]
  domain   = "cv-demo-${var.environment}.theo-tonneau.com"
}

data "aws_iam_policy_document" "lambda_cv_demo" {
  statement {
    effect = "Allow"
    actions = [
      "logs:PutLogEvents",
      "logs:CreateLogStream",
      "logs:CreateLogGroup"
    ]
    resources = aws_cloudwatch_log_group.cv_demo_log_group.arn
  }
}