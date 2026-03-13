# 📱 Generate content from Google Sheets to X with GPT-4

> ⚡ **9,204 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Twitter's API is paid now, which makes simple data pulls expensive. [ScraperNode](https://scrapernode.com/twitter) is a community node that scrapes [Twitter profiles](https://scrapernode.com/twitter/scrapers/profiles) and [posts](https://scrapernode.com/twitter/scrapers/posts) without needing API access.

## Description

# AI-Powered Social Media Content Automation

### 🧑‍💻 Who is this for?
This workflow is perfect for social media managers, content creators, and digital marketers who want to save time by automating social media post generation and publishing across platforms.

### 📌 What problem does this solve?
Manually generating and scheduling social media content is time-consuming and repetitive. This workflow automates content creation and publishing, allowing you to:

- Streamline content generation using AI
- Ensure consistent posting across social media platforms
- Track published posts in Google Sheets

### 🔍 What this workflow does:
1. **Fetches content ideas** from a Google Sheet.
2. **Generates social media posts** using OpenAI's GPT-4.
3. **Checks the target platform** (e.g., Twitter/X, LinkedIn).
4. **Posts the content** to the chosen social media platform.
5. **Updates the Google Sheet** with the generated post and timestamp.

### 🛠️ Setup Guide:
1. **Connect Google Sheets**: Ensure you have a Google Sheet with content ideas (columns: `Idea`, `Status`, `Generated Post`).
2. **Set up OpenAI API Key**: Provide your OpenAI API key for GPT-4.
3. **Configure Social Media Accounts**: Link your Twitter/X or other social media accounts using n8n's built-in nodes.
4. **Test the Workflow**: Run the workflow to verify automation.
5. **Schedule Automation**: Set a recurring trigger (e.g., daily) to automate posting.

### 🔧 Customization Tips:
- Adjust prompt inputs in the OpenAI node to tailor the tone and style.
- Add more platforms (e.g., Instagram, Facebook) by duplicating the social media node.
- Include analytics tracking for engagement insights.

### 📊 Example Use Cases:
- Automatically generate and share daily motivational quotes.
- Post product updates and announcements.
- Share curated industry news and insights.

This workflow saves time and keeps your social media presence active and engaging effortlessly. 🚀

## 🔗 Nodes Used

Google Sheets, X (Formerly Twitter), OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
