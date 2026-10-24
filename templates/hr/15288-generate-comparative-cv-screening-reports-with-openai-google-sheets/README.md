# 👥 Generate comparative CV screening reports with OpenAI, Google Sheets 

> ⚡ **131 views** · 👥 [HR & Recruitment](../)

## Description

## How it works

1. Listens for commands via Telegram to trigger report generation.
2. Parses the received command to determine action parameters.
3. Fetches candidate data from Google Sheets based on parsed input.
4. Prepares the data for report generation through custom logic.
5. Generates a comparative report using OpenAI LLM.
6. Sends the generated report back through Telegram.

## Setup steps

- Configure Telegram API credentials for the Telegram Trigger node.
- Set up Google Sheets credentials and provide access to the required sheet.
- Configure OpenAI API credentials to enable the LLM Report Generator.

## Customization

Consider customizing the report generation logic in the 'Prepare Report Data' node to adjust the report format or criteria.

## Part of the CV Screening Agent system

- 👉 CV Screening Agent (main workflow): https://n8n.io/workflows/15155

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
