# 📱 AI-optimized content posting to X, Discord & LinkedIn with OpenRouter

> ⚡ **2,513 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

Amplify your social media presence with **BuzzBlast**, an n8n workflow designed to make your content go viral across X, Discord, and LinkedIn. By sending a single chat message, BuzzBlast leverages OpenRouter's AI to optimize your input for each platform’s unique audience—crafting punchy tweets for X, engaging messages for Discord, and professional posts for LinkedIn. With smart language detection, it ensures the output matches your input’s language for authentic engagement.

## Key Features

- 🚀 **Multi-Platform Posting**: Shares optimized content to X, Discord, and LinkedIn simultaneously.
- 🧠 **AI Optimization**: Uses OpenRouter’s AI to tailor content for virality on each platform.
- 🌐 **Language Detection**: Matches output to your input language for seamless engagement.
- 🔄 **Smart Routing**: Automatically directs content to the right platform using a switch node.
- 📱 **Chat Trigger**: Initiates posts via a simple chat message.
- ⚡ **Zero Hassle**: No manual reformatting—BuzzBlast handles it all.

## Ideal For

- Social media managers looking to streamline cross-platform posting.
- Content creators aiming to boost engagement with minimal effort.
- Businesses seeking to maximize reach across diverse audiences.

## Pre-Requirements

- **[n8n instance](https://n8n.partnerlinks.io/khaisastudio)**: A running n8n instance (cloud or self-hosted).
- **Credentials**:
  - X account with OAuth2 API access.
  - Discord Webhook API setup for your server.
  - LinkedIn account with OAuth2 API access.
  - OpenRouter account for AI language model access.
- **Chat Trigger Setup**: A configured chat platform (e.g., Slack, Telegram) to send input messages to the workflow.

## Setup Instructions

1. **Import the Workflow**:
   - Copy the provided workflow JSON and import it into your n8n instance via the "Import Workflow" option in the n8n editor.
2. **Configure Credentials**:
   - In the `Post to X` node, set up OAuth2 credentials for your X account.
   - In the `Post to Discord` node, configure a Discord Webhook for your server.
   - In the `Post to LinkedIn` node, add OAuth2 credentials for your LinkedIn account.
   - In the `OpenRouter AI Model` node, provide API credentials for your OpenRouter account.
3. **Set Up Chat Trigger**:
   - In the `Chat Input Trigger` node, configure your preferred chat platform (e.g., Slack, Telegram) to send trigger messages.
   - Ensure the webhook is active and correctly linked to your chat platform.
4. **Test the Workflow**:
   - Send a test message via your chat platform (e.g., "Announcing our new product launch!").
   - Verify that the AI optimizes the content and posts it to X, Discord, and LinkedIn as expected.
5. **Activate the Workflow**:
   - Once tested, toggle the workflow to "Active" in n8n to enable automatic execution when chat messages are received.

## Customization Guidance
- **Changes Chat Trigger**: Adjust the chat trigger using your preference platform like telegram, discord, etc.
- **Modify AI Prompt**: Adjust the prompt in the `AI Content Optimizer` node to change the tone or style (e.g., more professional for LinkedIn or conversational for Discord).
- **Add New Platforms**: Extend the `Route to Platforms` node by adding conditions for additional platforms (e.g., Instagram or Facebook) and corresponding posting nodes.
- **Change AI Model**: In the `OpenRouter AI Model` node, select a different OpenRouter model to optimize content quality or manage costs.
- **Enhance Output Format**: Update the JSON schema in the `Parse AI Output` node to include additional fields like hashtags, emojis, or links for specific platforms.
- **Add Error Handling**: Include an error-handling node after the `Route to Platforms` node to log failed posts or retry them automatically.

## Why Choose BuzzBlast?

BuzzBlast saves time, maximizes reach, and lets AI craft platform-perfect posts that resonate with your audience. Whether you're an influencer, marketer, or business, this workflow makes cross-platform posting effortless. Ready to make waves online? Grab BuzzBlast and start buzzing!

*made by: [khmuhtadin](khmuhtadin.com)*
**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**

## 🔗 Nodes Used

Discord, X (Formerly Twitter), LinkedIn, Basic LLM Chain, Structured Output Parser, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
