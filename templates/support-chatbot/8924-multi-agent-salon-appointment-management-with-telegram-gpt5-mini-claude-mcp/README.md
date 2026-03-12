# 💬 Multi-agent salon appointment management with Telegram, GPT5-mini & Claude MCP

> ⚡ **442 views** · 💬 [Support Chatbots](../)

## Description

# 🤖 Multi-Agent AI Telegram Bot for Service Businesses

Transform your salon/service business with this streamlined Telegram automation system featuring Claude integration, zero-setup database management, and intelligent conversation handling.

## How It Works

### Core Architecture
- **Claude MCP Integration** - Direct connection to Claude Sonnet 4 via Model Context Protocol
- **Streamlined 2-Agent System** - Booking Agent and Admin Agent (simplified from 5 for better reliability)
- **GPT-5 Mini Primary** with Gemini 2.5 Flash backup for cost-effective processing
- **Multi-Media Support** - Handles text, voice (Whisper transcription), images, and PDFs with cost extraction
- **Smart Acknowledgments** - "One moment…", "Let me check availability…" during processing
- **Rate Limiting & Spam Protection** - Configurable limits (default: 100 msg/hour) with professional UX

## Zero-Setup Database Management

- **Autonomous Airtable Creation** - Bot creates all necessary tables automatically
- **Complete CRUD Operations** - Create, edit, delete services and settings via Telegram
- **Dynamic Business Configuration** - Modify hours, pricing, services conversationally
- **Friend Booking Support** - "Book for my friend Sarah" functionality

## Setup Steps

1. **Telegram Business API** setup (detailed instructions included)
2. **Airtable Base ID** extraction (store in Redis or hardcode - recommended)
3. **Google Calendar** integration for scheduling
4. **Redis** for caching, rate limiting, and conversation memory
5. **MCP Server** deployment for Claude integration
6. **Telegram** for notifications

## Key Features

### Booking Management
- **Booking Limit Control** - Default 6 appointments per customer (configurable in workflow)
- **Service Name Matching** - GPT-5 Nano workflow for cost-optimized service recognition
- **24-Hour Advance Reminders** - Automatic Telegram reminders sent at 8 PM

### Conversation Handling
- **Conversation Memory** maintains context across interactions
- **Error Resilience** with backup models and graceful failure handling

## Use Cases

Perfect for:
- Salons
- Spas
- Clinics
- Consulting services
- Any appointment-based business

Complete business setup happens through conversational commands - no manual database configuration required.

---

*Transform your service business with intelligent automation powered by AI and Telegram integration.*

## 🔗 Nodes Used

HTTP Request, Redis, Telegram, Telegram Trigger, Execute Sub-workflow, Google Calendar

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
