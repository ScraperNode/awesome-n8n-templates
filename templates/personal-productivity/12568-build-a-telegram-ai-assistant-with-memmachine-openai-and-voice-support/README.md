# ⚡ Build a Telegram AI assistant with MemMachine, OpenAI, and voice support

> ⚡ **309 views** · ⚡ [Personal Productivity](../)

## Description

# Build a Telegram assistant with MemMachine and voice support

An AI assistant that NEVER forgets using MemMachine for persistent cross-session memory, with voice transcription support and productivity tools.

**⚠️ Important Deployment Note:**
This workflow is designed for **self-hosted n8n** instances. If you're using n8n Cloud, you'll need to deploy MemMachine to a cloud server and update the HTTP Request URLs in nodes 4, 5, and 9.

## What This Template Does

This workflow creates an intelligent personal assistant that maintains perfect memory across all conversations, whether you message today or weeks from now. It supports both text and voice messages, automatically transcribes voice using OpenAI Whisper, and provides tools for Gmail, Google Sheets, and Google Calendar.

## Key Features

- 🧠 **Perfect Memory** - Remembers every conversation using MemMachine
- 🎤 **Voice Transcription** - Supports voice messages via OpenAI Whisper
- 📧 **Gmail Integration** - Send and read emails
- 📊 **Google Sheets** - Read and write spreadsheet data
- 📅 **Google Calendar** - Create and manage events
- 🔧 **MCP Tools** - Extensible tool architecture
- 💬 **Smart Context** - References past conversations naturally

## Real-World Example

**Day 1 - Text Message:**
- User: "Send an email to john@company.com about the Q1 report"
- AI: *Uses Gmail tool* "Email sent to John about the Q1 report!"

**Day 3 - Voice Message:**
- 🎤 User: "What did I ask you to do for John?"
- AI: "On January 5th, you asked me to email John about the Q1 report, which I sent."

**Day 7 - Text Message:**
- User: "Follow up with John"
- AI: "I'll send a follow-up email to john@company.com about the Q1 report that we discussed on Jan 5th."

The AI remembers who John is, what you discussed, and when it happened - all without you having to repeat yourself!

## How It Works

### Message Flow

**For Text Messages:**
1. Telegram Trigger receives message
2. Extract user data and message text
3. Store message in MemMachine
4. Search conversation history (last 30 memories)
5. AI processes with full context + tools
6. Store AI response for future reference
7. Send reply to user

**For Voice Messages:**
1. Telegram Trigger receives voice message
2. Download voice file
3. OpenAI Whisper transcribes to text
4. Extract transcribed text and user data
5. Store in MemMachine (same as text flow)
6. Process with AI + tools
7. Send reply to user

## Requirements

### Services & Credentials

- **MemMachine** - Open-source memory system (self-hosted via Docker)
- **Telegram Bot Token** - From @BotFather
- **OpenAI API Key** - For AI responses and voice transcription
- **Gmail OAuth** - For email integration (optional)
- **Google Sheets OAuth** - For spreadsheet access (optional)
- **Google Calendar OAuth** - For calendar management (optional)

### Installation

## MemMachine Setup

```bash
# Clone and start MemMachine
git clone https://github.com/MemMachine/MemMachine
cd MemMachine
docker-compose up -d

# Verify it's running
curl http://localhost:8080/health
```

## Workflow Configuration

### Deployment Options

This workflow supports two deployment scenarios:

**Option 1: Self-Hosted n8n (Recommended)**
- Both n8n and MemMachine run locally
- Best for: Personal use, development, testing
- Setup:
  1. Run MemMachine: `docker-compose up -d`
  2. Use `http://host.docker.internal:8080` in HTTP Request nodes (if n8n in Docker)
  3. Or use `http://localhost:8080` (if n8n installed directly)

**Option 2: n8n Cloud**
- n8n hosted by n8n.io, MemMachine on your cloud server
- Best for: Production, team collaboration
- Setup:
  1. Deploy MemMachine to cloud (DigitalOcean, AWS, GCP, etc.)
  2. Expose MemMachine via HTTPS with SSL certificate
  3. Update HTTP Request URLs in nodes 4, 5, 9 to: `https://your-memmachine-domain.com`
  4. Ensure firewall allows n8n Cloud IP addresses

### Configuration Steps

1. **Import this template** into your n8n instance

2. **Update MemMachine URLs** (nodes 4, 5, 9):
   - **Self-hosted n8n in Docker**: `http://host.docker.internal:8080`
   - **Self-hosted n8n (direct install)**: `http://localhost:8080`
   - **n8n Cloud**: `https://your-memmachine-domain.com`

3. **Set Organization IDs** (nodes 4, 5, 9):
   - Change `your-org-id` to your organization name
   - Change `your-project-id` to your project name

4. **Add Credentials:**
   - Telegram Bot Token (node 1)
   - OpenAI API Key (nodes 4, 7)
   - Gmail OAuth (Gmail Tool node)
   - Google Sheets OAuth (Sheets Tool node)
   - Google Calendar OAuth (Calendar Tool node)

## Use Cases

### Personal Productivity
- "Remind me what I worked on last week"
- "Schedule a meeting with the team next Tuesday"
- "Email Sarah about the proposal"

### Customer Support
- AI remembers customer history
- References past conversations
- Provides contextual support

### Task Management
- Track tasks across days/weeks
- Remember project details
- Follow up on action items

### Email Automation
- "Send that email to John" (remembers John's email)
- "What emails did I send yesterday?"
- "Draft an email to the team"

### Calendar Management
- "What's on my calendar tomorrow?"
- "Schedule a meeting with Alex at 3pm"
- "Cancel my 2pm meeting"

## Customization Guide

### Extend Memory Capacity

In **Node 5 (Search Memory)**, adjust:
```json
"top_k": 30  // Increase for more context (costs more tokens)
```

### Modify AI Personality

In **Node 7 (AI Agent)**, edit the system prompt to:
- Change tone/style
- Add domain-specific knowledge
- Include company policies
- Set behavioral guidelines

### Add More Tools

Connect additional n8n tool nodes to the AI Agent:
- Notion integration
- Slack notifications
- Trello/Asana tasks
- Database queries
- Custom API tools

### Multi-Channel Memory

Create similar workflows for:
- WhatsApp (same MemMachine instance)
- SMS via Twilio (same memory database)
- Web chat widget (shared context)

All channels can share the same memory by using consistent `customer_email` identifiers!

## Memory Architecture

### Storage Structure

Every message is stored with:
```json
{
  "content": "message text",
  "producer": "user@email.com",
  "role": "user" or "assistant",
  "metadata": {
    "customer_email": "user@email.com",
    "channel": "telegram",
    "username": "john_doe",
    "timestamp": "2026-01-07T12:00:00Z"
  }
}
```

### Retrieval & Formatting

1. **Search** - Finds relevant memories by customer email
2. **Sort** - Orders chronologically (oldest to newest)
3. **Format** - Presents last 20 messages to AI
4. **Context** - AI uses history to inform responses

## Cost Estimate

- **MemMachine**: Free (self-hosted via Docker)
- **OpenAI API**: 
  - Text responses: ~$0.001 per message (GPT-4o-mini)
  - Voice transcription: ~$0.006 per minute (Whisper)
- **n8n**: Free (self-hosted) or $20/month (cloud)
- **Google APIs**: Free tier available

**Monthly estimate for 1,000 messages (mix of text/voice):**
- OpenAI: $5-15
- Google APIs: $0 (within free tier)
- Total: $5-15/month

## Troubleshooting

### Deployment Issues

**n8n Cloud: Can't connect to MemMachine**
- Ensure MemMachine is publicly accessible via HTTPS
- Check firewall rules allow n8n Cloud IPs
- Verify SSL certificate is valid
- Test endpoint: `curl https://your-domain.com/health`

**Self-Hosted: Can't connect to MemMachine**
- Check Docker is running: `docker ps`
- Verify URL matches your setup
- Test endpoint: `curl http://localhost:8080/health`

### Voice not transcribing
- Verify OpenAI API key is valid
- Check API key has Whisper access
- Test with short voice message first

### AI not remembering
- Verify `org_id` and `project_id` match in nodes 4, 5, 9
- Check `customer_email` is consistent
- Review node 5 output (are memories retrieved?)

### Tools not working
- Verify OAuth credentials are valid
- Check required API scopes/permissions
- Test tools individually first

## Advanced Features

### Cloud Deployment Guide (For n8n Cloud Users)

If you're using n8n Cloud, follow these steps to deploy MemMachine:

**1. Choose a Cloud Provider**
- DigitalOcean (Droplet: $6/month)
- AWS (EC2 t3.micro)
- Google Cloud (e2-micro)
- Render.com (easiest, free tier available)

**2. Deploy MemMachine**

For DigitalOcean/AWS/GCP:
```bash
# SSH into your server
ssh root@your-server-ip

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Clone and start MemMachine
git clone https://github.com/MemMachine/MemMachine
cd MemMachine
docker-compose up -d
```

**3. Configure HTTPS (Required for n8n Cloud)**
```bash
# Install Caddy for automatic HTTPS
apt install caddy

# Create Caddyfile
cat &gt; /etc/caddy/Caddyfile &lt;&lt; 'CADDYEND'
your-domain.com {
    reverse_proxy localhost:8080
}
CADDYEND

# Start Caddy
systemctl start caddy
```

**4. Update Workflow**
- In nodes 4, 5, 9, change URL to: `https://your-domain.com`
- Remove the `/api/v2/memories` part is already in the path

**5. Security Best Practices**
- Use environment variables for org_id and project_id
- Enable firewall: `ufw allow 80,443/tcp`
- Regular backups of MemMachine data
- Monitor server resources

### Semantic Memory

MemMachine automatically extracts semantic facts from conversations for better recall of important information.

### Chronological Context

Memories are sorted by timestamp, not relevance, to maintain natural conversation flow.

### Cross-Session Persistence

Unlike session-based chatbots, this assistant remembers across days, weeks, or months.

### Multi-Modal Input

Seamlessly handles both text and voice, storing transcriptions alongside text messages.

## Template Information

**Author:** David Olusola    
**Version:** 1.0.0  
**Created:** January 2026  

## Support & Resources

- **MemMachine Documentation**: https://github.com/MemMachine/MemMachine
- **n8n Community**: https://community.n8n.io
- **OpenAI Whisper**: https://platform.openai.com/docs/guides/speech-to-text

## Contributing

Found a bug or have an improvement? Contribute to the template or share your modifications with the n8n community!

---

**Start building your perfect-memory AI assistant today!** 🚀

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
