# 🤝 AI-Powered Post-Sales Call Automated Proposal Generator

> ⚡ **13,679 views** · 🤝 [CRM & Sales Operations](../)

## Description

# AI-Powered Proposal Generator - Sales Automation Workflow

## Overview
![Screenshot 20250524 143046.png](fileId:1373)
This n8n workflow automates the entire proposal generation process using AI, transforming client requirements into professional, customized proposals delivered via email in seconds.

## Use Case
Perfect for agencies, consultants, and sales teams who need to generate high-quality proposals quickly. Instead of spending hours writing proposals manually, this workflow captures client information through a web form and uses GPT-4 to generate contextually relevant, professional proposals.

## How It Works
1. **Form Trigger** - Captures client information through a customizable web form
2. **OpenAI Integration** - Processes form data and generates structured proposal content
3. **Google Drive** - Creates a copy of your proposal template
4. **Google Slides** - Populates the template with AI-generated content
5. **Gmail** - Automatically sends the completed proposal to the client

## Key Features
- **AI Content Generation**: Uses GPT-4 to create personalized proposal content
- **Professional Templates**: Integrates with Google Slides for polished presentations
- **Automated Delivery**: Sends proposals directly to clients via email
- **Form Integration**: Captures all necessary client data through web forms
- **Customizable Output**: Generates structured proposals with multiple sections

## Template Sections Generated
- Proposal title and description
- Problem summary analysis
- Three-part solution breakdown
- Project scope details
- Milestone timeline with dates
- Cost integration

## Requirements
- **n8n instance** (cloud or self-hosted)
- **OpenAI API key** for content generation
- **Google Workspace account** for Slides and Gmail
- **Basic n8n knowledge** for setup and customization

## Setup Complexity
**Intermediate** - Requires API credentials setup and basic workflow customization

## Benefits
- **Time Savings**: Reduces proposal creation from hours to minutes
- **Consistency**: Ensures all proposals follow the same professional structure
- **Personalization**: AI analyzes client needs for relevant content
- **Automation**: Eliminates manual copy-paste and formatting work
- **Scalability**: Handle multiple proposal requests simultaneously

## Customization Options
- Modify AI prompts for different industries or services
- Customize Google Slides template design
- Adjust form fields for specific information needs
- Personalize email templates and signatures
- Configure milestone templates for different project types

## Error Handling
Includes basic error handling for API failures and form validation to ensure reliable operation.

## Security Notes
All credentials have been removed from this template. Users must configure their own:
- OpenAI API credentials
- Google OAuth2 connections for Slides, Drive, and Gmail
- Form webhook configuration

This workflow demonstrates practical AI integration in business processes and showcases n8n's capabilities for complex automation scenarios.

## 🔗 Nodes Used

Google Drive, Gmail, Google Slides, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
