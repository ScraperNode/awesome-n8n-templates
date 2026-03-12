# 📊 Analyze hotel reviews with OpenAI GPT-4o-mini and Airtable sentiment fields

> ⚡ **4 views** · 📊 [Market Research & Insights](../)

## Description

## 🏩 Analyze hotel reviews with OpenAI and update sentiment in Airtable
This workflow automatically analyzes hotel guest reviews using OpenAI and updates the sentiment, summary, and confidence score directly in Airtable. It helps hospitality teams monitor guest satisfaction, identify negative experiences quickly, and generate structured insights without manual effort.

By enriching every review with AI-generated sentiment data, teams can improve service quality, prioritize responses, and track performance trends over time.

## 🎯 Who’s it for
This template is ideal for:
- Hotel owners and hospitality businesses
- Customer experience and guest relations teams
- Property managers handling guest feedback
- Operations teams tracking service quality
- Businesses storing reviews in Airtable

It’s also useful for any business that wants to automatically analyze customer feedback stored in a database.

## 🔍 How it works

The workflow runs automatically whenever a new review is added to Airtable.

It:
1. Monitors Airtable for new reviews
2. Extracts and prepares the review data
3. Sends the review text to OpenAI for sentiment analysis
4. Generates:
    - Sentiment (**Positive**, **Neutral**, **Negative**)
    - Short summary
    - Confidence score
5. Flags conflicts between rating and sentiment
6. Updates the Airtable record with the results
7. Marks the review as processed to prevent duplicate analysis

This creates a fully automated sentiment processing pipeline.

## ⚙️ How to set up
1. Connect your **Airtable account**
2. Connect your **OpenAI account**
3. Ensure your Airtable table includes these fields:
    - Review ID (Formula : `RECORD_ID()`)
    - Review Text (Long text)
    - Rating (Number)
    - Processed (Checkbox)
    - Sentiment (Text)
    - Summary (Text)
    - Confidence (Number)
    - Sentiment Rating Conflict (Checkbox)
    - Execution ID (Text)
    - Processes At (Date)
    - Other Fields like Guest Name, location, etc.. (Optional)
4. Activate the workflow

Once enabled, the workflow runs automatically.

## 📋 Requirements

You will need:
- Airtable account
- OpenAI API account
- Airtable table containing guest reviews

For testing and simulating real-world usage, you can also create an Airtable Form linked to your table. This allows you or your team to submit sample hotel reviews manually, just like a guest feedback form. Each submission will automatically trigger the workflow and generate sentiment analysis results.

This is especially useful for:
    - Testing the workflow setup
    - Demonstrating the automation to your team
    - Simulating real guest feedback collection
   
## 🎛️ How to customize the workflow
You can easily extend this workflow to fit your needs:

- Modify the AI prompt to change sentiment logic or summary format
- Send alerts for negative reviews to Slack, Email, or Microsoft Teams
- Connect other databases like NocoDB, MySQL, PostgreSQL, or Google Sheets

## 🔗 Nodes Used

Airtable, Airtable Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
