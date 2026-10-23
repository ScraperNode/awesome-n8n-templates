# 🔬 Triage construction incident photos with Gemini, Slack, and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/qp9ASLniC9o

This workflow collects construction incident reports via an n8n form with an uploaded photo, checks the image for AI-generation likelihood, uses Google Gemini to create a structured incident assessment from the photo, then posts the report to Slack and logs it to Google Sheets.

## How it works
1. Receives a new incident submission from an n8n Form Trigger with a property, issue description, and uploaded image.
2. Extracts basic image metadata and builds an evidence record with a unique incident ID and the submitted details.
3. Sends the uploaded image to the Walterwrites.ai image detector API and calculates an AI-generated score and authenticity status.
4. If the image is flagged as suspicious, sends an alert message to a Slack channel for manual review.
5. Passes the photo and reported issue to Google Gemini (via a structured output parser) to produce a JSON assessment with category, severity, urgency, summary, and next action based only on what is visible.
6. Formats a Slack-ready incident message including risk and authenticity indicators, posts it to Slack, and appends/updates the incident record in a Google Sheets log.

## Setup
1. Configure the n8n form fields (property options and accepted file types) and use the generated form URL for your contractors.
2. Add an HTTP Header Auth credential for Walterwrites.ai and ensure the image detector endpoint is reachable.
3. Add a Google Gemini (PaLM) API credential and keep the model selection as configured for the AI assessment.
4. Add a Slack OAuth credential and set the target channel for both the suspicious-image alert and the incident report post.
5. Add Google Sheets Service Account credentials, then update the spreadsheet and sheet references (document ID and sheet gid/name) to your incident log.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Slack, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
