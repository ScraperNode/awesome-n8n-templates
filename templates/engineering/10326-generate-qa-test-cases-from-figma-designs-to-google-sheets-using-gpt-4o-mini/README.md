# ⚒️ Generate QA test cases from Figma designs to Google Sheets using GPT-4o-mini

> ⚡ **1,422 views** · ⚒️ [Engineering](../)

## Description

## Description
Transform Figma design files into detailed QA test cases with AI-driven analysis and structured export to Google Sheets. This workflow helps QA and product teams streamline design validation, test coverage, and documentation — all without manual effort. 🎨🤖📋

## What This Template Does
- Step 1: Trigger manually and input your Figma file ID. 🎯
- Step 2: Fetches the full Figma design data (layers, frames, components) via API. 🧩
- Step 3: Sends structured design JSON to GPT-4o-mini for intelligent test case generation. 🧠
- Step 4: AI analyzes UI components, user flows, and accessibility aspects to generate 5–10 test cases. ✅
- Step 5: Parses and formats results into a clean structure.
- Step 6: Exports test cases directly to Google Sheets for QA tracking and reporting. 📊

## Key Benefits
✅ Saves 2–3 hours per design by automating test case creation
 ✅ Ensures consistent, comprehensive QA documentation
 ✅ Uses AI to detect UX, accessibility, and functional coverage gaps
 ✅ Centralizes output in Google Sheets for easy collaboration

## Features
- Figma API integration for design parsing
- GPT-4o-mini model for structured test generation
- Automated Google Sheets export
- Dynamic file ID and output schema mapping
- Built-in error handling for large design files

## Requirements
- Figma Personal Access Token
- OpenAI API key (GPT-4o-mini)
- Google Sheets OAuth2 credentials
- Target Audience
- QA and Test Automation Engineers
- Product & Design Teams
- Startups and Agencies validating Figma prototypes

## Setup Instructions
- Connect your Figma token as HTTP Header Auth (X-Figma-Token).
- Add your OpenAI API key in n8n credentials (model: gpt-4o-mini).
- Configure Google Sheets OAuth2 and select your sheet.
- Input Figma file ID from the design URL.
- Run once manually, verify output, then enable for regular use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
