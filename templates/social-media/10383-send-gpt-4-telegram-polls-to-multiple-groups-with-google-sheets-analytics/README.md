# 📱 Send GPT-4 Telegram polls to multiple groups with Google Sheets analytics

> ⚡ **6 views** · 📱 [Social Media & Email Marketing](../)

## Description

An enterprise-grade n8n workflow that leverages OpenAI GPT-4 to generate contextually relevant poll questions and automatically distributes them across multiple Telegram groups and channels. Includes comprehensive analytics tracking, smart error handling, real-time admin notifications, and priority-based topic scheduling.

Perfect for community managers, HR teams, educators, marketing departments, and organizations running multiple Telegram communities who want to maintain consistent engagement without manual effort.

### How it works

1. **Schedule Trigger** - Fires on a configurable cron (default: 9 AM & 5 PM weekdays)
2. **Load Topic Queue** - Reads priority-ranked topics from Google Sheets topic registry
3. **Select Best Topic** - Picks the highest-priority, freshest topic with 24-hour dedup guard
4. **GPT-4 Poll Generation** - Creates engaging, on-brand poll questions with emoji options
5. **Validate Poll** - Enforces Telegram API limits and content safety before sending
6. **Multi-Group Deploy** - Distributes poll + context message to every enabled Telegram group
7. **Analytics Logging** - Writes per-poll deployment stats to Google Sheets
8. **Admin Telegram Alert** - Sends real-time deploy summary to admin chat
9. **Topic Queue Update** - Marks topic used, updates next-scheduled date

### Google Sheets Setup
**Sheet 1 — Topic Queue:** `topic | category | priority | language | tone | targetAudience | lastUsed | usageCount | enabled`
**Sheet 2 — Group Registry:** `groupId | groupName | groupType | language | enabled`
**Sheet 3 — Analytics Log:** `pollId | topic | question | totalGroups | successfulGroups | successRate | completedAt`

### Credentials Needed
- **OpenAI API** — GPT-4o poll generation
- **Telegram Bot API** — Sending polls and messages
- **Google Sheets** — Topic queue, group registry, analytics
- **SMTP** — Error alert emails

### Key Features
- Priority-based topic scheduling with staleness detection
- Telegram API constraint enforcement (255 char question, 100 char options)
- Per-group error isolation — one failed group never blocks others
- Real-time admin Telegram notification with success/fail breakdown
- Full SOC-ready audit log for every poll deployment


**Explore More Automation:**
[Contact us](https://www.oneclickitsolution.com/contact-us/) to design AI-powered lead nurturing, content engagement, and multi-platform reply workflows tailored to your growth strategy.

## 🔗 Nodes Used

Send Email, Google Sheets, Telegram, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
