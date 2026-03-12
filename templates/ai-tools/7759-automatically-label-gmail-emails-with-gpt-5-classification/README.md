# 🎯 Automatically label Gmail emails with GPT-5 classification

> ⚡ **809 views** · 🎯 [AI Summarization & Classification](../)

## Description

## How it works
This workflow automatically monitors your Gmail inbox and uses OpenAI's GPT model to intelligently classify incoming emails into four key categories:
 - High Priority - Urgent emails requiring immediate attention from executives, clients, or stakeholders
 - Promotion - Marketing emails, sales offers, product launches, and event invitations
 - Finance/Billing - Invoices, receipts, payment notifications, and financial records
 - Customer Support - Help requests, troubleshooting queries, and service-related issues
  
Once classified, emails are automatically labeled in Gmail using the appropriate tags, making it easy to filter, search, and prioritize your communications.

## How to set up
### Requirements
 - Gmail account with OAuth2 access enabled
 - OpenAI API key with GPT model access
 - Custom Gmail labels created for each category

### Step-by-step setup
 1. Create Gmail Labels
  - In Gmail, create these labels: "High Priority", "Promotion", "Finance/Billing", "Customer Support"
  - Note the label IDs (you'll need to replace the hardcoded ones in the workflow)
 2. Configure Credentials
  - Add your Gmail OAuth2 credentials in n8n
  - Add your OpenAI API credentials
 3. Update Label IDs
  - Replace the hardcoded label IDs in each Gmail node with your actual label IDs
  - You can find label IDs by testing the Gmail node or using Gmail API
 4. Adjust Classification Rules
  - Review the Text Classifier categories and modify descriptions to match your specific needs
  - Add or remove categories as required
 5. Set Polling Frequency
  - The workflow is set to check every minute - adjust based on your email volume

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
