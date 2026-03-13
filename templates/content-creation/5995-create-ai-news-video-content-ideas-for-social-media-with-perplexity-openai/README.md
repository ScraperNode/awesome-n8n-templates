# 🎬 Create AI news video content ideas for social media with Perplexity & OpenAI

> ⚡ **2,791 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

---

## AI Latest News Content Script Writer
### Overview
This workflow automates the daily generation of viral short-form video content ideas tailored for founders and business leaders. It scrapes fresh AI-related news and trends from various topics, synthesizes the information, and then uses AI to craft complete content packages—including video scripts, captivating captions, and punchy text overlays. All generated content is saved to a Google Sheet, ready for your review and use.

### Use Case
This workflow is perfect for:
* **Founders & Entrepreneurs**: Consistently produce engaging content to build authority and attract inbound leads without a dedicated content team.
* **AI Thought Leaders**: Stay on top of the latest AI news and effortlessly create shareable insights.
* **Content Marketing Teams**: Automate the ideation and initial drafting phases for short-form video strategies.
* **Agencies**: Offer a unique AI-powered content generation service to your clients.

---

### How It Works

1.  **Scheduled Daily Trigger**: The workflow runs automatically every day at 6 AM IST, ensuring you always have fresh content ideas to start your day.
2.  **AI-Powered News Gathering**: It uses **Perplexity AI** to fetch the latest, most interesting, and relevant stories across three key AI topics:
    * **Topic 1**: General AI News
    * **Topic 2**: AI Market and Industry Trends
    * **Topic 3**: AI Business Automation
3.  **Organize and Combine Content**: The information from each topic is organized, and then all content and their respective citations are combined into a single, comprehensive input.
4.  **Personalize "About Me"**: Crucially, a configurable "About me" node allows you to define the personal brand of the founder (e.g., Name, Niche, Business Name, Business Type). This context is fed to the AI to ensure generated content aligns perfectly with your persona and business objectives.
5.  **Generate Content Packages**: Leveraging **OpenAI (acting as "CreatorAI")**, the workflow takes the combined news and your "About me" information to:
    * **Identify a Unique Angle**: Finds a distinct, engaging angle from the input that aligns with key content pillars (e.g., AI solving business pain points, future of work with AI).
    * **Craft Video Scripts**: Generates concise video scripts (under 700 characters) with powerful hooks, mini-narratives (problem → AI solution → impact), and a focus on tangible business benefits. It subtly references your business as a thought leader, not a direct pitch.
    * **Write Captions**: Creates friendly, expert-toned captions with engaging hooks, more context, a clear call to action (e.g., "Comment 'Workflow' for more"), and relevant hashtags.
    * **Design Text Overlays**: Produces short, punchy text overlays (3-7 words, ALL CAPS or Title Case) perfect for video thumbnails or initial screens.
6.  **Save to Google Sheet**: Each generated content package (Text Overlay, Video Script, Caption) is appended as a new row in your designated Google Sheet ("Content Idea" sheet within "Video Automation (Vansh)").
7.  **Notify User**: Finally, you'll receive an email notification confirming that new content ideas have been generated and saved to your Google Sheet.

---

### How to Set It Up

To set up this AI Viral Content Generator, follow these steps:

1.  **API Keys & Credentials**:
    * **Perplexity AI API Key**: Obtain your API key from Perplexity AI and replace the `Bearer` token in the "Topic 1", "Topic 2", and "Topic 3" HTTP Request nodes.
    * **OpenAI API Key**: Connect your OpenAI API key in n8n and link it to the "Content Generation" node.
    * **Google Sheets Account**: Ensure your Google Sheets OAuth2 API credentials are set up and connected to the "Save Data" node.
    * **Gmail Account**: Connect your Gmail OAuth2 credentials to the "Notify user" node.
2.  **Google Sheet Setup**:
    * **Copy the Google Sheet Template** provided. This template has predefined columns for "Text Overlay", "Video Script", "Caption", "Approval", and "Published".
    * Update the `documentId` in the "Save Data" Google Sheets node with the ID of *your copied template*.
3.  **Personalize "About me"**:
    * Open the **"About me" node**.
    * Fill in your **Name**, **Niche**, **Business Name**, **Business Type**, **Website**, and detailed **Key Services & Products**. This is crucial for the AI to generate relevant and personalized content.
4.  **Configure Notification Email**:
    * In the "Notify user" node, update the `sendTo` field with your email address where you want to receive notifications.
5.  **Set Schedule**:
    * The "Schedule Trigger" is set to run daily at 6 AM IST. You can adjust the time to your preference.
6.  **Activate and Monitor**:
    * Activate the workflow. It will now automatically generate content ideas daily.
    * Check your Google Sheet regularly to review the new content, mark it for approval, and track its publication status.

This workflow is your secret weapon for consistently creating engaging, AI-driven short-form video content!

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
