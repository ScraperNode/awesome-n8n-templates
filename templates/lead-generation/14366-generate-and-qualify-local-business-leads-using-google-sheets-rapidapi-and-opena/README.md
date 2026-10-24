# 🎣 Generate and qualify local business leads using Google Sheets, RapidAPI and OpenAI

> ⚡ **133 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## How it works  
This workflow automatically discovers and qualifies local business leads using structured inputs. It runs on a schedule, reads search queries from Google Sheets, and fetches business data via an API. The data is cleaned and enriched before being analyzed by AI for lead scoring and categorization. Finally, all enriched leads are stored back in Google Sheets for outreach and tracking.

## Step-by-step  

- **Trigger workflow automatically**  
  - **Schedule Trigger** – Runs the workflow at defined time intervals.

- **Fetch lead search inputs**  
  - **Read Search Requests** – Retrieves keywords and locations from Google Sheets.

- **Collect business data from API**  
  - **Search Businesses API** – Queries RapidAPI to find local businesses with contact details.

- **Clean and structure results**  
  - **Format Business Results** – Extracts and formats business name, email, phone, website, and address.

- **Analyze and score leads with AI**  
  - **Message a model** – Uses OpenAI to classify businesses, assign lead scores, and generate outreach lines.

- **Store enriched leads**  
  - **Write to Business Results** – Saves all processed and scored leads into Google Sheets.

## Why use this?  

- Automates manual lead research and data collection  
- Improves lead quality with AI-based scoring and classification  
- Centralizes all lead data in a structured Google Sheets database  
- Generates ready-to-use outreach messages for faster sales execution  
- Scales easily by adding more keywords and locations

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
