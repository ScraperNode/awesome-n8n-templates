# 🎣 Create lead research briefs from Google Sheets with Claude and Instantly

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow pulls unprocessed leads from Google Sheets, fetches each company’s website, uses Anthropic Claude to generate a short research note and a 3-idea brief, saves the brief as a Google Doc, and optionally adds the lead to an Instantly campaign with the doc link.

## How it works
1. Starts manually and loads workflow settings such as your offer, sender name, and the maximum number of leads to process.
2. Reads leads from Google Sheets where the Processed column is set to NO, limits the list, and processes them one by one.
3. Normalizes each lead’s key fields and fetches the company website via HTTP, converting the returned HTML into plain text.
4. Sends the website text to Anthropic Claude to produce a factual company summary, target audience, and three ideas aligned to your offer, then validates the output and skips the lead if the analysis is unusable.
5. Uses Anthropic Claude to write a 350–500 word pre-outreach brief based on the analysis, validates the required format and length, and stops processing the lead if the brief is invalid.
6. Creates a Google Doc in Google Drive with the brief content, builds the document URL, and optionally posts the lead to Instantly with the doc link stored in the personalization field.
7. Writes back to Google Sheets to store the document link and update Processed to YES (or DOC ONLY if Instantly fails, or NO on error) before moving on to the next lead.

## Setup
1. Add credentials for Google Sheets and Google Drive, and select the target spreadsheet and sheet tab in both Google Sheets steps.
2. Add an Anthropic (Claude) API credential and choose the Claude model to use for analysis and brief generation.
3. Ensure your Google Sheet includes columns for first_name, email, company_name, company_website, Document Link, and Processed, and set Processed to NO for leads you want to run.
4. Choose a Google Drive folder for document creation and configure sharing so recipients can open the Google Doc link.
5. (Optional) Add an Instantly API key as HTTP Header Auth (Authorization: Bearer <key>) and set instantly_campaign_id in Settings to enable adding leads to Instantly.
6. Fill in the Settings values (sender_name, what_you_sell, max_leads) and run the workflow manually.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Markdown, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
