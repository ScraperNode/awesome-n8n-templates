# 🎬 Generate song lyrics and music from text prompts using OpenAI and Fal.ai Minimax

> ⚡ **709 views** · 🎬 [Content Creation & Video](../)

## Description

Spark your creativity instantly in any chat—turn a simple prompt like "heartbreak ballad" into original, full-length lyrics and a professional AI-generated music track, all without leaving your conversation.

## 📋 What This Template Does
This chat-triggered workflow harnesses AI to generate detailed, genre-matched song lyrics (at least 600 characters) from user messages, then queues them for music synthesis via Fal.ai's minimax-music model. It polls asynchronously until the track is ready, delivering lyrics and audio URL back in chat.
- Crafts original, structured lyrics with verses, choruses, and bridges using OpenAI
- Submits to Fal.ai for melody, instrumentation, and vocals aligned to the style
- Handles long-running generations with smart looping and status checks
- Returns complete song package (lyrics + audio link) for seamless sharing

## 🔧 Prerequisites
- n8n account (self-hosted or cloud with chat integration enabled)
- OpenAI account with API access for GPT models
- Fal.ai account for AI music generation

## 🔑 Required Credentials

### OpenAI API Setup
1. Go to [platform.openai.com](https://platform.openai.com) → API keys (sidebar)
2. Click "Create new secret key" → Name it (e.g., "n8n Songwriter")
3. Copy the key and add to n8n as "OpenAI API" credential type
4. Test by sending a simple chat completion request

### Fal.ai HTTP Header Auth Setup
1. Sign up at [fal.ai](https://fal.ai) → Dashboard → API Keys
2. Generate a new API key → Copy it
3. In n8n, create "HTTP Header Auth" credential: Name="Fal.ai", Header Name="Authorization", Header Value="Key [Your API Key]"
4. Test with a simple GET to their queue endpoint (e.g., /status)

## ⚙️ Configuration Steps
1. Import the workflow JSON into your n8n instance
2. Assign OpenAI API credentials to the "OpenAI Chat Model" node
3. Assign Fal.ai HTTP Header Auth to the "Generate Music Track", "Check Generation Status", and "Fetch Final Result" nodes
4. Activate the workflow—chat trigger will appear in your n8n chat interface
5. Test by messaging: "Create an upbeat pop song about road trips"

## 🎯 Use Cases
- **Content Creators**: YouTubers generating custom jingles for videos on the fly, streamlining production from idea to audio export
- **Educators**: Music teachers using chat prompts to create era-specific folk tunes for classroom discussions, fostering interactive learning
- **Gift Personalization**: Friends crafting anniversary R&B tracks from shared memories via quick chats, delivering emotional audio surprises
- **Artist Brainstorming**: Songwriters prototyping hip-hop beats in real-time during sessions, accelerating collaboration and iteration

## ⚠️ Troubleshooting
- **Invalid JSON from AI Agent**: Ensure the system prompt stresses valid JSON; test the agent standalone with a sample query
- **Music Generation Fails (401/403)**: Verify Fal.ai API key has minimax-music access; check usage quotas in dashboard
- **Status Polling Loops Indefinitely**: Bump wait time to 45-60s for complex tracks; inspect fal.ai queue logs for bottlenecks
- **Lyrics Under 600 Characters**: Tweak agent prompt to enforce fuller structures like [V1][C][V2][B][C]; verify output length in executions

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
