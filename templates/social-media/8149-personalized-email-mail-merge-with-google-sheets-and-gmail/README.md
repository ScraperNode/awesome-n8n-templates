# 📱 Personalized email mail merge with Google Sheets and Gmail

> ⚡ **1,485 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who is it for

This workflow is designed for anyone who wants to simplify email automation without leaving Google Sheets. You can also send out emails automatically, without even visiting Google Sheets. It’s especially useful for: 

- Marketers sending bulk or personalized campaigns
- Recruiters managing outreach from candidate lists
- Small business owners who want automated follow-ups
- Anyone who wants to trigger emails directly from sheet updates, e.g. event updates. 

## How it works

The workflow connects Google Sheets with Gmail to let you send emails in either of two ways:

1. Bulk emails (mail merge): Use data from your sheet to send an email to multiple email addresses, one by one. 
2. Triggered emails: Automatically send an email whenever specific values or conditions in your sheet are met. No need to manually copy, paste, or switch to Gmail, because the process is fully automated.

## How to set it up

1. Copy this template into your personal n8n workspace: https://docs.google.com/spreadsheets/d/1fWg_GOU0m_2cQpah7foDiz1WqTRKjCbJJCLBGCvJlXc/edit?usp=sharing
2. Connect your Google Sheets and Gmail accounts using this workflow in n8n. 
3. Select the spreadsheet and sheet you want to use.
4. Customize the email nodes with your subject line, body text, and variables (e.g., names or links from your sheet).
5. Test the workflow, then activate it to start sending emails automatically.

For a step-by-step walkthrough, check out this video guide on YouTube: https://www.youtube.com/watch?v=XJQ0W3yWR-0

## Requirements
- A Google Sheets account with your data organized in rows and columns
- A Gmail account for sending emails
- An active n8n account to run the workflow

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
