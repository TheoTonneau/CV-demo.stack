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

data "aws_iam_policy_document" "cv_demo_assume_role" {
  statement {
    effect = "Allow"

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }

    actions = ["sts:AssumeRole"]
  }
}

data "aws_iam_policy_document" "lambda_cv_demo" {
  statement {
    effect = "Allow"
    actions = [
      "logs:PutLogEvents",
      "logs:CreateLogStream",
      "logs:CreateLogGroup"
    ]
    resources = ["arn:aws:logs:eu-west-3:${var.account_name}:*"]
  }
}

resource "aws_iam_policy" "cv_demo" {
  name        = "lambda_logging"
  path        = "/"
  description = "IAM policy for logging from a lambda"
  policy      = data.aws_iam_policy_document.lambda_cv_demo.json
}

resource "aws_iam_policy" "lambda_sqs_sns_policy" {
  name        = "lambda_sqs_sns_policy"
  description = "Lambda policy to access SNS"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = "sns:Publish"
        Resource = [
          aws_sns_topic.cv_demo.arn,
          aws_sns_topic.cv_demo_error.arn
        ]
      }
    ]
  })
}