# 🔬 Analyze contract PDFs and score risk with Claude 3.5, Postgres, email and Slack alerts

> ⚡ **125 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview
This workflow automates end-to-end contract analysis using AI. It extracts clauses, evaluates risks, tracks obligations, and generates an executive summary from uploaded contracts.

By combining multiple AI agents with structured parsing and scoring logic, the workflow provides deep legal insights and automatically flags high-risk contracts. It helps legal, compliance, and business teams review contracts faster, reduce risk, and ensure better decision-making.

---

## How It Works

1. **Webhook Trigger**
   - Accepts contract uploads via API endpoint.

2. **Workflow Configuration**
   - Defines:
     - Risk threshold
     - Alert recipients
     - Slack notification channel

3. **PDF Text Extraction**
   - Extracts raw text from uploaded contract files.

4. **Parallel AI Analysis**
   Multiple AI agents process the contract simultaneously:
   
   - **Clause Extraction Agent**
     - Identifies and categorizes contract clauses

   - **Risk Assessment Agent**
     - Evaluates clause-level risks
     - Assigns risk levels and recommendations

   - **Obligation Extraction Agent**
     - Extracts responsibilities, deadlines, and commitments

   - **Executive Summary Agent**
     - Generates structured contract summary and insights

5. **Structured Output Parsing**
   - Ensures consistent JSON outputs for all agents

6. **Data Aggregation**
   - Merges outputs from all AI agents into one dataset

7. **Risk Scoring Engine**
   - Calculates weighted risk score based on:
     - Clause types
     - Risk levels
     - Missing critical clauses
     - AI confidence scores
   - Generates:
     - Score breakdown
     - Red flags
     - Recommendations

8. **Data Preparation**
   - Formats contract data for storage and tracking

9. **Database Storage**
   - Stores:
     - Contract metadata
     - Clauses
     - Obligations
     - Risk scoring results

10. **Risk Evaluation**
   - Compares calculated risk score against threshold

11. **Alert System**
   - If risk is high:
     - Sends email alerts
     - Sends Slack notifications

---

## Setup Instructions

1. **Webhook Setup**
   - Configure endpoint (`contract-upload`)
   - Connect to your document upload system

2. **AI Model Setup**
   - Add Anthropic (Claude 3.5) or OpenAI credentials
   - Connect model to all AI agent nodes

3. **Database Setup**
   - Configure Postgres credentials
   - Create tables:
     - `contracts`
     - `contract_clauses`
     - `contract_obligations`
     - `risk_scoring`

4. **Email Integration**
   - Configure Gmail or SMTP credentials
   - Set alert recipient emails

5. **Slack Integration**
   - Add Slack credentials
   - Set channel ID for alerts

6. **Configuration Settings**
   - Adjust:
     - Risk threshold (e.g., 0.7)
     - Alert recipients
     - Slack channel

---

## Use Cases

- Legal contract review automation  
- Vendor agreement risk assessment  
- Compliance and audit workflows  
- Procurement contract validation  
- AI-powered legal tech solutions  

---

## Requirements

- AI model API (Anthropic or OpenAI)  
- Postgres database  
- Email service (Gmail/SMTP)  
- Slack workspace  
- n8n instance  

---

## Key Features

- Multi-agent AI contract analysis  
- Clause extraction and categorization  
- Risk scoring with weighted logic  
- Obligation tracking and deadline extraction  
- Executive summary generation  
- Automated high-risk alert system  
- Structured database storage for audit  

---

## Summary

A powerful AI-driven contract intelligence workflow that transforms unstructured legal documents into structured insights, risk scores, and actionable recommendations. It enables faster contract reviews, better risk management, and scalable legal automation.

## 🔗 Nodes Used

Postgres, Slack, Webhook, Gmail, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
