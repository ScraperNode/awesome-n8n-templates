# 🎬 Create film location database with Google Maps, AI analysis & Google Sheets

> ⚡ **107 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
This workflow is ideal for **filmmakers, video producers, content creators, and location managers** who need to quickly build a database of potential shooting locations without manual research and data entry.

## How it works
1. **Chat Input**: Start the workflow via the n8n chat interface and enter a search query (e.g., "Quiet cafes in Kyoto" or "Cyberpunk streets").
2. **Search**: The workflow queries the **Google Maps Places API** to find matching real-world locations.
3. **AI Analysis**: An AI agent (via OpenRouter) reviews the location details and writes a short, creative "Director's Commentary" highlighting its cinematic appeal.
4. **Data Entry**: The location name, address, rating, Google Maps link, and the AI's commentary are automatically saved to a **Google Sheet**.
5. **Notification**: Once all locations are processed, a summary link is sent to your **Slack** channel.

## Prerequisites
*   **n8n Version**: 1.0 or later
*   **Google Cloud Platform**: API Key with "Places API (New)" enabled.
*   **Google Sheets**: A formatted sheet (see setup below).
*   **Slack**: An App/Bot token with chat writing permissions.
*   **OpenRouter** (or OpenAI/Anthropic): API Key for the LLM.

## How to set up
1. **Google Sheet**: Create a new sheet with the following headers in the first row:
    *   `場所名` (Name)
    *   `住所` (Address)
    *   `評価(星)` (Rating)
    *   `AI監督のコメント` (AI Comment)
    *   `GoogleMapリンク` (Link)
2. **Credentials**: Configure your credentials for Google Maps, Google Sheets, Slack, and OpenRouter within n8n.
3. **Configuration Node**: Open the node named **"Workflow Configuration"** and input your specific details:
    *   `googleMapsApiKey`: Your Google Cloud API key.
    *   `slackChannelId`: The Channel ID where you want notifications (e.g., C0123456).
    *   `googleSheetId`: The string of characters found in your Google Sheet URL.

## Customization
*   **Adjust Results**: Change the **Limit** node settings to process more locations per run (default is set to 2 to save API credits during testing).
*   **Change Persona**: Edit the "System Prompt" in the **AI Location Analyzer** node to change the AI's tone (e.g., from "Film Director" to "Real Estate Agent" or "Travel Blogger").
*   **Swap LLM**: You can easily replace the OpenRouter node with an OpenAI or Anthropic node if you prefer a different model.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, AI Agent, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
