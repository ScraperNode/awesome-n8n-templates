# 💬 Automate salon appointment management with WhatsApp, GPT & Google Calendar

> ⚡ **5,413 views** · 💬 [Support Chatbots](../)

## Description

# 🤖Multi-Agent AI WhatsApp Bot for Service Businesses

Transform your salon/service business with this streamlined WhatsApp automation system featuring Claude integration, zero-setup database management, and intelligent conversation handling.

## How it works

- **Claude MCP Integration** - Direct connection to Claude Sonnet 4 via Model Context Protocol
- **Streamlined 2-Agent System** - Booking Agent and Admin Agent (simplified from 5 for better reliability)
- **GPT-5 Mini Primary** with Gemini 2.5 Flash backup for cost-effective processing
- **Multi-Media Support** - Handles text, voice (Whisper transcription), images, and PDFs with cost extraction
- **Smart Acknowledgments** - "One moment...", "Let me check availability..." during processing
- **Rate Limiting & Spam Protection** - Configurable limits (default: 100 msg/hour) with professional UX

## Zero-Setup Database Management

- **Autonomous Airtable Creation** - Bot creates all necessary tables automatically
- **Complete CRUD Operations** - Create, edit, delete services and settings via WhatsApp
- **Dynamic Business Configuration** - Modify hours, pricing, services conversationally
- **Friend Booking Support** - "Book for my friend Sarah" functionality

## Set up steps

- **WhatsApp Business API** setup (detailed instructions included)
- **Airtable Base ID** extraction (store in Redis or hardcode - recommended)
- **Google Calendar** integration for scheduling
- **Redis** for caching, rate limiting, and conversation memory
- **MCP Server** deployment for Claude integration
- **Whatsapp** for notifications

## Key Features

- **Booking Limit Control** - Default 6 appointments per customer (configurable in workflow)
- **Service Name Matching** - GPT-5 Nano workflow for cost-optimized service recognition
- **24-Hour Advance Reminders** - Automatic WhatsApp reminders sent at 8 PM
- **Conversation Memory** maintains context across interactions
- **Error Resilience** with backup models and graceful failure handling

Perfect for salons, spas, clinics, consulting services, or any appointment-based business. Complete business setup happens through conversational commands - no manual database configuration required.

## 🔗 Nodes Used

HTTP Request, Redis, Execute Sub-workflow, Google Calendar, Gmail, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
