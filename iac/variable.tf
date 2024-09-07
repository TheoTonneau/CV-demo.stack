### MAIN VARIABLES
##################
variable "aws_region" {
  description = "Default region where to deploy resources"
  type        = string
}

variable "aws_region_global" {
  description = "global region"
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