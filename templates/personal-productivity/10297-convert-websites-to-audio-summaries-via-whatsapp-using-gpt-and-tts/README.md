# ⚡ Convert websites to audio summaries via WhatsApp using GPT and TTS

> ⚡ **193 views** · ⚡ [Personal Productivity](../)

## Description

## How It Works

This workflow transforms any webpage into an AI-narrated audio summary delivered via WhatsApp:

1. **Receive URL** - WhatsApp Trigger captures incoming messages and passes them to URL extraction
2. **Extract & validate** - Code node extracts URLs using regex and validates format; IF node checks for errors
3. **User feedback** - Sends either error message ("Please send valid URL") or processing status ("Fetching and analyzing... 10-30 seconds")
4. **Fetch webpage** - Sub-workflow calls Jina AI Reader (https://r.jina.ai/) to fetch JavaScript-rendered content, bypassing bot blocks
5. **Summarize content** - GPT-4o-mini processes webpage text in 6000-character chunks, extracts title and generates concise summary
6. **Generate audio** - OpenAI TTS-1 converts summary text to natural-sounding audio (Opus format for WhatsApp compatibility)
7. **Deliver result** - WhatsApp node sends audio message back to user with summary

**Why Jina AI?** Many modern websites (like digibyte.io) require JavaScript to load content. Standard HTTP requests only fetch the initial HTML skeleton ("JavaScript must be enabled"). Jina AI executes JavaScript and returns clean, readable text.

## Setup Steps

**Time estimate: ~20-25 minutes**

### 1. WhatsApp Business API Setup (10-15 minutes)
- **Create Meta Developer App** - Go to https://developers.facebook.com/, create Business app, add WhatsApp product
- **Get Phone Number ID** - Use Meta's test number or register your own business phone
- **Generate System User Token** - Create at https://business.facebook.com/latest/settings/system_users (permanent token, no 4-hour expiry)
- **Configure Webhook** - Point to your n8n instance URL, subscribe to "messages" events
- **Verify business** - Meta requires 3-5 verification steps (business, app, phone, system user)

### 2. Configure n8n Credentials (5 minutes)
- **OpenAI** - Add API key in Credentials → OpenAI (used in 2 places: "Convert Summary to Audio" and "OpenAI Chat Model" in sub-workflow)
- **WhatsApp OAuth** - Add in WhatsApp Trigger node using System User token from step 1
- **WhatsApp API** - Add in all WhatsApp action nodes (Send Error, Send Processing, Send Audio) using same token

### 3. Link Sub-Workflow (3 minutes)
- Ensure "[SUB] Get Webpage Summary" workflow is activated
- In "Get Webpage Summary" node, select the sub-workflow from dropdown
- Verify workflow ID matches: QglZjvjdZ16BisPN

### 4. Update Phone Number IDs (2 minutes)
- Copy your Phone Number ID from Meta console
- Update in all WhatsApp nodes: Send Error Message, Send Processing Message, Send Audio Summary

### 5. Test the Flow (2 minutes)
- Activate both workflows (sub-workflow first, then main)
- Send test message to WhatsApp: https://example.com
- Verify: Processing message arrives → Audio summary delivered within 30 seconds

## Important Notes

**WhatsApp Caveats:**
- **24-hour window** - Can't auto-message users after 24 hours unless they message first (send "Hi" each morning to reset)
- **Verification fatigue** - Meta requires multiple business verifications; budget 30-60 minutes if first time
- **Test vs Production** - Test numbers work for single users; production requires business verification

**Audio Format:**
- Using **Opus codec** (optimal for WhatsApp, smaller file size than MP3)
- Speed set to 1.0 (normal pace) - adjust in "Convert Summary to Audio" node if needed
- Cost: ~$0.015 per minute of audio generated

**Jina AI Integration:**
- **Free tier** works for basic use (no API key required)
- Handles JavaScript-heavy sites automatically
- Add Authorization: Bearer YOUR_KEY header for higher limits
- Alternative: Replace with Playwright/Puppeteer for self-hosted rendering

**Cost Breakdown (per summary):**
- GPT-4o-mini summarization: ~$0.005-0.015
- OpenAI TTS audio: ~$0.005-0.015  
- WhatsApp messages: Free (up to 1,000/month)
- **Total: ~$0.01-0.03 per summary**

**Troubleshooting:**
- "Cannot read properties of undefined" → Status update, not message (code node returns null correctly)
- "JavaScript must be enabled" → Website needs Jina AI (already implemented in Fetch site texts node)
- Audio not sending → Check binary data field is named data in TTS node
- No webhook received → Verify n8n URL is publicly accessible and webhook subscription includes "messages"

**Pro Tips:**
- Change voice in TTS node: alloy (neutral), echo (male), nova (female), shimmer (soft)
- Adjust summary length: Modify chunkSize: 6000 in sub-workflow's Text Splitter node (lower = faster but less detailed)
- Add rate limiting: Insert Code node after trigger to track user requests per hour
- Store summaries: Add database node after "Clean up" to archive for later retrieval

**The Use Cases:**

- Executive commuting - Consume industry news hands-free
- Research students - Cover 3x more sources while multitasking
- Visually impaired - Access any webpage via natural audio
- Sales teams - Research prospects on the go
- Content creators - Monitor competitors while exercising

## 🔗 Nodes Used

HTTP Request, Execute Sub-workflow, WhatsApp Business Cloud, Execute Workflow Trigger, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
