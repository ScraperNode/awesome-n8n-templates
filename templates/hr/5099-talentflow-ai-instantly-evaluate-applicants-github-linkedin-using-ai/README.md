# 👥 TalentFlow AI – Instantly evaluate applicant's GitHub, LinkedIn, using  AI

> ⚡ **243 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

# AI-Powered Job Application Screening Workflow

## Who Is This For?

This template is ideal for:
- **HR teams**
- **Recruiters**
- **Hiring managers**

Who want to automate the screening of job applicants. If you collect candidate data via JotForm and want an AI‑powered, multi‑source evaluation—without manual copy‑paste—this workflow is for you.

## What Problem Does This Solve?

Manually reviewing:
- LinkedIn profiles
- GitHub repos
- LeetCode stats
- Resume PDFs

Is **time‑consuming** and **error‑prone**. This workflow:
1. Centralizes all candidate data
2. Scores each dimension against specific job requirements
3. Appends results to Google Sheets
4. Helps make data‑driven hiring decisions faster

## What This Workflow Does

### 1. Trigger on New JotForm Submission
Captures candidate name, email, social URLs, resume link, and **job description**  
*(Pro Tip: Add hidden field in JotForm to pass job requirements)*

### 2. Extract & Normalize Usernames
Parses LinkedIn, GitHub, and LeetCode handles

### 3. Scrape & Format Data
- **LinkedIn** → profile & latest posts via ScrapingDog & Apify
- **GitHub** → profile, repos, and contribution metrics via GitHub GraphQL
- **LeetCode** → submission stats & rankings via LeetCode GraphQL
- **Resume** → converts PDF to text with PDF.co

### 4. AI‑Powered Evaluation
Uses LangChain agents on OpenRouter to:
- Generate fit scores (1–10) **based on job description**
- Provide justifications for each source
- Analyze candidate suitability against specific role requirements

### 5. Merge & Append
Consolidates scores and feedback → writes new row to Google Sheets with hyperlinks and totals

## Setup

### JotForm Configuration
1. Create your job application form
2. **Add Hidden Field**:
   - Name: `job_description`
   - Value: [Paste full job description here]
   *(This enables AI to evaluate candidates against specific role requirements)*
3. Create fields matching the workflow requirements
![image.png](fileId:1592)

### Required Credentials/Variables
- JotForm API key
- SCRAPINGDOG_API_KEY & Apify token
- GitHub personal access token (read‑only)
- PDF.co API key
- OpenRouter API key

### Configuration Steps
1. **Google Sheets**
   - Create or select spreadsheet
   - Grant n8n access
2. **Node Organization**
   - All nodes renamed for clarity
   - Sticky notes explain prerequisites

## How to Customize

### 1. Job-Specific Evaluation
- Include hidden `job_description` field in JotForm
- AI will automatically analyze candidates against these requirements

### 2. Add/Edit Fields
Use `Edit Fields` node to map your form questions

### 3. Adjust Scoring
Tweak agent prompts:
- `linkedin evaluation`
- `github evaluation`
- etc.

### 4. Extend Sources
Insert new branches (e.g., Stack Overflow) by following existing patterns

## Result

Transforms raw candidate submissions into actionable insights—evaluating applicants against specific job requirements and reducing screening time from hours to minutes with consistent, unbiased evaluations.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Jotform Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
