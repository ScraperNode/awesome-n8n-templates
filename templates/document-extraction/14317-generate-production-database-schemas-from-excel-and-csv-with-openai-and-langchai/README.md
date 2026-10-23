# 🔬 Generate production database schemas from Excel and CSV with OpenAI and LangChain

> ⚡ **96 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Overview

This workflow automatically converts CSV or Excel files into a production-ready database schema using AI and rule-based validation.

It analyzes uploaded data, detects column types, relationships, and data quality, then generates a normalized schema. The output includes SQL DDL scripts, ERD diagrams, a data dictionary, and a load plan.

This eliminates manual schema design and accelerates database setup from raw data.

---

## How It Works

1. **File Upload (Webhook)**
   - Accepts CSV or XLSX files via webhook endpoint
   - Initializes workflow configuration (thresholds, retry limits)

2. **File Extraction**
   - Detects file format (CSV or Excel)
   - Extracts rows into structured JSON
   - Merges extracted datasets

3. **Data Cleaning & Profiling**
   - Removes duplicates and normalizes values
   - Detects data types (integer, float, date, boolean, string)
   - Computes column statistics (nulls, uniqueness, distributions)
   - Generates file hash and sample dataset

4. **Column Profiling Engine**
   - Identifies potential primary keys
   - Detects cardinality and uniqueness levels
   - Suggests foreign key relationships based on value overlap

5. **AI Schema Generation**
   - Uses an AI agent to design normalized tables
   - Assigns SQL data types based on real data
   - Defines primary keys, foreign keys, constraints, and indexes

6. **Validation Layer**
   - Ensures schema matches actual data
   - Validates:
     - Data types
     - Primary key uniqueness
     - Foreign key overlap (&gt;70%)
     - Constraint consistency
   - Detects circular dependencies

7. **Revision Loop**
   - If validation fails:
     - Sends feedback to AI agent
     - Regenerates schema
     - Retries up to configured limit

8. **Schema Output Generation**
   - Generates:
     - SQL DDL scripts
     - ERD (Mermaid format)
     - Data dictionary
     - Load plan with dependency graph

9. **Load Plan Engine**
   - Computes optimal table insertion order
   - Detects circular dependencies
   - Suggests batching strategy

10. **Combine & Explain**
   - Merges all outputs
   - Optional AI explanation of schema decisions

11. **Response Output**
   - Returns structured JSON via webhook:
     - SQL schema
     - ERD summary
     - Data dictionary
     - Load plan
     - Optional explanation

---

## Setup Instructions

1. Activate the workflow and copy the webhook URL  
2. Send a POST request with a CSV or XLSX file  
3. Configure OpenAI credentials (used by AI agent)  
4. Adjust thresholds if needed (FK overlap, retries, confidence)  
5. Execute workflow and review generated outputs  

---

## Use Cases

- Auto-generate database schema from CSV/Excel files  
- Data migration and onboarding pipelines  
- Rapid database prototyping  
- Reverse engineering datasets  
- AI-assisted data modeling  

---

## Requirements

- n8n (latest version recommended)  
- OpenAI API credentials  
- LangChain nodes enabled  
- CSV or XLSX input file

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
