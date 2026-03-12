# 💬 Restaurant GPT-4 receptionist for bookings & delivery using Vapi, Telegram, Airtable

> ⚡ **979 views** · 💬 [Support Chatbots](../)

## Description

## This AI receptionist handles restaurant bookings and delivery orders with Vapi, Telegram, and Airtable

## Who’s it for
This n8n template is built for **restaurants** that want to automate table bookings and delivery or takeaway orders using an AI receptionist. It’s suitable for small to mid-sized restaurants that receive bookings and orders via voice calls or Telegram and want a structured, reliable backend without manual handling.

## How it works
The workflow powers an AI receptionist that operates through **Vapi (voice)** and **Telegram (chat)**.  
For table bookings, it collects party size and preferred time, checks table availability within the requested time range, and returns available options or a “no availability” response.  
For orders, the menu is fetched from **Airtable**, items are validated, prices are calculated, and order details are collected. Delivery addresses are validated and checked against supported areas. If delivery is unavailable, the system automatically offers takeaway. All confirmed bookings and orders are saved to Airtable.

## How to set up
1. Download JSON flows from the Dropbox folder, copy Airtable base with template tables to your account.
2. Get Airtable, OpenAI, Telegram Bot, Google Maps API credentials. 
3. Set up credentials and test.

## How to customize the workflow
You can plug a VAPI assistant. Copy the prompt from the AI agent and paste it into VAPI system prompt section. Also add MCP tool and call it `restaurant tool`. You can adjust booking rules, table capacity logic, menu structure, restaurant location, delivery zones, pricing calculations, and message wording to match your restaurant’s operations.

## 🔗 Nodes Used

Airtable, HTTP Request, Telegram, Telegram Trigger, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
