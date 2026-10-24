# 📱 Send SMS and RCS marketing campaigns from Google Sheets with RCSZilla

> ⚡ **49 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Description

Automate consent-based SMS and RCS marketing campaigns from Google Sheets with n8n and RCSZilla.

This workflow gives small businesses, agencies, ecommerce teams, clinics, salons, real estate teams, and local service providers a practical SMS/RCS marketing automation system without building a custom campaign platform. Google Sheets acts as the campaign queue, n8n handles filtering and personalization, and RCSZilla queues each message for delivery.

The workflow is designed to help users start with SMS by default and move toward RCS-ready messaging when their RCSZilla account and sending route support it. RCSZilla can use an Android phone and SIM card as a device-based SMS gateway, which makes it useful for teams that want a free SMS marketing workflow before committing to a traditional paid SMS API provider. Carrier plan costs and local rules can still apply.

## Why This Workflow Can Bring Users To RCSZilla

Most n8n SMS marketing templates are built around paid SMS providers. This template is different because it shows a direct RCSZilla use case:

- Turn Google Sheets into a lightweight campaign manager.
- Send personalized SMS marketing messages through RCSZilla.
- Keep the workflow RCS-ready with a `channel` column.
- Use an Android device as the SMS gateway when available.
- Queue messages with pacing instead of sending every contact at once.
- Log queued and skipped contacts for campaign reporting.
- Capture STOP replies into an opt-out sheet.

It positions RCSZilla as a practical SMS/RCS marketing automation layer for n8n users who want campaigns, reminders, promotions, lead follow-up, local offers, and customer reactivation without starting with a complex marketing suite.

## How It Works

### 1. Scheduled Campaign Check

The workflow runs every 15 minutes and reads the `Campaign Queue` tab in Google Sheets. Only rows with `status` set to `ready`, `to_send`, `to send`, or `pending` are considered.

### 2. Campaign Row Validation

The Code node checks every row for the required marketing fields:

- unique `message_id`
- recipient `phone`
- positive consent, such as `consent = yes`
- no opt-out flag
- eligible `send_after` time
- non-duplicate phone number in the current run
- allowed sending hour

Rows that fail validation are not sent. They are written to the `Send Log` tab with a skip reason.

### 3. Personalized SMS/RCS Message

The workflow renders variables inside the message template. Supported variables include:

- `{{first_name}}`
- `{{last_name}}`
- `{{offer_text}}`
- `{{offer_url}}`
- `{{campaign_name}}`
- `{{segment}}`
- `{{channel}}`

If the message does not already include an opt-out instruction, the workflow appends:

```text
Reply STOP to opt out.
```

### 4. Consent Gate

The IF node separates sendable contacts from skipped contacts. This keeps campaign execution transparent and helps users understand exactly why a message was or was not queued.

### 5. Queue Message With RCSZilla

Eligible contacts are sent to the RCSZilla node. The workflow uses the `channel` field from the sheet:

- `sms` by default
- `rcs` only when supported by the user's RCSZilla account and route

The workflow spaces eligible messages using `scheduledAt`, so a campaign does not hit every contact at the same second.

### 6. Status And Send Log

After a successful queue call, the workflow marks the original row as `queued` in Google Sheets and appends a detailed row to `Send Log` with:

- timestamp
- message ID
- campaign name
- phone number
- channel
- status
- scheduled time
- final message text
- RCSZilla response

Skipped contacts are also logged with the reason they were skipped.

### 7. Opt-Out Capture

The workflow includes an opt-out webhook for inbound replies. If a customer replies with `STOP`, `UNSUBSCRIBE`, `CANCEL`, `END`, or `QUIT`, the workflow saves the phone number and keyword to the `Opt Outs` tab.

Use that tab to update your master contact list or suppression process before the next campaign.

## RCSZilla Features Highlighted

This template highlights RCSZilla as an SMS/RCS marketing automation tool for n8n:

- Android device gateway: send SMS through your own phone and SIM card.
- API-based automation: queue messages from n8n workflows.
- SMS marketing campaigns: send personalized offers, updates, and reactivation messages.
- RCS-ready workflow design: keep a channel field ready for accounts that support RCS routes.
- Scheduled sending: space messages over time.
- Two-way reply handling: capture opt-out replies through a webhook.
- Campaign logging: keep a Google Sheets history of queued and skipped contacts.

RCSZilla setup guide: https://docs.rcszilla.com/?page=get_started

## Google Sheet Structure

Create a Google Sheet with these tabs, or import the included Excel template file:

```text
SMS RCS Marketing Google Sheets Template - RCSZilla.xlsx
```

After importing the template into Google Sheets, copy the spreadsheet ID from the Google Sheets URL and replace `PASTE_SMS_RCS_MARKETING_SHEET_ID` in every Google Sheets node.

### Campaign Queue

Recommended columns:

```text
message_id
phone
first_name
last_name
consent
opt_out
channel
segment
campaign_name
message_template
offer_text
offer_url
send_after
status
queued_at
last_error
```

Example row:

```text
message_id: promo-001
phone: +40700000000
first_name: Maria
consent: yes
opt_out: no
channel: sms
segment: salon_vip
campaign_name: May VIP Offer
message_template: Hi {{first_name}}, {{offer_text}} {{offer_url}}
offer_text: your May VIP discount is ready.
offer_url: https://example.com/vip
send_after: 2026-05-21 10:00:00
status: ready
```

### Send Log

Recommended columns:

```text
timestamp
message_id
campaign_name
phone
channel
status
scheduled_at
message
skip_reason
rcszilla_response
```

### Opt Outs

Recommended columns:

```text
received_at
phone
keyword
message
source
```

## Requirements

- n8n Cloud or self-hosted n8n.
- RCSZilla account and API token.
- Android device connected to RCSZilla if using device-based SMS sending.
- Active SIM/mobile plan for device-based SMS sending.
- Community node package: `n8n-nodes-rcszilla`.
- Google Sheets OAuth credential in n8n.
- Google Sheet with `Campaign Queue`, `Send Log`, and `Opt Outs` tabs.
- Marketing contacts with clear SMS/RCS consent.

## Setup Instructions

1. Install the RCSZilla community node in n8n: `n8n-nodes-rcszilla`.
2. Import the workflow JSON: `Google Sheets SMS RCS marketing automation n8n - RCSZilla.json`.
3. Create the Google Sheet tabs listed above.
4. Replace `PASTE_SMS_RCS_MARKETING_SHEET_ID` in every Google Sheets node with your sheet ID.
5. Assign your Google Sheets OAuth credential to each Google Sheets node.
6. Create and assign your RCSZilla API credential to the RCSZilla node.
7. Connect your Android device in RCSZilla if you plan to send via your own phone gateway.
8. Add one internal test row in `Campaign Queue` with `consent = yes`, `channel = sms`, and `status = ready`.
9. Run the workflow manually and inspect `Send Log`.
10. Confirm the queued message in RCSZilla.
11. Activate the workflow when the test campaign behaves correctly.

## Example Message

```text
Hi Maria, your May VIP discount is ready. https://example.com/vip Reply STOP to opt out.
```

## Compliance Notes

This workflow is for permission-based SMS/RCS marketing only.

Do not use purchased lists, scraped phone numbers, or unsolicited contacts. Keep consent records, respect STOP replies, follow quiet hours, avoid sensitive personal data in message content, and check local SMS/RCS rules before sending campaigns.

The workflow helps with safer campaign behavior by:

- requiring consent
- skipping opt-out rows
- appending STOP language
- deduplicating phone numbers per run
- limiting sends per run
- spacing queued messages
- logging skipped contacts with reasons
- capturing opt-out replies into a suppression tab

You are still responsible for your own legal review, consent process, privacy policy, terms, sender identification, and regional messaging requirements.

## Customization

- Change `maxSendsPerRun` in the Code node to raise or lower campaign volume.
- Change `minSecondsBetweenMessages` to control pacing.
- Adjust `quietStartHour` and `quietEndHour` for your region.
- Use `segment` to run different offers for different audiences.
- Keep `channel = sms` unless your RCSZilla setup supports another route.
- Add a second workflow later to read delivery status from RCSZilla and update `Send Log`.
- Connect the opt-out webhook to any inbound reply source that can POST reply data into n8n.

## Troubleshooting

- Nothing sends: confirm rows have `status = ready`, `consent = yes`, and a valid phone number.
- Rows are skipped: check the `skip_reason` field in `Send Log`.
- RCSZilla node fails: confirm the API credential, account status, connected device, SIM status, and phone number country code.
- Google Sheets update fails: confirm `message_id` exists and is unique.
- RCS channel fails: switch the row back to `channel = sms` unless your account supports RCS sending.
- Workflow sends at the wrong time: check n8n timezone and the quiet-hour settings in the Code node.
- Opt-out webhook does not capture replies: confirm your inbound SMS/RCS provider is posting `from` and `message` fields to the webhook URL.

## 🔗 Nodes Used

Google Sheets, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
