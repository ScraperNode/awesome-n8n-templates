# ⚙️ Automatic email notifications for n8n version releases with Gmail

> ⚡ **312 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## 📢 Monitor n8n releases and get notifications for new versions 🆕

This workflow automatically monitors n8n’s release channels (latest and beta) and sends you email notifications whenever a new version is published. It also reads the version of your current n8n instance, allowing you to integrate automatic updates and ensure you never miss a release.

### Who is this for
This workflow is designed for n8n users who want to stay informed and up to date with new releases and features without manually checking for updates, especially those managing their own instances who need to plan upgrades and review release notes.

### How it works
The workflow performs the following steps:
- **Fetches version information from the npm registry** (latest and beta releases)
- **Identifies only new versions** by deduplication
- **Retrieves release notes from GitHub** for any newly detected version
- **Converts Markdown to HTML** for email template formatting
- **Sends a styled email notification** including the release name, version tag, your current version, and the complete release notes

### Setup
- Configure your n8n instance URL (Set `my_n8n_url`) to detect your current version (optional — can be left blank)
- Connect and authorize the Gmail account used to send emails
- Update the recipient email address in the Gmail node

### Requirements
- A Gmail account for sending emails

### Customization tips
- Adjust the schedule trigger if hourly checks are too frequent
- Modify the release channel (e.g., “latest” or “beta”) if you want to track a different tag
- Change the npm registry link if you want to monitor a different package
- Customize the email template/styling in the Gmail node
- Add additional notification channels (Slack, Discord, etc.) alongside or instead of email
- Extend this workflow to automatically update your n8n instance when a new release becomes available

### Need help?
If you're facing any issues using this workflow, [join the community discussion on the n8n forum.](https://community.n8n.io/t/monitor-n8n-releases-and-get-notifications-for-new-versions/225265)

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
