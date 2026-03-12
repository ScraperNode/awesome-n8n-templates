# 🎬 Transform event notes to LinkedIn posts with Telegram, Google Calendar & Claude AI

> ⚡ **651 views** · 🎬 [Content Creation & Video](../)

## Description

### **Description**
This workflow transforms your quick event notes into polished LinkedIn posts. Simply send a message via Telegram with your event name and personal notes, and the system will match it with your calendar events, generate a professional LinkedIn post. 

And even if you don't feel like posting it on LinkedIn, it still serves you because it saves everything to your database for future reference. In this way you can build a ***personal library of your professional networking activities and insights***!

### Who Is This For?
- Professional Networkers: Business professionals who attend events regularly and want to share insights on LinkedIn without spending time on content creation.
- Event Enthusiasts: Conference attendees, meetup participants, and workshop goers who want to document and share their experiences professionally.
- Busy Professionals: Anyone who wants to maintain an active LinkedIn presence but lacks time to craft posts from scratch after events.

### What Problem Does This Workflow Solve?
After attending events, I struggle with several challenges:

- Time Constraints: Writing thoughtful LinkedIn posts takes time.
- Writer's Block: Difficulty transforming my raw notes and experiences into engaging social media content.
- Data Organization: Keeping track of event details, personal insights, and networking opportunities in one place.

### How It Works

- Telegram Input: Send a message to your Telegram bot with the format "Event Name: Your personal notes"
- Message Parsing: The system extracts the event name and your personal notes from the message
- Calendar Matching: Searches your Google Calendar for events from the past 7 days that match the event name
- Data Enrichment: Combines your personal notes with event details (date, location, attendees) from your calendar
- AI Content Generation: Uses Claude Opus 4 to transform your notes into a professional LinkedIn post with relevant hashtags
- Database Storage: Saves the complete event information and generated LinkedIn post to Supabase
- Ready to Post: Provides you with a polished LinkedIn post ready for publication


### Setup Instructions

- n8n (Cloud or self-hosted)
- Telegram Bot (Create via @BotFather)
- Google Calendar API (OAuth2 credentials)
- Anthropic API (Claude access)
- Supabase (Database and API credentials)


**My Supabase table consists these columns:**

- Event Date (datetime)
- Event Title (text)
- Location (text)
- Personal Notes (text)
- LinkedIn Post (text)
- Created Date (datetime)




This workflow transforms the tedious task of creating LinkedIn content into an automated, intelligent system that helps you maintain an active professional presence while building a valuable archive of your networking and learning experiences.

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Calendar, Supabase, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
