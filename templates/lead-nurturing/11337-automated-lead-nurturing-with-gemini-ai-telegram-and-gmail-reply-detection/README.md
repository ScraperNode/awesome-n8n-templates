# 💬 Automated lead nurturing with Gemini AI, Telegram, and Gmail reply detection

> ⚡ **72 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# Purpose and Audience
This n8n workflow automates the entire lead nurturing process from initial contact through a 3-email follow-up sequence, with intelligent reply detection and personalized AI-generated content. It's designed to save sales teams countless hours while maintaining a personal touch in every interaction.

## What It Does
This workflow orchestrates a comprehensive lead management system that:
1. Captures leads via Telegram: Sales agents submit lead information (name, company, email, notes) through a Telegram bot after phone calls
2. Generates personalized emails: Uses AI (Google Gemini) to create contextually relevant, personalized emails based on conversation notes and sequence position
3. Sends automated follow-ups: Delivers a 3-email nurture sequence with strategic timing (initial email, 24-hour follow-up, final follow-up)
4. Tracks engagement: Monitors email opens and replies in real-time
5. Detects responses: Automatically checks Gmail daily for lead replies and stops the sequence when detected
6. Updates lead status: Maintains accurate lead status throughout the journey (active → 2nd follow-up sent → 3rd follow-up sent → replied)
7. Provides real-time notifications: Sends Telegram alerts to agents when emails are sent, replies are received, or sequences complete
8. Stores all communications: Archives email content and metadata in a structured data table for reference and analysis

The workflow intelligently adapts email tone and content based on sequence position—warm and conversational for first contact, value-adding for second follow-up, and brief yet respectful for the final touchpoint.

## Who Is It For
This workflow is perfect for:
- Sales teams managing multiple leads and needing consistent follow-up without manual effort
- Small businesses looking to professionalize their outreach without hiring additional staff
- Account executives who want to focus on conversations rather than email scheduling
- Founders and solopreneurs juggling sales alongside other responsibilities
- Marketing agencies managing client outreach campaigns
- Anyone who has promising leads but struggles with timely, personalized follow-up

## How to Setup
Prerequisites
Before implementing this workflow, ensure you have:

- Telegram Bot (for lead submission and notifications)
- SMTP Connection (for sending emails)
- Gmail Node Connection (for reply detection)
- Data Table with the following columns:
name
email
company
notes
status
emailSequenceNumber
lastSentDate
first_email_content
first_email_sbjct
second_email_content
second_email_sbjct
third_email_content
third_email_sbjct
(Table name: leads_test)
- Gemini API Key (for AI-powered email generation)

## Setup Instructions
Once you have all prerequisites ready, follow the provided setup tutorials for complete setup and configuration.

## 🔗 Nodes Used

Send Email, Telegram, Telegram Trigger, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
