# 📊 Track brand reputation with Gemini AI & Google News sentiment analysis to email

> ⚡ **394 views** · 📊 [Market Research & Insights](../)

## Description

## Create a powerful brand/company monitoring system that fetches news headlines, performs AI-powered sentiment analysis, and delivers witty, easy-to-read reports via email.

This workflow turns brand mentions into a lively “personality analysis” — making your reports not only insightful but also fun to read. Perfect for teams that want to stay informed and entertained.

## How it works
++Data Collection++: A Google Sheets table captures brand name and recipient email which triggers the workflow.

++News Aggregation++: The RSS Read node fetches recent news headlines from Google News based on the specified brand or company keyword.

++Content Processing++: News headlines are aggregated and formatted for AI analysis.

++AI Analysis++: Gemini 2.5 Flash model plays the role of a brand analyst, writing reports as if the brand were a character in a story. It highlights strengths, quirks, and challenges in a witty, narrative-driven style — while still providing sentiment scores and action points.

++Report Generation++: JavaScript code structures the AI response into well-formatted HTML paragraphs for a smooth email reading experience.

++Automated Delivery++: Gmail integration sends the analysis report directly to the specified email address.

## How to use

1. First, create a google sheets document with 
sheet name="page1", A1 cell name="keyword" and 
B1 cell name="email".
2. The system will read the keyword & email data when a new row data is entered.
3. Paste the url of your google sheets document into the first trigger node. Select trigger on "row added" in the node.
4. Enter your credentials to connect Gemini PaLM API account in the "message a model" node of Google.
5. Enter your credentials to connect Gmail account in the "send a message" node.

The workflow automatically runs when new row is detected. Recipients receive comprehensive sentiment analysis reports within minutes!

## Requirements

-Google Sheets URL
-Google Gemini API credentials for AI analysis
-Gmail API credentials for email delivery

## 🔗 Nodes Used

RSS Read, Gmail, Google Sheets Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
