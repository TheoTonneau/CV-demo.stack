# Infrastructure as Code with Terraform for AWS

This project uses Terraform to manage AWS resources.

## Table of contents

1. [Version](#version)
2. [Commands](#commands-used)
3. [Project Structure](#project-structure)

## Version

- [Terraform](https://www.terraform.io/downloads.html) (version >= 1.4.5)
- [Provider AWS](https://registry.terraform.io/providers/hashicorp/aws/latest) (version ~> 5.30.0)

## Commands Used

### Command to check the format
```bash
terraform fmt -recursive
```

### Commands to deploy infrastructure
```bash
terraform init -backend-config=./var/$ENVIRONMENT/backend.tfbackend -reconfigure
terraform plan -var-file="./var/$ENVIRONMENT/values.tfvars"
terraform apply -var-file="./var/$ENVIRONMENT/values.tfvars"
```

## Project Structure
```
├── apigateway.tf
├── backend.tf
├── cloudfront.tf
├── data.tf
├── lambda.tf
├── output.tf
├── provider.tf
├── role.tf
├── s3.tf
├── sns.tf
├── values.auto.tfvars
├── var
│   ├── prod
│   │   ├── backend.tfbackend
│   │   └── values.tfvars
│   └── test
│       ├── backend.tfbackend
│       └── values.tfvars
└── variable.tf
```