# 📊 Automatic Topic & Sentiment Extraction from Jotform Responses with Google Gemini

> ⚡ **82 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who this is for
This workflow is designed for teams that collect feedback or survey responses via Jotform and want to automatically:
- Analyze sentiment (positive, neutral, negative) of each response.  
- Extract key topics and keywords from qualitative text.  
- Generate AI summaries and structured insights.  
- Store results in Google Sheets and n8n DataTables for easy reporting and analysis.  

**Use Cases**
- Customer experience analysis  
- Market research & survey analysis  
- Product feedback clustering  
- Support ticket prioritization  
- AI-powered blog or insight generation from feedback  

## What this workflow does

This n8n automation connects Jotform, Google Gemini, and Google Sheets to turn raw responses into structured insights with sentiment, topics, and keywords.

### Pipeline Overview

Jotform → Webhook → Gemini (Topics + Keywords) → Gemini (Sentiment) → Output Parser → Merge → Google Sheets

### Jotform Trigger  
- Captures each new submission from your Jotform (e.g., a feedback or survey form).  
- Extracts raw fields (`$json.body.pretty`) such as name, email, and response text.

### Format Form Data (Code Node)
- Converts the Jotform JSON structure into a clean string for AI input.
- Ensures the text is readable and consistent for Gemini.

### Topics & Keyword Extraction (Google Gemini + Output Parser)
**Goal:** Identify the main themes and important keywords from responses.

```json
{
  "topics": [
    {
      "topic": "Product Features",
      "summary": "Users request more automation templates.",
      "keywords": ["AI templates", "automation", "workflow"],
      "sentiment": "positive",
      "importance_score": 0.87
    }
  ],
  "global_keywords": ["AI automation", "developer tools"],
  "insights": ["Developers desire more creative, ready-to-use AI templates."],
  "generated_at": "2025-10-08T10:30:00Z"
}
```

### Sentiment Analyzer (Google Gemini + Output Parser)
**Goal:** Evaluate overall emotional tone and priority.

```json
{
  "customer_name": "Ranjan Dailata",
  "customer_email": "ranjancse@gmail.com",
  "feedback_text": "Please build more interesting AI automation templates.",
  "sentiment": "positive",
  "confidence_score": 0.92,
  "key_phrases": ["AI automation templates", "developer enablement"],
  "summary": "Customer requests more AI automation templates to boost developer productivity.",
  "alert_priority": "medium",
  "timestamp": "2025-10-08T10:30:00Z"
}
```

### Merge + Aggregate
- Combines the topic/keyword extraction and sentiment output into a single structured dataset.
- Aggregates both results for unified reporting.

### Persist Results (Google Sheets)
- Writes combined output into your connected Google Sheet.  
- Two columns recommended:
  - `feedback_analysis` → Sentiment + Summary JSON  
  - `topics_keywords` → Extracted Topics + Keywords JSON  
- Enables easy visualization, filtering, and reporting.

### Visualization (Optional)
Add Sticky Notes or a logo image node in your workflow to:
- Visually describe sections (e.g., “Sentiment Analysis”, “Topic Extraction”).  
- Embed brand logo:  
  ```markdown
  ![Logo](https://www.jotform.com/resources/assets/logo-nb/min/jotform-logo-white-400x200.png)
  ```

## Example AI Output (Combined)
```json
{
  "feedback_analysis": {
    "customer_name": "Ranjan Dailata",
    "sentiment": "positive",
    "summary": "User appreciates current templates and suggests building more advanced AI automations.",
    "key_phrases": ["AI automation", "developer templates"]
  },
  "topics_keywords": {
    "topics": [
      {
        "topic": "AI Template Expansion",
        "keywords": ["AI automation", "workflow templates"],
        "sentiment": "positive",
        "importance_score": 0.9
      }
    ],
    "global_keywords": ["automation", "AI development"]
  }
}
```

## Setup Instructions

#### Pre-requisite 

If you are new to Jotform, Please do signup using [Jotform Signup](https://www.jotform.com/?partner=ranjandailata)

For the purpose of demonstation, we are considering the Jotforms Prebuilt New Customer Registration Form as a example. However, you are free to consider for any of the form submissions.

![image.png](fileId:2780)

### Step 0: Local n8n (Optional)
If using local n8n, set up ngrok:
```bash
ngrok http 5678
```
Use the generated public URL as your Webhook URL base for Jotform integration.

### Step 1: Configure the Webhook
- Copy the Webhook URL generated by n8n (e.g., `/webhook-test/f3c34cda-d603-4923-883b-500576200322`).
You can copy the URL by double clicking on the Webhook node. Make sure to replace the base url with the above Step 0, if you are running the workflow from your local machine.

![n8n-workflow](fileId:2781)

- In Jotform, go to your form → Settings → Integrations → Webhooks → paste this URL.
- Now, every new form submission will trigger the n8n workflow.

![Jotform-Webhook-Integration](fileId:2779)

### Step 2: Connect Google Gemini
- Create a Google Gemini API Credential in n8n.  
- Select the model `models/gemini-2.0-flash-exp`.

### Step 3: Create Data Storage
- Create a DataTable named `JotformFeedbackInsights` with columns:
  - `feedback_analysis` (string)  
  - `topics_keywords` (string)

### Step 4: Connect Google Sheets
- Add credentials under Google Sheets OAuth2.  
- Link to your feedback tracking sheet.

### Step 5: Test the Workflow
- Submit a form via Jotform.  
- Check results:
  - AI nodes return structured JSON.  
  - Google Sheet updates with new records.

## Customization Tips

### Change the Prompt
You can modify the topic extraction prompt to highlight specific themes:
```text
You are a research analyst. Extract main topics, keywords, and actionable insights from this feedback: {{ $json.body }}
```

### Extend the Output Schema
Add more fields like:
```json
{
  "suggested_blog_title": "",
  "tone": "",
  "recommendations": []
}
```
Then update your DataTable or Sheets schema accordingly.

## Integration Ideas
- Send sentiment alerts to Slack for high-priority feedback.  
- Push insights into Notion, Airtable, or HubSpot.  
- Generate weekly reports summarizing trends across all submissions.

## Summary
This workflow turns raw Jotform submissions  into actionable insights using Google Gemini AI — extracting topics, keywords, and sentiment while automatically logging everything to Google Sheets.

## 🔗 Nodes Used

Google Sheets, Jotform Trigger, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
