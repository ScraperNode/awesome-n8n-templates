# 📱 Monitor iOS App Store reviews & send email notifications automatically

> ⚡ **564 views** · 📱 [Social Media & Email Marketing](../)

## Description

# iOS App Store Review Monitor & Notifier – Automated User Feedback Tracking

This workflow runs on a scheduled basis (default: every 6 hours, customizable) and **monitors new App Store reviews for your iOS apps.** It fetches reviews via Apple’s iTunes RSS API, filters only new reviews since the last run and sends **real-time notifications** to your team via email, Slack, Telegram or other channels.

Never miss important user feedback again.

## Who’s it for
- **iOS developers** tracking user sentiment and bug reports.
- Product managers monitoring **customer satisfaction** and feature requests.
- Customer support teams responding quickly to complaints and issues.
- Marketing teams collecting testimonials and case studies from positive reviews.
- DevOps teams automating review monitoring as part of release processes.

## How it works
- **Schedule Trigger** runs every 6 hours (cron configurable).
- **App Configuration:** Define monitored apps with {appId, country, lang}.
- **Fetch Reviews:** Call Apple’s iTunes RSS API for latest customer reviews.
- **Extract & Parse:** Convert JSON into structured review data (rating, content, author, date, version).
- **Filter New Reviews:** Compare with last run using timestamps → only new reviews pass.
- **Format Notifications:** Build rich messages with review details.
- **Send Alerts:** Deliver via Email, Slack, Telegram, Teams, etc.
- **Track State:** Last check time to prevent duplicates.

## How to set up
1. **Find your App Store ID**

Go to your app’s App Store page.

**Example URL:** https://apps.apple.com/us/app/app-name/id123456789

The number after id is the App Store ID (123456789).

2. **Configure App Settings**

In the App Config node set:

appId = App Store ID
country = Country code (us, gb, de, etc.)
lang = Language code (en, es, fr, etc.)

3. **Set Up Notifications**

Choose your notification method:

**Email:** configure Gmail/SMTP credentials
**Slack:** add Slack webhook URL
**Telegram:** set up bot token + chat ID
**Teams:** configure Teams webhook

4. **Customize Schedule**

In the Schedule Trigger node:

Every 6 hours → 0 */6 * * *
Daily at 9 AM → 0 9 * * *
Every 2 hours → 0 */2 * * *

5. **Test the Workflow**

Use a known App ID (e.g., WhatsApp: 310633997) for testing.

Run manually to verify notifications are formatted correctly.

## Requirements

- n8n (cloud or self-hosted) with HTTP Request + notification nodes.
- **App Store ID** for each monitored app.
- Notification credentials (Email, Slack, Telegram, etc.).
- Internet access to query Apple’s iTunes API.

## How to customize the workflow

- **Multiple Apps**
- **Monitor multiple apps by extending config:**
[
{appId: "310633997", country: "us", lang: "en"},
{appId: "389801252", country: "gb", lang: "en"},
{appId: "544007664", country: "de", lang: "de"}
]
- **Notification Templates**

## Add-ons to level up

- **Sentiment Analysis:** AI-based scoring per review.
- **Auto-Reply Integration:** Respond via App Store Connect API.
- **Analytics Dashboard:** Store in Sheets/Airtable for trends.
- **Competitor Monitoring:** Track rival app reviews.
- **Translation:** Auto-translate to English.
- **Escalation Rules:** Different alerts by rating severity.

## Common Troubleshooting

- **No reviews returned** → app may not have recent reviews, try other country codes.
- **JSON parsing errors** → check App Store ID validity.
- **Duplicate notifications** → confirm time filtering works correctly.
- **API rate limits** → Apple may throttle, add delays.
- **Missing metadata** → some apps don’t return all fields.

## Need Help?
If you’d like to customize this automation flow to suit your needs, write to our n8n automation team at WeblineIndia and we’ll adapt the template to your exact use case.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
