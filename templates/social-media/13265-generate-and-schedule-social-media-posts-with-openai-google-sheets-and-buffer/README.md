# 📱 Generate and schedule social media posts with OpenAI, Google Sheets and Buffer

> ⚡ **99 views** · 📱 [Social Media & Email Marketing](../)

## Description

Automate your social media content pipeline from idea to scheduled post. This workflow reads content ideas from a Google Sheet, uses OpenAI to generate platform-optimized posts for LinkedIn, X (Twitter), and Facebook, then schedules them via Buffer — all with Slack notifications and error tracking.

Key features:
- Multi-platform optimization: Tailors content length, tone, and hashtags for each social network.
- Automated scheduling: Direct integration with Buffer for hands-off publishing.
- Robust error handling: Updates your sheet with failure logs and alerts Slack if something goes wrong.
- Batch processing: Handles multiple content rows in a single execution.

What's next:
- Add human-in-the-loop verification before publishing.
- Add multiple data sources (e.g., Reddit, Medium).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
