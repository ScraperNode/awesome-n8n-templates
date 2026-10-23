# 🔬 Convert CSV/XLSX files into a normalized SQL schema with GPT-4

> ⚡ **102 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Automatically converts CSV/XLSX files into a fully validated database schema using AI, generating SQL scripts, ERD diagrams, a data dictionary, and load plans to accelerate database design and data onboarding.

---

## EXPLANATION

This workflow automates the end-to-end process of transforming raw CSV or Excel data into a production-ready relational database schema.

It begins by accepting file uploads through a webhook, detecting file type, and extracting structured data. The workflow performs data cleaning and deep profiling to analyze column types, uniqueness, null values, and patterns. A column analysis engine identifies candidate primary keys and potential relationships.

An AI agent then generates a normalized schema by organizing data into tables, assigning appropriate SQL data types, and defining primary and foreign keys. The schema is validated using rule-based checks to ensure data integrity, correct relationships, and proper normalization.

If validation fails, the workflow automatically refines the schema through a revision loop. Once validated, it generates SQL DDL scripts, ERD diagrams, a data dictionary, and a load plan that determines the correct order for inserting data.

Finally, all outputs are combined and returned via webhook as a structured response, making the workflow ideal for rapid database creation, data migration, and AI-assisted data modeling.

---

## Overview

This workflow automatically converts CSV or Excel files into a production-ready relational database schema using AI and rule-based validation.

It analyzes uploaded data to detect column types, relationships, and data quality, then generates a normalized schema with proper keys and constraints. The output includes SQL DDL scripts, ERD diagrams, a data dictionary, and a load plan.

This eliminates manual schema design and accelerates database setup from raw data.

---

## How It Works

1. **File Upload (Webhook)**  
   Accepts CSV or XLSX files and initializes workflow configuration such as thresholds and retry limits.

2. **File Extraction**  
   Detects file format and extracts rows into structured JSON format.

3. **Data Cleaning & Profiling**  
   Cleans data, removes duplicates, normalizes values, and computes column statistics such as null percentage and uniqueness.

4. **Column Analysis Engine**  
   Identifies candidate primary keys, analyzes cardinality, and suggests potential foreign key relationships.

5. **AI Schema Generation**  
   Uses an AI agent to design normalized tables, assign SQL data types, and define primary keys, foreign keys, and constraints.

6. **Validation Layer**  
   Validates schema integrity by checking data types, primary key uniqueness, foreign key overlap, and constraint consistency.

7. **Revision Loop**  
   If validation fails, the workflow sends feedback to the AI agent and regenerates the schema until it meets requirements.

8. **Schema Output Generation**  
   Generates SQL DDL scripts, ERD diagrams, a data dictionary, and a load plan.

9. **Load Plan Engine**  
   Determines the correct order for inserting data and detects circular dependencies.

10. **Combine & Explain**  
   Merges all outputs and optionally provides AI-generated explanations of schema decisions.

11. **Response Output**  
   Returns all generated artifacts as a structured JSON response via webhook.

---

## Setup Instructions

1. Activate the workflow and copy the webhook URL  
2. Send a POST request with a CSV or XLSX file  
3. Configure OpenAI credentials for the AI agent  
4. Adjust thresholds if needed (FK overlap, retries, confidence)  
5. Execute the workflow and review outputs  

---

## Use Cases

- Automatically generate database schemas from CSV/Excel files  
- Accelerate data migration and onboarding pipelines  
- Rapidly prototype relational database designs  
- Reverse engineer structured schemas from raw datasets  
- AI-assisted data modeling and normalization  

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
