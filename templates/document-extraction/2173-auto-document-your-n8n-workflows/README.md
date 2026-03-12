# 🔬 Auto document your n8n workflows

> ⚡ **11,161 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for?

This workflow is designed for n8n users and developers who need to automate the documentation process of their n8n workflows. It's particularly useful for teams looking to streamline their documentation efforts and ensure consistency across their workflow documentation.

## What problem is this workflow solving? / Use case

The primary problem this workflow addresses is the manual and time-consuming process of creating documentation for n8n workflows. It automates the generation of concise, clear, and comprehensive documentation directly from the workflow's JSON, making it easier for both technical and non-technical users to understand what the workflow does and how it operates.

## What this workflow does

Upon receiving a form submission with the workflow title and JSON, this workflow automatically generates documentation that includes:
- A brief introduction to the workflow.
- The trigger mechanism (webhook URLs for test and production environments, or cron schedules).
- Setup requirements, including necessary credentials and external dependencies.


## Setup

1. **Credentials Setup**: Ensure you have OpenAI API credentials configured in n8n to use the GPT model for generating documentation text.
2. **Form Submission**: Users must submit the form with the workflow title and JSON. The form is accessible via:
   - Test URL: `domain/form-test/{webhookId}`
   - Production URL: `domain/form/{webhookId}`

## How to customize this workflow to your needs

- **Modify Trigger URLs**: Adjust the webhook or form URLs based on your domain and specific n8n setup.
- **Customize Documentation Template**: Edit the OpenAI node's prompt to change the structure or details of the generated documentation.
- **Extend Functionality**: Add nodes to integrate with other systems (e.g., automatically publishing the documentation to a wiki or sending it via email).

This workflow simplifies the documentation process, making it accessible and manageable for teams of all sizes and technical abilities. By automating documentation, it ensures that all workflows are properly documented, enhancing understanding and efficiency within teams.

## 🔗 Nodes Used

OpenAI, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
