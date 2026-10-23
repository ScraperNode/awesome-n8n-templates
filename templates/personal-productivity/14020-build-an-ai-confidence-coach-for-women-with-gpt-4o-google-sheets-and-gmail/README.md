# ⚡ Build an AI confidence coach for women with GPT-4o, Google Sheets and Gmail

> ⚡ **21,233 views** · ⚡ [Personal Productivity](../)

## Description

## 📊 Description
Most career advice is generic. This workflow builds a fully personalized AI coaching system that remembers every user, adapts to their career stage and goals, detects what kind of help they need, and gets more contextual with every conversation. It is not a simple chatbot — it is a structured coaching engine with user profiling, conversation memory, intent routing, and proactive weekly outreach.
Built for women's communities, coaching platforms, HR teams, and edtech creators who want to deliver real personalized career support at scale without hiring a team of coaches.

## What This Workflow Does
💬 Opens a chat interface where users can start talking immediately — no signup required
🧮 Detects if the user is new or returning on every message using Google Sheets as a user database
📋 Walks new users through a 4-step onboarding — name, career stage, biggest challenge, and monthly goal
🗂️ Stores and updates every user profile in Google Sheets with full onboarding state tracking
🔍 Detects intent from every coaching message across 6 categories — salary negotiation, interview prep, career change, leadership, confidence building, and work-life balance
🤖 Routes each message to a topic-specific GPT-4o system prompt tailored to that coaching category
💬 Loads the last 5 conversations from history to give GPT-4o full context before generating a response
✅ Responds with personalized advice, one actionable step for today, and a follow-up question to keep momentum
📝 Logs every conversation to Google Sheets with timestamp, message, intent, and AI response
📧 Sends every fully onboarded user a personalized weekly check-in email every Sunday with a weekly challenge, progress acknowledgment, and motivational quote from a woman leader

## Key Benefits
✅ Full conversation memory — every session builds on the last
✅ Intent detection across 6 coaching categories — not one generic prompt
✅ User profiling — advice is always tailored to their stage, challenge, and goal
✅ Proactive weekly outreach — not just reactive coaching
✅ Complete audit trail — every conversation logged to Google Sheets
✅ Works for any number of users simultaneously via session-based identification
✅ No login or signup needed — just open the chat URL and start

## How It Works

SW1 — Onboarding Every message hits the Chat Trigger and gets routed through the onboarding engine. The workflow reads all users from Google Sheets and matches the current session ID. If the user is new they go through 4 onboarding steps one message at a time — name, career stage with a numbered menu, biggest challenge with a numbered menu, and their monthly goal in their own words. Numbered responses are automatically mapped to their full label so 2 becomes Early Career (1-3 years) and 5 becomes Work-life balance. Every step is saved and the onboarding state is tracked so users can return to the same conversation and pick up exactly where they left off.

SW2 — Coaching Engine Once onboarding is complete every subsequent message goes straight to the coaching engine. The workflow reads the user's last 5 conversations from the Conversation Log sheet for context. It then scans the message for intent keywords across 6 categories and selects the matching system prompt. GPT-4o receives the full user profile, conversation history, and topic-specific coaching instructions before generating a response. Every response includes a main coaching answer, one specific action the user can take today, and a follow-up question to continue the conversation. The full exchange is logged to the Conversation Log sheet.

SW3 — Weekly Check-in Every Sunday at 10AM the workflow reads all fully onboarded users, pulls their recent conversation topics from the log, and generates a personalized weekly check-in email for each one via GPT-4o. The email includes a warm personalized greeting, acknowledgment of their progress, a concrete weekly challenge tied to their goal, and a motivational quote from a real woman leader relevant to their situation. Emails are sent via Gmail and every send is logged to the Weekly Checkins sheet.

## Features
- n8n Chat Trigger with public URL — shareable with any user
- Session-based user identification — no login required
- 4-step guided onboarding with numbered menu options
- Numbered response to label mapping for clean data storage
- New vs returning user detection on every message
- Google Sheets as full user database and conversation memory
- 6-category intent detection engine with keyword matching
- Topic-specific GPT-4o system prompts per coaching category
- Last 5 message context window passed to every GPT call
- Structured JSON responses — advice, action step, follow-up question
- Weekly Sunday proactive check-in via Gmail
- Personalized HTML email with challenge box and quote section
- Full logging across 3 sheets — User Profiles, Conversation Log, Weekly Checkins

## Requirements
- OpenAI API key (GPT-4o access)
- Google Sheets OAuth2 connection
- Gmail OAuth2 connection
- A configured Google Sheet with 3 sheets as above

## Setup Steps
- Create a Google Sheet called "AI Confidence Coach" with 3 sheets — User Profiles, Conversation Log, Weekly Checkins
- Paste your Sheet ID into all Google Sheets nodes
- Add your Google Sheets OAuth2 credentials
- Add your OpenAI API key
- Add your Gmail OAuth2 credentials
- Add your email as fallback in the Send Weekly Checkin Email node
- Activate the workflow and copy the Chat 
- Trigger URL
- Open the chat URL and test the full onboarding flow with 5 messages
- Send a coaching question and confirm GPT-4o responds with personalized advice
- Add your email to the User Profiles sheet and run SW3 manually to test the weekly check-in email
- Share the chat URL with your users — the workflow runs itself from here

## Target Audience
🤖 Women's communities and career platforms who want to offer AI coaching at scale
💼 HR teams building internal confidence and career development tools
🎓 Edtech creators running women's upskilling and mentorship programs
🔧 Automation agencies building AI coaching products for clients

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
