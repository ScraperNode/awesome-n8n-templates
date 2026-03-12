# 📈 AI-powered stock analysis with AI scoring and Gmail report delivery

> ⚡ **1,498 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Workflow Description and Setup Guide

This workflow provides comprehensive AI-driven stock analysis, generating detailed deep reports by leveraging advanced vector-based data retrieval and API integrations for precise financial analytics using Danelfin scoring and strategy.

---

## Overview

This workflow automates stock analysis utilizing:

* **AI-driven scoring and sector insights** (Danelfin configuration)
* **Vector-based data retrieval** (Supabase)
* **Deep analytical reports**

---

## Key Components and API Integrations

### 1. Danelfin AI Stock Analysis API

Provides advanced stock scores, rankings, and sector insights.

* **Endpoints:**

  * `/ranking`: Stock rankings and scores
  * `/sectors`: Sector information
  * `/industries`: Industry details

### 2. Supabase Vector Store

Vector embedding storage and quick data retrieval.

---

## Workflow Steps

### Initialization

1. **Chat Trigger**: Activates when a message requesting stock analysis is received.

### Stock Analysis and Deep Reporting

2. **Main AI Agent**: Processes the query, retrieves relevant data from Danelfin, and generates deep analytical reports.

3. **Supabase Vector Store**: Facilitates efficient data retrieval using embeddings.

### Reporting

4. **Markdown Conversion**: Transforms analysis into a readable HTML format.

5. **Email Reporting**: Sends detailed reports via Gmail.

---

## Setup Instructions

### Prerequisites

* Obtain API Keys for Supabase and Danelfin.

### Configuration Steps

1. **Set API Keys**:

   * Supabase API credentials for vector storage.
   * Danelfin API credentials for stock analysis.

2. **Gmail API Credentials**:

   * Configure Gmail node for sending reports.

### Running the Workflow

* Triggered automatically by chat messages requesting analysis.
* Reports sent directly via email.

---

This setup ensures precise, AI-driven stock analysis delivered clearly through automated deep reporting.

## 🔗 Nodes Used

Gmail, Markdown, AI Agent, Embeddings OpenAI, Recursive Character Text Splitter, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
