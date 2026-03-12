# ⚙️ Automatic workflow backups to GitLab with GPT-4.1 documentation generation

> ⚡ **711 views** · ⚙️ [DevOps & CI/CD](../)

## Description

# Auto backup n8n workflows to GitLab with AI-generated documentation

This n8n template automatically backs up your workflows to a GitLab repository whenever they're updated or activated, and generates README documentation using AI.
**This workflow can be aslo added as a sub-workflow to any existing workflow to enable backup functionality.**

## Who's it for

This template is perfect for n8n users who want to:
- Maintain version control of their workflows
- Create automatic backups in Git repositories
- Generate documentation for their workflows using AI
- Keep their workflow library organized and documented

## How it works

The workflow monitors n8n for workflow updates and activations, then automatically saves the workflow JSON to GitLab and generates a README file using OpenAI:

1. **Trigger Detection**: Uses n8n Trigger to detect when workflows are updated or activated
2. **Workflow Retrieval**: Fetches the complete workflow data using the n8n API
3. **Repository Check**: Lists existing files in GitLab to determine if the workflow already exists
4. **Smart File Management**: Either creates a new file or updates an existing one based on the repository state
5. **AI Documentation**: Generates a README.md file using OpenAI's GPT model to document the workflow
6. **GitLab Storage**: Saves both the workflow JSON and README to organized folders in your GitLab repository

## Requirements

- **GitLab account** with API access and a repository named "all_projects"
- **n8n API credentials** for accessing workflow data
- **OpenAI API key** for generating documentation
- **GitLab personal access token** with repository write permissions

## How to set up

1. **Configure GitLab credentials**: Add your GitLab API credentials in the GitLab nodes
2. **Set up n8n API**: Configure your n8n API credentials for the workflow retrieval node
3. **Add OpenAI credentials**: Set up your OpenAI API key in the "Message a model" node
4. **Update repository details**: Modify the owner and repository name in GitLab nodes to match your setup
5. **Test the workflow**: Save and activate the workflow to test the backup functionality

## How to customize the workflow

- **Change repository structure**: Modify the file path expressions to organize workflows differently
- **Customize commit messages**: Update the commit message templates in GitLab nodes
- **Enhance AI documentation**: Modify the OpenAI prompt to generate different styles of documentation
- **Add file filtering**: Include conditions to backup only specific workflows
- **Extend triggers**: Add webhook or schedule triggers for different backup scenarios
- **Multiple repositories**: Duplicate GitLab nodes to backup to multiple repositories simultaneously

## 🔗 Nodes Used

GitLab, n8n Trigger, n8n, Execute Workflow Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
