# 🔬 Review contracts and generate legal PDF reports with Google Drive, OpenAI, and Slack

> ⚡ **13 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow monitors a Google Drive folder for new contract files, extracts text from uploaded PDFs, analyzes key clauses and risks with OpenAI, generates an attorney-ready PDF report via HTML-to-PDF conversion, saves the report back to Google Drive, moves the original contract, and notifies a Slack channel.

## How it works
1. Triggers every minute when a new file is created in a specified Google Drive folder.
2. Downloads the new contract file from Google Drive and extracts the full text from the PDF.
3. Sends the extracted contract text to OpenAI to produce structured JSON covering contract type, key terms, risk score, risks, missing clauses, and recommendations.
4. Converts the structured OpenAI analysis into a professionally styled HTML attorney report using OpenAI.
5. Converts the HTML report into a PDF file and saves it to a target Google Drive folder.
6. Moves the original contract file into a separate “processed” Google Drive folder and posts a completion message with risk details and the report link to a Slack channel.

## Setup
1. Connect Google Drive OAuth credentials and set the intake folder to watch, the destination folder for reports, and the processed folder for moved contracts.
2. Add an OpenAI API credential and confirm the selected model (gpt-4o-mini) is available for your account.
3. Configure the HTML-to-PDF node (HTMLCSS to PDF) and ensure it is installed and available in your n8n instance.
4. Connect Slack credentials and set the target channel (for example, #legal-reviews) for notifications.

## Requirements
- Before using this workflow, ensure you have access to the following services: Required Integrations -Google Drive Account -OpenAI API -Slack Workspace Required Credentials -Google Drive OAuth2 credentials -OpenAI API credentials -Slack API credentials Required Inputs -PDF contracts uploaded to a monitored Google Drive folder -Access to a destination Google Drive folder for generated reports Recommended Permissions -Read access to incoming contract folders -Write access to report output folders -Permission to post messages to the configured Slack channel

## Customization
- This workflow can be customized to fit your organization's contract review process. Review Criteria-Modify the AI review instructions to analyze: -Legal risks -Compiance requirements -Vendor agreement -Service contracts -Employment agreements -Procurement contracts -NDAs

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Slack, Google Drive, Google Drive Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
