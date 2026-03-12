# 💬 Ai movie recommender on WhatsApp

> ⚡ **1,415 views** · 💬 [Support Chatbots](../)

## Description

This automated n8n workflow enables an AI-powered movie recommendation system on WhatsApp. Users send messages like "I want to watch a horror movie" or "Where can I watch the Jumanji movie?" The workflow uses AI to interpret the request, searches relevant APIs (e.g., TMDb, JustWatch), and replies with movie recommendations or streaming platform availability via WhatsApp.

## Fundamental Aspects

- **WhatsApp Webhook Trigger**: Initiates the workflow when a WhatsApp message is received.
- **Analyze WhatsApp Message**: Uses AI (e.g., Ollama Model) to interpret the user's intent and extract request type.
- **Check Request Type**: Determines if the request is for a movie genre or a specific movie title.
- **Check Where Request**: Identifies if the request includes a "where to watch" query.
- **Extract Movie Title**: Extracts the movie title from the message if specified.
- **Extract Genre**: Identifies the movie genre from the message if specified.
- **Search Specific Movie Title**: Queries an API (e.g., TMDb) for details about a specific movie.
- **Search Movies by Genre**: Queries an API (e.g., TMDb) for movies matching the genre.
- **Get Streaming Availability**: Queries an API (e.g., JustWatch) for streaming platforms.
- **Format Streaming Response**: Prepares the response with streaming platform details.
- **Format Genre Recommendations**: Prepares the response with genre-based movie recommendations.
- **Prepare WhatsApp Message**: Formats the final response for WhatsApp.
- **Send WhatsApp Response**: Sends the recommendation or streaming info back to the user via WhatsApp.

## Setup Instructions

1. **Import the Workflow into n8n**: Download the workflow JSON and import it via the n8n interface.
2. **Configure API Credentials**:
   - Set up WhatsApp Business API credentials with a valid phone number and token.
   - Configure TMDb API key (e.g., `https://api.themoviedb.org`).
   - Configure JustWatch API key (e.g., `https://api.watchmode.com`).
   - Set up AI model credentials (e.g., Ollama Model).
3. **Run the Workflow**: Activate the webhook trigger and test with a WhatsApp message.
4. **Verify Responses**: Check WhatsApp for accurate movie recommendations or streaming info.
5. **Adjust Parameters**: Fine-tune API endpoints or AI model as needed.

## Features

- **AI Interpretation**: Uses AI to analyze user intents (genre or movie title).
- **API Integration**: Searches TMDb for movie details and JustWatch for streaming availability.
- **Real-Time Responses**: Sends instant replies via WhatsApp.
- **Custom Recommendations**: Provides genre-based or specific movie recommendations.

## Technical Dependencies

- **WhatsApp Business API**: For receiving and sending messages.
- **TMDb API**: For movie details and genre searches.
- **JustWatch API**: For streaming availability.
- **Ollama Model**: For AI-based message analysis.
- **n8n**: For workflow automation and integration.

## Customization Possibilities

- **Add More APIs**: Integrate additional movie databases (e.g., IMDb).
- **Enhance AI**: Train the Ollama Model for better intent recognition.
- **Support More Languages**: Add multilingual support for WhatsApp responses.
- **Add Email Alerts**: Include email notifications for admin monitoring.
- **Customize Responses**: Adjust the format of recommendations or streaming info.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
