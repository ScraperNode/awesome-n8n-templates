# 👥 Send a daily women-focused job digest to Telegram with GPT-4o-mini and SerpAPI

> ⚡ **86 views** · 👥 [HR & Recruitment](../)

## Description

## 📘 Description
 This workflow automates a daily women-focused job discovery and delivery system. It runs every morning, fetches jobs from multiple targeted categories using SerpAPI, filters and ranks them based on relevance and recency, and uses AI to validate and format the best opportunities. The final curated list (top 3 jobs) is sent as a clean, readable digest to a Telegram channel. 

⚙️ Step-by-Step Flow

Daily 9AM Trigger (Schedule)

Runs automatically every day at 9:00 AM to initiate the job discovery pipeline. 

Fetch Jobs (4 Parallel HTTP Requests)
-  Pulls job listings from Google Jobs via SerpAPI across four categories: 
-  Women returnship programs 
-  Diversity hiring roles 
-  Remote jobs for women 
-  Female-focused hiring initiatives 

Merge All Results (Merge Node)

Combines all fetched job results into a single unified dataset. 

Extract Job Items (Code Node)

Normalizes raw API responses into structured fields: 
-  Title 
-  Company 
-  Location 
-  Description 
-  Apply link 
-  Source 

Keyword Filter (IF Node)

Filters jobs using regex for relevance:

women | diversity | returnship | female | remote

Only matching jobs move forward. 

Rank by Recency & Take Top 3 (Code Node)
-  Converts posting time (e.g., “2 days ago”) into numeric scores 
-  Sorts jobs by most recent 
-  Keeps only top 3 high-signal listings 
- AI Agent: Validate & Format Job (OpenAI GPT-4o-mini)
-  For each job: 
-  Verifies real relevance (rejects generic/senior/unrelated roles) 
-  Assigns category tag (👩 🌍 🏠 🔁) 
-  Generates clean, human-readable output 
-  Drops irrelevant jobs using IGNORE

Build Telegram Digest Message (Code Node)

Combines all formatted jobs into a single structured message with numbering and footer. 

Send Daily Digest to Telegram (Telegram Node)

Delivers the final curated job digest to a Telegram chat/channel using HTML formatting. 

## 🧩 Prerequisites

 • SerpAPI key (added in all HTTP nodes)
 • OpenAI API credential (GPT-4o-mini)
 • Telegram Bot API credential + Chat ID
 • Proper keyword alignment for filtering

## 💡 Key Benefits

 ✔ Fully automated daily job sourcing and curation
 ✔ Multi-source aggregation with deduplication logic
 ✔ AI-based quality filtering (removes noise)
 ✔ High-signal output (top 3 only, no clutter)
 ✔ Direct delivery to Telegram for instant consumption

## 👥 Perfect For

-  Women-focused job communities and Telegram channels
-  Career platforms targeting diversity hiring
-  Returnship and re-entry job programs
-  Curated job newsletter automation systems

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
