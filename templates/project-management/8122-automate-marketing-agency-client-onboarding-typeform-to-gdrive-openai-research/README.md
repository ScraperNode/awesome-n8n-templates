# 📋 Automate marketing agency client onboarding: Typeform to GDrive + OpenAI research

> ⚡ **594 views** · 📋 [Project Management](../)

## Description

## Who's it for

Marketing agencies, digital agencies, and freelancers who need to streamline their client onboarding process and create consistent, professional documentation for new clients. Perfect for teams handling multiple client intakes who want to save hours of manual setup work while maintaining quality standards.

## What it does

This workflow automates the entire client onboarding journey from the moment a prospect fills out your Typeform intake questionnaire. It instantly creates a complete Google Drive folder structure with 6 main folders and 15+ subfolders tailored for marketing projects, sends the intake information to your team via Slack, generates an AI-powered marketing research brief using OpenAI, implements an approval workflow with revision capabilities, and delivers a professional welcome email to the client. The system ensures nothing falls through the cracks while maintaining consistent quality across all client projects.

## How it works

1. **Intake Trigger**: When a client submits your Typeform intake form, the workflow automatically initiates
2. **Folder Creation**: Creates a branded client folder in Google Drive with organized subfolders for ads, raw footage, product images, research, drafts, and archives
3. **Team Notification**: Posts detailed intake responses to your designated Slack channel for immediate team visibility
4. **AI Brief Generation**: Uses OpenAI to analyze intake responses and generate a comprehensive marketing research document including customer personas, pain points, positioning strategies, and marketing angles
5. **Approval Process**: Sends the brief for team review with built-in approve/revise functionality
6. **Document Creation**: Upon approval, creates a Google Doc with the finalized research brief
7. **Client Communication**: Sends a personalized welcome email to the client confirming their onboarding

## How to set up

1. **Configure the workflow**: Start by filling in all values in the "⚙️ Configuration" node:
   - Your Typeform ID from your intake form
   - Google Drive parent folder ID where client folders will be created
   - Slack channel IDs for new client notifications and internal reviews
   - OpenAI model preference (GPT-4 recommended)
   - Welcome email template with your agency branding

2. **Connect your accounts**: 
   - Typeform: Create credentials and connect your account
   - Google: Authenticate with Drive, Docs, and Gmail permissions
   - Slack: Add the n8n bot to your workspace and relevant channels
   - OpenAI: Add your API key for AI content generation

3. **Test the workflow**: 
   - Submit a test entry through your Typeform
   - Verify folder creation in Google Drive
   - Check Slack notifications are posting correctly
   - Confirm the approval process works as expected

## Requirements

- **Typeform** account with a client intake form created
- **Google Workspace** account with Drive, Docs, and Gmail access
- **Slack** workspace with appropriate channels created
- **OpenAI API** key with credits for content generation
- **n8n** instance (self-hosted or cloud) version 1.0+

## How to customize the workflow

- **Folder Structure**: Modify the subfolder nodes to match your agency's project organization needs
- **Intake Fields**: Update the Slack message blocks and AI prompt to match your specific Typeform fields
- **Research Brief Template**: Customize the OpenAI prompt to generate briefs aligned with your agency's format
- **Approval Logic**: Add additional approval stages or skip approval for certain client types
- **Welcome Email**: Personalize the email template with your branding, links, and next steps
- **Notification Channels**: Route different types of notifications to specific Slack channels based on client tier or project type

## 🔗 Nodes Used

Slack, Typeform Trigger, Google Drive, Gmail, Google Docs, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
