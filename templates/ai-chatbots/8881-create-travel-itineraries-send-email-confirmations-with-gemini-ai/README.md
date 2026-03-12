# 🤖 Create travel itineraries & send email confirmations with Gemini AI

> ⚡ **1,002 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## **This n8n template creates an intelligent AI-powered travel agent that can assist with travel planning and send email confirmations. The agent can extract user requests, plan travel itineraries by fetching real-time data on flights, accommodations, and activities, and then communicate this information by sending a customized email.**

**Use Cases**
- Quickly plan a trip by providing your destination and dates.

- Get real-time flight and accommodation details for a planned vacation.

- Receive a summary of your travel plans directly in your inbox.

- A personal travel planner available on-the-go.

**Good to Know**
This template uses Google Gemini for AI reasoning. The Planner Agent can break down complex travel requests and make multiple API calls to gather all the necessary information.
The Email Agent crafts a professional and personalized email to send to the user.

## **How it Works**
- Incoming Message Trigger: The workflow begins when a new message is received from a user.

- Extract User Request: The user's message is sent to a Gemini Chat Model which identifies the user's intent and extracts key details like destination, dates, and interests.

- Planner Agent: The extracted information is passed to the Planner Agent. This agent, powered by Gemini, determines what information is needed and then calls a series of sub-agents to gather:

- Activities: Fetches information about local attractions and things to do.

- Flight Booking: Retrieves flight details and pricing.

- Accommodation Details: Looks for hotels, rentals, and other lodging options.

- Accommodations: Gathers general information about accommodations.

- Email Agent: Once the Planner Agent has collected all the necessary information, it’s handed over to the Email Agent. This agent uses a second Gemini Chat Model to format a clear and professional email containing the full travel itinerary.

- Send Message: The final email is sent to the user, providing a comprehensive travel plan.

## **How to Use**
- Clone this workflow into your n8n instance.

- Connect your accounts as required. You will need credentials for your email service and any APIs you want to use for fetching travel data (e.g., flight booking, accommodation, and activities).

- Modify the nodes with your specific credentials and API endpoints.

- Run the workflow and start receiving automated travel plans.

## **Requirements**
- Google Gemini account for AI reasoning.

- Email integration (e.g., Gmail, Outlook).

- Serp API keys for travel-related services (optional, depending on your setup).

## **Customizing This Workflow**
Add more integrations (e.g., a hotel booking service like Booking.com, a restaurant reservation system) for extended functionality.
Modify the AI prompts in the agent nodes to fine-tune the personality or focus of the travel agent.
Connect the final output to a different messaging service like Telegram or Slack instead of email.

## 🔗 Nodes Used

Gmail, AI Agent, Structured Output Parser, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
