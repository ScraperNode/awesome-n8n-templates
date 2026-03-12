# 🎯 Automatically categorize Gmail messages with GPT-4 mini classification

> ⚡ **1,198 views** · 🎯 [AI Summarization & Classification](../)

## Description

# 🛠️ Smart Email Classifier Workflow

Intelligent AI-powered email classification system that automatically sorts incoming Gmail messages into Business, Meetings, Cold Emails, and other categories using OpenAI.

## **⚡ Quick Setup**
1. Import this workflow into your n8n instance
2. Setup your OpenAI credentials at: [OpenAI api key](https://platform.openai.com/settings/organization/api-keys)
3. Configure your Gmail credentials and you're ready to go: [Google Cloud Console](https://console.cloud.google.com/)
4. Activate the workflow to start automatic email classification

## 🔧 How it Works

1. Gmail Trigger: Monitors incoming emails in real-time
2. Text Classifier: AI-powered categorization using OpenAI Chat Model
3. Smart Routing: Automatically sorts emails into predefined categories
4. Gmail Integration: Adds appropriate labels and organizes emails automatically
5. Fallback Handling: "No Operation" path for unclassifiable emails

Every email gets intelligently sorted into:

## **🏢 Business**

1. Work-related correspondence
2. Client communications
3. Project updates

## 📅 Meetings

1. Meeting invitations and requests
2. Calendar-related emails
3. Scheduling communications

## ❄️ Cold Emails

1. Sales outreach and pitches
2. Unsolicited business proposals
3. Marketing communications

## 🔀 Random

1. Personal emails
2. Newsletters
3. Miscellaneous content

## 🔗 Nodes Used

Gmail, Gmail Trigger, OpenAI Chat Model, Text Classifier

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
