# 🎬 Automate trend research to blog content with GPT-4o, DALL-E & Apify to Notion

> ⚡ **186 views** · 🎬 [Content Creation & Video](../)

## Description

AI Editor-in-Chief: Trend Research to 3 Notion Blog Drafts
This workflow acts as your personal "AI Editor-in-Chief," fully automating the process from trend research to content creation. It scrapes Google Search results and generates three distinct article drafts (with different angles) complete with AI-generated cover images, saving everything directly to Notion.
🎯 Target Audience
Bloggers & Affiliate Marketers: Individuals who struggle with writer's block and want to maintain a consistent posting schedule.
Content Marketers & Editors: Teams running owned media who need to efficiently generate high-volume article ideas and drafts based on trends.
SEO Specialists: Professionals who need to quickly create content based on the latest search keywords.
⚙️ How it Works & Features
This workflow automates the entire editorial process:
Automated Research: Scrapes top Google Search results for a specific keyword (e.g., "2025 AI Tools") using Apify.
Multi-Angle Planning: GPT-4o analyzes the research and brainstorms article concepts from 3 different perspectives (e.g., "Beginner's Guide," "Critical Review," "Business Use Case").
Writing & Visualizing: For each concept, the AI writes a full article body in Markdown and DALL-E 3 generates a matching cover image.
CMS Entry: Automatically saves the Title, Body Text, and Cover Image URL into a Notion database as a draft.
Notification: Sends a completion report with links to the created Notion pages via Slack.
🛠 Setup Instructions
Import: Copy the workflow JSON and paste it into your n8n editor.
Credentials: Set up credentials for the following nodes:
Apify: Required for the Google Search Scraper actor.
OpenAI: Required for GPT-4o and DALL-E 3.
Notion: Connect your account to access your database.
Slack: Connect your account for notifications.
Configuration:
Open the Workflow Configuration node and set your desired Search Keyword.
Notion Setup:
Create a database in Notion (with properties for Title, Content, etc.).
Crucial Step: Go to the Notion database page menu ... &gt; Connect to and select your n8n integration to grant permission.
Select this database in the Save Article to Notion node.
Slack Setup:
In the Send Completion Notification to Slack node, specify the target channel name (e.g., general).
📦 Requirements
n8n Version: v1.0 or higher (recommended).
Apify Account: Access to the apify/google-search-scraper actor.
OpenAI Account: API access to GPT-4o and DALL-E 3.
Notion Account: A workspace with a database.
Slack Account: A workspace for receiving notifications.
🔧 Customization
Change Keywords: Simply update the searchKeyword value in the Workflow Configuration node to target any topic (e.g., "Keto Diet," "Tech Gadgets," "Investment Trends").
Adjust Angles: Modify the System Prompt in the AI Editorial Meeting node to change the persona or angles (e.g., "Pros & Cons," "Global Reaction," "Tutorial").
Change Destination: You can replace the Notion node with a WordPress node to draft articles directly into your CMS.
Scheduling: Update the Schedule Trigger node to run daily, weekly, or on specific days as needed.

## 🔗 Nodes Used

Slack, Notion, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
