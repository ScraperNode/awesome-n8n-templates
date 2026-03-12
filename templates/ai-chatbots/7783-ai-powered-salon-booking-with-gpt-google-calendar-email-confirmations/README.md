# 🤖 AI-powered salon booking with GPT, Google Calendar & email confirmations

> ⚡ **3,404 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Overview

- This workflow is an **AI-powered Salon Booking Assistant** that automates hair, beauty, and spa appointment scheduling through a **Webhook trigger**.  
- It interacts with the user in natural conversation, collects booking details (service type, stylist preference, date/time, and any special requests), finalizes the draft, and confirms the appointment by storing it in **Google Calendar** and sending an **email confirmation** — fully automated end-to-end.

---

## How It Works

### 1. User Interaction
- The workflow starts when a user submits a request via the **Webhook**.  
- The AI agent asks step-by-step questions:  
  - Type of service (haircut, facial, manicure, etc.)  
  - Preferred stylist (optional)  
  - Preferred date & time  
  - Any additional notes (special treatments, products, etc.)  
- Once details are gathered, it generates a draft appointment summary.

### 2. Confirmation & Personal Details
- The user reviews the draft and confirms.  
- The assistant then asks for personal details (name, email, phone number).

### 3. Booking & Notifications
- After confirmation, the details are sent to **Google Calendar** to create an appointment.  
- A **confirmation email** is sent to the user with all booking information.  
- A final webhook response confirms that the appointment is successfully booked.

---

## How to Use
- Triggered directly via a **Webhook URL** (can be embedded in your salon website or mobile app).  
- Simply fill in the details, and the assistant will guide the user step by step until the booking is finalized.  
- Once completed, the user receives both an **email confirmation** and an on-screen success message.

---

## Requirements
To use this workflow, you’ll need:  
- **n8n account** (self-hosted or cloud)  
- **Webhook node** (for booking trigger)  
- **OpenAI or OpenRouter API Key** (for AI-driven conversation)  
- **Google Calendar API access** (to create appointments)  
- **Gmail / SMTP credentials** (to send confirmation emails)

## 🔗 Nodes Used

Webhook, Google Calendar, Gmail, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
