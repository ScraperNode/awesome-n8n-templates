# 📊 Transform NASA patents into business ideas with OpenAI and send to Google Sheets & Slack

> ⚡ **127 views** · 📊 [Market Research & Insights](../)

## Description

Who is this for
Entrepreneurs looking for verified technology to license.
R&D Teams tracking aerospace innovation.
Content Creators covering tech trends.
How it works
Fetch: Gets the latest patents from NASA's Tech Transfer API.
Filter & Loop: Removes empty entries and processes each patent individually.
Analyze: Translates the abstract (DeepL) and uses OpenAI to brainstorm practical business applications.
Archive: Saves the details to Google Sheets.
Notify: Compiles a summary and sends it to Slack.
How to set up
Prepare Google Sheet: Create a new sheet with these exact headers in Row 1:
Date
Title
Abstract_Translated
Business_Idea
Link
Edit Settings: Double-click the Edit Settings node to add your Google Sheet ID, Sheet Name, and Slack Channel ID.
Credentials: Configure credentials for OpenAI, DeepL, Google Sheets, and Slack.
Activate: Run a test execution, then switch the workflow to Active.
Requirements
OpenAI: API Key (gpt-4o or gpt-3.5-turbo)
DeepL: API Key (Free or Pro)
Google Sheets: OAuth2 credentials with Drive/Sheets scopes.
Slack: Bot User OAuth Token with chat:write scope.
How to customize
Change the Prompt: Edit the Generate Business Ideas node to tailor ideas for a specific niche (e.g., "Applications for medical devices").
Adjust Schedule: Change the trigger in the Weekly Schedule node to run daily or monthly.
Different Output: Swap Slack for Microsoft Teams or Email nodes if preferred.

## 🔗 Nodes Used

Google Sheets, Slack, NASA, DeepL, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
