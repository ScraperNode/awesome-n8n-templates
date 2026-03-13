# 💬 Automate customer support & calendar bookings with OpenAI GPT and Google Calendar

> ⚡ **3,278 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# Website AI Agent with Calendar Integration

**Categories:** AI Agents, Website Integration, Calendar Automation

This workflow creates a complete website AI agent that can be embedded on any website with just a few lines of code. The agent handles customer inquiries, provides business information, and automatically books meetings by checking calendar availability in real-time. Built for simplicity and business practicality, this system proves that effective AI agents don't need to be overcomplicated.

## **Benefits**

- **Universal Website Integration** - Works with WordPress, Webflow, Squarespace, custom sites, or any platform that accepts HTML
- **Intelligent Calendar Management** - Checks availability and books meetings automatically without double-booking
- **Business-Ready Conversations** - Trained with specific business context and maintains professional, helpful interactions
- **Real-Time Functionality** - All changes to the N8N workflow are immediately reflected on your live website
- **No Technical Complexity** - Simple architecture that prioritizes reliability and consistent outputs over flashy features
- **Customizable Branding** - Easy to modify appearance, messages, and behavior to match your brand

## **How It Works**

**Embedded Chat Interface:**
- Generates embeddable HTML code that creates a chat widget on any website
- Provides both hosted and embedded modes for different use cases
- Handles all communication between website visitors and the AI system

**Intelligent Conversation Management:**
- Uses sophisticated system prompts to maintain context about your business
- Handles common inquiries about services, pricing, and company information
- Gracefully redirects off-topic conversations back to business matters

**Smart Calendar Integration:**
- Connects to Google Calendar to check real-time availability
- Automatically suggests meeting times based on your schedule
- Collects all necessary information (name, email, preferred time) before booking

**Meeting Booking Process:**
- Validates meeting requests against existing calendar entries
- Confirms all details with users before creating calendar events
- Sends automatic invitations with proper timezone handling

## **Required Setup Configuration**

**System Message Requirements:**
Your AI agent needs a comprehensive system message that includes:

- **Business Identity:** Company name, services, location, timezone
- **Business Context:** What you offer, pricing information, key differentiators
- **Conversation Rules:** How to handle inquiries, booking procedures, moderation guidelines
- **Personality Instructions:** Tone of voice, response style, conversation length preferences

**Example System Message Structure:**

You are a helpful, intelligent website chatbot for [Company Name], a [business type].
The current date is [dynamic date]. You are in the [timezone] timezone.

Business Context:

- We offer [services] with [key benefits]
- Our pricing is [pricing structure]
- We work with [target customers]

Your task is answering questions about the business & booking meetings.
For meetings: use calendar function to check availability, collect name/email/preferred time, confirm details.

Rules:

- Keep responses short and conversational
- Stay focused on business topics
- Always confirm timezone when discussing meeting times

**Google Calendar Setup:**
1. Enable Google Calendar API in Google Cloud Console
2. Create OAuth2 credentials for N8N
3. Connect your business calendar in the Google Calendar nodes
4. Set correct timezone in both nodes to match your business location

**Website Integration:**
1. Switch chat trigger to "embedded" mode
2. Copy the provided CDN embed code
3. Paste code into your website's HTML (before closing body tag)
4. Replace webhook URL with your production URL

## **Business Use Cases**

- **Service Businesses** - Automate initial consultations and lead qualification
- **Agencies** - Handle project inquiries and schedule discovery calls
- **Consultants** - Streamline the booking process for potential clients
- **E-commerce** - Provide product support and schedule demos
- **Any Business** - Replace contact forms with intelligent conversation

## **Revenue Potential**

This system can replace expensive chatbot services that cost $100-500/month. The automated booking feature alone typically increases meeting conversion rates by 40-60% compared to traditional contact forms.

**Difficulty Level:** Beginner  
**Estimated Build Time:** 15-20 minutes  
**Monthly Operating Cost:** ~$10 (OpenAI API usage)

## **Watch My 13-Minute Build**

Want to see exactly how I built this from scratch? I walk through the complete setup process in real-time, including all the configuration, testing, and website integration.

🎥 **See My Complete Build Process:** "[How to Build a Website AI Agent in 13 Min (Free N8N Template)](https://www.youtube.com/watch?v=c2kaOwkkhpo)"

This step-by-step tutorial shows you my exact process for creating business-ready AI agents that actually make money, not just impressive demos.

## **Set Up Steps**

**Basic Agent Configuration:**
- Create new N8N workflow with AI Agent node
- Connect OpenAI Chat Model with your API credentials
- Add Window Buffer Memory for conversation context

**System Message Setup:**
- Configure detailed business context and operating instructions
- Set timezone and personality parameters for consistent responses
- Define conversation rules and moderation guidelines

**Google Calendar Integration:**
- Set up Google Calendar credentials through Google Cloud Console
- Configure "Get All Events" tool for availability checking
- Set up "Create Event" tool for automated booking

**Website Embedding:**
- Switch chat trigger to "embedded" mode for website integration
- Copy the provided CDN embed code
- Paste code into your website's HTML with your webhook URL

**Customization Options:**
- Modify initial messages and branding in the embed code
- Adjust colors and styling using CSS variables
- Configure timezone settings to match your business location

**Testing & Optimization:**
- Test complete conversation flows from inquiry to booking
- Verify calendar integration works correctly with your timezone
- Optimize system prompts based on actual user interactions

## **Advanced Features**

Extend this system with additional capabilities:
- **CRM Integration** - Automatically add leads to your sales pipeline
- **Multi-language Support** - Handle conversations in different languages
- **Custom Business Logic** - Add specific qualification questions or routing
- **Analytics Tracking** - Monitor conversation patterns and conversion rates

## **Check Out My Channel**

For more practical automation systems that generate real business value, check out [my YouTube channel](https://www.youtube.com/@nicksaraev) where I share the exact strategies I used to scale my automation agency to $72K/month.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
