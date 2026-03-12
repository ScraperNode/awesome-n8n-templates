# 🎫 Categorize support emails with AI and create tasks in Dart

> ⚡ **117 views** · 🎫 [Ticket Management & Triage](../)

## Description

Automatically turn incoming support emails into categorized, prioritized tasks in Dart—complete with AI-generated summaries, tags, and sender context.

## What It Does

This workflow captures emails from Gmail, uses an AI model to classify them into one of seven categories (e.g., Bug Report, Billing, Feature Request), and creates a structured task in Dart. Each task includes:

- **Title**: The email subject  
- **Tag**: Based on the detected category  
- **Priority**: Set by the AI based on content analysis  
- **Description**: Includes confidence level, rationale, summary, and the cleaned full email body  
- **Comment**: Automatically adds the sender’s name and email for easy reference

The workflow also parses and cleans the raw HTML email content, ensuring all data is readable and workflow-ready.

## Who's It For

This template is built for support and operations teams using Dart who want to streamline how incoming emails are sorted and turned into actionable tasks. It’s ideal for organizations managing multiple types of requests and updates from clients, partners, or systems.

## How to Set Up

1. Import the workflow into **n8n**  
2. Connect your **Gmail** and **Dart** accounts
3. Replace the dummy Dartboard ID with your actual board ID  
4. Choose your preferred AI model (results may vary depending on model quality)
5. If your target email address is in a google group, use the **Filter: "Sender"** in the Gmail trigger

## Requirements

- n8n account  
- Connected Gmail and Dart account

## How to Customize the Workflow

- Modify the **category list** to match your team’s taxonomy  
- Adjust the **AI classification prompt** to fine-tune tagging and prioritization    
- Choose your preferred AI model

## 🔗 Nodes Used

Gmail Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
