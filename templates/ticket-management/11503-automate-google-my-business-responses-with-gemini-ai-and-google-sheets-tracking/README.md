# 🎫 Automate Google My Business responses with Gemini AI and Google Sheets tracking

> ⚡ **136 views** · 🎫 [Ticket Management & Triage](../)

## Description

# Purpose & Audience
This workflow is designed for digital marketing agencies, local business owners, and reputation management professionals who need to respond to Google My Business reviews promptly and professionally across multiple business locations.

**Perfect for:**
- Agencies managing 2-50+ client locations
- Multi-location business owners
- Reputation management teams
- Marketing professionals seeking automation

**Problems it solves:**
- Manual review monitoring is time-consuming
- Inconsistent response quality and tone
- Delayed responses hurt local SEO rankings
- Difficult to scale across multiple locations


## What It Does
This automated system monitors your Google My Business locations every 30 minutes and:
- ✅ Fetches new reviews from multiple GMB locations automatically
- ✅ Generates personalized AI replies using Google Gemini, matching your brand voice and tone
- ✅ Posts responses directly to GMB without manual intervention
- ✅ Logs everything to organized Google Sheets for tracking and reporting
- ✅ Handles multiple businesses with separate processing pipelines
- ✅ Prevents duplicate replies by filtering already-responded reviews


## Key Features:
- Customizable reply tone per business (professional, friendly, casual, etc.)
- Business-specific context for more relevant responses
- Automatic execution tracking and audit logs
- Scalable architecture for unlimited locations
- No duplicate replies - smart filtering system

## How It Works
**High-Level Flow:**
1. **Trigger**: Workflow runs automatically every 30 minutes
2. **Configuration**: Reads business settings from a Google Sheet (location IDs, tone, context)
3. **Route**: Directs each business to its dedicated processing branch
4. **Fetch**: Retrieves all reviews from Google My Business
5. **Filter**: Identifies reviews without replies
6. **Generate**: Uses AI to create personalized responses matching your brand tone
7. **Post**: Publishes replies to Google My Business
8. **Track**: Logs all activity to Google Sheets with timestamps

**Smart Features:**
- Parallel processing for multiple businesses
- Context-aware AI that understands your business
- Automatic logging for compliance and reporting
- Graceful handling when no new reviews exist

## How to Setup
**Prerequisites**
Before setting up this workflow, you'll need:
1. n8n Instance (Cloud or self-hosted)
2. Google Gemini API Key (Free tier available at ai.google.dev)
3. Google OAuth Credentials for: Google Sheets API, Google Business Profile API

## Setup Instructions
📘 Complete step-by-step setup tutorial included with the json file. The comprehensive setup guide covers:
- Creating and configuring your Google Sheets
- Connecting Google My Business API
- Setting up Google Gemini integration
- Configuring business-specific settings
- Testing and troubleshooting
- Adding additional business locations
- Customizing AI reply prompts

Simply follow the included setup tutorial video for easy configuration. Average setup time: 20 minutes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, Google Business Profile, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
