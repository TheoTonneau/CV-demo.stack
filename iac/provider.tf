provider "aws" {
  region = var.aws_region
}

provider "aws" {
  region = var.aws_region_global
  alias  = "acm_global"
}