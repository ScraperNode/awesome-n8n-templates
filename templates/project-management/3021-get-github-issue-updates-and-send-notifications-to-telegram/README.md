# 📋 Get GitHub issue updates and send notifications to Telegram

> ⚡ **2,046 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

## **Who is this for?**  
This workflow is ideal for:  
- **Developers** who want to stay updated on issues without constantly checking GitHub.
- **Managers** tracking issue progress in a Telegram group.   
 - **DevOps teams** that need automated notification alerts for new or updated issues.

## **What problem does this workflow solve?**  
Keeping track of GitHub issues manually can be tedious. Teams often miss critical updates because notifications are buried in emails or dashboards. This workflow automates the process by fetching new or open GitHub issues and instantly sending notifications to a specified Telegram chat.  

## **What this workflow does**  
This workflow connects GitHub and Telegram to provide real-time issue notifications:  
1. **Fetch GitHub Issues** – Retrieves new or open issues from a selected GitHub repository.  
2. **Format the Issue Details** – Extracts key information like issue title, number, status, and URL.  
3. **Send to Telegram** – Posts the formatted issue details to a Telegram group or private chat.  

## **Setup Guide**  

### **Prerequisites**  
Before setting up the workflow, ensure you have:  
- **GitHub Personal Access Token**: Required to fetch issue details. Generate it under Developer Settings with `repo` or `public_repo` permissions.  
- **Telegram Bot Token**: Create a bot via [BotFather](https://t.me/BotFather) on Telegram and obtain the token.  
- **Telegram Chat ID**: Find the chat ID where the bot should send messages using [this method](https://t.me/getmyid_bot).  

### **Step-by-Step Setup**  

1. **Set Up GitHub Node**  
   - Authenticate using your GitHub token.  
   - Choose the repository you want to track.  
   - Configure filters (e.g., fetch only open issues).  

2. **Format Issue Details**  
   - Extract key details like title, issue number, assignee, and status.  
   - Customize the message structure for better readability.  

3. **Send Message to Telegram**  
   - Add the Telegram node and enter your bot token.  
   - Use the Chat ID to define the recipient.  
   - Format the message to include issue details and links.  

4. **Schedule the Workflow** (Optional)  
   - Use the **Cron node** to run this workflow periodically (e.g., every hour).  

## **How to Customize This Workflow**  
- **Filter Issues by Labels**: Modify the GitHub node to fetch only issues with specific labels.  
- **Include Additional Fields**: Add issue comments, priority, or assignee details in the message.  
- **Send Alerts Based on Priority**: Use conditional logic to send high-priority issues to a different chat.  
- **Trigger on Issue Events**: Instead of fetching periodically, use GitHub webhooks (if permitted in the repo) to trigger the workflow on issue creation or updates.  

## **Why Use This Workflow?**  
- **Automates GitHub issue tracking** without manually checking repositories.  
- **Instant notifications in Telegram** ensure quick response times.  
- **Fully customizable** to fit different team workflows.

## 🔗 Nodes Used

GitHub, Telegram, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
