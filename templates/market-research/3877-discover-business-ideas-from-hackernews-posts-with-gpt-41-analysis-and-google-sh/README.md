# 📊 Discover business ideas from HackerNews posts with GPT-4.1 analysis and Google Sheets

> ⚡ **1,406 views** · 📊 [Market Research & Insights](../)

## Description

# What it is

This n8n workflow monitors top Hacker News posts (in the Front Page) and identifies business-related pain points using AI.

## How It Works

It filters posts by engagement (comments &gt; 80, points &gt; 200, and recent date), extracts key metadata, fetches the article content, and uses a GPT-4.1-based agent to detect and summarize pain points. 

Results are appended to a Google Sheet for further analysis.

## Setup

To run this workflow, you need to set up credentials for:


1. OpenRouter: Uses an API Key. Generate this key directly from your OpenRouter account settings. (YT Tutorial : https://youtu.be/Cq5Y3zpEhlc)
2. Google Sheets: Uses OAuth 2.0. Requires setup in Google Cloud Console (enable Sheets API, create OAuth Client ID with n8n redirect URI) to get a Client ID & Secret.

Ensure these credentials are created and selected in the respective n8n nodes (Get Posts, OpenRouter Chat Model nodes, Output The Results).

## 🔗 Nodes Used

Google Sheets, Hacker News, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
