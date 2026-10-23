# 🔬 Triage car accident claims with Google Sheets, Slack, Gemini and forms

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/90YWbvwXdD4

This workflow collects accident claim details via an n8n form, verifies the insurance policy in Google Sheets, checks uploaded photos for AI-generation risk, uses Google Gemini to create field-visit instructions, then notifies the team in Slack and logs the dispatch to Google Sheets.

## How it works
1. Receives an accident insurance claim submission through an n8n form, including an uploaded photo as evidence.
2. Looks up the submitted policy number in Google Sheets and stops the process by alerting a Slack channel if the policy is missing or inactive.
3. Extracts image metadata and sends the uploaded photo to the Walterwrites image-detector API to estimate whether it is AI-generated.
4. Scores the image authenticity, categorizes it as suspicious, review, or likely authentic, and posts a Slack alert when manual review is recommended.
5. Sends the claim details and image to Google Gemini (via a LangChain agent) to decide whether a visit is required and to generate priority, specialist type, tools needed, and a one-sentence technician brief.
6. Posts a formatted dispatch request to Slack and appends or updates a dispatch log row in Google Sheets with the claim, AI assessment, and message details.

## Setup
1. Configure the n8n Form Trigger and share its form URL with claim submitters, ensuring the upload field accepts .jpg and .png files.
2. Add Google Sheets Service Account credentials and update the spreadsheet IDs/sheet tabs so the workflow can read the policy table and write to the dispatch log.
3. Add a Slack OAuth credential and set the target channel for invalid-policy alerts, authenticity alerts, and field team notifications.
4. Add an HTTP Header Auth credential for the Walterwrites image-detector endpoint and confirm the API expects the multipart form field named "file".
5. Add Google Gemini (PaLM) credentials for the Gemini 3.1 Flash Lite chat model used to generate the visit assessment.

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Slack, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
