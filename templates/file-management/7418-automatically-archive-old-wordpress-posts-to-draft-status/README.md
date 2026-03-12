# 📁 Automatically archive old WordPress posts to draft status

> ⚡ **240 views** · 📁 [File Management](../)

## Description

##  Overview: Automated WordPress Post Archiving

This workflow is designed to maintain your blog's health and SEO by automatically moving old, published posts into a "draft" or "archive" state. This prevents outdated or low-traffic content from negatively impacting your site's performance and allows you to easily review and update them later.

---

## How It Works

1.  **Quarterly Trigger**: The workflow is set to run automatically on a recurring schedule, specifically on the 1st day of every 3rd month (quarterly). This ensures that your content is regularly audited without any manual intervention.
2.  **Find Old Posts**: The workflow connects to your WordPress site and fetches all published posts that are older than a specified time frame (in this case, 12 months). It uses the WordPress API's filtering capabilities to efficiently find the right content.
3.  **Check if Posts Found**: An **If** node checks if the previous step found any posts. This prevents the workflow from running further steps if there's nothing to archive. If no posts are found, the workflow ends and logs this.
4.  **Archive Post**: If posts are found, the workflow proceeds to update each one. It changes the post's status from `publish` to `draft` and automatically adds tags like `archived` and `old-content` for easy identification within your WordPress dashboard.
5.  **Send Notification**: After the archiving process is complete, the workflow sends an email notification to the administrator. This provides a summary of the activity, letting you know that the task has been completed.

---

## Setup Steps

1.  **Configure WordPress Credentials**: In both the **Find Old Posts** and **Archive Post** nodes, you need to add your WordPress credentials. This typically involves entering your site URL and creating an application password in your WordPress admin dashboard for secure API access.
2.  **Set Up Email Credentials**: In the **Send Notification** node, add your email service credentials (like SMTP or a Gmail account) to enable the workflow to send you the completion notification.
3.  **Adjust the Archiving Period**: In the **Find Old Posts** node, the current expression is `{{ $now.minus({ months: 12 }).toISO() }}` which archives posts older than 12 months. You can change the number of months to fit your content strategy (e.g., `24` for two years).
4.  **Customize Tags**: In the **Archive Post** node, you can customize the tags to better suit your needs. You can change or add new tags that will be applied to the archived posts.
5.  **Activate the Workflow**: Once all credentials and settings are configured, make sure to activate the workflow to set the quarterly schedule in motion.

## 🔗 Nodes Used

Send Email, Wordpress, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
