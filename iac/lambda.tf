resource "aws_lambda_function" "lambda_cv_demo" {
  filename         = "../lambda/build/index.zip"
  function_name    = "cv-demo-${var.environment}-email-management"
  role             = aws_iam_role.cv_demo_role.arn
  handler          = "lambda/build/index.handler"
  source_code_hash = filebase64sha256("../lambda/build/index.zip")
  runtime          = "nodejs20.x"
  timeout          = 900

  environment {
    variables = {
      SUCCESS_TOPIC_ARN = aws_sns_topic.cv_demo.arn
      FAILURE_TOPIC_ARN = aws_sns_topic.cv_demo_error.arn
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.cv_demo
  ]
}

resource "aws_lambda_permission" "api_access_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_cv_demo.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "arn:aws:execute-api:${var.aws_region}:${var.account_name}:${aws_api_gateway_rest_api.cv_demo.id}/*/${aws_api_gateway_method.cv_demo.http_method}/${aws_api_gateway_resource.cv_demo.path_part}"
}

resource "aws_cloudwatch_log_group" "cv_demo_log_group" {
  name              = "/aws/lambda/${aws_lambda_function.lambda_cv_demo.function_name}"
  retention_in_days = 90
}

resource "aws_lambda_function_event_invoke_config" "cv_demo" {
  function_name          = aws_lambda_function.lambda_cv_demo.function_name
  maximum_retry_attempts = 0
  destination_config {
    on_success {
      destination = aws_sns_topic.cv_demo.arn
    }
    on_failure {
      destination = aws_sns_topic.cv_demo_error.arn
    }
  }
}