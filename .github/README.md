# .github

The folder contains all files for GitHub Actions


## Project Structure
```
├── actions
│   ├── invalid-cache
│   │   └── action.yml
│   ├── manage-cache
│   │   └── action.yml
│   ├── manage-cache-web
│   │   └── action.yml
│   └── terraform-check
│       └── action.yml
└── workflows
    ├── manual_deployment.yml
    └── test-on-push.yml
```

## Workflows
- **test-on-push.yml** :arrow: Test the format of the Terraform code
- **manual_deployment.yml** :arrow: Build the app and deploy on AWS

## Triggers
- **on push** for tests
- **workflow dispatch** for manual_deployment