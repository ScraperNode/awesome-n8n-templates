# 🎣 Generate ideal customer profile leads & personalized pitches with GPT-4o-mini, Perplexity and Apify

> ⚡ **161 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![screencaptureneightn011appn8ncloudworkflowBYoMCe7Hcdg2bajF2025101712_23_02.png](fileId:3000)

# n8n Workflow: Automated Lead Generation & Personalized Outreach

## Overview
This n8n workflow automates the entire lead generation and personalized email creation process for businesses. It analyzes a company's profile, identifies ideal customer profiles (ICP), finds matching leads, and generates customized outreach emails.

---

## Workflow Components

### 1. JotForm Trigger
**Purpose:** Form Submission Entry Point

- Captures business information through JotForm (Form ID: 252802732808054)
- Initiates the automation workflow when form is submitted
- Collects company website and business details

---

### 2. Perplexity API Integration
**Purpose:** Company Analysis

- **Method:** POST request to Perplexity AI Search API
- **Function:** Performs detailed research on the submitted company website
- **Output:** Comprehensive business intelligence and market positioning data

---

### 3. ICP Finder (OpenAI GPT-4o-mini)
**Purpose:** Ideal Customer Profile Creation

- **Model:** GPT-4o-mini
- **Role:** Expert client acquisition manager
- **Task:** Analyzes company details and generates best-fit customer profile
- **Input:** Company snippet from Perplexity research
- **Output:** Detailed ICP description

---

### 4. Edit Fields
**Purpose:** Data Transformation

- Extracts and formats the ICP output
- Prepares data for next workflow stage
- Ensures clean data flow between nodes

---

### 5. ICP Industry Finder (OpenAI GPT-4o-mini)
**Purpose:** Industry Classification

- **Model:** GPT-4o-mini
- **Role:** Expert ICP analyzer
- **Task:** Identifies specific business sector matching the ICP
- **Rules:**
  - Returns single industry sector only
  - Uses professional terminology (e.g., "healthcare", "call centre", "plumber")
  - Excludes all SaaS-related companies
  - Avoids generic terms like "technology industry"
- **Output:** Single industry sector name

---

### 6. Leads Generator (Apify API)
**Purpose:** Lead Discovery

- **API:** Local Business Lead Generator by james.logantech
- **Method:** Synchronous run with dataset items retrieval
- **Configuration:**
  - Location: United States
  - Maximum Results: 5 leads
  - Business Types: Based on ICP industry output
- **Output:** List of qualified business leads

---

### 7. Loop Over Items
**Purpose:** Batch Processing

- Processes leads individually
- Enables personalized email creation for each lead
- Controls workflow iteration

---

### 8. Personalized Emails (Apify API)
**Purpose:** Custom Email Generation

- **API:** Pitches Pro by onescales
- **Method:** Synchronous run with dataset items retrieval
- **Configuration:**
  - **Promoting:** Automation services
  - **Benefits:** "Save 10+ hours per week by automating manual tasks"
  - **Goal:** Partnership
  - **Tone:** Professional yet approachable, confident but not pushy
  - **Language:** English
  - **Additional Notes:** Focus on time-saving, avoid technical jargon, include soft CTA
- **Output:** Personalized email for each lead

---

## Data Flow
```
JotForm → Perplexity Analysis → ICP Generation → Field Formatting → 
Industry Classification → Lead Discovery → Batch Processing → Email Personalization
```

---

## Key Features

✅ **Fully Automated:** No manual intervention required  
✅ **AI-Powered:** Uses GPT-4o-mini for intelligent ICP analysis  
✅ **Personalized:** Custom emails for each prospect  
✅ **Scalable:** Processes multiple leads in batches  
✅ **Time-Saving:** Automates 10+ hours of manual work per week

---

## Requirements

- **APIs Required:**
  - Perplexity AI (with Authorization token)
  - OpenAI (GPT-4o-mini access)
  - Apify (2 actors: Local Business Lead Generator & Pitches Pro)
- **Form Platform:** JotForm account
- **n8n Instance:** Self-hosted or cloud

---

## 🔗 Nodes Used

HTTP Request, Jotform Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
