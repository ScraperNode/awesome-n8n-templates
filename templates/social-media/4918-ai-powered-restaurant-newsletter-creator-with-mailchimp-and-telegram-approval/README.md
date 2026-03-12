# 📱 Ai-powered restaurant newsletter creator with Mailchimp and Telegram approval

> ⚡ **524 views** · 📱 [Social Media & Email Marketing](../)

## Description

This workflow contains community nodes that are only compatible with the self-hosted version of n8n.

Who is this for?
This workflow is for restaurant owners, marketing managers, and any business owner who wants to automate the creation of high-quality, research-driven email newsletters. It's designed to save hours of manual work by leveraging AI to handle content generation, from initial idea to final send.

If you want to consistently engage your customers with fresh, relevant content but lack the time for research and writing, this template is your all-in-one solution.

What does this workflow do?
This is a comprehensive, multi-agent system that automates the entire email marketing process. It begins with a simple prompt from you and ends with a polished newsletter sent to your Mailchimp subscribers.

Initiates on a Schedule: A fully customizable Cron trigger starts the process by sending you a message on Telegram.

Asks for Your Input: The Telegram bot asks you for a single topic for the upcoming newsletter (e.g., "healthy eating," "weekend specials," or "new cocktail menu").

Conducts AI-Powered Research: Once you reply, an AI agent researches your topic using Tavily, focusing on current industry trends, food culture, and customer interests to ensure your content is fresh and relevant.

Plans the Content: The AI generates a complete table of contents for the newsletter, structuring it into engaging sections.

Writes Each Section: A dedicated AI research team then writes detailed, engaging content for each section of the newsletter, weaving in your restaurant's unique brand voice.

Assembles the Final Draft: The workflow aggregates all the generated sections into a complete newsletter draft, including a compelling subject line and a full body of text.

Requests Final Approval: It sends the complete draft to you via Telegram for a final "Approved" or "Denied" confirmation. If you provide feedback, an AI editor will revise the draft.

Sends to Mailchimp: Once approved, the workflow automatically creates a new campaign in Mailchimp and sends the final, polished email to your subscriber list.

Setup
To get this workflow running, you will need to configure a few credentials and settings.

Set Up Credentials: In your n8n instance, add credentials for the following services:

Telegram

OpenAI

Tavily

Anthropic

Mailchimp (using HTTP Basic Auth with any_string as the username and your Mailchimp API key as the password).

Configure the Telegram Bot:

Create a Telegram bot using BotFather and obtain its API token.

Find your personal Chat ID by messaging a bot like @get_id_bot.

In the HITL (Human in the Loop) Telegram node, insert your Chat ID.

Configure Mailchimp:

In the Create_Campaign HTTP Request node, find the recipients section and replace the placeholder list_id with your actual Mailchimp Audience ID.

Customize the System Prompts: This is the most important step for personalization.

Go into the AI Agent and OpenAI nodes (e.g., "Restaurant Newsletter Expert," "Newsletter Section Planner," "Restaurant Content Research Team").

In the system prompts, replace all instances of (insert restaurant name), (insert cuisine type), etc., with your own business details. This is where you inject your unique brand, menu, and voice into the AI.

How to customize this workflow
This template is powerful out of the box but is also designed to be highly flexible.

Change the Schedule: Modify the Cron trigger to run at any interval you prefer (e.g., weekly, bi-weekly, or on specific days).

Adjust the AI Models: You can easily swap the OpenAI or Anthropic models used in the workflow to different ones (e.g., change from GPT-4o-mini to GPT-4 Turbo) to balance cost and performance.

Use a Different Notification Service: Replace the Telegram nodes with Slack, email, or another service for the approval process.

Integrate a Different Email Platform: Adapt the final HTTP Request nodes to work with another email marketing provider like SendGrid, ConvertKit, or Brevo by changing the API endpoints and authentication.

Refine the AI's Personality: The core of the workflow is in the system prompts. By editing the prompts in the AI nodes, you can completely change the tone, style, and output of the generated content to perfectly match your brand.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Mailchimp, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
