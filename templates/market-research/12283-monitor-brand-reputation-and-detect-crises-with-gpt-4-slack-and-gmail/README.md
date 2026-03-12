# 📊 Monitor brand reputation and detect crises with GPT-4, Slack and Gmail

> ⚡ **95 views** · 📊 [Market Research & Insights](../)

## Description

## How It Works
This workflow automates brand reputation monitoring by analyzing sentiment across news, social media, reviews, and forums using AI-powered trend detection. Designed for PR teams, brand managers, marketing directors, and crisis communication specialists requiring real-time awareness of reputation threats before they escalate.The template solves the challenge of manually tracking brand mentions across fragmented channels—news outlets, Twitter, Instagram, review sites, Reddit, industry forums—then identifying emerging crises hidden in sentiment shifts and volume spikes.Scheduled execution triggers four parallel HTTP nodes fetching data from news APIs, social media monitoring services, review aggregators, and forum discussion platforms. Merge node combines all sources, then normalization ensures consistent data structure. OpenAI GPT-4 with structured output parsing performs sophisticated sentiment analysis and trend detection, identifying sudden negative sentiment surges, coordinated criticism patterns, and viral complaint escalation. 

## Setup Steps
1. Configure HTTP nodes with API credentials for news monitoring service 
2. Add OpenAI API key to Chat Model node for sentiment and trend analysis
3. Connect Slack workspace and specify crisis response team channel 
4. Integrate Gmail account with PR leadership distribution list  
5. Set up Google Sheets connection and create monitoring dashboard  

## Prerequisites
OpenAI API key, news monitoring API access

## Use Cases
Consumer brands monitoring product launch reception and identifying quality issues early

## Customization
Modify AI prompts for industry-specific crisis indicators

## Benefits
Reduces crisis detection time from hours to minutes enabling damage control before viral spread

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
