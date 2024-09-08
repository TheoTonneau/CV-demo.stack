resource "aws_iam_role" "cv_demo_role" {
  name               = "cv-demo-role"
  assume_role_policy = data.aws_iam_policy_document.cv_demo_assume_role.json
}

resource "aws_iam_role_policy_attachment" "cv_demo" {
  role       = aws_iam_role.cv_demo_role.name
  policy_arn = aws_iam_policy.cv_demo.arn
}

resource "aws_iam_role_policy_attachment" "lambda_policy_attachment" {
  role       = aws_iam_role.cv_demo_role.name
  policy_arn = aws_iam_policy.lambda_sqs_sns_policy.arn
}