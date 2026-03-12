# ⚡ Create a daily digest from Gmail, RSS, and Todoist

> ⚡ **4,039 views** · ⚡ [Personal Productivity](../)

## Description

# Create a Daily Digest of Todoist, Gmail, and RSS and Send via Gmail

## Overview
This workflow is designed to automatically generate a daily digest by aggregating information from your Gmail, RSS feeds, and Todoist. The digest summarizes your latest emails, top news headlines, and pending tasks, then sends a beautifully formatted email directly to your inbox. With daily digest automation, you start your day with a concise summary of key information, helping you stay organized and informed.

## Use Case Scenario
Imagine starting your morning with an email that provides a quick snapshot of your day's most important emails, trending news, and task list. Whether you're a busy professional, entrepreneur, or team leader, this workflow takes the hassle out of manually checking multiple platforms. Instead, you receive a curated summary that enables you to prioritize your day effectively. This workflow is ideal for professionals who want to streamline their morning routine and ensure they never miss a critical update.

## Who This Is For
- **Busy Professionals:** Stay on top of your emails, news, and tasks without juggling multiple apps.
- **Entrepreneurs:** Get a daily overview of important business updates and personal tasks.
- **Team Leaders:** Manage team tasks and communications efficiently with an automated digest.
- **Productivity Enthusiasts:** Embrace automation to enhance your daily workflow and task management.

## Workflow Details
- **Daily Trigger:** The workflow is set to run automatically every day using a Cron node configured to trigger at your desired time. This ensures your digest is delivered consistently each morning.
- **Gmail Integration:** Retrieves your latest emails using the Gmail node, then compiles them into the digest.
- **RSS Integration:** Pulls in top news headlines from your chosen RSS feed, ensuring you get the most up-to-date information.
- **Todoist Integration:** Fetches your pending tasks from Todoist to help you manage your to-do list effectively.
- **Merge & Code Nodes:** Combines the data from the different sources and uses a Code node to format the information into a well-structured HTML email. Inline CSS is used to style the digest for a clean, professional look.
- **Email Summary:** The final digest, with dynamic subject lines and detailed content sections, is sent via Gmail, providing you with a comprehensive daily update.
## Note:
Make sure to change your email address in the **To** section of the final Gmail node to send out the daily digest.

Replace: **youremail@email.com** with your own email address.

## Keywords
**daily digest automation**, **email summary**, **RSS integration**, **task management**, **Gmail automation**, **Todoist workflow**, **Cron trigger**

By implementing this workflow, you harness the power of automation to simplify your morning routine, boost productivity, and ensure you are always up-to-date with your most important information. Enjoy a seamless, automated start to your day and take your productivity to the next level!

## 🔗 Nodes Used

RSS Read, Todoist, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
