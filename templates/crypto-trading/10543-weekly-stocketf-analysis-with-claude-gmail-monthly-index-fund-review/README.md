# 📈 Weekly stock/ETF analysis with Claude & Gmail — monthly index fund review

> ⚡ **213 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

What This Flow Does

  Automated stock portfolio analysis system that performs comprehensive fundamental and technical analysis of your
  portfolio holdings on a scheduled basis, with intelligent follow-up capabilities.

  How It Works

  Two-Phase Analysis System:

  1. Monday Analysis (Main weekly analysis)
    - Reads your stock holdings from Google Sheets
    - Performs deep fundamental analysis using Claude AI with web search
    - Conducts technical analysis with current market data
    - Combines both analyses into final buy/sell/hold recommendations
    - Emails you comprehensive analysis report
  2. Wednesday Follow-up (Interactive refinement)
    - Sends midweek check-in email asking for additional input
    - If you reply with documents, questions, or market observations
    - Runs supplemental analysis incorporating your feedback
    - Updates recommendations based on new information and market changes
    - Delivers refined analysis via email

  Key Features

  - Fractional share support - handles both whole and fractional stock positions
  - Web-enabled AI analysis - Claude AI searches current market data, news, earnings
  - Dual-analyst approach - separate fundamental and technical analysis for comprehensive coverage
  - Interactive feedback loop - Wednesday follow-ups allow you to guide analysis
  - Professional email reports - formatted HTML emails with actionable recommendations

  Setup Steps

  1. Google Sheets: Duplicate given template and fill with your investment information
  2. Gmail OAuth: Connect your Gmail account for sending reports
  3. Anthropic API: Add Claude AI credentials for analysis
  4. Replace placeholders: Update YOUR_EMAIL@gmail.com, YOUR_GOOGLE_SHEETS_ID, webhook IDs
  5. Schedule configuration: Currently set for Monday 12pm EST analysis, Wednesday 12pm EST follow-up

  Use Case

  Perfect for part time investors who want systematic, AI-powered analysis of their portfolio with the flexibility to
  provide additional context and refinements throughout the week.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
