# 🎬 Create LinkedIn contributions with AI and notify users on Slack

> ⚡ **5,270 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow automates the process of gathering LinkedIn advice articles, extracting their content, and generating unique contributions for each article using an AI model. The contributions are then posted to a Slack channel and a NocoDB database for record-keeping. The workflow is triggered weekly to ensure new articles are continuously collected and responded to.

### Who is this for?
This workflow is designed for professionals, marketers, and content creators looking to boost their LinkedIn presence by regularly engaging with LinkedIn advice articles. It’s especially useful for those who want to be seen as a "thought leader" or "top voice" in their niche by contributing relevant and unique advice to trending topics.

### What problem is this workflow solving?
Manually searching for relevant LinkedIn articles, reading through them, and crafting thoughtful contributions can be time-consuming. This workflow solves that by automating the process of finding new articles, extracting key content, and generating AI-powered contributions. It helps users stay consistently active on LinkedIn, contributing value to trending discussions.

### What this workflow does
1. **Triggers Weekly**: The workflow is set to run every Monday at 8:00 AM.
2. **Search Google for LinkedIn Advice Articles**: Uses a predefined Google search URL to find the latest LinkedIn advice articles based on the user's area of expertise.
3. **Extract LinkedIn Article Links**: A code node extracts all LinkedIn advice article links from the search results.
4. **Retrieve Article Content**: For each article link, the workflow retrieves the HTML content and extracts the article title, topics, and existing contributions.
5. **Generate AI-Powered Contributions**: The workflow sends the extracted article content to an AI model, which generates unique, helpful advice for each topic within the article.
6. **Post to Slack & NocoDB**: The AI-generated contributions, along with the article links, are posted to a designated Slack channel and stored in a NocoDB database for future reference.

### Setup
1. **Google Search URL**: Update the Google search URL with the relevant LinkedIn advice query for your field (e.g., "site:linkedin.com/advice 'marketing automation'").
2. **Slack Integration**: Connect your Slack account and specify the Slack channel where you want the contributions to be posted.
3. **NocoDB Integration**: Set up your NocoDB project to store the generated contributions along with the article titles and links.

### How to customize this workflow
- **Change Search Terms**: Modify the Google search URL to focus on a different LinkedIn topic or expertise area.
- **Adjust Trigger Frequency**: The workflow is set to run weekly, but you can adjust the frequency by changing the schedule trigger.
- **Enhance Contribution Quality**: Customize the AI model's prompt to generate contributions that align with your brand voice or content strategy.

### Workflow Summary
This workflow helps users maintain a consistent presence on LinkedIn by automating the discovery of new advice articles and generating unique contributions using AI. It is ideal for professionals who want to engage with LinkedIn content regularly without spending too much time manually searching and drafting responses.

## 🔗 Nodes Used

Airtable, Google Sheets, HTTP Request, Slack, NocoDB, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
