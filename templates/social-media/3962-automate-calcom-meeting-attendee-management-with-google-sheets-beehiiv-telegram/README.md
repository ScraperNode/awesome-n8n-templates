# 📱 Automate Cal.com meeting attendee management with Google Sheets, Beehiiv & Telegram

> ⚡ **1,506 views** · 📱 [Social Media & Email Marketing](../)

## Description

This n8n workflow template automates the process of managing meeting guests booked through Cal.com. It captures attendee information, logs it in a Google Sheet, and subscribes new guests to your Beehiiv newsletter, while also notifying you in Telegram.

### How it Works
This workflow is designed to streamline your post-booking process. When a new meeting is booked via Cal.com, the workflow automatically triggers. It extracts the attendee details, adds a new row with the guest's information to a designated Google Sheet, and then adds the guest as a subscriber to your Beehiiv newsletter. Finally, it sends a notification to a specified Telegram channel, keeping you informed of new subscribers.

### Features
- **Automated Data Entry:** Automatically log meeting guest details into Google Sheets.
- **Newsletter Growth:** Effortlessly add new meeting guests to your Beehiiv subscriber list.
- **Real-time Notifications:** Get instant alerts in Telegram for new subscribers.
- **Seamless Integration:** Connects Cal.com, Google Sheets, Beehiiv, and Telegram.

### Set Up
To use this workflow, you will need the following:

- **[Cal.com](https://refer.cal.com/1node):** Set up a Cal.com account and configure a webhook to trigger the workflow on new bookings. You will need the webhook URL provided by the first node in this workflow.
- **Google Cloud:** A Google Cloud account with access to Google Sheets. You will need to specify the Sheet and the range where data should be added.
- **[Beehiiv](https://www.beehiiv.com?via=1node-ai):** A Beehiiv account. You will need your Beehiiv API key and the publication ID of your newsletter.
- **Telegram Account:** A Telegram account and a channel where you want to receive notifications. You will need your Telegram Bot Token and the chat ID of the channel.
- **Configure each node** in the workflow with your respective API keys, IDs, and sheet details as required. The "Define your parameters" box in the workflow provides guidance on finding your Telegram chat ID and Beehiiv API key/publication ID.

### Additional Enhancements
This workflow can be extended and customized further:

- **Conditional Logic:** Add filters to only subscribe guests based on certain criteria (e.g., specific meeting types).
- **Data Enrichment:** Integrate with other services to enrich guest data before adding to Google Sheets or Beehiiv.
- **CRM Integration:** Connect to a CRM to create or update contact records for new guests.
- **Custom Notifications:** Customize the content and format of the Telegram notification.

### Need Help?
If you need assistance setting up this workflow, encounter any issues, or would like to explore setting up similar automation workflows tailored to your company's specific needs, please contact us at [1 Node](https://1node.ai).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Cal.com Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
