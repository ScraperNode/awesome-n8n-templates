# 🎫 Automatic Gmail message categorization with GPT-4 content analysis & labels

> ⚡ **1,052 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Who is this for?

This workflow is ideal for Gmail users and teams who receive a high volume of emails and want to streamline inbox management. It suits professionals seeking to organize messages automatically, including sales teams, project managers, support staff, and anyone who benefits from automated email categorization.

## What problem is this workflow solving? / Use case

Manually labeling emails is time-consuming and can lead to inconsistent organization. This automated n8n workflow uses Gmail and OpenAI to analyze incoming messages and apply the appropriate labels, such as "Quotation", "Inquiry", "Project progress", and "Notification", based on content—improving productivity and ensuring important messages are prioritized.

## What this workflow does

The workflow retrieves new Gmail messages, analyzes their content with OpenAI, and automatically assigns pre-defined Gmail labels that match the email’s intent. This ensures emails are sorted efficiently using AI-powered content analysis and Gmail’s labeling system.

## Setup

- Ensure Gmail labels (e.g., "Quotation", "Inquiry") are created in your Gmail account.
- Connect your Gmail and OpenAI accounts as credentials in n8n.
- Import the workflow into your n8n instance and update node configurations to match your Gmail label names.

## How to customize this workflow to your needs

- Edit or add Gmail labels both in your Gmail account and within the workflow logic.
- Adjust the prompt or parameters sent to OpenAI to better match your categorization style.
- Expand or refine the list of label categories to fit your team’s or business’s requirements.

## 🔗 Nodes Used

Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
