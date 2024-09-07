resource "aws_lambda_function" "lambda_cv_demo" {
  filename         = "../lambda/build/index.zip"
  function_name    = "cv-demo-${var.environment}-email-management"
  role             = data.aws_iam_policy_document.lambda_cv_demo.json
  handler          = "index.handler"
  source_code_hash = filebase64sha256("../../lambda/build/index.zip")
  runtime          = "nodejs20.x"
  timeout          = 900

  environment {
    variables = {

    }
  }
}

resource "aws_lambda_permission" "api_access_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_cv_demo.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.cv_demo.arn}/*/${aws_api_gateway_method.cv_demo.http_method}/${aws_api_gateway_resource.cv_demo.path_part}/${aws_api_gateway_resource.cv_demo.path_part}"
}

resource "aws_cloudwatch_log_group" "cv_demo_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.lambda_cv_demo.function_name}"
  retention_in_days = 90
}