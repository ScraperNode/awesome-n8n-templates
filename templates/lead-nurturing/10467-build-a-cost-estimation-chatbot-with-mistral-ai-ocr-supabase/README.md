# 💬 Build a cost estimation chatbot with Mistral AI, OCR & Supabase

> ⚡ **233 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# AI Cost Estimation Chatbot (Conversational Dual-Agent + OCR Workflow)

## Overview
This workflow introduces a **conversational AI Cost Estimation Chatbot** with built-in **OCR document analysis** and **interactive form guidance**.  
It helps users and teams handle **pricing, measurement, and product configuration** for multiple categories such as **fabrics** and **tiles** — whether data comes from an uploaded invoice, a stored RFQ, or live user input.

The system blends **Mistral AI’s reasoning** with **n8n’s native tools** — **OCR Extract**, **Calculator**, **Supabase**, and **Gmail** — to deliver clear, step-by-step cost calculations.  
It automatically retrieves or parses OCR data, confirms details conversationally, performs unit conversions, and returns accurate estimates in real time.  
Escalation and recordkeeping are handled via Gmail and Supabase.

---

## Chatbot Flow

**Trigger:** Chat message (from n8n Chat UI) or Webhook (from a live site).  
**Model:** Mistral Cloud Chat Model (`mistral-medium-latest`)  
**Memory:** Simple Memory (Buffer Window, 15-message history)  

**Tools:**
- **OCR Extract:** Reads and converts invoices, receipts, and RFQs into structured data.  
- **Supabase:** Stores and retrieves OCR data for re-use in future calculations.  
- **Calculator:** Performs all material, area, and cost computations.  
- **Gmail:** Escalates customer queries or sends quote summaries.  
- **Agent:** `ai agent cost estimate`  

**Workflow Behavior:**
- Retrieves or parses OCR data, confirms and completes missing details interactively.  
- Guides users step-by-step through product setup (Fabric or Tile).  
- Calculates costs transparently using MATERIAL_COSTS and PROCESSING_COSTS.  
- Handles GSM ↔ sqm, area, and weight conversions automatically.  
- Escalates support or order confirmations via Gmail when requested.

---

## Integrations Used

| Service | Purpose |
|----------|----------|
| ** Chat** | User-facing chatbot interface |
| **OCR Extract** | Processes uploaded documents or receipts |
| **Supabase** | Stores and retrieves OCR / quote data |
| **Mistral AI** | Chat model and reasoning engine |
| **Calculator** | Handles all numeric and cost calculations |
| **Gmail** | Sends escalations or quote summaries |

---

## Agent System Prompt Summary

&gt; “You are an AI cost estimation assistant for a brand.  
&gt; Retrieve or parse OCR data from Supabase, confirm details with the user, and calculate costs transparently.  
&gt; Use the Calculator for all numeric logic based on MATERIAL_COSTS and PROCESSING_COSTS.  
&gt; Handle GSM-to-sqm and other conversions automatically.  
&gt; If support or follow-up is needed, send a message through Gmail.  
&gt; Always guide the user conversationally, confirm assumptions, and explain every step clearly.”

---

## Key Features

  input:  Chat Interface  
 Conversational guidance even when OCR data doesnt exist  
 OCR + Supabase integration for document reuse  
 Interactive cost estimator for fabrics and tiles  
Transparent calculations and unit conversions  
 Gmail integration for escalation or order confirmation  
 Modular design for scaling to other product types  

---

## Summary
A powerful **AI + OCR conversational cost estimation assistant** that retrieves or parses order data, guides users through setup, and calculates costs transparently.  
It combines **intelligence (Mistral)**, **precision (Calculator)**, and **automation (OCR + Supabase + Gmail)** to create a complete, human-like quotation system — perfect for **brands, manufacturers, and B2B platforms**.

---
 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [rajeet.nair@digitalbiz.tech](mailto:rajeet.nair@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

## 🔗 Nodes Used

HTTP Request, Supabase, AI Agent, Simple Memory, Calculator, Mistral Cloud Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
