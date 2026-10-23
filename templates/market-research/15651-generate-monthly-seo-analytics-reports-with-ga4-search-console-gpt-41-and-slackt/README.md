# 📊 Generate monthly SEO analytics reports with GA4, Search Console, GPT-4.1 and Slack/Teams

> ⚡ **69 views** · 📊 [Market Research & Insights](../)

## Description

## Who it's for
This advanced **n8n workflow** is designed for **SEO specialists**, **digital agency owners**, **webmasters**, and **marketing managers** who need a comprehensive, automated solution to track and improve their website's search engine performance. It acts as a virtual SEO analyst, automatically gathering data from multiple sources (Google Analytics, Search Console, PageSpeed Insights, and technical audits), analyzing them with AI agents, and delivering actionable insights via various communication channels.

## Features
*   **Multi-Source Data Collection**: Automatically fetches data from Google Analytics (GA4), Google Search Console, PageSpeed Insights, and performs on-page technical audits.
*   **Dual Trigger Modes**: Run the report automatically on a monthly schedule or trigger it instantly via Telegram by sending an "SEO Analysis" command.
*   **AI-Powered Analysis**: Utilizes specialized LangChain Agents (Analytics, Performance, SEO, Technical) to analyze raw data and generate human-readable insights.
*   **History Tracking**: Reads and writes historical data to Google Sheets, allowing AI agents to compare current performance against past data for trend analysis.
*   **Technical SEO Audit**: Crawls the website homepage to extract meta tags, headings (H1), and image alt attributes to calculate an on-page SEO score.
*   **Executive Summaries**: Generates a comprehensive "Master Analyst" report that aggregates findings from all agents into a unified action plan.
*   **Multi-Channel Reporting**: Sends the final SEO report simultaneously to Slack, Microsoft Teams, Discord, WhatsApp (via Rapiwa), and Telegram.
*   **Smart Filtering**: Includes Telegram verification logic to restrict report generation to authorized admins or alert the admin when a user requests an analysis.

## Requirements
*   **Google APIs**: Credentials for Google Analytics (GA4), Google Search Console, and Google Sheets OAuth2.
*   **OpenAI API**: Required for the LangChain Agents (using models like `gpt-4.1-mini` and `gpt-4.1-nano`) to process data and generate insights.
*   **Telegram API**: For triggering the workflow and receiving the final report.
*   **Slack API**: To post messages to a specific Slack channel.
*   **Microsoft Teams API**: To send notifications to a Team or channel.
*   **Discord Bot API**: To post rich embed updates to a Discord server.
*   **Rapiwa (WhatsApp)**: To send the report via WhatsApp messages.

## Important Notes
*   **Permissions**: Ensure your Google Cloud Project has access to the specific View ID for Analytics and the Site URL for Search Console.
*   **Telegram Setup**: You must update the `Chat ID` in the "Send SEO Report Message" node to ensure the report goes to the correct recipient. The workflow includes a check to validate the user ID against an admin list.
*   **Data Aggregation**: The workflow uses a "Merge" node to combine outputs from four different AI agents. Ensure all agents complete successfully before the merge step.
*   **Sheet ID**: The Google Sheets nodes (`Append row`, `Get GA History`, etc.) require the specific Document ID and Sheet Name to be populated to read/write history correctly.
*   **Target Domain**: Update the `Edit Fields (Add Your Target Website URL)` node with your specific domain (e.g., `https://yourwebsite.com`) before activating.

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spapgreen)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Telegram Trigger, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
