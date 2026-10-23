# 🔬 Monitor legal policy changes with Google Sheets, Gmail and GPT-4o

> ⚡ **56 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Terms of Service Change Watcher with AI Summaries
Automatically monitors Terms of Service, Privacy Policy, and other legal pages for changes. When content changes are detected, GPT-4o analyzes the old vs new text and emails you a plain-English summary with an impact rating.

### How it works
1. Every day at 8 AM, the workflow reads your list of URLs from a Google Sheet
2. Each page is fetched and stripped to plain text
3. The text is compared against the previously stored version
4. If a change is detected, the old and new content are sent to GPT-4o for analysis
5. You receive an email with a summary of exactly what changed and how it impacts you
6. All changes are logged to a Change Log sheet for a historical record

### Setup
1. Create a Google Sheet with two tabs: **Pages** (columns: `url`, `page_name`, `last_content`, `last_checked`) and **Change Log** (columns: `date`, `page_name`, `url`, `summary`)
2. Add the URLs you want to monitor in the Pages tab — leave `last_content` and `last_checked` empty
3. Connect your **Google Sheets OAuth2**, **Gmail OAuth2**, and **OpenAI API** credentials
4. Update the Google Sheet document in all four Google Sheets nodes
5. Set your email address in the Send Change Alert node
6. Run once to save baselines, then activate the workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
