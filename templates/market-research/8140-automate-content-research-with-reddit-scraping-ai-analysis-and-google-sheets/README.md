# 📊 Automate content research with Reddit scraping, AI analysis, and Google Sheets

> ⚡ **3,655 views** · 📊 [Market Research & Insights](../)

## Description

# Workflow Summary

This workflow automatically scrapes new Reddit posts from your chosen subreddits and keywords, analyzes them with AI to extract summaries, pain points, and content angles, and then saves the insights into a Google Sheet. It’s a fully automated Content Research Engine that delivers fresh marketing ideas and community pain points straight into your database.


# Setting up the workflow

1. Connect Reddit
	•	In n8n, create a Reddit credential.
	•	Add the subreddits and keywords you want to track.

2. Connect Google Sheets
	•	Make a copy of the database sheet.
	•	Connect your Google account in n8n.

3. Connect OpenAI
	•	Add your OpenAI API key as a credential.
	•	The AI will summarize posts, extract pain points, and suggest content ideas.

4. Run the workflow
	•	The workflow will search Reddit on a schedule.
	•	Results are processed by AI and automatically added to your Google Sheet.

## 🔗 Nodes Used

Google Sheets, Reddit, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
