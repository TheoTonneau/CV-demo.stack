###################################################################################################################################
##  BEGIN -- REGION MAIN                                                                                                         ##
###################################################################################################################################

resource "aws_api_gateway_rest_api" "cv_demo" {
  name = "cv-demo-${var.environment}-apigateway"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_deployment" "cv_demo" {
  rest_api_id = aws_api_gateway_rest_api.cv_demo.id

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [
    aws_api_gateway_integration.integration_cors,
    aws_api_gateway_integration.cv_demo,
    aws_api_gateway_integration_response.cv_demo,
  ]
}

resource "aws_api_gateway_stage" "cv_demo" {
  deployment_id = aws_api_gateway_deployment.cv_demo.id
  rest_api_id   = aws_api_gateway_rest_api.cv_demo.id
  stage_name    = "v1"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_method_settings" "cv_demo" {
  rest_api_id = aws_api_gateway_rest_api.cv_demo.id
  stage_name  = aws_api_gateway_stage.cv_demo.stage_name
  method_path = "*/*"

  settings {
    metrics_enabled    = false
    data_trace_enabled = true
    logging_level      = "INFO"
  }
}

resource "aws_api_gateway_usage_plan" "cv_demo" {
  name        = "cv-demo--usage-plan"
  description = "Usage plan for cv demo api"

  api_stages {
    api_id = aws_api_gateway_rest_api.cv_demo.id
    stage  = aws_api_gateway_stage.cv_demo.stage_name
  }
}

resource "aws_api_gateway_api_key" "cv_demo" {
  name = upper("CV_DEMO_${var.environment}_API_TOKEN")
}

resource "aws_api_gateway_usage_plan_key" "cv_demo" {
  key_id        = aws_api_gateway_api_key.cv_demo.id
  key_type      = "API_KEY"
  usage_plan_id = aws_api_gateway_usage_plan.cv_demo.id
}

###################################################################################################################################
##  END -- REGION MAIN                                                                                                           ##
###################################################################################################################################

###################################################################################################################################
##  BEGIN -- REGION RESOURCE                                                                                                     ##
###################################################################################################################################

resource "aws_api_gateway_resource" "cv_demo" {
  rest_api_id = aws_api_gateway_rest_api.cv_demo.id
  parent_id   = aws_api_gateway_rest_api.cv_demo.root_resource_id
  path_part   = "cv_demo"
}

resource "aws_api_gateway_resource" "resource_cors" {
  rest_api_id = aws_api_gateway_rest_api.cv_demo.id
  parent_id   = aws_api_gateway_rest_api.cv_demo.root_resource_id
  path_part   = "{proxy+}"
}

###################################################################################################################################
##  END -- REGION RESOURCE                                                                                                       ##
###################################################################################################################################

###################################################################################################################################
##  BEGIN -- REGION METHOD                                                                                                       ##
###################################################################################################################################

resource "aws_api_gateway_method" "cv_demo" {
  authorization    = "NONE"
  http_method      = "POST"
  rest_api_id      = aws_api_gateway_rest_api.cv_demo.id
  resource_id      = aws_api_gateway_resource.cv_demo.id
  api_key_required = true
}

resource "aws_api_gateway_method" "method_cors" {
  rest_api_id      = aws_api_gateway_rest_api.cv_demo.id
  resource_id      = aws_api_gateway_resource.resource_cors.id
  http_method      = "OPTIONS"
  authorization    = "NONE"
  api_key_required = false
}

resource "aws_api_gateway_method_response" "cv_demo" {
  rest_api_id = aws_api_gateway_rest_api.cv_demo.id
  resource_id = aws_api_gateway_resource.cv_demo.id
  http_method = aws_api_gateway_method.cv_demo.http_method
  status_code = 200

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

###################################################################################################################################
##  END -- REGION METHOD                                                                                                         ##
###################################################################################################################################

###################################################################################################################################
##  BEGIN -- REGION INTEGRATIONS                                                                                                 ##
###################################################################################################################################

resource "aws_api_gateway_integration" "cv_demo" {
  rest_api_id             = aws_api_gateway_rest_api.cv_demo.id
  resource_id             = aws_api_gateway_resource.cv_demo.id
  http_method             = aws_api_gateway_method.cv_demo.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.lambda_cv_demo.invoke_arn

  depends_on = [
    aws_api_gateway_method.cv_demo
  ]
}

resource "aws_api_gateway_integration" "integration_cors" {
  rest_api_id      = aws_api_gateway_rest_api.cv_demo.id
  resource_id      = aws_api_gateway_resource.resource_cors.id
  http_method      = aws_api_gateway_method.method_cors.http_method
  content_handling = "CONVERT_TO_TEXT"
  type = "MOCK"

  request_templates = {
    "application/json" = "{ \"statusCode\": 200 }"
  }
}

###################################################################################################################################
##  END -- REGION INTEGRATIONS                                                                                                   ##
###################################################################################################################################

###################################################################################################################################
##  BEGIN -- REGION RESPONSES                                                                                                    ##
###################################################################################################################################

resource "aws_api_gateway_integration_response" "cv_demo" {
  rest_api_id = aws_api_gateway_rest_api.cv_demo.id
  resource_id = aws_api_gateway_resource.resource_cors.id
  http_method = aws_api_gateway_method.method_cors.http_method
  status_code = 200

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }

  depends_on = [
    aws_api_gateway_resource.resource_cors,
    aws_api_gateway_method.method_cors,
    aws_api_gateway_integration.integration_cors,
  ]
}

###################################################################################################################################
##  END -- REGION RESPONSES                                                                                                      ##
###################################################################################################################################