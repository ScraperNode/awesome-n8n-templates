# 🤖 AI-powered restaurant booking system with Telegram, Calendar & Email notifications

> ⚡ **2,660 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Overview

This workflow is an AI-powered Booking Assistant that automates restaurant and event reservations through Telegram. It interacts with the user in natural conversation, collects booking details (guest count, preferences, date/time, and special requests), finalizes the draft, and confirms the reservation by storing it in Google Calendar and sending an email confirmation — fully automated end-to-end.

---

## How It Works

### 1. User Interaction
- The workflow starts with a Telegram welcome message.  
- The AI agent asks step-by-step questions:  
  - Number of guests  
  - Seating preference (indoor/outdoor/private room)  
  - Special occasion requests (birthday, date, etc.)  
  - Preferred date & time  
- Once details are gathered, it generates a draft booking summary.

### 2. Confirmation & Personal Details
- The user reviews the draft and confirms.  
- The assistant then asks for personal details (name, email, phone number).

### 3. Booking & Notifications
- After confirmation, the details are sent to Google Calendar to create an event.  
- A confirmation email is sent to the user with all booking information.  
- A final Telegram message confirms that the reservation is successfully completed.

---

## How to Use
- Triggered directly from Telegram Bot.  
- Simply start chatting with the bot to begin the reservation process.  
- The assistant will guide the user step by step until the booking is finalized.  
- Once completed, the user receives both an email confirmation and a Telegram confirmation message.

---

## Requirements
To use this workflow, you’ll need:  
- n8n account (self-hosted or cloud)  
- Telegram Bot Token (for chat interaction)  
- OpenAI or OpenRouter API Key (for AI-driven conversation)  
- Google Calendar API access (to create bookings)  
- Gmail / SMTP credentials (to send confirmation emails)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Google Calendar, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
