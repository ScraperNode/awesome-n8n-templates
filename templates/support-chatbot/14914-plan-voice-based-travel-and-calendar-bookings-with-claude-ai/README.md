# 💬 Plan voice-based travel and calendar bookings with Claude AI

> ⚡ **219 views** · 💬 [Support Chatbots](../)

## Description

A hands-free travel planning assistant that accepts voice messages via WhatsApp and Telegram, understands natural language travel requests, searches across multiple providers, and automatically books to your calendar with smart recommendations.

### How it works

1. **Voice Message Reception** - WhatsApp/Telegram webhooks capture incoming voice notes and calls
2. **Audio Transcription** - Converts voice to text using OpenAI Whisper or Google Speech-to-Text
3. **Intent Classification** - Claude AI analyzes the request to determine travel intent and parameters
4. **Context Enrichment** - Pulls user preferences, past trips, and budget profiles from database
5. **Multi-Source Travel Search** - Queries flights (Skyscanner), hotels (Booking.com), activities in parallel
6. **Smart Filtering & Ranking** - AI applies user preferences, budget constraints, and optimal timing
7. **Natural Response Generation** - Claude crafts conversational voice-friendly responses
8. **Calendar Auto-Add** - Creates Google Calendar events with travel details and reminders
9. **Voice Response Delivery** - Sends text + voice message back via original messaging platform
10. **Confirmation & Booking Links** - Provides quick-action buttons for booking or modifying search
11. **Proactive Follow-ups** - Sends price drop alerts and departure reminders
12. **Multi-Turn Conversation** - Maintains context for refinement requests

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for NLP and response generation
   - **OpenAI API** - Whisper for voice transcription
   - **WhatsApp Business API** - Voice message reception and sending
   - **Telegram Bot API** - Alternative messaging platform
   - **Google Calendar API** - Automatic event creation
   - **Flight Search API** - Skyscanner, Amadeus, or Kiwi.com
   - **Hotel API** - Booking.com or Hotels.com partner API
   - **Google Sheets** - User preferences and conversation history
   - **MongoDB or PostgreSQL** - Conversation state management
3. Set up WhatsApp Business account and webhook
4. Create Telegram bot via @BotFather
5. Configure Google Calendar shared calendar for travel
6. Populate user preferences sheet with defaults
7. Set API keys for travel search providers
8. Activate workflow and test with sample voice message

### Sample Voice Requests

**Simple Flight Search:**
"Hey, find me cheap flights to Paris next month"

**Complex Multi-City:**
"I need to go to Tokyo in March for a week, then Bangkok for 3 days, budget is $2000 total"

**Hotel Only:**
"Book a hotel in Barcelona for May 15th to 20th, somewhere near the beach under $150 per night"

**Full Package:**
"Plan a romantic weekend in Santorini for our anniversary in June, nice hotel with sunset view, under $3000 for two people"

**Activity Search:**
"What are the best things to do in Amsterdam for 3 days, we like museums and food tours"

**Calendar Query:**
"When am I flying to London next month? And can you add a reminder 2 days before?"

### Voice Message Webhook Payload
```json
{
  "platform": "whatsapp",
  "messageId": "wamid.ABC123XYZ",
  "from": "+15551234567",
  "timestamp": 1735804800,
  "type": "audio",
  "audio": {
    "id": "audio_id_12345",
    "mimeType": "audio/ogg",
    "sha256": "abc123...",
    "duration": 15,
    "url": "https://media.whatsapp.com/audio/abc123"
  },
  "context": {
    "conversationId": "conv-user-001",
    "previousMessageId": null
  }
}
```

### Enterprise Features

**Voice Intelligence:**
- Multi-language transcription (30+ languages)
- Accent-adaptive recognition
- Background noise filtering
- Speaker emotion detection for urgency

**Smart Travel Search:**
- Multi-provider aggregation (flights, hotels, activities)
- Real-time price comparison
- Flexible date search (±3 days optimization)
- Budget-aware filtering
- Loyalty program integration

**AI-Powered Personalization:**
- Learns from past bookings and preferences
- Remembers dietary restrictions, seating preferences
- Adapts to budget patterns
- Suggests destinations based on season and interests

**Proactive Assistance:**
- Price drop alerts for saved searches
- Flight delay notifications
- Weather warnings before departure
- Packing list generation
- Travel insurance reminders

**Calendar Intelligence:**
- Conflict detection with existing events
- Travel time buffer insertion
- Timezone-aware scheduling
- Shared calendar support for group trips
- Automatic itinerary attachment

**Security & Privacy:**
- End-to-end encryption for voice messages
- PII redaction in logs
- Secure credential storage
- GDPR-compliant data handling
- User data deletion on request

**Multi-Platform Support:**
- WhatsApp Business
- Telegram
- Facebook Messenger
- SMS fallback
- Web widget integration

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Google Calendar, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
