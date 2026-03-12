# 💬 Automate order confirmations with VAPI Voice AI & timezone intelligence

> ⚡ **852 views** · 💬 [Support Chatbots](../)

## Description

Template Overview
This n8n workflow provides an intelligent, timezone-aware AI voice calling system for e-commerce businesses to automatically confirm customer orders via phone calls. The system uses VAPI (Voice AI Platform) to make natural, conversational calls while respecting customer time zones and business hours.
🎯 Use Case
Perfect for e-commerce businesses that want to:

Automatically confirm high-value or important orders via phone
Reduce order cancellations and disputes
Provide personalized customer service at scale
Maintain human-like interactions while automating the process
Respect customer time zones and calling hours

✨ Key Features
Timezone Intelligence

Automatically detects customer timezone from shipping address or phone number
Only calls during appropriate business hours (10 AM - 3 PM local time, weekdays)
Schedules calls for appropriate times when outside calling hours
Uses timezone-aware greetings (Good morning/afternoon/evening)

AI-Powered Conversations

Natural, context-aware conversations using VAPI
Personalized greetings with customer names and local time awareness
Intelligent confirmation detection from call transcripts
Handles customer concerns and change requests gracefully

Smart Call Management

Automatic retry logic with attempt tracking
Call quality assessment and cost tracking
Detailed transcript analysis and sentiment detection
Follow-up alerts for calls requiring human intervention

Comprehensive Tracking

Complete call history and analytics in Airtable
Real-time status updates throughout the process
Detailed reporting on confirmation rates and call quality
Cost tracking and ROI analysis

🏗️ Workflow Architecture
Main Flow (Order Confirmation)

Order Webhook - Receives order data from e-commerce platform
Data Validation - Validates required fields (phone, status)
Timezone Detection - Determines customer timezone and calling eligibility
Call Routing - Either initiates immediate call or schedules for later
VAPI Integration - Makes the actual AI voice call
Status Tracking - Updates database with call results

Scheduled Flow (Retry System)

Runs every 15 minutes to check for scheduled calls
Respects retry limits and calling hours
Automatically processes queued confirmations

Webhook Handler (Results Processing)

Receives VAPI call completion webhooks
Analyzes call transcripts for confirmation status
Sends follow-up alerts or confirmation emails
Updates final order status

🔧 Prerequisites & Setup
Required Services

VAPI Account - For AI voice calling functionality
Airtable Base - For order tracking and analytics
SMTP Server - For email notifications
n8n Instance - Self-hosted or cloud

## 🔗 Nodes Used

Airtable, Send Email, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
