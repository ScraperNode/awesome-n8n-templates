# 👥 Parse and score resumes with OpenAI GPT-4o, Google Drive, PostgreSQL and Slack

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects resume uploads via an n8n form, stores the file in Google Drive, extracts and parses the resume with OpenAI into structured candidate data, calculates a simple fit score, saves the result to PostgreSQL, and notifies HR in Slack.

## How it works
1. Receives a candidate submission through an n8n Form trigger with a PDF resume attachment.
2. Uploads the resume file to a specified Google Drive folder and extracts the resume text from the uploaded PDF.
3. Sends the extracted resume text to OpenAI (gpt-4o-mini) to return key candidate fields as JSON.
4. Parses the AI response, cleans and normalizes fields like name casing, email formatting, and numeric experience years.
5. Calculates a candidate score based on experience and the presence of specific skills (React, Node.js, PostgreSQL).
6. Inserts the structured candidate record and score into a PostgreSQL candidates table.
7. Posts a Slack message to an HR channel with the candidate’s details and score.

## Setup
1. Configure the n8n Form trigger and share the form URL with candidates to upload their PDF resumes.
2. Connect Google Drive OAuth credentials and select the target Drive and folder where resumes should be stored.
3. Add an OpenAI API credential and confirm the model and prompt match the fields you want to extract.
4. Set up a PostgreSQL credential and ensure a public.candidates table exists with columns that match the workflow mappings.
5. Connect Slack OAuth credentials and choose the channel where HR should receive candidate notifications.

## 🔗 Nodes Used

Postgres, Slack, Google Drive, n8n Form Trigger, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
