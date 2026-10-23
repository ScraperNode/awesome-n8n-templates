# 👥 Generate job descriptions from briefing notes with OpenAI and Google Docs

> ⚡ **124 views** · 👥 [HR & Recruitment](../)

## Description

# Auto-generate job descriptions from briefing notes with OpenAI and Google Docs

## Who is this for

Recruiters, HR teams, and hiring managers who conduct role briefing conversations and want to convert their meeting notes into polished, structured job descriptions automatically -- without manual copywriting.

## What this workflow does

This workflow watches a Google Drive folder for new briefing documents, extracts structured job data using AI, generates a professional HTML job description, sends it to Microsoft Teams for approval, and exports the final version as a PDF to Google Drive.

## How it works

1. **Trigger** -- A Google Drive Trigger detects when a new Google Doc (e.g. a briefing transcript) is created in a watched folder.
2. **File organization** -- A timestamped subfolder is created and the document is moved into it for clean project structure.
3. **Document reading** -- The Google Doc content is fetched via the Google Docs API.
4. **AI data extraction** -- An OpenAI AI Agent analyzes the transcript (supports German input) and extracts structured job data: title, department, responsibilities, skills, benefits, tech stack, and more -- output as JSON.
5. **Data logging** -- The extracted fields are appended to a Google Sheets tracker for reference and audit.
6. **Prompt assembly** -- A Code node builds a detailed prompt from the structured data, choosing between "create" mode (first draft) or "revise" mode (feedback loop).
7. **JD generation** -- A second AI Agent (JD-Writer) generates a complete, styled HTML job description following a professional template with sections like responsibilities, profile, benefits, and diversity statement.
8. **Human review** -- The draft is sent to a Microsoft Teams chat with an approve/reject form and an optional feedback field.
9. **Approval path** -- If approved, the HTML is converted to PDF and uploaded to the Google Drive subfolder alongside the original briefing.
10. **Revision loop** -- If rejected, the feedback is routed back to the JD-Writer for targeted revisions, and the updated draft is re-sent for approval.

## Setup steps

1. **Google Drive & Docs** -- Create OAuth2 credentials. Set the folder ID in the Google Drive Trigger node to the folder where briefing documents are saved.
2. **Google Sheets** -- Create a spreadsheet with columns for all job data fields (job_title, department, responsibilities, hard_skills, soft_skills, etc.). Update the Sheet ID in the Google Sheets node.
3. **OpenAI** -- Add your API key as an OpenAI credential. Used for both the data extraction agent (reads the transcript) and the JD-Writer agent (generates the job description).
4. **Microsoft Teams** -- Create OAuth2 credentials. Set the Teams chat ID in the approval node to the chat or channel where drafts should be reviewed.
5. **HTML-to-PDF** -- Install the community node `n8n-nodes-htmlcsstopdf` (self-hosted only). Add the API credential.

## Requirements

- **Community node:** [`n8n-nodes-htmlcsstopdf`](https://www.npmjs.com/package/n8n-nodes-htmlcsstopdf) -- **self-hosted n8n only**
- OpenAI API key (GPT-4 or newer recommended)
- Google Drive, Docs & Sheets OAuth2 credentials
- Microsoft Teams OAuth2 credentials

## How to customize

- **AI extraction prompt** -- Edit the system message in the "Extract job data from transcript" node to adjust which fields are extracted or to support different transcript languages.
- **JD template style** -- Modify the prompt in the "Build JD-Writer prompt" Code node to change tone, section order, or formatting style of the generated job description.
- **Approval channel** -- Change the Teams chat ID to route drafts to a different team or channel.
- **Output format** -- Swap the HTML-to-PDF node for a different converter, or skip PDF and use the raw HTML output directly.
- **Tracker columns** -- Add or remove columns in Google Sheets to match your internal job data schema.
- **Revision depth** -- The approval loop supports unlimited revision cycles. The JD-Writer applies feedback minimally without rewriting from scratch.

## 🔗 Nodes Used

Google Sheets, Google Drive, Microsoft Teams, Google Docs, Google Drive Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
