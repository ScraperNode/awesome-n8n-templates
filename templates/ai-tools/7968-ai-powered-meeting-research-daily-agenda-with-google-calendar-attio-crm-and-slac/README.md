# 🎯 AI-powered meeting research & daily agenda with Google Calendar, Attio CRM, and Slack

> ⚡ **706 views** · 🎯 [AI Summarization & Classification](../)

## Description

## Research meeting attendees and prepare daily agenda in Slack

This workflow automatically researches your meeting attendees every morning and sends you a comprehensive brief in Slack with context about who you're meeting, their company, and key talking points.

## Who's it for

- Sales professionals who need quick context before meetings
- Executives with packed calendars who need meeting preparation
- Customer success teams managing multiple client relationships
- Account managers preparing for client calls
- Business development teams researching prospects
- Anyone who wants to be better prepared for their daily meetings

## How it works

1. **Daily Trigger**: Runs every weekday morning at 6 AM (customizable) to analyze your Google Calendar
2. **Calendar Analysis**: Fetches all meetings scheduled for today and filters for external meetings (those with attendees other than yourself)
3. **AI-Powered Research**: For each external meeting, an AI agent researches attendees using multiple sources:
   - Searches your CRM (Attio) for existing contact information
   - Queries Gmail history for past email interactions
   - Searches past calendar events for previous meetings with attendees
   - Performs web searches for recent news about attendees and their companies
   - Retrieves company data from Apollo.io including industry, size, and technologies
4. **CRM Updates**: Automatically creates new contact records in Attio for unknown attendees and adds meeting preparation notes to existing contacts
5. **Brief Generation**: Compiles all research into a scannable, actionable meeting brief with key talking points
6. **Slack Delivery**: Sends the formatted brief to your designated Slack channel for easy mobile access

## Setup requirements

- **Google Calendar** OAuth2 connection (for fetching meetings)
- **Slack** workspace with bot permissions (for receiving briefs)
- **Gmail** OAuth2 connection (for email history search)
- **OpenRouter** API key (for AI processing)
- **Attio CRM** account and API token (optional - for contact management)
- **Apollo.io** API key (optional - for company research)
- **Anthropic** API key (optional - for advanced web search)

## How to customize

1. **Adjust Schedule**: Modify the Schedule Trigger node to run at your preferred time - change from 6 AM to whenever works best for your schedule
2. **Customize Research Sources**: 
   - Remove CRM integration if you don't use Attio
   - Remove Apollo.io if you don't need company research
   - Add additional research tools as needed
3. **Modify Output Format**: Edit the prompt in "Format Daily Meeting Brief" node to change how the information is structured and presented
4. **Change Delivery Method**: 
   - Replace Slack with Microsoft Teams, email, or Discord
   - Add multiple delivery channels if needed
   - Send to different channels based on meeting type
5. **Filter Meetings**: Adjust the filtering logic to include/exclude certain types of meetings based on keywords, attendees, or calendar properties

## Advanced customization

- **Add VIP alerts**: Create special handling for meetings with executives or key clients
- **Include preparation documents**: Automatically attach relevant files from Google Drive
- **Time zone handling**: Adjust for meetings across different time zones
- **Language support**: Modify prompts to generate briefs in different languages

## 🔗 Nodes Used

HTTP Request, Slack, Google Calendar, Schedule Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
