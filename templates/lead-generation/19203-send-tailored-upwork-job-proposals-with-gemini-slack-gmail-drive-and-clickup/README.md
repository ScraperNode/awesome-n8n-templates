# 🎣 Send tailored Upwork job proposals with Gemini, Slack, Gmail, Drive and ClickUp

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every 2 minutes, monitors new Upwork job posts forwarded to Slack, pulls candidate resumes and a company deck from Google Drive, uses the Google Gemini API to generate tailored proposals, then sends them via Gmail, posts an update to Slack, and creates ClickUp tasks for tracking.

## How it works
1. Runs every 2 minutes on a schedule and reads recent messages from a specified Slack channel where Upwork jobs are forwarded.
2. Deduplicates Slack messages using n8n static workflow data and continues only when it finds new, job-like posts.
3. Lists candidate resume PDFs in a Google Drive folder, downloads each file, and extracts text from the PDFs to build candidate profiles with Drive links.
4. Searches Google Drive for a matching company deck file and picks its share link to include as context.
5. Combines the new job posts, candidate profiles, and deck link into a structured prompt and sends it to the Google Gemini API to generate a JSON array of proposals (or skipped jobs).
6. Parses and validates the Gemini response, then either emails the proposal package via Gmail and posts a summary to Slack while creating one ClickUp task per proposal, or flags the batch for manual review in Slack if no proposals are produced.

## Setup
1. Add Slack OAuth2 credentials and set the correct channel IDs for the job intake channel and the proposal/alerts channel.
2. Add Google Drive OAuth2 credentials, then update the Drive folder ID used to list resume PDFs and the Drive search query used to find the company deck.
3. Add a Google Gemini API key and ensure the Gemini HTTP request node is authorized to call the Generative Language API endpoint.
4. Add Gmail OAuth2 credentials and update the recipient list used for sending proposal emails.
5. Add ClickUp credentials and set the target ClickUp list ID where proposal tasks should be created.

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Gmail, Schedule Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
