# 🧾 Automate tax deduction processing with GPT-4 receipt analysis and Gmail reporting

> ⚡ **32 views** · 🧾 [Invoice Processing](../)

## Description

## How It Works
This workflow automates monthly tax processing by ingesting expense receipts alongside revenue data, extracting structured deduction details using GPT-4, and accurately matching expenses to their corresponding revenue periods. It retrieves receipts with built-in type validation, parses deduction information through OpenAI structured output extraction, and consolidates revenue records into a unified dataset. The system then intelligently aligns expenses with revenue timelines, calculates eligible deductions, and generates well-formatted tax reports that are automatically sent to designated agents via Gmail. Designed for accountants, tax professionals, and finance teams, it enables automated expense categorization and optimized deduction calculations.

## Setup Steps
1. Configure receipt storage source and OpenAI Chat Model API key.
2. Connect Gmail for report delivery and set up tax agent email.
3. Define expense categories, revenue periods, and deduction rules.
4. Schedule monthly trigger and test extraction 

## Prerequisites
Expense receipt repository; OpenAI API key; Gmail account; revenue data source 

## Use Cases
Accountants automating receipt processing for multiple clients;  

## Customization
Adjust extraction prompts for industry-specific expenses, modify deduction rules 

## Benefits
Eliminates manual receipt review, reduces categorization errors

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
