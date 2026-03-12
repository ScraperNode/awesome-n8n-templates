# ⚒️ AI-powered code review with linting, red-marked corrections in Google Sheets & Slack

> ⚡ **129 views** · ⚒️ [Engineering](../)

## Description

## Advanced Code Review Automation (AI + Lint + Slack)

### Who’s it for
For software engineers, QA teams, and tech leads who want to **automate intelligent code reviews** with both AI-driven suggestions and rule-based linting — all managed in Google Sheets with instant Slack summaries.

### How it works
This workflow performs a two-layer review system:
1. **Lint Check**: Runs a lightweight static analysis to find common issues (e.g., use of `var`, `console.log`, unbalanced braces).
2. **AI Review**: Sends valid code to Gemini AI, which provides human-like review feedback with severity classification (`Critical`, `Major`, `Minor`) and visual highlights (red/orange tags).
3. **Formatter**: Combines lint and AI results, calculating an overall score (0–10).
4. **Aggregator**: Summarizes results for quick comparison.
5. **Google Sheets Writer**: Appends results to your review log.
6. **Slack Notification**: Posts a concise summary (e.g., number of issues and average score) to your team’s channel.

### How to set up
1. Connect **Google Sheets** and **Slack** credentials in n8n.
2. Replace placeholders (`&lt;YOUR_SPREADSHEET_ID&gt;`, `&lt;YOUR_SHEET_GID_OR_NAME&gt;`, `&lt;YOUR_SLACK_CHANNEL_ID&gt;`).
3. Adjust the AI review prompt or lint rules as needed.
4. Activate the workflow — reviews will start automatically whenever new code is added to the sheet.

### Requirements
- Google Sheets and Slack integrations enabled
- A configured AI node (Gemini, OpenAI, or compatible)
- Proper permissions to write to your target Google Sheet

### How to customize
- Add more linting rules (naming conventions, spacing, forbidden APIs)
- Extend the AI prompt for project-specific guidelines
- Customize the Slack message formatting
- Export analytics to a dashboard (e.g., Notion or Data Studio)

### Why it’s valuable
This workflow brings **realistic, team-oriented AI-assisted code review** to n8n — combining the speed of automated linting with the nuance of human-style feedback. It saves time, improves code quality, and keeps your team’s review history transparent and centralized.

## 🔗 Nodes Used

Function, Google Sheets, Slack, Google Sheets Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
