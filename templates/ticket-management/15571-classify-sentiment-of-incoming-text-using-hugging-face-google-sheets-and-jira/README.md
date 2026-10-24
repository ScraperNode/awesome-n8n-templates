# 🎫 Classify sentiment of incoming text using Hugging Face, Google Sheets, and Jira

> ⚡ **18 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Sentiment Analysis Workflow using Webhook, Hugging Face, Google Sheets & Jira

This workflow automatically analyzes incoming text feedback, classifies it into Positive, Neutral or Negative using a Hugging Face sentiment model, stores results in Google Sheets and creates Jira tickets for negative feedback.

### Quick Steps to Get Started

1. [Import the workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi)
2. Set up Webhook endpoint (`/sentiment-input`)
3. Add Hugging Face API token in HTTP Request node
4. Configure Google Sheets (3 tabs: Positive, Neutral, Negative)
5. Connect Jira credentials
6. Activate the workflow
7. Send POST request with text data


## What It Does

This workflow automates sentiment analysis of incoming text data using a machine learning model hosted on Hugging Face. It receives multiple text inputs via a webhook, processes each input individually and evaluates sentiment scores returned by the model.

The workflow intelligently determines whether the sentiment is Positive, Neutral or Negative based on the highest score and a confidence threshold. It ensures more reliable classification by applying a score validation logic.

Once classified, the workflow routes the data accordingly. Each sentiment category is stored in a separate Google Sheets tab, making it easy to track and analyze feedback trends. Additionally, any negative feedback automatically triggers the creation of a Jira ticket, enabling quick issue resolution.


## Who It's For

- Businesses collecting customer feedback
- Product teams monitoring user sentiment
- Customer support teams
- SaaS companies handling reviews or complaints
- Developers building AI-powered automation workflows


## Requirements

To use this workflow, you need:

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Hugging Face API access token
- Google Sheets account with service account credentials
- Jira Software Cloud account
- Basic understanding of n8n workflows and nodes


## How It Works & Setup Guide

### Step 1: Import Workflow

- Import the JSON file into n8n

### Step 2: Configure Webhook

- Node: **Receive Feedback**
- Method: POST
- Endpoint: `/sentiment-input`
- Input format:
```json
{
  "data": [
    { "text": "I love this" },
    { "text": "This is okay" },
    { "text": "Worst experience ever" }
  ]
}
```

### Step 3: Split Input Data

- Node: **Split Text Items**
- Splits array into individual items for processing

### Step 4: Rate Limiting

- Node: **Rate Limit Control**
- Prevents API overload (optional delay control)

### Step 5: Preserve Input

- Node: **Preserve Input Text**
- Keeps original text intact for later use

### Step 6: Sentiment Analysis

- Node: **Get Sentiment Scores**
- Add Hugging Face API token in headers:
  - Authorization: Bearer YOUR_API_KEY
- Model used:
  `cardiffnlp/twitter-roberta-base-sentiment`

### Step 7: Merge Data

- Node: **Merge Text & Scores**
- Combines model output with original input

### Step 8: Compute Sentiment

- Node: **Compute Sentiment**
- Logic:
  - Highest score determines sentiment
  - Confidence threshold: &gt; 0.9
  - Otherwise defaults to Neutral

### Step 9: Route Data

- Node: **Route by Sentiment**
- Routes into:
  - Positive
  - Neutral
  - Negative

### Step 10: Store Results

- Nodes:
  - **Store Positive Feedback**
  - **Store Neutral Feedback**
  - **Store Negative Feedback**
- Append data into respective Google Sheets tabs

### Step 11: Create Jira Ticket

- Node: **Create Jira Ticket**
- Triggered only for Negative sentiment
- Includes:
  - Text
  - Sentiment
  - Timestamp
  - Priority: High


## How To Customize Nodes

- **Webhook Node**
  - Change endpoint path as needed

- **HTTP Request Node**
  - Replace Hugging Face model with another model if required

- **Compute Sentiment Node**
  - Adjust confidence threshold (currently 0.9)
  - Modify classification logic

- **Google Sheets Nodes**
  - Change document ID or sheet names
  - Add more columns if needed

- **Jira Node**
  - Customize issue type, priority or project


## Add-ons

You can enhance this workflow with:

- Email or Slack notifications for negative feedback
- Dashboard visualization using BI tools
- Sentiment trend analytics
- Multi-language sentiment analysis
- Integration with CRM systems


## Use Case Examples

1. Customer feedback analysis for apps or websites
2. Product review classification from multiple sources
3. Social media sentiment monitoring
4. Support ticket prioritization system
5. Survey response automation

There can be many more use cases depending on how feedback data is collected and used.


## Troubleshooting Guide

| Issue                              | Possible Cause                   | Solution                         |
| ---------------------------------- | -------------------------------- | -------------------------------- |
| Webhook not triggering             | Incorrect endpoint or method     | Verify POST request and URL      |
| No sentiment output                | API token missing/invalid        | Check Hugging Face API key       |
| Incorrect sentiment classification | Confidence threshold too high    | Adjust threshold in Compute node |
| Data not appearing in Sheets       | गलत credentials or sheet mapping | Reconnect Google Sheets          |
| Jira ticket not created            | Jira credentials issue           | Verify Jira API connection       |


## Need Help?

If you need assistance setting up this workflow, customizing nodes or building advanced automation solutions, feel free to reach out to [n8n developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia**.

Our team can help you:

- Deploy n8n workflows on cloud/server
- Customize AI-based automation
- Integrate APIs and enterprise tools
- Build scalable business automation systems

[Contact WeblineIndia for expert support and tailored solutions](https://www.weblineindia.com/contact-us.html).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Jira Software

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
