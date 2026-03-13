# 📊 Generate comprehensive & abstract summaries from Jotform data with Gemini AI

> ⚡ **78 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

## Who this is for

This workflow is designed for researchers, marketing teams, customer success managers, and survey analysts who want to automatically generate AI-powered summaries of form responses collected via Jotform  — turning raw feedback into actionable insights.

It is ideal for:

* Teams conducting market research or post-event surveys.
* Customer experience teams that collect feedback via forms and need instant, digestible summaries.
* Product managers seeking concise overviews of user comments and suggestions.
* Analysts who want to compare comprehensive vs. abstract summaries for richer intelligence.


## What problem this workflow solves

Analyzing open-ended Jotform responses manually can be slow, repetitive, and error-prone.
This workflow automates the process by generating two AI summaries for every response:

* Comprehensive Summary — captures all factual details from the response.
* Abstract Summary — rephrases and synthesizes insights at a higher, conceptual level.

### With this workflow:

* Each response is summarized instantly using Google Gemini AI.
* Both comprehensive and abstract summaries are automatically generated and stored.
* Data is persisted in Google Sheets, DataTable, and Google Docs for further use.

## What this workflow does

This n8n workflow transforms Jotform submissions into structured summaries using Google Gemini.

### Step-by-Step Breakdown

1. **Webhook Trigger (Jotform Integration)**

   * Listens for new Jotform submissions using the Webhook node.
   * Receives full form data via the Webhook response.
  
2. **Set the Input Fields**

   * Extracts and assigns key fields like:

     * `FormTitle`
     * `SubmissionID`
     * `Body` (the formatted form data)
   * Prepares structured JSON to feed into the AI summarization stage.

3. **Comprehensive & Abstract Summarizer**

   * Powered by Google Gemini Chat Model (models/gemini-2.0-flash-exp).
   * Custom prompt:

     ```
     You are an expert comprehensive summarizer. Build a detailed and abstract summary of the following {{ $json.body.pretty }}.
     ```
   * Produces two distinct summaries:

     * `comprehensive_summary`
     * `abstract_summary`

4. **Structured Output Parser**

   * Ensures Gemini output matches a defined JSON schema:

     ```json
     {
       "comprehensive_summary": "",
       "abstract_summary": ""
     }
     ```
   * Guarantees reliable downstream integration with Sheets and Docs.

5. **Persist on DataTable**

   * Saves both summaries into an n8n DataTable for historical tracking or visualization.
   * Useful for teams running internal analytics within n8n Cloud or self-hosted environments.

6. **Append or Update Row in Google Sheets**

   * Writes both summaries into a connected **Google Sheet**.
   * Columns:

     * `comprehensive_summary`
     * `abstract_summary`

7. **Create Google Document**

   * Automatically generates a Google Docs file titled:

     ```
     {FormTitle}-{SubmissionID}
     ```
   * Acts as a per-submission record with a placeholder ready for AI summary insertion.

8. **Update Google Document**

   * Inserts both summaries directly into the newly created Google Doc:

     ```
     Comprehensive Summary:
     [Full detailed summary]

     Abstract Summary:
     [Conceptual summary]
     ```
   * Each doc becomes a polished, shareable insight artifact.


## Concepts Used in the Workflow

### Comprehensive Summarization

Comprehensive summarization captures every important detail in a factual, exhaustive way — ideal when accuracy and completeness matter.

**Goal:**

Provide a detailed understanding of user responses without losing nuance.

**Best For:**

* Research surveys
* Customer service logs
* Support ticket summaries
* Feedback traceability

### Abstract Summarization

Abstract summarization rephrases and synthesizes ideas, offering high-level insights rather than copying text.

**Goal:**

Capture the *essence* and *implications* of feedback — ideal for storytelling and executive reviews.

**Best For:**

* Executive summaries
* Marketing insights
* Customer trend analysis
* Blog-style recaps

## Setup Instructions

### Pre-requisite 

If you are new to Jotform, Please do signup using [Jotform Signup](https://www.jotform.com/?partner=ranjandailata)

For the purpose of demonstation, we are considering the Jotforms Prebuilt Form as a example.

Follow these steps to deploy and customize the workflow:

### Step 0: Local n8n
This step is required for the locally hosted n8n only. Please make sure to setup and install [ngrok](ngrok) and follow the steps to configure and run ngrok on your local with the n8n port. This is how you can run.
```
ngrok http 5678
```
Copy the base URL ex: https://2c6ab9f2c746.ngrok-free.app/ as it will be utilized as part of the webhook configuration for the Jotform.


### Step 1: Configure Jotform Webhook

- Copy the webhook URL generated by n8n’s Jotform Trigger node.
- In your Jotform dashboard, go to:  
  Settings → Integrations → Webhooks → Add Webhook 
- If you are executing this workflow on a self hosted n8n instance, please follow the steps for setting up ngrok and format the Webhook URL so that the Jotform can make a Webhook POST over the public URL.

- Copy the Webhook URL generated by n8n. 
You can copy the URL by double clicking on the Jotform Trigger node. Make sure to replace the base url with the above Step 0, if you are running the workflow from your local machine.

![n8n Workflow Jotform Trigger](fileId:2786)


### Step 2: Connect Google Gemini

* Navigate to n8n → Credentials → Google Gemini (PaLM API).
* Add API credentials and select the model:
  `models/gemini-2.0-flash-exp`
* Test the connection before proceeding.


### Step 3: Configure the Structured Output Parser

* Open the Structured Output Parser node.
* Ensure the schema includes:

  ```json
  {
    "comprehensive_summary": "",
    "abstract_summary": ""
  }
  ```
* Modify or expand schema fields if additional summaries (e.g., “sentiment_summary”) are needed.


### Step 4: Connect Google Sheets

* Link your Google Sheets OAuth2 credentials.
* Specify:

  * **Document ID** (Google Sheet URL)
  * **Sheet Name** (e.g., “Sheet1”)
* Map columns to:

  * `comprehensive_summary`
  * `abstract_summary`

### Step 5: Enable DataTable Storage (Optional)

* Use the DataTable node to maintain a permanent database within n8n Cloud.
* Configure the schema fields for:

  * `comprehensive_summary`
  * `abstract_summary`


### Step 6: Generate and Update Google Docs

* Link your Google Docs account under n8n credentials.
* The workflow auto-creates and updates a doc per submission, embedding both summaries for easy sharing.


## How to Customize

- **Add Sentiment Analysis**

After generating the summary, insert another Google Gemini node to classify the tone of each response — for example, Positive, Neutral, or Negative.

This helps you track user sentiment trends over time.

- **Send Alerts for Urgent Feedback**

Use an IF node to check if the abstract summary contains words such as “urgent,” “issue,” or “negative.”

If triggered, automatically send an alert through Slack, Gmail, or Discord, so the team can respond immediately.

- **Enable Multi-Language Support**

Insert a Language Detection node before the Gemini summarizer.

Once the language is detected, modify the summarizer prompt dynamically to summarize in that same language — ensuring localized insights.

- **Add Topic Extraction**

Include an additional Gemini text extraction node that identifies major topics or recurring themes from each response before summarization.

This creates structured insights ready for analytics or tagging.

- **Integrate with CRM or Ticketing Systems**

Connect your workflow to HubSpot, Salesforce, or Zendesk to automatically create new records or tickets based on the feedback type or sentiment.
This closes the loop between survey collection and actionable response.

## Summary

This workflow automates survey intelligence generation from Jotform submissions — powered by Google Gemini AI — delivering dual-layer summarization outputs directly into Google Sheets, DataTables, and Google Docs.

**Benefits:**

* Instant comprehensive and abstract summaries per submission.
* Ready-to-use outputs for reports, dashboards, and client deliverables.

## 🔗 Nodes Used

Google Sheets, Webhook, Google Docs, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
