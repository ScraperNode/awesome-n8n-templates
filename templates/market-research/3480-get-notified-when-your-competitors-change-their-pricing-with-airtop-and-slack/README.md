# 📊 Get notified when your competitors change their pricing with Airtop and Slack

> ⚡ **2,970 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

### About the Automation

Staying on top of competitor pricing changes can be a full-time job. Manual price tracking is time-consuming and prone to errors, especially when dealing with complex pricing structures and multiple subscription tiers. Paid competitor price monitoring tools like Competera, Visualping and Fluxguard can be expensive. What if you could automate this process and get instant alerts when competitors adjust their pricing?

### How to easily monitor competitor pricing

With this automation, you'll learn how to set up automated price monitoring system using Airtop's built-in node in n8n. By the end, your system will automatically track competitor pricing changes and notify you of any modifications.

![image.png](fileId:1098)


### What You'll Need

- A free [Airtop API Key](https://portal.airtop.ai/?utm_campaign=n8n)
- Google Sheets account with a copy of [this sheet](https://docs.google.com/spreadsheets/d/1qXuUU2RuxPkwoEqPk0hwQufNZvwXXIAAHKnn9SxW12s/copy)
- URLs of competitors' pricing pages

### Understanding the Process

This automation continuously monitors competitor pricing pages and compares them against your baseline data. The workflow:

- Tracks all different pricing plans (monthly, yearly, etc.).
- Monitors feature changes across different tiers.
- Detects and logs pricing structure modifications.
- Alerts you via Slack when changes are detected

### Setting Up Your Automation

We've created a ready-to-use blueprint for seamless price monitoring. Here's how to get started:

- Connect your Google Sheets
- Set up your Airtop API connection
- Define update frequency

![image.png](fileId:1099)

### Customization Options

Enhance the basic template with these popular modifications:

- Add other notification channels (Email, Telegram, etc.).
- Include feature comparison tracking.
- Set up threshold-based alerts for significant price changes
- Track historical pricing trends

### Real-World Applications

**Case Study 1**: A B2B SaaS company can use this automation to track competitors' pricing changes. When they identify a market-wide pricing shift, they can adjust their strategy proactively within minutes.

**Case Study 2**: An online Ecommerce retailer automates monitoring of 100+ competitor products, maintaining optimal pricing positions and increasing profit margins.

### Best Practices

To ensure accurate tracking:

- Include detailed baseline data for each pricing tier
- Specify both monthly and annual pricing clearly
- List all features included in each plan
- Update your baseline data whenever you verify changes
- Include any promotional pricing or special offers
- Document currency and regional variations if applicable

Example Structure in Google Sheets:

```md
Competitor: Acme Tools
Basic Plan:
- Monthly: $29
- Annual: $290 ($24.17/mo)
- Features: 5 users, 10GB storage, basic support
Pro Plan:
- Monthly: $79
- Annual: $790 ($65.83/mo)
- Features: 20 users, 50GB storage, priority support
```


### What's Next?

After setting up your price monitoring automation, consider the following:

- Creating automated competitive analysis reports
- Setting up market trend analysis
- Implementing automatic pricing recommendations
- Expanding monitoring to feature changes

Happy monitoring!

## 🔗 Nodes Used

Google Sheets, Slack, Filter, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
