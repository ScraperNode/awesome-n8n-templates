# 📈 Personalized stock portfolio analysis and recommendations with Grok-4 and Perplexity

> ⚡ **2,289 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## 📊 Grok-4 with Perplexity Daily Portolio Advisor.

This workflow acts as your personal AI stock analyst—powered by Grok-4, Perplexity, and Google Sheets—to give you daily, tailored market insights based on your actual investment portfolio.

Every morning, the workflow:

Fetches your current stock holdings from a connected Google Sheet

Uses Perplexity to search and summarize the latest stock market news relevant to your portfolio

Leverages Grok-4 AI to analyze how those news events impact your stocks

Provides buy/sell/hold recommendations and AI-powered investment insights

Emails you a clean, easy-to-read summary—perfect for busy investors

To watch the step-by-step Tutorial build of this workflow, check out: https://youtu.be/OXzsh-Ba-8Y

Google Sheet Template:
https://docs.google.com/spreadsheets/d/1074dZk-vhwz6LML5zoiwHdxg89Z8u_mgl7wwzqf3A98/edit?usp=sharing


🧠 What’s Inside:
AI Agent: Grok-4 Stock Analyst (via xAI Grok-4)

Tool Integrations:
 📄 Google Sheets (Portfolio input)
 🔍 Perplexity (News search)
 ✍️ GPT Summary Agent (Readable output)
 📧 Gmail (Automated delivery)

Schedule: Runs daily at 10:00 AM by default (customizable)

💡 Use Cases:
Retail investors seeking personalized news summaries

Portfolio managers automating market analysis

Fintech startups prototyping intelligent investment advisors

Anyone wanting actionable stock updates without reading 10+ articles

## 🔗 Nodes Used

Gmail, Schedule Trigger, AI Agent, Simple Memory, xAI Grok Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
