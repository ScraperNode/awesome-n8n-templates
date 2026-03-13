# 🎯 Automated Twitter intelligence digest with Gemini 2.5 Pro to WhatsApp groups

> ⚡ **190 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

# Auto-scrape Twitter accounts to WhatsApp groups

This workflow provides automated access to real-time Twitter/X content through intelligent scraping and AI processing. It keeps you at the cutting edge of breaking news, emerging trends, and industry developments by eliminating the need to manually check multiple social media accounts and delivering curated updates directly to your communication channels.

## Overview

This workflow automatically handles the complete Twitter monitoring process using advanced scraping techniques and AI analysis. It manages API authentication, multi-source data collection, intelligent content filtering, and message delivery with built-in error handling and rate limiting for reliable automation.

**Core Function**: Real-time social media monitoring that transforms Twitter noise into actionable intelligence, ensuring you're always first to know about the latest trends, product launches, and industry shifts that shape your field.

## Key Capabilities

* **Real-time trend detection** - Catch breaking news and emerging topics as they happen on X/Twitter
* **Multi-source Twitter monitoring** - Track specific accounts AND trending keyword searches simultaneously
* **AI-powered trend analysis** - Gemini 2.5 Pro filters noise and surfaces only the latest developments that matter
* **Stay ahead of the curve** - Identify emerging technologies, viral discussions, and industry shifts before they go mainstream
* **Flexible delivery options** - Pre-configured for WhatsApp, but easily adaptable for Telegram, Slack, Discord, or even blog content generation
* **Rate limit protection** - Built-in delays and error handling using TwitterAPI.io's reliable, cost-effective infrastructure

## Tools Used

* **n8n**: The automation platform orchestrating the entire workflow
* **TwitterAPI.io**: Reliable access to Twitter/X data without API complexities
* **OpenRouter**: Gateway to advanced AI models for content processing
* **Gemini 2.5 Pro**: Google's latest AI for intelligent content analysis and formatting
* **Evolution API**: WhatsApp Business API integration for message delivery
* **Built-in Error Handling**: Automatic retry logic and comprehensive error management

## How to Install

**IMPORTANT**: Before importing this workflow, you need to install the Evolution API community node:

1. **Install Community Node First**: Go to Settings &gt; Community Nodes in your n8n instance
2. **Add Evolution API**: Install `n8n-nodes-evolution-api` package
3. **Restart n8n**: Allow the new nodes to load properly
4. **Import the Workflow**: Download the .json file and import it into your n8n instance
5. **Configure Twitter Access**: Set up TwitterAPI.io credentials and add target accounts/keywords
6. **Set Up AI Processing**: Add your OpenRouter API key for Gemini 2.5 Pro access
7. **Configure WhatsApp**: Set up Evolution API and add your target group ID
8. **Test & Deploy**: Run a test execution and schedule for daily operation

## Use Cases

* **Stay Ahead of Breaking News**: Be the first to know about industry announcements, product launches, and major developments the moment they hit X/Twitter
* **Spot Trends Before They Explode**: Identify emerging technologies, viral topics, and shifting conversations while they're still building momentum  
* **Competitive Intelligence**: Monitor what industry leaders, competitors, and influencers are discussing in real-time
* **Brand Surveillance**: Track mentions, discussions, and sentiment around your brand as conversations develop
* **Content Creation Pipeline**: Gather trending topics, viral discussions, and timely content ideas for blogs, newsletters, or social media strategy
* **Market Research**: Collect real-time social sentiment and emerging market signals from X/Twitter conversations
* **Multi-platform Distribution**: While configured for WhatsApp, the structured output can easily feed Telegram bots, Slack channels, Discord servers, or automated blog generation systems

## FIND YOUR WHATSAPP GROUPS

The workflow includes a helper node to easily find your WhatsApp group IDs:

1. **Use the Fetch Groups node**: The workflow includes a dedicated node that fetches all your available WhatsApp groups
2. **Run the helper**: Execute just that node to see a list of all groups with their IDs
3. **Copy the group ID**: Find your target group in the list and copy its ID
4. **Update the delivery node**: Paste the group ID into the final WhatsApp sending node

**Group ID format**: Always ends with `@g.us` (example: `120363419788967600@g.us`)

**Pro tip**: Test with a small private group first before deploying to your main team channels.

## Connect with Me

* **LinkedIn**: https://www.linkedin.com/in/daniel-lianes/
* **Discovery Call**: https://cal.com/averis/asesoria
* **Consulting Session**: https://cal.com/averis/consultoria-personalizada

## Was this helpful? Let me know!

I truly hope this was helpful. Your feedback is very valuable and helps me create better resources.

### Want to take automation to the next level?

If you're looking to optimize your business processes or need expert help with a project, here's how I can assist you:

**Advisory (Discovery Call):** Do you have a process in your business that you'd like to automate but don't know where to start? In this initial call, we'll explore your needs and see if automation is the ideal solution for you.
#### [Schedule a Discovery Call](https://cal.com/averis/asesoria)

**Personalized Consulting (Paid Session):** If you already have a specific problem, an integration challenge, or need hands-on help building a custom workflow, this session is for you. Together, we'll find a powerful solution for your case.
#### [Book Your Consulting Session](https://cal.com/averis/consultoria-personalizada)

### Stay Up to Date

For more tricks, ideas, and news about automation and AI, let's connect on LinkedIn!
#### [Follow me on LinkedIn](https://www.linkedin.com/in/daniel-lianes/)

---

#n8n #automation #twitter #whatsapp #ai #socialmedia #monitoring #intelligence #gemini #scraping #workflow #nocode #businessautomation #socialmonitoring #contentcuration #teamcommunication #brandmonitoring #trendanalysis #marketresearch #productivity

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Basic LLM Chain, Auto-fixing Output Parser, Structured Output Parser, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
