# 📊 Create a weekly LLM traffic report using Google Analytics, GPT-5, and Gmail

> ⚡ **492 views** · 📊 [Market Research & Insights](../)

## Description

## Overview

Get a weekly report on website traffic driven by large language models (LLMs) such as ChatGPT, Perplexity, and Gemini. This workflow helps you track how these tools bring visitors to your site. A weekly snapshot can guide better content and marketing decisions.

## How it works

- The trigger runs every Monday.  
- Pull the number of sessions on your website by source/medium from Google Analytics.  
- The code node uses the following regex to filter referral traffic from AI providers like ChatGPT, Perplexity, and Gemini:

```
/^.openai.*|.*copilot.*|.*chatgpt.*|.*gemini.*|.*gpt.*|.*neeva.*|.*writesonic.*|.*nimble.*|.*outrider.*|.*perplexity.*|.*google.*bard.*|.*bard.*google.*|.*bard.*|.*edgeservices.*|.*astastic.*|.*copy.ai.*|.*bnngpt.*|.*gemini.*google.*$/i;
```

- Combine the filtered sessions into one list so they can be processed by an LLM.  
- Generate a short report using the filtered data.  
- Email the report to yourself.  

## Setup

1. Get or connect your [OpenAI API key](https://platform.openai.com/api-keys) and set up your OpenAI credentials in n8n.  
2. Enable Google Analytics and Gmail API access in the Google Cloud Console. ([Read more here](https://cloud.google.com/apis/docs/getting-started)).
3. Set up your Google Analytics and Gmail credentials in n8n. If you're using the cloud version of n8n, you can log in with your Google account to connect them easily.  
4. In the Google Analytics node, add your credentials and select the property for the website you’re working with. Alternatively, you can use your property ID, which can be found in the Google Analytics admin panel under `Property &gt; Property Details`. The property ID is shown in the top-right corner. Add this to the property field.  
5. Under **Metrics**, select the metric you want to measure. This workflow is configured to use *sessions*, but you can choose others. Leave the dimension as-is, since we need the source/medium dimension to filter LLMs.  
6. *(Optional)* To expand the list of LLMs being filtered, adjust the regex in the code node. You can do this by copying and pasting one of the existing patterns and modifying it. Example: `|.*example.*|`  
7. The LLM node creates a basic report. If you’d like a more detailed version, adjust the system prompt to specify the details or formatting you want.  
8. Add your email address to the Gmail node so the report is delivered to your inbox.  

## Requirements

- OpenAI API key for report generation  
- Google Analytics API enabled in Google Cloud Console
- Gmail API enabled in Google Cloud Console  

## Customizing this workflow

- The regex used to filter LLM referral traffic can be expanded to include specific websites.  
- The system prompt in the AI node can be customized to create a more detailed or styled report.

## 🔗 Nodes Used

Gmail, Google Analytics, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
