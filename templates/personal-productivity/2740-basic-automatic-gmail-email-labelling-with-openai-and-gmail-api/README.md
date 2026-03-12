# ⚡ Basic automatic Gmail email labelling with OpenAI and Gmail API

> ⚡ **122,985 views** · ⚡ [Personal Productivity](../)

## Description

## Description
This workflow automates email categorization in Gmail using the Gmail API and OpenAI's language model. It periodically checks for new emails, reads their content, and categorizes them based on existing Gmail labels. If no matching label is found, the workflow creates a new label and assigns it to the email.

## Key Features
- **Polling for Emails**: The workflow triggers every 5 minutes to check for new emails using the Gmail Trigger node.
- **Reading Labels**: Existing Gmail labels are fetched to determine the most relevant match for email categorization.
- **Dynamic Labeling**: If no existing label matches, a new label is created dynamically based on the email's content.
- **OpenAI Integration**: The workflow uses OpenAI's Chat model to analyze email content and suggest or create appropriate labels.
- **Email Categorization**: Labels are applied to emails, ensuring they are organized in Gmail's structure. The workflow also removes less relevant emails (e.g., ads) from the inbox.

## Nodes in Use
1. **Gmail Trigger**: Polls Gmail every 5 minutes for new emails.
2. **Gmail - Read Labels**: Fetches all existing Gmail labels.
3. **Gmail - Get Message**: Retrieves the full content of a specific email.
4. **Gmail - Add Label to Message**: Assigns a chosen label to the email.
5. **Gmail - Create Label**: Creates a new label if necessary.
6. **OpenAI Chat Model**: Analyzes email content for categorization.
7. **Memory Buffer**: Retains context for email analysis across multiple iterations.
8. **Wait Node**: Adds a buffer period to manage email processing.

## Prerequisites
- **Gmail API Setup**: Ensure Gmail OAuth2 credentials are configured in n8n.
- **OpenAI API Key**: Configure OpenAI credentials for email analysis.
- **Labeling Standards**: Maintain a consistent Gmail label structure for better organization.

## Instructions
1. Add your Gmail API credentials to the Gmail nodes.
2. Add your OpenAI API credentials to the OpenAI Chat Model node.
3. Activate the workflow. It will start polling for new emails every 5 minutes.
4. Monitor and refine the categorization logic if necessary to ensure alignment with Gmail's organizational needs.

## Use Case
Ideal for individuals or teams handling high email volumes who want to maintain an organized inbox and automate repetitive categorization tasks.

Note: You can improve the prompt to get better results from the agent by giving it more personal rules on how to categorize.

## 🔗 Nodes Used

Gmail Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
