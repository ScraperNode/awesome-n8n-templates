# 🔬 Reconcile bank transactions and generate reports with GPT-4 and Gmail

> ⚡ **170 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## How It Works
This workflow automates end-to-end financial transaction processing for finance teams managing high-volume bank data. It eliminates manual reconciliation by intelligently classifying transactions, detecting anomalies, and generating executive summaries. The system pulls transaction data from Fable Bank, routes it through multiple AI models (OpenAI GPT-4, NVIDIA NIM) for classification and analysis, reconciles accounts, and distributes formatted reports via email. Finance managers and accounting teams benefit from reduced processing time, improved accuracy, and real-time anomaly detection. The workflow handles transaction categorization, reconciliation schema generation, account matching, journal entry creation, and comprehensive reporting—transforming hours of manual work into minutes of automated processing with AI-enhanced accuracy.

## Setup Steps
1. Configure Fable Bank API credentials for transaction data access 
2. Add OpenAI API key for GPT-4 classification and reconciliation models 
3. Set up NVIDIA NIM credentials for anomaly detection services 
4. Connect Google Sheets for reconciliation schema storage 
5. Configure Gmail account for automated report distribution  

## Prerequisites
OpenAI API account with GPT-4 access

## Use Cases
Monthly financial close automation, daily transaction monitoring for fraud detection

## Customization
Replace Fable Bank with your banking API

## Benefits
Reduces reconciliation time by 90%, eliminates manual data entry errors

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
