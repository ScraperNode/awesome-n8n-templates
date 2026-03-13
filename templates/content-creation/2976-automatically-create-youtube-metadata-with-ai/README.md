# 🎬 Automatically create YouTube metadata with AI

> ⚡ **8,837 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

This n8n workflow automates YouTube video metadata generation using AI. It extracts video transcripts, analyzes content, and produces optimized titles, descriptions, tags, hashtags, and call-to-action elements. Additionally, the workflow integrates affiliate and promotional links to enhance overall video performance.

## Key Features

### Automated Metadata Generation
Utilizes an AI agent integrated with OpenAI GPT-4 to generate engaging metadata based on the provided video transcript.

### SEO and Engagement Optimization
Creates keyword-rich, well-structured content that boosts search engine visibility and audience engagement.

### Affiliate and Promotional Integration
Retrieves pre-set promotional and affiliate links using a Google Docs integration.

### Direct YouTube Update
Automatically updates video details on YouTube via the YouTube API.

### Customization
Allows you to modify the AI prompt to tailor metadata for your specific niche.

## Workflow Breakdown

### User Submission
Users supply the YouTube video link, transcript, and optionally, focus keywords.

### Video ID Extraction
The workflow converts the YouTube URL into a video ID to streamline automation.

### Link Retrieval
Affiliate and course links are fetched from a designated Google Docs file.

### AI-Powered Metadata Generation
The AI agent generates the video title, description, tags, hashtags, and call-to-action elements.

### Metadata Formatting and Update
The generated metadata is structured and directly updated on YouTube.

### Confirmation
A success message is displayed upon completion of the update process.

## Setup and Configuration

### Deploying the Workflow
Deploy the workflow in n8n and ensure all integrations are properly set up.

### Configuring Integrations
- **Google Docs:** Configure credentials to retrieve affiliate and promotional links.
- **OpenAI (GPT-4):** Set up credentials for AI-powered metadata generation.
- **YouTube API:** Enter your API credentials to enable automatic video updates.

### User Input Requirements
Provide a valid YouTube video link and its corresponding transcript. Optionally, include focus keywords to further enhance metadata accuracy.

## Ideal For

- **YouTube Content Creators:** Automate video descriptions and boost SEO.
- **Digital Marketers:** Enhance content for improved search rankings and audience engagement.
- **Affiliate Marketers:** Simplify the insertion of promotional and affiliate links.
- **AI & Automation Enthusiasts:** Explore the integration of AI into automated workflows.

## Additional Resources

For further guidance, refer to the tutorial video on this workflow. More courses and resources are available on the SyncBricks website. For support or inquiries, contact Amjid Ali at info@syncbricks.com. You can also support this work via PayPal donations and subscribe for additional AI and automation workflows.

- **Watch the Tutorial:** [YouTube Video on This Workflow](https://youtu.be/VNpr9T00Is0)
- **More Courses & Resources:**
  - [SyncBricks LMS](https://lms.syncbricks.com/)
  - [Full Course on ERPNext & AI Automation](https://www.udemy.com/course/ai-automation-mastery-build-intelligent-agents-with-lowcode/?referralCode=0062E7C1D64784AB70CA)
- **Connect:**
  - Email: info@syncbricks.com
  - Website: [SyncBricks](https://syncbricks.com)
  - YouTube: [SyncBricks Channel](https://www.youtube.com/channel/UC1ORA3oNGYuQ8yQHrC7MzBg?sub_confirmation=1)
  - LinkedIn: [Amjid Ali](http://linkedin.com/in/amjidali)
- **Support & Subscribe:**
  - [Donate via PayPal](https://paypal.me/pmptraining)
  - [Subscribe for More AI & Automation Workflows](https://n8n.syncbricks.com)

## 🔗 Nodes Used

YouTube, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
