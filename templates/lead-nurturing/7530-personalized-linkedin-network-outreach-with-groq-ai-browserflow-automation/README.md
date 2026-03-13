# 💬 Personalized LinkedIn network outreach with Groq AI & Browserflow automation

> ⚡ **894 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# LinkedIn Automation Outreach Workflow Documentation

## Inline Notes for Each Node

### 1. **On form submission** 
*Trigger Node - Manual Start*
```
📝 Note: "Manual trigger to start the LinkedIn scraping and outreach process. 
This node initiates the workflow when you want to begin lead processing."
```

### 2. **Scrape profiles from a linkedin search**
*HTTP Request/Browserflow Node*
```
📝 Note: "Scrapes LinkedIn profiles based on search criteria (e.g., automation specialists in Lagos). 
Returns JSON array with profile data including names, URLs, taglines, locations, and summaries. 
Uses scrapeProfilesFromSearch.linkedinSearch() function."
```

### 3. **Split Out1**
*Split Out Node*
```
📝 Note: "Converts the JSON array of profiles into individual items for processing. 
Each profile becomes a separate execution path. Field to split: 'data'. 
This enables personalized message generation for each contact."
```

### 4. **Limit**
*Limit Node*
```
📝 Note: "Controls batch size for processing (currently set to 3 items). 
Prevents overwhelming the AI agent and helps with rate limiting. 
Adjust max items based on your subscription limits and testing needs."
```

### 5. **AI Agent**
*LangChain AI Agent Node*
```
📝 Note: "Generates personalized LinkedIn and email outreach messages using profile data. 
Uses Groq Chat Model (llama3-8b-8192) for cost-effective text generation.
Input: Individual profile data. Output: Structured JSON with personalized messages.
System prompt focuses on networking approach rather than sales."
```

### 6. **Code1**
*JavaScript Code Node*
```
📝 Note: "Processes AI-generated messages and formats data for LinkedIn automation.
Extracts connection message, profile URL, and adds automation parameters.
Includes error handling for malformed AI responses and random delay generation.
Prepares data structure compatible with Browserflow LinkedIn automation."
```

### 7. **Send a linkedin message1**
*Browserflow/HTTP Node*
```
📝 Note: "Automates LinkedIn connection requests with personalized messages.
Uses formatted data from Code1 node including target URL and message content.
Includes built-in delays and retry logic to avoid LinkedIn rate limiting.
⚠️ Currently shows error - check Browserflow configuration and credentials."
```

## Workflow Architecture Overview

**Flow Type:** Sequential Processing with Batch Control
**Purpose:** Automated LinkedIn networking outreach for automation professionals
**Target Audience:** Lagos-based automation specialists and similar professionals

## Detailed Workflow Description

### 🎯 **LinkedIn Automation Outreach Workflow for Networking**

This sophisticated n8n workflow automates the entire process of discovering, analyzing, and reaching out to potential networking contacts in the automation industry. Designed specifically for automation agency owners and professionals looking to build meaningful connections within their local tech community.

**🔄 Workflow Process:**

**Stage 1: Data Collection**
The workflow begins with a manual trigger that initiates a comprehensive LinkedIn profile scraping operation. Using advanced web scraping techniques, it searches for automation specialists, particularly focusing on the Lagos tech ecosystem. The scraping function targets professionals with expertise in tools like n8n, Make.com, AI automation, and workflow optimization.

**Stage 2: Data Processing & Segmentation**
Once the profile data is collected, the Split Out node transforms the bulk JSON response into individual processing items. This crucial step enables personalized treatment of each contact. The Limit node provides batch control, allowing you to test with smaller groups (currently 3 profiles) before scaling to larger datasets.

**Stage 3: AI-Powered Personalization**
The AI Agent represents the workflow's intelligence core, utilizing Groq's LLaMA model for cost-effective, high-quality text generation. Each profile receives a customized analysis that identifies:
- Specific technical expertise and tools
- Geographic and industry connections
- Potential collaboration opportunities
- Shared professional interests

The AI generates both LinkedIn connection messages and email alternatives, ensuring multiple touchpoint options. Messages focus on genuine networking value rather than sales pitches, emphasizing knowledge sharing, collaboration opportunities, and community building.

**Stage 4: Message Optimization & Formatting**
The JavaScript Code node serves as the workflow's data orchestrator, transforming AI-generated content into automation-ready formats. It handles:
- Response validation and error recovery
- LinkedIn-specific message formatting
- Automation parameter injection (delays, retry logic)
- Fallback email preparation
- Metadata tracking for campaign analysis

**Stage 5: Automated Outreach Execution**
The final Browserflow integration automates the actual LinkedIn connection process. It navigates to each target profile, sends personalized connection requests, and implements intelligent delays to maintain LinkedIn compliance. Built-in error handling ensures workflow resilience even when individual requests fail.

**🎖️ Key Features:**
- **Intelligent Batch Processing**: Controlled processing prevents rate limiting
- **Dual-Channel Approach**: LinkedIn + email backup ensures message delivery
- **Geographic Targeting**: Lagos-focused networking for local community building
- **AI-Driven Personalization**: Each message uniquely crafted based on profile analysis
- **Error Resilience**: Comprehensive error handling maintains workflow stability
- **Compliance-First Design**: Built-in delays and limits respect platform policies

**🎯 Use Cases:**
- Building local automation professional networks
- Identifying potential collaboration partners
- Market research on automation service providers
- Community building for tech meetups and events
- Knowledge sharing network development

**⚡ Technical Specifications:**
- **Model**: Groq LLaMA3-8B for cost-effective AI generation
- **Processing Capacity**: 3-item batches (scalable)
- **Message Types**: LinkedIn connections + email alternatives
- **Automation Platform**: Browserflow for LinkedIn interaction
- **Error Handling**: Multi-layer validation and recovery
- **Personalization Depth**: 3-5 specific talking points per contact

This workflow represents a sophisticated approach to professional networking automation, balancing efficiency with authentic relationship building. It's particularly valuable for automation professionals who understand the importance of genuine connections over mass outreach tactics.

## 🔗 Nodes Used

AI Agent, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
