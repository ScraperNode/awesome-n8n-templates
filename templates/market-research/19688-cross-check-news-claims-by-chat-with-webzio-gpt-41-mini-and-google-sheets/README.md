# 📊 Cross-check news claims by chat with Webz.io, GPT-4.1-mini, and Google Sheets

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This chat-driven workflow uses Webz.io for news search and GPT-4.1-mini to turn results into checkable claims, then labels each claim as corroborated or single-source based on how many independent outlets report it and archives the findings to Google Sheets.

## How it works
1. Receives a question from the n8n chat trigger.
2. Classifies the question as a quick lookup or deep research request to control how many Webz.io searches to run.
3. Uses GPT-4.1-mini plus the Webz.io news search tool to collect recent articles and group them into distinct claims with supporting source URLs.
4. Deduplicates sources by registrable domain, counts independent outlets per claim, and marks each claim as corroborated or single-source using the configured threshold.
5. If claims exist, formats a sourced briefing with linked outlets and a source-spread footer, then appends one row per claim to Google Sheets.
6. If no usable coverage is found, replies with suggested next search angles instead of generating an unsourced answer.

## Setup
1. Add an OpenAI credential for the GPT-4.1-mini chat model.
2. Create a Webz.io Bearer Auth credential with your Webz.io API token and attach it to the Webz.io news search tool.
3. Connect Google Sheets credentials and select the target spreadsheet and sheet, with columns for saved_at, question, claim, status, source_count, publishers, and urls.
4. Update the Research settings values (default language, lookback days, corroboration threshold, and max findings) to match your reporting needs.

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
