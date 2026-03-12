# 👥 Automate employee birthdays & work anniversaries with Google Gemini and Slack

> ⚡ **303 views** · 👥 [HR & Recruitment](../)

## Description

# Replace BillyBot: Free Slack Employee Birthday & Anniversary Automation

## Who's it for

HR teams, team leaders, and operations managers looking to automate employee celebrations without expensive third-party tools like BillyBot. Perfect for startups to enterprise teams wanting to save $600-2,400+ annually while maintaining personalized, engaging employee recognition.

## What it does

This workflow automatically monitors your employee database daily and posts AI-generated, unique celebration messages to Slack for birthdays and work anniversaries. Unlike generic bots, it creates personalized messages that never repeat, rotating through 12 different styles and tones to keep celebrations fresh and authentic.

## How it works

1. **Daily Check**: Runs every morning at 9 AM to scan your employee Google Sheet
2. **Smart Filtering**: Matches today's date against employee birthdays and joining dates
3. **Data Aggregation**: Collects all celebrating employees into a single payload
4. **AI Generation**: Google Gemini creates unique, heartfelt messages with proper Slack formatting
5. **Auto-Post**: Sends personalized celebrations directly to your chosen Slack channel

The AI ensures no two messages feel templated, calculating years of service for anniversaries and adapting tone based on tenure length.

## Requirements

- **Google Sheets** with employee data (columns: NO, Name, Email, Date of Birth, Joining Date in YYYY-MM-DD format)
- **Slack workspace** with bot permissions to post messages
- **Google Gemini API key** (free tier included)
- **n8n Cloud** ($20/month) or self-hosted n8n (free)

## Cost comparison: Save $600-2,400+ per year

**BillyBot pricing**: $1 per employee/month
- 50 employees = $600/year
- 100 employees = $1,200/year  
- 200 employees = $2,400/year

**This solution**: $0-20/month (unlimited employees)
- Google Gemini API: FREE
- Google Sheets API: FREE
- Slack API: FREE
- n8n: $20/month (Cloud) or $0 (self-hosted)

**Your savings**: 95-100% cost reduction regardless of team size.

## Setup instructions

1. **Create Google Sheet**: Add columns: NO, Name, Email, Date of Birth, Joining Date (ensure dates are YYYY-MM-DD format)
2. **Connect Google Sheets**: Authenticate your Google account in the "Get row(s) in sheet" node
3. **Set up Slack**: Create a Slack bot with `chat:write` permission and add to your celebration channel
4. **Configure Gemini**: Add your Google Gemini API key to the "Google Gemini Chat Model" node
5. **Adjust Schedule**: Change trigger time in "Schedule Trigger" node (default: 9 AM daily)
6. **Select Channel**: Update Slack channel in "Send a message" node to your desired celebration channel
7. **Test**: Run workflow manually to verify messages post correctly

## Customization options

- **Change celebration time**: Modify the Schedule Trigger to any hour (e.g., 8 AM for morning celebrations)
- **Adjust message tone**: Edit the AI Agent system prompt to match your company culture (formal, casual, playful)
- **Multi-channel posting**: Duplicate the Slack node to post to multiple channels (e.g., company-wide + team-specific)
- **Add upcoming reminders**: Modify the IF node to check for celebrations within 7 days
- **Include photos**: Extend the workflow to pull employee photos from your HR system
- **Custom emoji styles**: Update the AI prompt to use your organization's custom Slack emojis

## Key features

- 12 rotating message styles prevent repetition
- Automatic tenure calculation for work anniversaries
- Culturally inclusive and professional tone
- Mobile-optimized message length (1-3 lines)
- Slack markdown formatting for visual appeal
- Scales infinitely without additional cost

---

**Note**: Ensure your Google Sheet date formats are consistent (YYYY-MM-DD) for accurate date matching. The workflow processes dates in MM-DD format to match across years automatically.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
