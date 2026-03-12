# 📋 Track construction site progress with Google Gemini AI, drive photos and Sheets

> ⚡ **1,148 views** · 📋 [Project Management](../)

## Description

This automated n8n workflow leverages AI to monitor construction site progress using daily site photos, providing real-time updates and detailed tracking. The system analyzes images, generates progress summaries, and appends data to a Google Sheet for comprehensive project management.

## Good to Know
- Supports daily photo analysis for construction progress tracking
- Utilizes Google Gemini AI for intelligent image processing and analysis
- Includes memory to maintain context of ongoing construction updates
- Automates data appending to Google Sheets for real-time tracking
- Integrates with scheduled triggers for consistent daily updates

## How It Works
- **Schedule Trigger** - Initiates the workflow daily to check for new site photos
- **List a file** - Retrieves the latest photos from the designated drive folder
- **Tack All Images** - Passes each photo to the AI for individual analysis
- **AI Analysis** - Processes images using Google Gemini to detect construction progress
- **Append data to a sheet** - Updates a Google Sheet with the analyzed progress data
- **Send email** - Notifies stakeholders with a daily progress update

## How to Use
- Import workflow into n8n
- Configure Google Drive API for photo access
- Set up Google Gemini AI model for image analysis
- Configure Google Sheets API for data appending
- Set up email notification settings
- Test with sample photos and monitor updates
- Adjust AI parameters for accuracy as needed

## Requirements
- Access to Google Drive API
- Google Gemini AI model integration
- Google Sheets API access
- Email service configuration
- Scheduled trigger setup in n8n

### Sheet Columns:
- **Date**
- **Photo ID**
- **Progress Summary**
- **Status**
- **Notes**

## Customizing This Workflow
- Modify AI prompts for specific construction milestones
- Adjust photo analysis frequency based on project needs
- Configure custom Google Sheet columns for additional data
- Set up custom email templates for stakeholder updates
- Integrate additional AI models for enhanced analysis

## 🔗 Nodes Used

Send Email, Google Sheets, Google Drive, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
