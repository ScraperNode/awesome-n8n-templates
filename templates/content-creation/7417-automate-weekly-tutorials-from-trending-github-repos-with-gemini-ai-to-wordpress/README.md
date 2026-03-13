# 🎬 Automate weekly tutorials from trending GitHub repos with Gemini AI to WordPress

> ⚡ **800 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview: GitHub to WordPress Tutorial Generator

This workflow automates the process of creating technical tutorials for your blog. It runs on a weekly schedule, automatically identifies trending GitHub repositories, uses an AI to generate a detailed tutorial for each one, and then saves the content as a draft post on your WordPress site. Finally, it sends you an email notification so you can review and publish the new content. This is an excellent way to keep your blog fresh with relevant, trending topics without manual effort.

***

## How It Works

1.  **Weekly Trigger**: The workflow is set to activate every Monday at 10 AM, starting the entire process.
2.  **Get Trending Repositories**: The workflow makes an **HTTP request** to the GitHub API to find the most popular repositories.
3.  **Split Items**: The **Split** node processes the list of repositories from the GitHub API, handling each one as a separate item. This ensures that a unique tutorial is created for every trending repository.
4.  **AI Tutorial Generation**: The **AI Tutorial Generator** node, powered by the **Google Gemini Chat Model**, takes the information for each repository and, following a detailed prompt, creates a comprehensive tutorial. The prompt instructs the AI to include an introduction, prerequisites, code examples, best practices, and more.
5.  **Format Content**: A **Code** node then processes the AI's output. It extracts the title and content, ensuring the data is correctly formatted for the next steps. It's a key step to handle potential variations in the AI's output.
6.  **Create WordPress Post**: The **WordPress** node takes the formatted tutorial content and creates a new post on your blog, automatically setting the title, tags, and categories. It's saved as a **draft**, allowing you to review and edit it before publishing.
7.  **Send Notification**: Once the post is created, the **Email** node sends a notification to your email address, letting you know a new tutorial is ready for your review.

***

## Setup Steps

1.  **Configure WordPress Credentials**: In the **Create Tutorial Post** node, add your WordPress credentials. This includes your site URL, username, and application password.
2.  **Set Up Email Credentials**: In the **Notify Admin** node, add your email service credentials (e.g., SMTP, Gmail) to enable sending email notifications.
3.  **Configure GitHub API Access**:
    * **Manual Mapping**: Run the **Get Trending Repos** node once to get sample data.
    * In the **Split Repository Items** node, manually map the data by setting the **"Field to Split Out"** to `json.items`. This tells the workflow to process each repository in the API response.
    * **Optional**: For higher API limits, you can create a GitHub Personal Access Token and configure the **Get Trending Repos** node to use it.
4.  **Review AI Prompt**: Go to the **AI Tutorial Generator** node and read the system message. You can adjust the prompt to change the style, length, or content of the tutorials the AI generates.

## 🔗 Nodes Used

Send Email, HTTP Request, Wordpress, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
