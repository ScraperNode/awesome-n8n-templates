# 🎬 Generate personalized Strava ride titles & descriptions with DeepSeek AI

> ⚡ **1,287 views** · 🎬 [Content Creation & Video](../)

## Description

**Title**: Automatic Strava Titles & Descriptions Generation with AI

**Description**:
This n8n workflow connects your Strava account to an AI to automatically generate personalized titles and descriptions for every new cycling activity. It leverages the native Strava trigger to detect new activities, extracts and formats ride data, then queries an AI agent (OpenRouter, ChatGPT, etc.) with an optimized prompt to get a catchy title and inspiring description. The workflow then updates the Strava activity in real time, with zero manual intervention.

**Key Features**:
- Secure connection to the Strava API (OAuth2)
- Automatic triggering for every new activity
- Intelligent data preparation and formatting
- AI-powered generation of personalized content (title + description)
- Instant update of the activity on Strava


**Use Cases**:
- Cyclists wanting to automatically enhance their Strava rides
- Sports content creators
- Community management automation for sports groups


**Prerequisites**:
- Strava account
- Strava OAuth2 credentials set up in n8n
- Access to a compatible AI agent (OpenRouter, ChatGPT, etc.)


**Benefits**:
- Saves time
- Advanced personalization
- Boosts the appeal of every ride to your community

## 🔗 Nodes Used

Strava, Strava Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
