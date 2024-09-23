output "apiUrl" {
  value       = aws_api_gateway_deployment.cv_demo.invoke_url
  description = "API's URL"
  sensitive   = true
}

output "apiKey" {
  value       = aws_api_gateway_api_key.cv_demo.value
  description = "API KEY"
  sensitive   = true
}