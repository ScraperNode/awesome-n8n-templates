# 📋 AI-powered email to Jira ticket creation with Llama 3.2

> ⚡ **3,988 views** · 📋 [Project Management](../)

## Description

This AI-powered workflow reads emails, understands the request using an LLM, and creates structured Jira issues.

### Key Insights

- Poll for new emails every 5 minutes; ensure Gmail/IMAP is properly configured.  
- AI analysis requires a reliable LLM model (e.g., Chat Model or AI Tool).

### Workflow Process

- Trigger the workflow with the `Check for New Emails Gmail Trigger` node.  
- Fetch full email content using the `Fetch Full Email Content get message` node.  
- Analyze email content with the `Analyze Email & Extract Tasks` node using AI.  
- Parse the AI-generated JSON output into tasks with the `Parse JSON Output from AI` node.  
- Create the main Jira issue with the `Jira - Create Main Issue create: issue` node.  
- Split subtasks from JSON and create them with the `Split Subtasks JSON Items` and `Create Subtasks create: issue` nodes.

### Usage Guide

- Import the workflow into n8n and configure Gmail and Jira credentials.  
- Test with a sample email to ensure ticket creation and subtask assignment.

### Prerequisites

- Gmail/IMAP credentials for email polling  
- Jira API credentials with issue creation permissions  

### Customization Options

Adjust the `Analyze Email & Extract Tasks` node to refine AI task extraction or modify the polling frequency in the trigger node.

## 🔗 Nodes Used

Jira Software, Gmail, Gmail Trigger, AI Agent, Ollama Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
