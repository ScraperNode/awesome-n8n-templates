# 📊 Analyze inflation hedges with OpenAI GPT-4.1-mini and Gmail

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs manually to calculate inflation-adjusted (real) returns for a set of commodities versus a savings rate, then uses OpenAI to generate a structured analysis and emails the final report via Gmail.

## How it works
1. Starts when you run the workflow manually.
2. Loads the provided inflation rate, savings return, and a list of commodity nominal returns, then validates that inflation is greater than 0 and savings return is at least 0.
3. Calculates the real return for savings and each commodity (nominal return minus inflation) and flags whether each commodity beats the savings real return.
4. Evaluates each commodity and labels it as a good or bad inflation hedge based on whether it outperforms savings after inflation.
5. Aggregates all labeled commodity results and sends them to OpenAI to identify the best hedge, explain the reasoning, compare against savings, and produce beginner-friendly advice in JSON format.
6. Parses the AI response and sends an HTML email report with the findings through Gmail.

## Setup
1. Add OpenAI API credentials (or use the configured n8n OpenAI credits) and confirm the selected model in the OpenAI step.
2. Add a Gmail OAuth2 credential and set the recipient email address in the Gmail send step.
3. Update the input values (inflation, savings_return, and the commodities list with name and return) to match your own data before executing the workflow.

## 🔗 Nodes Used

Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
