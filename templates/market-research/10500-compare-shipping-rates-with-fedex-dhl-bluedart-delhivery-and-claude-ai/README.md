# 📊 Compare shipping rates with FedEx, DHL, BlueDart, Delhivery and Claude AI

> ⚡ **41 views** · 📊 [Market Research & Insights](../)

## Description

This AI-powered workflow automatically compares shipping rates across four major carriers, uses Claude AI to recommend the best option based on cost and delivery time, and optionally books shipments instantly.

### How it works

1. **Receive request** - Webhook accepts shipment details (origin, destination, weight, dimensions)
2. **Validate data** - Checks required fields and calculates volumetric weight
3. **Query carriers** - Simultaneously fetches rates from FedEx, DHL, BlueDart, and Delhivery
4. **Normalize responses** - Parses different carrier formats into standardized structure
5. **AI analysis** - Claude AI evaluates options considering cost, speed, and preferences
6. **Return results** - Provides recommendation with savings analysis, or books shipment if enabled

### Setup steps

1. Import this workflow into your n8n instance
2. Configure carrier API credentials:
   - **FedEx API** - Get credentials from FedEx Developer Portal
   - **DHL API** - Register at DHL Developer Portal
   - **BlueDart API** - Contact BlueDart for API access
   - **Delhivery API** - Get token from Delhivery partner portal
3. Add **Anthropic API** credentials for Claude AI
4. Activate workflow to generate webhook URL
5. Test with sample request:
   ```json
   {
     "origin": "400001",
     "destination": "110001",
     "weight": 2,
     "length": 30,
     "width": 20,
     "height": 15,
     "deliverySpeed": "standard",
     "autoBook": false
   }
   ```

### Features

- **Real-time rates** from 4 carriers
- **AI-powered recommendations** considering cost, speed, and preferences  
- **Automatic booking** when enabled
- **Comprehensive error handling**
- **Detailed cost comparison** and savings analysis

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
