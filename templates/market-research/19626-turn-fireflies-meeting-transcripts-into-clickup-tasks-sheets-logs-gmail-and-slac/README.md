# 📊 Turn Fireflies meeting transcripts into ClickUp tasks, Sheets logs, Gmail and Slack alerts with OpenAI

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow collects freelancer applications via an n8n Form, uses OpenAI to extract structured signals and generate a hiring recommendation, calculates a deterministic suitability score, logs each submission to Google Sheets, and sends the appropriate Gmail responses to the applicant and your hiring team.

## How it works
1. Receives a freelancer submission through an n8n Form with contact details, role, experience, skills, portfolio/work samples, pitch, and optional rate.
2. Uses OpenAI to extract structured assessment data such as matched/missing required skills, numeric years of experience, portfolio score, red flags, strengths, and notes.
3. Calculates a deterministic suitability score and tier from the extracted skills match, portfolio score, experience, and red-flag penalty.
4. Uses OpenAI again to turn the score and extracted data into a recommendation (Shortlist, Trial Project, or Decline) with reasoning, next step, and confidence.
5. Appends the full application record (scores, tier, and recommendation) to a Google Sheets “Applications” tab.
6. If the recommendation is Shortlist, sends an interview invite to the applicant via Gmail; otherwise, emails your hiring team a review summary and sends the applicant a status update.

## Setup
1. Add an OpenAI API credential and connect it to the two OpenAI chat model nodes.
2. Create a Google Sheet with a tab named “Applications” and add Google Sheets OAuth2 credentials, then set the Sheet ID in the configuration values.
3. Add Gmail OAuth2 credentials for sending emails and set your hiring team email, company name, sender name, role title, and required skills in the configuration values.
4. Activate the workflow and share the n8n Form URL so applicants can submit applications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
