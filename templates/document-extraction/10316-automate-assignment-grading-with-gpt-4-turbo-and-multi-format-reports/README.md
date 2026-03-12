# 🔬 Automate assignment grading with GPT-4-Turbo and multi-format reports

> ⚡ **374 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Introduction
Automates AI-driven assignment grading with HTML and CSV output. Designed for educators evaluating submissions with consistent criteria and exportable results.
## How It Works
Webhook receives papers, extracts text, prepares data, loads answers, AI grades submissions, generates results table, converts to HTML/CSV, returns response.
## Workflow Template
Webhook → Extract Text → Prepare Data → Load Answer Script → AI Grade (OpenAI + Output Parser) → Generate Results Table → Convert to HTML + CSV → Format Response → Respond to Webhook
## Workflow Steps
1. Input & Preparation: Webhook receives paper, extracts text, prepares data, loads answer script.
2. AI Grading: OpenAI evaluates against answer key, Output Parser formats scores and feedback.
3. Output & Response: Generates results table, converts to HTML/CSV, returns multi-format response.
## Setup Instructions
1. Trigger & Processing: Configure webhook URL, set text extraction parameters.
2. AI Configuration: Add OpenAI API key, customize grading prompts, define Output Parser JSON schema.
## Prerequisites
- OpenAI API key
- Webhook platform
- n8n instance
## Use Cases
- University exam grading
- Corporate training assessments
## Customization
- Modify rubrics and criteria
- Add PDF output
- Integrate LMS (Canvas, Blackboard)
## Benefits
- Consistent AI grading
- Multi-format exports
- Reduces grading time by 90%

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
