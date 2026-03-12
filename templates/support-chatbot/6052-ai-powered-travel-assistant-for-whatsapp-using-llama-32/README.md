# 💬 AI-powered travel assistant for WhatsApp using Llama 3.2

> ⚡ **1,775 views** · 💬 [Support Chatbots](../)

## Description

This n8n workflow automates personalized travel assistance via WhatsApp through a friendly virtual agent named Alex. It helps users plan trips, explore destinations, get visa/weather/hotel information, and book packages—all through a conversational interface. The system ensures quick, human-like support 24/7, improving customer experience and reducing manual handling by travel agents.

## **Key Features**
* The Travel Assistant agent provides contextual responses based on conversation history stored in memory.
* Alex maintains a friendly, professional tone throughout all interactions to enhance user experience.
* The workflow includes intelligent waiting mechanisms to ensure proper response processing.
* Memory functionality allows for seamless continuation of conversations across multiple interactions.

## **Workflow Process**
* The `Get WhatsApp Message` node captures incoming messages from users on WhatsApp, initiating the travel assistance process.
* The `Travel Assistant` node processes user queries using AI to understand travel needs and generate appropriate responses for trip planning, destination information, visa requirements, weather updates, and booking assistance.
* The `Travel Plan Creator` agent works in conjunction with the main assistant to generate detailed itineraries and travel recommendations based on user preferences.
* The `Memory` node stores conversation context and user preferences, enabling personalized responses and seamless conversation flow across multiple interactions.
* The `Wait For Response` node introduces intelligent delays to ensure proper message processing and natural conversation pacing.
* The `Send Reply On WhatsApp` node delivers the AI-generated travel assistance back to the user through WhatsApp messaging.

## **Setup Instructions**
* Import the workflow into n8n and configure WhatsApp Business API credentials for message handling.
* Set up the AI service for the Travel Assistant and Travel Plan Creator agents with your preferred language model.
* Configure the Memory node with appropriate storage settings for conversation persistence.
* Test the workflow by sending various travel-related queries through WhatsApp to ensure proper responses.
* Monitor conversation quality and adjust AI parameters as needed for optimal user experience.

## **Prerequisites**
* WhatsApp Business API access or WhatsApp integration service
* AI/LLM service for travel assistance (OpenAI, Anthropic, or similar)
* Database or storage service for conversation memory
* Access to travel data APIs for real-time information (weather, visa requirements, hotel availability)

## **Modification Options**
* Modify the `Travel Assistant` node to include specific travel databases, local recommendations, or branded responses.
* Adjust the conversation memory settings to control how much context is retained across interactions.
* Customize the `Travel Plan Creator` to include preferred booking platforms, hotel chains, or travel partners.
* Add additional specialized agents for specific travel services like flight booking, car rentals, or activity reservations.
* Configure response timing in the `Wait For Response` node to match your desired conversation flow.

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, Ollama Chat Model, Simple Memory, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
