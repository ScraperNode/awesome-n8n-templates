# 📋 Rss feed news processing and distribution workflow

> ⚡ **14,454 views** · 📋 [Project Management](../)

## Description

### Who is this for?

This workflow is designed for professionals and teams who need to monitor multiple RSS feeds, filter the latest content, and distribute actionable updates as a Trello comment. Ideal for content managers, marketers, and team leads managing news or content pipelines.

### What problem is this workflow solving?

Manually monitoring RSS feeds and keeping track of the latest content can be time-consuming. This workflow automates the aggregation, filtering, and distribution of news, ensuring that only relevant and timely updates are shared with your team or audience.

### What this workflow does:
1. Aggregates RSS Feeds: Pulls data from up to three RSS feeds simultaneously.
2. Filters Content: Filters articles based on their publication date (default: last 7 days).
3. Organizes and Sorts: Sorts filtered articles by date for clarity.
4. Formats Updates: Transforms news items into Markdown format for better readability.
5. Publishes and Notifies: Posts comments to Trello cards and sends an email to a moderator to check the comment.

### Setup:
1. Connect your RSS feeds by configuring the RSS Read nodes.
2. Link your Trello and Gmail accounts for seamless integration.
3. Adjust the schedule trigger to set how often the workflow should run (e.g., daily, weekly).
4. Test the workflow to ensure all connections and configurations are correct.

### How to customize this workflow to your needs:
- Change the Number of RSS Feeds: Add or remove RSS Read nodes and update the merge configuration accordingly.
- Adjust the Date Filter: Modify the date logic in the “Filter by date” node to include more or fewer days.
- Limit the Number of Articles: Adjust the limit in the “Limit news to x” node.
- Custom Formatting: Update the Transform node to format the news items differently.
- Alternative Notifications: Replace Trello and Gmail with other integrations, such as Slack or Microsoft Teams.

This workflow ensures your team stays informed with minimal effort and delivers content updates in an organized and professional manner.

## 🔗 Nodes Used

RSS Read, Trello, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
