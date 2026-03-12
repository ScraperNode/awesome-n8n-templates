# ⚡ WhatsApp AI assistant with Claude & GPT4O: multi-format processing & productivity suite

> ⚡ **1,014 views** · ⚡ [Personal Productivity](../)

## Description

# WhatsApp AI Personal Assistant - n8n Workflow Instructions

## Who's it for

This workflow is designed for business professionals, entrepreneurs, and individuals who want to transform their WhatsApp into a powerful AI-powered personal assistant. Perfect for users who need to manage emails, calendar events, document searches, and various productivity tasks through a single messaging interface.

## What it does

This comprehensive n8n workflow creates an intelligent WhatsApp bot that can process multiple message types (text, voice, images, PDF documents) and execute complex tasks using integrated tools including Gmail, Google Calendar, Google Drive, Airtable, Discord, and internet search capabilities. The assistant maintains conversation context and can handle sophisticated requests through natural language processing.

## How it works

### Phase 1: Message Reception and Classification
The workflow begins when a message is received through the WhatsApp Trigger. A Switch node automatically classifies the incoming message type (text, audio, image, or document) and routes it to the appropriate processing pathway.

### Phase 2: Content Processing by Format

**Text Messages**: Direct extraction and formatting for AI processing
**Voice Messages**: 
- Retrieves audio URL from WhatsApp API
- Downloads audio file with authenticated requests
- Transcribes speech to text using OpenAI Whisper
- Formats transcribed content for AI agent

**Images**:
- Downloads image from WhatsApp API
- Analyzes visual content using GPT-4O-mini vision model
- Generates detailed French descriptions covering composition, objects, people, and atmosphere
- Combines user requests with AI analysis

**PDF Documents**:
- Validates file format (rejects non-PDF files)
- Downloads and extracts text content
- Processes document text for AI analysis

### Phase 3: AI Assistant Processing
The processed content is handled by a Claude Sonnet 4-powered agent with access to:

- **SerpAPI** for internet searches
- **Airtable database** for email contact management
- **Gmail integration** for email operations
- **Google Calendar** for event scheduling and management
- **Google Drive** for document searches
- **Discord messaging** for notifications
- **Calculator** for mathematical operations
- **PostgreSQL chat memory** for conversation context

### Phase 4: Response Delivery
The system intelligently determines response format:
- For voice inputs: Converts AI response to speech using OpenAI TTS
- For other inputs: Sends text responses directly
- Handles technical requirements like MIME type compatibility for WhatsApp

## Requirements

### API Credentials Required:
- **WhatsApp Business API** (Trigger and messaging)
- **OpenAI API** (GPT-4O-mini, Whisper, TTS)
- **Anthropic API** (Claude Sonnet 4)
- **Google APIs** (Gmail, Calendar, Drive OAuth2)
- **Airtable API** (Database operations)
- **Discord Bot API** (Messaging)
- **SerpAPI** (Internet search)
- **PostgreSQL Database** (Conversation memory)

### Self-hosted n8n Instance
This workflow requires a self-hosted n8n installation as it uses community nodes and advanced integrations not available in n8n Cloud.

## How to set up

### 1. Prerequisites Setup
- Deploy n8n on a server with public access
- Obtain WhatsApp Business API credentials
- Create developer accounts for all required services
- Set up a PostgreSQL database for conversation memory

### 2. Credential Configuration
Configure the following credentials in n8n:
- WhatsApp API credentials for both trigger and messaging nodes
- OpenAI API key with access to GPT-4O-mini, Whisper, and TTS
- Anthropic API key for Claude Sonnet 4
- Google OAuth2 credentials for Gmail, Calendar, and Drive
- Airtable Personal Access Token
- Discord Bot token
- SerpAPI key
- PostgreSQL database connection

### 3. WhatsApp Configuration
- Configure webhook URLs in WhatsApp Business API settings
- Set up phone number verification
- Configure message templates if required

### 4. Tool Configuration
- **Airtable**: Set up email database with 'Nom' and 'Mails' columns
- **Google Calendar**: Configure calendar access permissions
- **Google Drive**: Set up appropriate folder permissions
- **Discord**: Configure bot permissions and channel access

### 5. Testing and Validation
- Test each message type (text, audio, image, PDF)
- Verify all tool integrations work correctly
- Test conversation memory persistence
- Validate response delivery in both text and audio formats

## How to customize the workflow

### Modify AI Assistant Personality
Edit the system message in the "Agent personnel" node to customize the assistant's behavior, tone, and capabilities according to your needs.

### Add New Tools
Integrate additional n8n tool nodes to extend functionality:
- CRM systems (Salesforce, HubSpot)
- Project management tools (Notion, Trello)
- File storage services (Dropbox, OneDrive)
- Communication platforms (Slack, Microsoft Teams)

### Customize Content Processing
- Modify image analysis prompts for specific use cases
- Add document format support beyond PDF
- Implement content filtering or moderation
- Add language detection and multi-language support

### Enhance Memory and Context
- Implement user-specific memory sessions
- Add conversation summaries for long interactions
- Create user preference storage
- Implement conversation analytics

### Response Customization
- Add multimedia response capabilities
- Implement response templates for common queries
- Add typing indicators or read receipts
- Create custom response formatting

### Security Enhancements
- Implement user authentication
- Add rate limiting for API calls
- Create audit logs for sensitive operations
- Implement data encryption for stored conversations

### Performance Optimization
- Add caching for frequently accessed data
- Implement queue management for high-volume usage
- Add error handling and retry mechanisms
- Create monitoring and alerting systems

## Important Notes

- This workflow processes sensitive data; ensure proper security measures are in place
- Monitor API usage limits across all integrated services
- Regularly backup conversation memory data
- Test thoroughly before deploying to production
- Consider implementing user access controls for business environments
- Keep all API credentials secure and rotate them regularly

## Troubleshooting

- **Audio Issues**: Verify MIME type handling in the "Fix mimeType for Audio" node
- **WhatsApp Delivery**: Check webhook configurations and phone number verification
- **Tool Failures**: Validate all API credentials and permissions
- **Memory Issues**: Monitor PostgreSQL database performance and storage
- **Response Delays**: Optimize tool timeout settings and add proper error handling

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Anthropic Chat Model, Calculator, SerpApi (Google Search)

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
