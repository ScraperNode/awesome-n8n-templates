# 💬 Schedule client meetings via web forms with Google Calendar, Zoom and multi‑channel notifications

> ⚡ **6 views** · 💬 [Support Chatbots](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

## Who it's for
This **n8n workflow** is designed for businesses, consultants, and service providers who want to automate their meeting scheduling process. The workflow creates a seamless booking system that can handle meeting requests, check availability, create calendar events, set up video conferences, and send notifications through multiple channels.

## Features 
* Integrates with web forms to receive booking requests
* Checks Google Calendar availability automatically
* Creates calendar events with booking details
* Sets up Zoom meetings instantly
* Sends notifications via email, WhatsApp, Discord, and Teams
* Notifies politely if requested slots aren’t available
* Supports Your time zone conversions

## Requirements
- **Google Calendar API Credentials**: For checking availability and creating events
- **Zoom API Credentials**: For generating meeting links and video conferences
- **Gmail OAuth2 Credentials**: For sending email confirmations
- **Notification Service Credentials**:
  `Discord Bot API`, `Microsoft Teams API`, `Rapiwa API (for WhatsApp)`

## Important Notes
- **Time Zone Configuration**: The workflow is set to Asia/Dhaka time zone but can be customized
- **Meeting Settings**: Default meeting duration (40 minutes) and password can be adjusted
- **Notification Templates**: All notification messages can be customized to match your brand voice
- **Calendar Selection**: Ensure the correct Google Calendar ID is configured for your booking system

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Webhook, Discord, Google Calendar, Zoom, Gmail, Microsoft Teams

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
