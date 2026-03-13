# 💬 Create AI personalized video & voice outreach with HeyGen, ElevenLabs & Perplexity

> ⚡ **870 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Automated Sales Rep Clone Outreach Video and Voice Note for B2B Outbound

This workflow automatically transforms new leads from Google Sheets into hyper-personalized outreach videos, voice notes, and emails using AI research, scriptwriting, video cloning, and voice generation.
Perfect for SDRs, founders, and agencies who want to scale outreach without sacrificing personalization.

🎥 Watch step by step build: https://www.youtube.com/watch?v=q9AAh9zRou4

## What this template does

Whenever a new row is added to your Google Sheets CRM, this workflow:

Reads the new lead (Name, Email, Phone, Company, Industry, LinkedIn URL)

Runs deep research on the person & company using Perplexity

Generates a personalized 30-second outreach script

Creates a cloned-face, AI-generated HeyGen video with the script

Creates an ElevenLabs voice note using the same personalized insights

Uploads the audio file to Google Drive

Sends an email to yourself containing:

Outreach subject line

Email body

Personalized video link

Personalized voice note link

(Optional) Sends a WhatsApp/SMS/MMS message via Twilio with the files or links

This template builds a complete AI-powered outbound engine—research, video, voice note, and email—fully automated.

## Why this is useful

Turns manual outbound into a hands-free, 360° AI workflow

Personalized video outreach dramatically increases reply rates

Consistent research quality for every lead

SDRs save hours per day on manual prep

Perfect for:

Influencer agencies

SaaS outbound teams

Founders doing cold outreach

Recruitment agencies

Real estate & service businesses

Requirements

Before running this workflow, connect:

Google Sheets OAuth (trigger + CRM sheet)

Perplexity API Key

OpenAI API Key (GPT-5.1, GPT-4.1-mini)

OpenRouter API Key

HeyGen API Key (for video avatar)

ElevenLabs API Key (for voice note)

Google Drive OAuth (for file upload)

Twilio credentials (optional SMS/WhatsApp)

⚠️ All credentials must be added manually after importing.
This ensures security and complies with n8n Template Guidelines.

## How it works (Node Breakdown)
1. Google Sheets Trigger

Watches your CRM sheet and fires whenever a new lead row is added.

2. Code Node — Extract Latest Row

Ensures only the newly added row continues through the workflow.

3. Research Agent

Powered by OpenAI + Perplexity

Scrapes professional history, company insights, marketing gaps

Identifies outreach opportunities & triggers

Produces a structured research summary

4. Scripting Agent

Writes a natural, human-sounding 30-second outreach script tailored to that exact lead.

5. HeyGen Video Generator

Creates a personalized avatar video narrating the script (720×1280).

6. ElevenLabs Voice Generation

Generates a custom voice note version of the pitch.

7. Google Drive Upload

Saves the voice note file for sharing or sending via WhatsApp.

8. Twilio Message (optional)

Sends the voice note or video link via SMS/WhatsApp.

9. Email Output

Creates a fully structured JSON email including:

Subject line

Personalized body

HeyGen video link

Voice note link

Delivered via Gmail node.

Setup (Step-by-Step)

Import the template into n8n

Open Google Sheets Trigger → choose your CRM sheet

Add all required credentials:

Perplexity

OpenAI

OpenRouter

HeyGen

ElevenLabs

Google Drive

Gmail

Twilio (optional)

In HeyGen node, choose:

Your avatar

Your preferred voice ID

In ElevenLabs node, set:

Your preferred voice model

Review the system prompts of:

Research Agent

Script Agent

Email Agent
Adjust for your brand tone if needed.

Run once manually to test.

Turn on the workflow—your AI outbound engine is live.

Customization Ideas

Swap HeyGen avatar to match your brand identity

Add a Slack notification when each video is ready

Save research & scripts into a Notion database

Create a HubSpot contact for each lead

Add duplicate detection logic

Auto-post video to social channels for public outreach

## Troubleshooting

Video stuck in “processing”?
→ Increase the Wait node duration (30–60 sec).

Voice note too robotic?
→ Switch to a premium ElevenLabs voice.

Research not specific enough?
→ Strengthen the system prompt with more constraints.

Emails not arriving?
→ Ensure Gmail OAuth has send permission configured.

API authentication errors?
→ Check credentials in each node (OpenAI, Perplexity, HeyGen, etc.).

## 🔗 Nodes Used

HTTP Request, Twilio, Google Drive, Gmail, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
