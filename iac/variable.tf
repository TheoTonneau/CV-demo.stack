### MAIN VARIABLES
##################
variable "aws_region" {
  description = "Default region where to deploy resources"
  type        = string
}

variable "account_name" {
  description = "Account where to deploy VPC"
  type        = string
}



variable "environment" {
  description = "Account name / environment"
  type        = string
}