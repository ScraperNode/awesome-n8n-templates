# 🎣 Clean company names for cold emails with GPT-4 Mini and Google Sheets

> ⚡ **1,029 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Overview
In cold email campaigns, the lead's company name is the 2nd most frequently inserted variable after their first name. They're critical for effective cold email personalization. However, company names are often messy and can contain taglines, legal suffixes (e.g. LLC, Inc.), and other variations that would never be written out by a human in an email.

If your email starts with "I came across Techwave Solutions LLC on LinkedIn...", it's a dead giveaway that you're sending a tempalted email and a response is much less likely. 

This simple workflow uses AI to clean up messy company names in a Google Sheet so that your cold email campaigns can achieve better results. 

## How It Works
1. A form is submitted with a Google Sheet url
2. The workflow grabs the leads and uses an LLM node to clean the company names
3. The updated leads are saved back in a new sheet within the original spreadsheet

## Setup Steps
1. Add your Google Sheets and OpenAI (or your AI model provider of choice) credentials to n8n
2. Create a Google Sheet with your list of leads. **IMPORTANT**: the sheet MUST have a column called "Company"
3. (Optional). The AI workflow has a highly optimized system prompt. However, you may achieve better results by updating the list of examples in the prompt with companies (real or fake) in the industry you're targeting.

If you have any questions or feedback about this workflow, or would like me to build custom workflows for your business, email me at n8n@paperjam.agency.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
