# 🎬 Create AI travel journal stories from WhatsApp using Claude and Google Drive

> ⚡ **150 views** · 🎬 [Content Creation & Video](../)

## Description

Automatically converts your daily WhatsApp messages and photos from travels into beautifully structured travel stories, saved as documents in Google Drive.

### How it works

1. **Receive WhatsApp Updates** - Webhook captures messages, photos, and locations from your travel day
2. **Validate & Aggregate Content** - JavaScript organizes messages by day, extracts metadata, validates media
3. **Fetch Previous Entries** - Retrieves existing journal from Google Drive for context and continuity
4. **Prepare AI Context** - JavaScript builds comprehensive prompt with photos, messages, locations, and timeline
5. **Claude AI Story Generation** - Transforms raw messages into narrative travel journal with insights
6. **Parse & Format Story** - JavaScript structures the output into readable document format
7. **Wait for Finalization** - Brief pause to ensure all processing completes
8. **Save to Google Drive** - Creates or updates your travel journal document
9. **Send Confirmation** - WhatsApp notification with preview of generated story
10. **Respond to Webhook** - Returns success confirmation

### Setup Steps

1. Import workflow into n8n
2. Configure credentials:
   - **Anthropic API** - Claude AI for story generation
   - **Google Drive** - Document storage and retrieval
   - **WhatsApp Business API** or **Twilio WhatsApp** - Message integration
3. Create a Google Drive folder for your travel journals
4. Set up WhatsApp webhook integration:
   - Point WhatsApp webhook to: `https://your-n8n-instance.com/webhook/travel-journal`
   - Configure to send: messages, media, locations
5. Update the "Fetch Previous Journal" node with your Drive folder ID
6. Activate the workflow

### Sample WhatsApp Input

**Messages throughout the day:**
- 09:30 AM: "Just arrived in Kyoto! The train station architecture is stunning 🚄"
- 11:45 AM: "Fushimi Inari shrine - thousands of orange torii gates going up the mountain"
- 📸 Photo: Torii gates pathway
- 02:15 PM: "Tried okonomiyaki for lunch. Amazing! The chef made it right in front of us"
- 📸 Photo: Okonomiyaki cooking
- 05:30 PM: "Gion district at sunset. Spotted two geishas!"
- 📍 Location: Gion, Kyoto, Japan
- 08:45 PM: "Dinner at an izakaya. Made friends with locals who taught us drinking games 😄"

### Generated Journal Output

**Day 3: Kyoto - Ancient Temples and Modern Connections**

The day began with anticipation as the shinkansen pulled into Kyoto Station at 9:30 AM. The station itself was an architectural marvel—a blend of traditional Japanese aesthetics and contemporary design that set the tone for what would be an unforgettable day.

By mid-morning, I found myself at Fushimi Inari Taisha, one of Kyoto's most iconic sites. The seemingly endless tunnel of vermillion torii gates created a mesmerizing pathway up Mount Inari. Each gate, donated by individuals and businesses, bore inscriptions in black kanji. The experience was both spiritual and surreal—the way light filtered through the gates, creating dancing shadows on the stone path...

[Full narrative continues with integrated photos, locations, and emotional insights]

### Features
- **Smart Aggregation** - Groups messages by day, even across time zones
- **Photo Integration** - Embeds images inline with contextual descriptions
- **Location Awareness** - Maps locations and adds geographical context
- **Narrative Style** - Converts casual messages into polished travel prose
- **Emotional Intelligence** - Captures mood and significance beyond literal text
- **Timeline Coherence** - Maintains chronological flow and story arc
- **Automatic Continuity** - Links to previous days for multi-day trip journals
- **Format Flexibility** - Outputs as Google Docs with proper formatting

### Privacy & Data
- Messages are processed in real-time and not stored long-term
- Photos are referenced but can be embedded or linked based on preference
- Journal documents are private in your Google Drive
- No message content is retained after journal generation

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, Google Drive, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
