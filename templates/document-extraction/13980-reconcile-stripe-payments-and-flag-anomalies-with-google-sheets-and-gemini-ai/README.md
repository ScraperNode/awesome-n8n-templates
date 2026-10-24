# 🔬 Reconcile Stripe payments and flag anomalies with Google Sheets and Gemini AI

> ⚡ **12 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Who is this for

SMB finance teams, SaaS companies, and accounting professionals who need to automate transaction reconciliation between Stripe payments and their accounting ledgers. Perfect for businesses processing dozens to hundreds of daily transactions.

## How it works

This workflow automatically reconciles Stripe payments with Google Sheets accounting data daily. It fetches recent Stripe charges, compares them against your ledger entries using amount, date, and reference ID matching, then uses Gemini AI to analyze any discrepancies found.

The reconciliation engine identifies missing entries, amount mismatches, timing differences, and duplicate payments. Gemini AI categorizes each discrepancy by severity and provides actionable recommendations. Results are logged to a Google Sheets reconciliation report and team alerts are sent via Slack. On Mondays, a comprehensive weekly summary is emailed to finance stakeholders.

## How to set up

Connect your Stripe, Google Sheets, Slack, and Gmail credentials in n8n. Update the "User Settings" node with your spreadsheet ID, Slack channel, email recipients, and tolerance threshold for amount matching. Configure your accounting ledger sheet with columns for Date, Amount, Description, and Reference ID. Test with a small date range initially.

## Requirements

- Stripe account with API access
- Google Sheets with structured accounting ledger
- Slack workspace for notifications  
- Gmail for weekly reports
- Google Gemini API access

## How to customize

Adjust the tolerance threshold for amount matching precision. Modify the Gemini AI prompt to focus on specific analysis criteria. Change notification channels, email recipients, or schedule frequency. Add custom fields to the reconciliation results sheet or integrate additional payment processors.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
