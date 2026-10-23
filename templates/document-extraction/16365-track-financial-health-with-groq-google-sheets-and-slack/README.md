# 🔬 Track financial health with Groq, Google Sheets and Slack

> ⚡ **38 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow collects income, savings, investment, and expense data via an n8n form, calculates a financial health score, generates personalized advice with Groq, stores results in Google Sheets, and posts a formatted summary and expense alert to Slack.

## How it works
1. Receives financial inputs (monthly income, savings, investments, and expenses) from an n8n form submission.
2. Normalizes the submitted values and calculates savings and investment ratios.
3. Validates that the required numeric inputs are present and greater than zero before continuing.
4. Computes savings, investment, and expense scores, derives an overall financial health score, and assigns a status (Excellent/Good/Needs Improvement).
5. Uses the Groq Chat Model to generate 1–2 lines of personalized financial advice based on the computed results.
6. Evaluates expense levels against income to create an expense alert message, waits briefly, then appends the results to Google Sheets and posts a formatted report to a Slack channel.

## Setup
1. Configure the n8n Form Trigger fields as needed and share the form URL with users who will submit their financial data.
2. Add a Groq API credential and select the model used for generating personalized financial advice.
3. Add a Google Sheets OAuth2 credential, set the target spreadsheet and sheet tab, and ensure columns exist for income, saved, invested, expenses, scores, status, and date.
4. Add a Slack credential, choose the target channel, and adjust the message template if you want different formatting or fields.

## 🔗 Nodes Used

Google Sheets, Slack, AI Agent, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
