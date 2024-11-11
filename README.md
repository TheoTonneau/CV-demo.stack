# CV-demo.stack

Welcome to my CV

[Here is the result of this stack](https://cv-demo.theo-tonneau.com)

## Status
![status](https://github.com/TheoTonneau/cv-demo.stack/actions/workflows/test-on-push.yml/badge.svg)
![status](https://github.com/TheoTonneau/cv-demo.stack/actions/workflows/manual_deployment.yml/badge.svg)

## Technologies

This project includes some libraries :
- Terraform
- YAML (GitHub Actions)
- HTML
- CSS
- Typescript
- Javascript
- NodeJS

## Project Tree
```
.
├── LICENSE
├── README.md
├── cv-demo.iml
├── iac
│   ├── README.md
│   ├── apigateway.tf
│   ├── backend.tf
│   ├── cloudfront.tf
│   ├── data.tf
│   ├── lambda.tf
│   ├── output.tf
│   ├── provider.tf
│   ├── role.tf
│   ├── s3.tf
│   ├── sns.tf
│   ├── values.auto.tfvars
│   ├── var
│   │   ├── prod
│   │   │   ├── backend.tfbackend
│   │   │   └── values.tfvars
│   │   └── test
│   │       ├── backend.tfbackend
│   │       └── values.tfvars
│   └── variable.tf
├── lambda
│   └── src
│       └── index.ts
├── package-lock.json
├── package.json
└── src
    ├── README.md
    ├── css
    │   └── style.css
    ├── img
    │   ├── someImages.png
    ├── index.html
    └── ts
        ├── cookie.ts
        ├── decrypt.ts
        ├── header.ts
        ├── index.ts
        ├── informations.ts
        ├── lang.ts
        ├── navigate.ts
        ├── onload.ts
        ├── pages.ts
        └── sendForm.ts
```

## Build the project

### Build lambda

```bash
npm run build
```

### Build app

```bash
npm run build-app
```

## Deploy application
```bash
cd iac
```

Follow instructions in README.md in ./iac