# 🎬 Write Upwork proposals from Vollna alerts using Claude, Gmail and Sheets

> ⚡ **85 views** · 🎬 [Content Creation & Video](../)

## Description

# Overview

Stop spending 20 minutes writing each Upwork proposal from scratch. This workflow reads your Vollna job alert emails, scores every job against your skills and budget preferences, and uses Claude to write a personalised 55-75 word cover letter for every match and saved as a Gmail draft ready to review and send in one click.

## How it works

- Polls Gmail every 30 minutes for new Vollna job alert emails

- Parses every individual job title, budget, and URL from the Vollna email HTML

- Scores each job 1-10 against your skills, rate, and budget filters set in the Settings node

- Jobs below your threshold are logged as skipped — no proposal wasted

- Claude Haiku writes a 55-75 word cover letter for each match using the Nick Saraev formula

- The proposal is saved as a Gmail draft with the job title as the subject, ready for one-click review

- Every job is either matched or skipped and then is logged to Google Sheets for pipeline tracking


## Setup steps

1. **Vollna** — Make sure you have a Vollna account with at least one active filter sending alerts to your Gmail

2. **Gmail** — Connect your Gmail account in Check for Vollna Alerts and Save Proposal as Draft

3. **Settings node** — Open Configure Profile and Settings and fill in your name, skills, bio, hourly rate, minimum budget, and score threshold. This is the only node you need to personalise

3. **Claude AI** — Add your Anthropic API key to the Claude Haiku sub-node from console.anthropic.com

4. **Slack** — Connect Slack in Notify New Draft and set your channel. Right-click and Disable if unused

5. **Google Sheets** — Create a sheet called Upwork Jobs with columns: Timestamp, Job Title, Budget, Score, Status, Draft Saved, Job URL

6. **Activate** — processes every new Vollna alert automatically

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
