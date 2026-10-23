# 🔬  AI-powered fuzzy matching, and assigns confidence scores.

> ⚡ **188 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
This workflow automates financial reconciliation across multiple data sources such as bank statements, invoices, ERP systems, and CSV uploads.

It standardizes all incoming data, performs rule-based matching, enhances results with AI-powered fuzzy matching, and assigns confidence scores. High-confidence matches are auto-reconciled, while uncertain ones are flagged for human review.

---

## How It Works

1. **Data Ingestion**
   Receives financial data via webhook from different sources.

2. **Source Detection & Routing**
   Identifies the data type and routes it to the correct normalization flow.

3. **Data Normalization**
   Converts all records into a unified schema with consistent fields like ID, amount, date, and description.

4. **Data Merging**
   Combines all normalized records into a single dataset for matching.

5. **Deterministic Matching**
   Matches records using exact field combinations such as ID, amount, and date to generate initial confidence.

6. **Match Quality Check**
   Filters low-confidence matches for further analysis.

7. **AI Fuzzy Matching**
   Uses AI to identify near matches based on descriptions, amount tolerance, and date proximity.

8. **Confidence Scoring**
   Combines deterministic and AI results into a final confidence score with a detailed audit trail.

9. **Decision Routing**
   - High confidence → auto-reconciled  
   - Low confidence → flagged for human review  

10. **Reporting**
   Logs reconciliation results into Google Sheets.

11. **Notifications**
   Sends a summary report to Slack for visibility.

---

## Setup Instructions

- Configure webhook to receive financial data  
- Set matching keys and confidence thresholds  
- Connect OpenAI for fuzzy matching  
- Connect Google Sheets for reporting  
- Connect Slack for notifications  
- Ensure input data follows expected formats  
- Test with sample financial data  
- Activate the workflow  

---

## Use Cases

- Bank statement vs invoice reconciliation  
- ERP vs accounting system matching  
- Financial audit automation  
- Detecting missing or duplicate transactions  
- Reducing manual reconciliation effort  

---

## Requirements

- n8n instance with webhook support  
- OpenAI API access  
- Google Sheets account  
- Slack workspace  
- Structured financial datasets (CSV/API)  

---

## Notes

- Deterministic matching ensures accuracy for exact matches.
- AI fuzzy matching improves coverage for ambiguous records.
- Confidence scoring provides transparency and auditability.
- Human review ensures control over uncertain reconciliations.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
