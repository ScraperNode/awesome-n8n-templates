# 💬 Generate personalized travel itineraries with Llama AI via email & WhatsApp

> ⚡ **1,071 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow automatically creates friendly, personalized travel itineraries based on messages received via email or WhatsApp. When a user says "I want to go to Dubai with friends for 5 days" or something similar, the AI agent understands the request, generates a detailed daily plan with suggested activities, transport tips, and hotel ideas — all in a warm, human tone. It saves time, adds value for travelers, and delivers ready-to-send itineraries without any manual effort.

## **Good to know**
* The AI agent uses advanced language processing to understand natural travel requests in multiple formats.
* Itineraries are generated with personalized recommendations based on travel preferences, group size, and duration.
* The workflow supports both email and WhatsApp communication channels for maximum accessibility.
* All responses maintain a warm, friendly tone to enhance user experience.

## **How it works**
* The `Get Query from Email` node captures travel requests sent via email, parsing the message content for trip details.
* The `Get Query from WhatsApp` node simultaneously monitors WhatsApp messages for travel planning requests.
* Both inputs feed into the `Itinerary Creator Agent` node, which uses AI to analyze the request and generate comprehensive travel plans including activities, accommodations, and transportation suggestions.
* The `Check Proper Data` node validates the generated itinerary to ensure all essential information is included and properly formatted.
* The `Check where to send Answer` node determines the appropriate response channel (email or WhatsApp) based on the original request source.
* If the request came via email, the `Sending Itinerary from Email` node sends the personalized itinerary back to the user's email address.
* If the request came via WhatsApp, the `Send Itinerary from message` node delivers the travel plan through WhatsApp messaging.

## **How to use**
* Import the workflow into n8n and configure the nodes with your email service credentials and WhatsApp API access.
* Set up the AI agent with your preferred travel data sources and recommendation algorithms.
* Test the workflow by sending sample travel requests through both email and WhatsApp channels.
* Monitor the generated itineraries to ensure quality and adjust the AI agent parameters as needed.

## **Requirements**
* Email service API credentials (SMTP or email provider API)
* WhatsApp Business API access or WhatsApp integration service
* AI/LLM service for the Itinerary Creator Agent (OpenAI, Anthropic, or similar)
* Access to travel data sources for recommendations (optional but recommended)

## **Customising this workflow**
* Modify the `Itinerary Creator Agent` node to include specific travel preferences, local recommendations, or branded content.
* Adjust the data validation rules in the `Check Proper Data` node to match your quality standards.
* Customize response templates in both sending nodes to align with your brand voice and style.
* Add additional input channels or integrate with other messaging platforms as needed.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, WhatsApp Business Cloud, Basic LLM Chain, Ollama Model, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
