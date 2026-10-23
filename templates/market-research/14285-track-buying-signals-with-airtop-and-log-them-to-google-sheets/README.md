# 📊 Track buying signals with Airtop and log them to Google Sheets

> ⚡ **33 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This powerful automation helps you stay ahead of the competition by identifying sales opportunities in real-time. Here’s how it works:

*   **Reads Your Targets**: It starts by reading a list of target companies and your custom-defined buying signals from a Google Sheet you provide.
*   **Scans Multiple Sources**: For each company, the automation scours the web, pulling data from:
    *   **LinkedIn Job Postings**: To find signals related to team growth, new initiatives, and technology adoption.
    *   **LinkedIn Company Posts**: To catch announcements, product news, and other strategic updates.
    *   **Web News Articles**: To monitor for major events like M&A, funding rounds, and market expansion.
*   **AI-Powered Analysis**: An advanced AI model acts as an analyst, meticulously evaluating all the collected information against your signal definitions to identify genuine buying intent.
*   **Avoids Duplicates**: To ensure your signal feed is clean and actionable, the automation intelligently checks if a newly found signal has already been logged recently.
*   **Logs Opportunities**: New, unique buying signals are instantly recorded in your Google Sheet, creating a dynamic, up-to-date list of warm leads for your sales team.

## Usage Ideas

*   **Proactive Sales Outreach**: Equip your sales team with timely, relevant reasons to connect with prospects, moving beyond cold calls to value-driven conversations.
*   **Targeted Marketing Campaigns**: Inform your account-based marketing (ABM) efforts by creating campaigns that speak directly to a target company's recent activities or challenges.
*   **Competitive Intelligence**: Monitor your competitors' hiring trends, product announcements, and partnerships to stay informed about their strategic direction.
*   **Customer Success & Expansion**: Keep an eye on your existing customers for signals that might indicate an opportunity for upselling, cross-selling, or churn risk.
*   **Investment Research**: Track companies in your portfolio or on your watchlist for key developments that could impact their value and growth prospects.

## Customization Ideas

This template is designed to be highly adaptable to your specific sales and marketing strategy. You can easily customize it to:

*   **Define Your Ideal Signals**: You have complete control over the buying signals you want to track. Simply add or edit your criteria for hiring, news, or LinkedIn posts in the "Signals" tab of your Google Sheet. For example, you could track "hiring data scientists," "mentions of AI implementation," or "news of European expansion."
*   **Manage Your Target List**: Easily add, remove, or update the companies you want to monitor directly in the "Accounts" tab of your Google Sheet.
*   **Select Your Sources**: Choose which channels to monitor. You can enable or disable the modules for Hiring, LinkedIn Posts, and News at any time to focus on the sources that matter most to you.
*   **Control the Timeframe**: Adjust how far back the automation should look for information, such as analyzing the last 7 days of company posts or the last 30 days of news articles.
*   **Customize the Output**: Since all results are logged to your Google Sheet, you can easily integrate this data into your CRM, build dashboards, or set up custom alerts.

## 🔗 Nodes Used

Execute Workflow Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
