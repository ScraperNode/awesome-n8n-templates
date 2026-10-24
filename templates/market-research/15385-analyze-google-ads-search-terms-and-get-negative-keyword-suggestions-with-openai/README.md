# 📊 Analyze Google Ads search terms and get negative keyword suggestions with OpenAI GPT-5.4-mini

> ⚡ **120 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this template for?

This workflow is built for **PPC managers, digital marketing agencies, and in-house marketing teams** who run Google Ads search campaigns and want to stop wasting budget on irrelevant queries. Instead of manually reviewing hundreds or thousands of search terms in spreadsheets, this template automates the entire analysis pipeline — from raw Google Ads data to a fully structured, AI-analyzed search terms report with actionable keyword exclusion and inclusion recommendations, saved directly to Google Sheets.

---

## What this workflow does

This n8n workflow connects the Google Ads API, an OpenAI chat model, and Google Sheets to deliver a production-ready search term intelligence pipeline that runs automatically every 30 days — or on demand:

1. **Pulls search term data directly from Google Ads** — using the Google Ads API (GAQL searchStream), the workflow fetches every search term that triggered an ad in the last 30 days, including campaign and ad group context, matched keyword, match type, search term status (Added / Excluded / None), and full performance metrics: impressions, clicks, CTR, cost, avg CPC/CPM, conversions, conversion rate, and cost per conversion

2. **Cleans and formats the dataset for AI** — a Code node normalizes and filters raw API data: formats currency and percentage values, applies a metrics threshold filter, and structures the data as a clean input for the AI model

3. **Runs a comprehensive AI analysis on every search term** — an OpenAI chat model (GPT-5.4-mini or any LLM supported by n8n) acts as a senior PPC strategist. For each term, it outputs:
   - **Intent signal** — Transactional, Commercial, Informational, or Navigational
   - **Relevancy** — on a 5-level scale from Directly Relevant to Directly Irrelevant
   - **Relevancy reasoning** — a specific, business-context-aware explanation referencing campaign fit, intent, and performance signals
   - **Exclusion suggestion** — exact negative keyword with correct match type syntax (broad, phrase, or exact)
   - **Exclusion level** — Account, Campaign, or Ad Group
   - **Priority for exclusion** — High, Medium, Low, or N/A
   - **Inclusion suggestion** — keyword to add with recommended match type
   - **Inclusion type** — New keyword, New ad group, or New campaign
   - **Inclusion level** — Account, Campaign, or Ad Group

4. **Generates a Recommended Global Exclusions list** — the AI distills patterns across the full dataset into a grouped negative keyword list, organized by theme (e.g. Informational/Zero-Intent Modifiers, Price/Deal Seeking Terms, Job Seeker Terms, Wrong Audience Terms), ready for direct upload to Google Ads shared lists

5. **Produces an Inference Summary** — the AI documents its assumptions from business context and search terms dataset and how they influenced the analysis

6. **Saves everything to Google Sheets automatically** — a new spreadsheet is created on every run with three sheets: Search Terms Analysis, Global Exclusions List, and Inference Summary

---

## What you get in the output

A new Google Spreadsheet is automatically created on every wokflow run, named after your company and timestamped:
*"Search Terms Analysis & Keyword Exclusion/Inclusion Suggestions (Company Name — DD/MM/YYYY HH:MM)"*

**📊 Search Terms Analysis**

The complete, AI-enriched analysis table. Every search term from the report is included — no filtering, no omissions. All original Google Ads columns are preserved, with AI-generated columns appended:

- `search_term`, `status`, `campaign`, `ad_group`, `matched_keyword`, `match_type`
- `impressions`, `clicks`, `ctr`, `cost`, `avg_cpc`, `avg_cpm`, `conversion_rate`, `cost_per_conversion`
- `intent_signal` — Transactional / Commercial / Informational / Navigational
- `relevancy` — 5-level scale
- `relevancy_reasoning` — specific AI explanation per term
- `exclusion_suggestion` — negative keyword with match type syntax
- `exclusion_level` — Account / Campaign / Ad Group
- `priority_for_exclusion` — High / Medium / Low
- `inclusion_suggestion` — keyword to add with recommended match type
- `inclusion_type` — New keyword / New ad group / New campaign
- `inclusion_level` — Account / Campaign / Ad Group

**🚫 Global Exclusions List**

Grouped negative keywords identified as universally or near-universally problematic across campaigns. Each entry includes the negative keyword with correct match type formatting, its thematic group, and the rationale for account-level exclusion.

**📋 Inference Summary**

Documents any assumptions the AI made when business context fields were incomplete or ambiguous — useful for auditing the AI's reasoning and improving the Set node configuration over time.

---

## How to set up

1. **Google Ads API** — ensure you have a Developer Token in your Google Ads MCC account and set up OAuth 2.0 credentials with the required Google Ads API scopes
2. **OpenAI** — add your OpenAI API key to the AI model node credentials
3. **Google Sheets** — connect your Google account via OAuth 2.0. A new spreadsheet is created automatically on each run — no manual sheet setup required
4. **Configure the Set node** — open the "Set Google Ads IDs & business context" node and fill in your Google Ads MCC ID (leave blank if accessing directly), Customer ID, Developer Token, and all business context fields: company name, website, industry, company overview, target audience, campaign goals, key offerings, and known irrelevant topics
5. **Activate the workflow** — the schedule trigger runs automatically every 30 days. Use the manual trigger for on-demand analysis

---

## Requirements

- n8n (cloud or self-hosted)
- Google Ads account with API access and a Developer Token
- Google Ads OAuth 2.0 credentials
- OpenAI API key (GPT-4.1-mini or higher recommended)
- Google account with Sheets access

---

## How to customize this workflow

- **Change the AI model** — swap GPT-5.4-mini for Claude, Gemini, or any LLM supported by n8n
- **Adjust the date range** — modify the `DURING LAST_30_DAYS` clause in the GAQL query to use a custom range (e.g. last 7 days, last quarter, current month)
- **Change the schedule trigger interval** — edit the trigger interval to run the workflow weekly, monthly, or on any custom schedule
- **Change the metrics threshold** — the Clean & Format node has a metrics filter that excludes terms with fewer than 5 impressions and 0 clicks; adjust the threshold to match your account's activity level
- **Add Slack or email notifications** — append a notification node at the end to alert your team when a new analysis is ready
- **Customize the AI business context** — the quality of AI analysis scales directly with the richness of the business context provided in the Set node; the more specific the company overview, target audience, and known irrelevant topics, the more precise the relevancy scoring
- **Connect to Google Ads for direct upload** — extend the workflow to push approved exclusions back to Google Ads shared negative keyword lists via the Google Ads API

---

## About the creator

Built by a digital marketing and automation specialist. For questions, advanced customizations, or custom n8n workflow solutions, feel free to reach out on [LinkedIn](https://www.linkedin.com/in/zeljislavpetrovic/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
