# 📱 Send newsletter welcomes and release announcements with GitHub, OpenAI and SMTP

> ⚡ **5 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Manage newsletter subscriptions and product release notifications in one n8n workflow. It validates and stores subscribers, sends welcome emails, extracts release notes from your changelog or GitHub README, and sends polished update emails using OpenAI with a deterministic fallback.

## How it works
1. Newsletter subscription webhook — Receives an email address through a POST webhook, normalizes it, and validates the address format.
2. Duplicate protection — Checks the newsletter Data Table before creating a new subscriber, preventing duplicate entries and repeated welcome emails.
3. Subscriber storage — Stores new email addresses in an n8n Data Table that acts as the newsletter recipient list.
4. Welcome email — Builds and sends a customizable HTML welcome email when a new subscriber is registered.
5. Release trigger — Release notifications can be started through the production webhook or manually from inside n8n.
6. Send safety check — Requires at least one valid semantic version and SEND_EMAIL=YES before the workflow can continue to the subscriber list.
7. Changelog extraction — Reads a GitHub README, extracts only the requested release version sections, and can also use a manually supplied changelog.
8. Release preparation — Groups changelog entries into user-facing highlights and filters out low-value technical noise such as internal maintenance where possible.
9. AI copywriting — Optionally uses OpenAI with structured output to create the subject, introduction, highlights, and closing text for the release email.
10. Deterministic fallback — If AI generation fails or does not pass the quality checks, the workflow builds the release email directly from the extracted changelog.
11. Bulk delivery — Reads all subscribers, loops through them, sends the release email via SMTP, and applies a short wait between sends.
12. Webhook response — Returns a success response with the announced version, recipient count, and the content-generation path used.

## Setup
1. Import the workflow — Import Newsletter Subscribe + New Release Notification _ template.json into n8n.
2. Create the subscriber Data Table — Create an n8n Data Table for newsletter subscribers with at least an email field.
3. Replace the Data Table placeholder — Update every node using REPLACE_WITH_YOUR_NEWSLETTER_DATA_TABLE_ID with the ID of your subscriber table.
4. Configure webhook authentication — Configure the Header Auth credentials used by the subscription and release webhooks.
5. Configure SMTP — Add your SMTP credentials to both the welcome-email and release-email nodes.
6. Replace sender addresses — Change newsletter@example.com to the verified sender address you want to use.
7. Customize the welcome email — Update the product name, welcome copy, legal footer, privacy information, and unsubscribe language in Build Welcome Email.
8. Configure the changelog source — Replace the example raw GitHub README URL in Read README from GitHub with the README or changelog file used by your project.
9. Replace product URLs — Update the example website and release-note URLs generated inside Extract Requested Release Versions.
10. Configure OpenAI — Connect an OpenAI credential to the chat model nodes if you want AI-assisted release copy.
11. Test before production — Use a temporary single-recipient path or duplicated workflow before sending to the complete subscriber list.
12. Activate the workflow — Enable the workflow only after both webhook paths and email delivery have been tested successfully.

## Requirements
- n8n instance with Data Tables available.
- Public or otherwise reachable n8n webhook endpoints for website or application integration.
- An n8n Data Table used to store subscriber email addresses.
- SMTP credentials and a valid sender address.
- A GitHub-hosted README or changelog reachable by HTTP, unless changelog content is always supplied manually.
- Header Auth credentials if the webhook authentication included in the template is kept enabled.
- OpenAI API credentials if the AI copywriting branch is enabled.
- Network access from n8n to GitHub/raw content, your SMTP server, and OpenAI when used.

## Customization
- Subscriber schema — Add fields such as subscribed_at, active, source, language, preferences, or campaign metadata.
- Unsubscribe support — Add an unsubscribe webhook and an active field, then filter Read Subscribers to send only to active subscribers.
- Welcome flow — Change the welcome message, branding, subject, sender name, or add onboarding links and product documentation.
- Webhook integration — Connect the subscription endpoint to a website form, SaaS application, landing page, or another automation.
- Release source — Replace the GitHub README with another HTTP-accessible changelog source or rely entirely on manually provided changelog text.
- Version parsing — Extend the extraction logic if your project uses a release format different from semantic versions such as 1.2.3.
- AI model and prompt — Change the OpenAI model, editorial instructions, structured schema, language, or writing style.
- Email design — Customize the HTML template, colors, buttons, product branding, release links, and footer.
- Delivery rate — Adjust the Wait node if your SMTP provider requires a different sending rate.
- Notification channels — Extend the workflow with Telegram, Slack, Discord, Microsoft Teams, push notifications, or another delivery channel.
- Segmentation — Filter subscribers by language, plan, product, environment, or release channel before entering the send loop.

## Additional info
The subscription webhook accepts an email address, normalizes it to lowercase, validates the format, and does not send another welcome email when the subscriber already exists.
Release sending is deliberately protected by a hard validation step: the workflow will stop unless a valid release version is supplied and SEND_EMAIL is exactly YES.
Multiple versions can be announced in the same execution, for example 7.15.1, 7.15.2, 7.15.3.
A manually supplied changelog takes precedence when matching release information is available; otherwise the workflow attempts to extract the requested version sections from the configured README.
The OpenAI branch is optional. A deterministic release-email fallback is included so newsletter delivery does not depend entirely on successful AI generation.
The default subscriber query returns every row in the Data Table. If you add unsubscribe handling, update this node to filter only active subscribers.
The template contains example product names, domains, release URLs, sender addresses, and legal text. Replace all placeholders before production use.
For real mailing lists, review applicable privacy, consent, unsubscribe, and email-marketing requirements before collecting or contacting subscribers.

## 🔗 Nodes Used

Send Email, HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
