# 💬 Search and compare flights with DeepSeek AI and Google Flights API

> ⚡ **2,295 views** · 💬 [Support Chatbots](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![image.png](fileId:2067)
# How it works
- Takes departure city, destination, and travel dates from the user.
- Searches multiple airlines for flight options and compares price, duration, and stops.
- Suggests flexible travel dates for better deals.
- Tracks selected flights and sends real-time price alerts.
- Provides 24/7 AI-powered travel recommendations.

# Set up steps
- **Add credentials** for your chosen Chat Model (DeepSeek in this case) and SerpAPI (Google Flights).
- In the **AI Agent** node, link:
  - Chat Model → **DeepSeek Chat Model** node.
  - Memory → **Simple Memory** node (for conversation context).
  - Tool → **Google_flights search in SerpApi** node.
- In the **SerpApi** node, set `engine=google_flights` and map input fields for departure, destination, and travel dates.
- Test the workflow by providing a sample itinerary request in the **Chat** node’s input.
- Review AI responses to ensure it searches, compares, and returns relevant flight options.

## 🔗 Nodes Used

AI Agent, Simple Memory, Chat Trigger, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
