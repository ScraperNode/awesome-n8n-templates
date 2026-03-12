# 💬 Automate multi-channel customer support with Gmail, Telegram, and GPT AI

> ⚡ **4,868 views** · 💬 [Support Chatbots](../)

## Description

# Smart Customer Support AI Agent with Gmail and Telegram

## Who is this for?

This workflow is perfect for:
- **Small to medium businesses** looking to automate customer support
- **E-commerce stores** handling order inquiries and customer questions
- **SaaS companies** providing technical support to users
- **Service providers** managing appointment bookings and general inquiries
- **Startups** wanting to provide 24/7 customer service without hiring full-time staff
- **Agencies** managing client communications across multiple channels

## What problem is this workflow solving?

Customer support is essential but resource-intensive. Common challenges include:
- **Slow response times** leading to frustrated customers
- **Repetitive questions** consuming valuable staff time
- **Inconsistent responses** across different support agents
- **Limited availability** outside business hours
- **Scaling support costs** as business grows
- **Context loss** when customers switch between channels

This workflow eliminates these pain points by providing instant, consistent, and intelligent responses 24/7.

## What this workflow does

### Core Functionality
1. **Multi-Channel Monitoring**: Simultaneously watches Gmail and Telegram for customer inquiries
2. **Intelligent Processing**: Uses AI to understand customer intent and context
3. **Knowledge Base Integration**: Accesses your company's FAQ and support information
4. **Contextual Responses**: Provides personalized, helpful replies maintaining conversation history
5. **Smart Escalation**: Automatically escalates complex issues to human agents
6. **Comprehensive Logging**: Tracks all interactions for analytics and improvement

### AI Agent Capabilities
- **Natural Language Understanding**: Comprehends customer questions in plain English
- **Context Awareness**: Remembers previous conversations with each customer
- **Knowledge Retrieval**: Searches your knowledge base for accurate information
- **Response Generation**: Creates professional, brand-appropriate responses
- **Escalation Decision**: Identifies when human intervention is needed
- **Multi-Channel Support**: Handles Gmail and Telegram with channel-specific formatting

### Automation Features
- **Auto-Response**: Replies to customers within seconds
- **Email Management**: Marks processed emails as read
- **Conversation Threading**: Maintains context in email threads and Telegram chats
- **Error Handling**: Gracefully handles failures with admin notifications
- **Analytics Tracking**: Logs interactions for performance monitoring

## Setup

### Prerequisites
- Active Google Workspace or Gmail account
- Telegram account for bot creation
- OpenAI API access
- Google Sheets access
- n8n instance (cloud or self-hosted)

### Step 1: Credential Setup

#### Gmail OAuth2 Configuration
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or select existing one
3. Enable Gmail API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs for n8n
6. In n8n: Settings → Credentials → Add Gmail OAuth2
7. Enter Client ID and Client Secret
8. Complete OAuth flow

#### Telegram Bot Setup
1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Create new bot with `/newbot` command
3. Choose bot name and username
4. Copy the bot token
5. In n8n: Settings → Credentials → Add Telegram
6. Enter bot token
7. Set webhook URL in bot settings

#### OpenAI API Configuration
1. Sign up at [OpenAI Platform](https://platform.openai.com)
2. Generate API key in API Keys section
3. In n8n: Settings → Credentials → Add OpenAI
4. Enter API key
5. Choose appropriate model (gpt-4o-mini recommended)

#### Google Sheets Setup
1. Use existing Google account from Gmail setup
2. In n8n: Settings → Credentials → Add Google Sheets OAuth2
3. Complete authorization flow

### Step 2: Google Sheets Preparation

Create three Google Sheets in your Google Drive:

#### Knowledge Base Sheet
- **Sheet Name**: "Knowledge Base"
- **Columns**: ID, Category, Question/Topic, Answer/Response, Keywords, Last_Updated
- Import sample data from the Knowledge Base example
- Customize with your company's FAQs and policies

#### Escalation Tracker Sheet
- **Sheet Name**: "Escalations" 
- **Columns**: Timestamp, Customer_Name, Customer_Contact, Inquiry_Summary, Escalation_Reason, Priority, Status, Assigned_To
- This will be auto-populated by the AI agent

#### Interaction Log Sheet
- **Sheet Name**: "Interaction Log"
- **Columns**: Timestamp, Channel, Customer_Name, Customer_Contact, Inquiry_Subject, Customer_Message, AI_Response, Response_Time, Status
- This tracks all customer interactions for analytics

### Step 3: Workflow Configuration

#### Import Template
1. Copy the workflow JSON from the template
2. In n8n: Import workflow from JSON
3. Replace placeholder Sheet IDs with your actual Google Sheet IDs

#### Update Sheet References
1. Open each Google Sheets node
2. Select your created sheets from the dropdown
3. Verify column mappings match your sheet structure

#### Customize AI Prompts
1. Edit the "Customer Support AI Agent" node
2. Update system message with:
   - Your company name and description
   - Brand voice and tone guidelines
   - Specific policies and procedures
   - Escalation criteria

#### Configure Error Notifications (Optional)
1. Set up Slack webhook or email notifications
2. Update error notification node with your webhook URL
3. Customize error message format

### Step 4: Testing

#### Test Gmail Integration
1. Send test email to your support Gmail account
2. Check workflow execution in n8n
3. Verify response is sent and email marked as read
4. Check interaction logging in Google Sheets

#### Test Telegram Integration  
1. Send message to your Telegram bot
2. Verify bot responds appropriately
3. Test conversation memory with follow-up messages
4. Check escalation functionality with complex request

#### Test Knowledge Base
1. Ask questions covered in your knowledge base
2. Verify AI retrieves and uses correct information
3. Test with variations of the same question
4. Ensure responses are consistent and helpful

## How to customize this workflow to your needs

### Brand Voice Customization
```
Update the AI system prompt to include:
- Your company's tone (formal, casual, friendly)
- Key phrases and terminology you use
- Brand personality traits
- Communication style preferences
```

### Knowledge Base Expansion
- Add industry-specific FAQs
- Include product documentation
- Add troubleshooting guides
- Create category-specific responses

### Escalation Rules
Customize when to escalate by modifying the AI agent instructions:
- Billing disputes over $X amount
- Technical issues requiring developer help
- Angry or dissatisfied customers
- Requests outside standard services
- Legal or compliance questions

### Additional Channels
Extend the workflow to support:
- **Slack**: Add Slack triggers and response nodes
- **WhatsApp**: Integrate WhatsApp Business API
- **Web Chat**: Add webhook triggers for website chat
- **Discord**: Connect Discord bot integration

### Analytics Enhancement
- Add sentiment analysis to customer messages
- Implement customer satisfaction scoring
- Create automated reporting dashboards
- Set up alert thresholds for escalation rates

### Integration Opportunities
- **CRM Integration**: Connect to HubSpot, Salesforce, or Pipedrive
- **Ticketing System**: Link to Zendesk, Freshdesk, or Jira Service Desk
- **E-commerce Platform**: Integrate with Shopify, WooCommerce, or Magento
- **Calendar Booking**: Connect to Calendly or Acuity for appointment scheduling

### Advanced Features
- **Multi-language Support**: Add translation capabilities
- **Voice Messages**: Integrate speech-to-text for Telegram voice notes
- **Image Recognition**: Process customer screenshots for technical support
- **Proactive Outreach**: Send follow-up messages based on customer behavior

## Workflow Maintenance

### Daily Tasks
- Review escalation queue
- Monitor error notifications
- Check response quality in interaction log

### Weekly Reviews
- Analyze customer interaction patterns
- Update knowledge base with new common questions
- Review escalation reasons and optimize AI prompts

### Monthly Optimization
- Export interaction data for detailed analysis
- Calculate key metrics (response time, resolution rate, escalation rate)
- Update AI model parameters based on performance
- Expand knowledge base with seasonal or trending topics

## Key Metrics to Track

- **Response Time**: Average time from customer message to AI response
- **Resolution Rate**: Percentage of inquiries resolved without escalation  
- **Customer Satisfaction**: Based on follow-up surveys or sentiment analysis
- **Escalation Rate**: Percentage of conversations requiring human intervention
- **Channel Performance**: Effectiveness of Gmail vs Telegram vs other channels
- **Knowledge Base Usage**: Which topics are accessed most frequently
- **Peak Hours**: When customers contact support most often

## Troubleshooting

### Common Issues
- **Gmail not triggering**: Check OAuth permissions and API quotas
- **Telegram bot not responding**: Verify bot token and webhook configuration
- **AI responses seem off**: Review and update system prompts
- **Escalations not logging**: Check Google Sheets permissions and column mapping
- **High escalation rate**: Expand knowledge base and refine AI instructions

### Performance Optimization
- Monitor OpenAI API usage and costs
- Adjust AI model temperature for response consistency
- Optimize knowledge base for faster searches
- Set appropriate conversation memory limits

This workflow provides a solid foundation for automated customer support that can be extensively customized to match your specific business needs and grow with your company.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
