# 📊 Customer feedback analysis with AI, QuickChart & HTML report generator

> ⚡ **1,031 views** · 📊 [Market Research & Insights](../)

## Description

## Generative Customer Insights from Feedback Data using AI Agents & Charts

This workflow automates the analysis of customer feedback or social media data from Google Sheets using DeepSeek LLM, transforming raw text into structured semantic insights. The workflow also generates data visualizations and produces a final HTML report, ready for email delivery.

---

## Table of Contents
- [What This Workflow Does](#what-this-workflow-does)
- [Pre-conditions and Requirements](#pre-conditions-and-requirements)
- [Step-by-Step Workflow Explanation](#step-by-step-workflow-explanation)
- [Example Results](#Example-Results)
- [Customization Guide](#customization-guide)

---

## What This Workflow Does

This workflow performs automated semantic analysis on unstructured feedback data (from Google Sheets), using LLM-based agents and a sequence of transformations. It achieves:

- **Prompt proposal generation**: AI generates generalizable prompts for various analysis dimensions.
- **Row-level analysis**: Each row of data is evaluated against all prompts.
- **Output merging and refinement**: Raw analysis outputs are merged, deduplicated, and semantically clustered.
- **Visualization and report generation**: QuickChart is used to create graphs, and an HTML report is produced.
- **Email delivery**: The full report is sent automatically via Gmail.

---

## Pre-conditions and Requirements

- **API Keys**
  - DeepSeek API Key
  - Gmail OAuth2 (for sending results)

- **Google Sheet Access**
  - A preformatted Google Sheet containing social listening feedback
  - The sheet must include at least 20 rows for sample prompt generation

- **n8n Configuration**
  - Nodes used: Google Sheets, LangChain (LLM/Agent/Parser), Function, Merge, QuickChart (via URL), Gmail
  - Ensure all credentials are configured properly in n8n’s credential manager

---

## Step-by-Step Workflow Explanation

1. **Google Sheet Import**
   - Retrieves feedback rows from a specific Google Sheet tab
   - Filters to the first 20 rows for prompt generation

2. **Prompt Proposal Agent**
   - AI generates 3–6 row-level analysis prompts in a structured JSON format
   - Prompts must be agnostic to product names and column headers

3. **Prompt Injection and Pairing**
   - Each row is paired with all prompts
   - Combined into a single dataset for row-by-row LLM evaluation

4. **First Iteration of Analysis**
   - An LLM answers all injected prompts row-by-row
   - Output is parsed and transformed into structured fields

5. **Semantic Merging and Refinement**
   - Merged lists of values from all rows
   - AI clusters synonyms and regenerates improved prompt definitions

6. **Second Iteration of Analysis**
   - The refined prompts are used to re-analyze each row
   - A new structured output per row is generated and merged into one object

7. **Summarization and Visualization**
   - AI generates summaries per dimension (e.g., sentiment)
   - QuickChart visualizations are created and URL-encoded
   - Cross-dimensional insights and a global narrative are generated

8. **Final Report Generation and Emailing**
   - A final HTML report is generated
   - Sent to the specified email using Gmail node

---
## Example Results
![WeChat Image_20250421171518.png](fileId:1152)
## Customization Guide

### 1. Modify Data Source
- Change the Google Sheet ID or sheet tab
- Add filters for specific time periods or product names

### 2. Adjust Prompt Definitions
- Refine the initial prompt agent instruction to tailor the type of analysis

### 3. Swap LLM Models
- Replace DeepSeek with OpenAI or another LLM via LangChain nodes

### 4. Visual Styling
- Customize QuickChart configurations to adjust chart types, colors, legends

### 5. Report Format
- Update the final HTML prompt to reflect brand design or restructure sections

### 6. Add Report Destinations
- Replace Gmail with Google Drive upload, Notion page creation, or Slack post

---

This end-to-end AI-powered social listening workflow enables scalable, repeatable, and customizable insights generation from unstructured customer feedback.

## 🔗 Nodes Used

Function, Google Sheets, Gmail, Filter, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
