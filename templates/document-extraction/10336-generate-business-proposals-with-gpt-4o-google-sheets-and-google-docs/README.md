# 🔬 Generate business proposals with GPT-4o, Google Sheets and Google Docs

> ⚡ **304 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## 📊 Description
Automate your client proposal creation with this intelligent workflow that transforms Google Sheets entries into professional Google Docs proposals using OpenAI GPT-4o. Designed for agencies and sales teams, it delivers personalized, branded, and structured proposals in minutes — no manual editing required. 🚀📄🤖

## What This Template Does
- Triggers when a new row is added in a connected Google Sheet. 📋
- Filters only the latest row to ensure one proposal per new entry. 🔍
- Uses GPT-4o to generate structured proposal content (Executive Summary, Scope, Costing, Timeline, Conclusion). 💡
- Parses output into validated JSON format for accurate field mapping. ⚙️
- Populates a Google Docs template with AI-generated content using placeholders. 📝
- Downloads the completed proposal as a PDF file. 💾
- Archives the finalized document into a designated Google Drive folder. 📂
- Resets the template for the next proposal cycle automatically. 🔄

## Key Benefits
✅ Eliminates repetitive manual proposal writing.
 ✅ Ensures brand consistency with structured templates.
 ✅ Generates high-quality proposals using AI in real time.
 ✅ Automates document formatting, saving hours per client.
 ✅ Scales easily for agencies handling multiple clients daily.

## Features
- Google Sheets trigger for new entries.
- GPT-4o-based content generation with customizable prompts.
- JSON output validation and structured parsing.
- Google Docs population using placeholder replacement.
- Drive storage automation for version tracking.
- End-to-end automation from data to proposal delivery.

## Requirements
- Google Sheets document with columns: clientName, jobDescription.
- Google Docs template with placeholders (e.g., {{executive_summary}}, {{scope_of_work}}).
- OpenAI API key (GPT-4o).
- Google Drive credentials for output management.

## Target Audience
- Marketing and web agencies automating client proposal generation.
- Sales teams preparing project estimates and deliverables.
- Freelancers and consultants managing multiple client requests.
- Businesses streamlining documentation workflows.

## Step-by-Step Setup Instructions
- Connect Google Sheets and replace the Sheet ID placeholder.
- Set up your Google Docs proposal template and replace the Document ID.
- Add your OpenAI API key for GPT-4o content generation.
- Specify your Google Drive folder for saving proposals.
- Test the workflow with a sample entry to confirm formatting.
- Activate the workflow for continuous proposal generation. ✅

## 🔗 Nodes Used

Google Drive, Google Docs, Google Sheets Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
