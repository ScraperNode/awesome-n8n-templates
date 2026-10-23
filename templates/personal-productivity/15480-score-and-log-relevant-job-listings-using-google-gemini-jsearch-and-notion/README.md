# ⚡ Score and log relevant job listings using Google Gemini, JSearch and Notion

> ⚡ **78 views** · ⚡ [Personal Productivity](../)

## Description

**Automated Job Search & AI Relevance Evaluator**

**Overview**

This n8n template automates the entire job hunting process by cross-referencing a candidate's PDF resume with live job listings from the JSearch API. It automatically filters for fresh, unapplied roles, uses Google Gemini AI to critically evaluate each job's relevance against the candidate's specific experience, and logs highly tailored matches directly into a Notion database for seamless tracking.

**🚀 How it works**

**Context & Extraction:** The workflow fetches existing applications from your Notion database to prevent duplicate tracking, then reads and extracts plain text directly from a local PDF resume. 

**Role Discovery:** A Google Gemini node isolates the candidate's current job title to formulate a precise search query. This query is sent to the JSearch API (via RapidAPI) to pull live job listings. 

**Smart Filtering:** Natively filters out jobs posted more than 14 days ago and jobs that already exist in your Notion tracker, ensuring only fresh, unseen postings are processed. 

**AI Evaluation:** The core of the workflow! Google Gemini acts as an expert technical recruiter, comparing the candidate's resume against each job description. It generates a "Relevance Score" (1-100), a "Skill Match Score", extracts remote/salary info, and summarizes why the job is a good fit. 

**Notion Logging:** Structured insights for each matched role are formatted and pushed directly as a rich database page into your Notion tracking board.

**🎮 How to use**

**API Credentials:** Add your Google Gemini API Key and your RapidAPI key (subscribed to the JSearch API) in their respective nodes. 

**Notion Setup:** Connect your Notion credential and update the two Notion nodes with your specific target Database ID. 

**File Path:** Update the File Selector to point to your PDF resume (e.g., /home/node/.n8n-files/My-Resume.pdf). Search Customization: Open the "Search for Jobs via RapidAPI" node to manually tweak your target location, industry keywords, or pagination limits.

**⚙️ Requirements**

- Google Gemini API Key
- RapidAPI Key (for JSearch API)
- Notion Account (with a pre-configured Job Tracker database)
- n8n Environment: Designed for self-hosted instances with local file access.

**🎯 Use Cases**

**Automated Job Hunting:** Wake up to a pre-vetted, automatically scored list of highly relevant job openings perfectly matched to your exact resume. 

**Recruiting Pipelines:** Scale candidate sourcing by automatically comparing an inbound candidate's resume against thousands of active job board posts. 

**Freelance Lead Generation:** Independent contractors or agencies can use this to find companies actively hiring for the exact technical skills they offer.

## 🔗 Nodes Used

HTTP Request, Notion, Filter, Read/Write Files from Disk, Extract from File, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
