# 📋 AI meeting summary & action item tracker with Notion, Slack, and Gmail

> ⚡ **553 views** · 📋 [Project Management](../)

## Description

## How it Works
This workflow accepts meeting transcripts via webhook (Zoom, Google Meet, Teams, Otter.ai, or manual notes), immediately processing them through an intelligent pipeline that eliminates post-meeting admin work. The system parses multiple input formats (JSON, form data, transcription outputs), extracting meeting metadata including title, date, attendees, transcript content, duration, and recording URLs.

OpenAI analyzes the transcript to extract eight critical dimensions: executive summary, key decisions with ownership, action items with assigned owners and due dates, discussion topics, open questions, next steps, risks/blockers, and follow-up meeting requirements—all returned as structured JSON. The intelligence engine enriches each action item with unique IDs, priority scores (weighing urgency + owner assignment + due date), status initialization, and meeting context links, then calculates a completeness score (0-100) that penalizes missing owners and undefined deadlines.

Multi-channel distribution ensures visibility: Slack receives formatted summaries with emoji categorization for decisions (✅), action items (🎯) with priority badges and owner assignments, and completeness scores (📊). Notion gets dual-database updates—meeting notes with formatted decisions and individual task cards in your action item database with full filtering and kanban capabilities. Task owners receive personalized HTML emails with priority color-coding and meeting context, while Google Calendar creates due-date reminders as calendar events.

Every meeting logs to Google Sheets for analytics tracking: attendee count, duration, action items created, priority distribution, decision count, completeness score, and follow-up indicators. The workflow returns a JSON response confirming successful processing with meeting ID, action item count, and executive summary. The entire pipeline executes in 8-12 seconds from submission to full distribution.

---

## Who is this for?
- Product and engineering teams drowning in scattered action items across tools
- Remote-first companies where verbal commitments vanish after calls
- Executive teams needing auditable decision records without dedicated note-takers
- Startups juggling 10+ meetings daily without time for manual follow-up
- Operations teams tracking cross-functional initiatives requiring accountability

---

## Setup Steps
- **Setup time:** 25-35 minutes
- **Requirements:** OpenAI API key, Slack workspace, Notion account, Google Workspace (Calendar/Gmail/Sheets), optional transcription service

1. **Webhook Trigger:** Automatically generates URL, configure as POST endpoint accepting JSON with title, date, attendees, transcript, duration, recording_url, organizer
2. **Transcription Integration:** Connect Otter.ai/Fireflies.ai/Zoom webhooks, or create manual submission form
3. **OpenAI Analysis:** Add API credentials, configure GPT-4 or GPT-3.5-turbo, temperature 0.3, max tokens 1500
4. **Intelligence Synthesis:** JavaScript calculates priority scores (0-40 range) and completeness metrics (0-100), customize thresholds
5. **Slack Integration:** Create app with `chat:write` scope, get bot token, replace channel ID placeholder with your #meeting-summaries channel
6. **Notion Databases:** Create "Meeting Notes" database (title, date, attendees, summary, action items, completeness, recording URL) and "Action Items" database (title, assigned to, due date, priority, status, meeting relation), share both with integration, add token
7. **Email Notifications:** Configure Gmail OAuth2 or SMTP, customize HTML template with company branding
8. **Calendar Reminders:** Enable Calendar API, creates events on due dates at 9 AM (adjustable), adds task owner as attendee
9. **Analytics Tracking:** Create Google Sheet with columns for Meeting_ID, Title, Date, Attendees, Duration, Action_Items, High_Priority, Decisions, Completeness, Unassigned_Tasks, Follow_Up_Needed
10. **Test:** POST sample transcript, verify Slack message, Notion entries, emails, calendar events, and Sheets logging

---

## Customization Guidance
- **Meeting Types:** Daily standups (reduce tokens to 500, Slack-only), sprint planning (add Jira integration), client calls (add CRM logging), executive reviews (stricter completeness thresholds)
- **Priority Scoring:** Add urgency multiplier for &lt;48hr due dates, owner seniority weights, customer impact flags
- **AI Prompt:** Customize to emphasize deadlines, blockers, or technical decisions; add date parsing for phrases like "by end of week"
- **Notification Routing:** Critical priority (score &gt;30) → Slack DM + email, High (20-30) → channel + email, Medium/Low → email only
- **Tool Integrations:** Add Jira/Linear for ticket creation, Asana/Monday for project management, Salesforce/HubSpot for CRM logging, GitHub for issue creation
- **Analytics:** Build dashboards for meeting effectiveness scores, action item velocity, recurring topic clustering, team productivity metrics
- **Cost Optimization:** ~1,200 tokens/meeting × $0.002/1K (GPT-3.5) = $0.0024/meeting, use batch API for 50% discount, cache common patterns

---

Once configured, this workflow becomes your team's institutional memory—capturing every commitment and decision while eliminating hours of weekly admin work, ensuring accountability is automatic and follow-through is guaranteed.

---

**Built by Daniel Shashko**  
[Connect on LinkedIn](https://www.linkedin.com/in/daniel-shashko/)

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Calendar, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
