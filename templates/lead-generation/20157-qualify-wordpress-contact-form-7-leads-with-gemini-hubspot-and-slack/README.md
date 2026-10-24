# 🎣 Qualify WordPress Contact Form 7 leads with Gemini, HubSpot, and Slack

> ⚡ **3 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Gemini reads every Contact Form 7 submission and sorts it into lead, support or spam. Leads are scored from 1 to 5 and saved to HubSpot with a note, support requests go to their own Slack channel, and spam never reaches your CRM.

## How it works
1. **New Lead Webhook** receives the form fields as JSON from WordPress, for example `{"your-name": "Ada Lovelace", "your-email": "ada@example.com", "your-message": "..."}`. WordPress calls it once per submission, right after Contact Form 7's own spam check. Header Auth keeps the endpoint private.
2. **Settings** holds a one-line description of your business, the score that counts as a hot lead, your two Slack channels and the names of your form's email, name and message fields.
3. **Lead Fields** is a short Code node that reads those fields, splits the name for HubSpot and collects every other field (phone, subject, consent boxes) for the alerts.
4. **Qualify Lead** sends the submission and your business description to **Gemini Chat Model** and gets back a category (lead, support or spam), a score from 1 to 5 and a one-line summary, checked against a JSON schema.
5. **Lead Verdict** adds the verdict to the lead. If Gemini fails or answers outside the schema, the lead goes to sales unscored, so a model outage never loses a lead. A submission with no email and no message is sent to sales as a setup warning instead of being called spam.
6. **Route Lead** sends leads to HubSpot, support requests to **Notify Support** and spam to **Ignore Spam**.
7. **Has Email** sends leads without an email address straight to the alert, since HubSpot needs one. **Save to HubSpot** creates the contact, or updates it when the email is already there. When **Contact Saved** sees a contact ID, **Add Note** attaches the verdict and the full message as a HubSpot note, so a returning visitor's earlier messages are kept.
8. **Sales Alert** and **Notify Sales** post the lead to your sales channel with the score, a :fire: for hot leads, the link to the HubSpot record, and a warning if HubSpot rejected the lead or the note failed. The whole submission is always in the alert.

## Setup
1. Open **Settings**. Describe your business in one sentence in `business`, since Gemini scores leads against it. Set `sales_channel` and `support_channel`, and adjust `hot_score` (default 4). If your form renamed the default fields, enter the new names for `email_field`, `name_field` and `message_field`. For an EU-hosted HubSpot account, change `hubspot_app_url` to `https://app-eu1.hubspot.com`.
2. Open **New Lead Webhook**, add a Header Auth credential (for example `X-Webhook-Token` with a long random value) and copy the production URL.
3. Create a [Gemini API key](https://aistudio.google.com/apikey) and connect it on **Gemini Chat Model**. The template uses `gemini-3.1-flash-lite`, a small, fast model that is enough for sorting enquiries.
4. In HubSpot, create a [private app](https://developers.hubspot.com/docs/api/private-apps) with the `crm.objects.contacts.read` and `crm.objects.contacts.write` scopes and connect its access token as a HubSpot App Token credential on **Save to HubSpot** and **Add Note**.
5. Create a [Slack app](https://api.slack.com/apps) with the `chat:write` scope, connect its bot token on **Notify Sales** and **Notify Support**, and invite the app to both channels (`/invite @your-app`), or Slack answers `not_in_channel`.
6. In WordPress, send the form fields as JSON to the webhook URL on the `wpcf7_before_send_mail` hook. The free Webhook Actions plugin does it without code: new webhook on `wpcf7_before_send_mail`, map `args.2.fields.your-name`, `args.2.fields.your-email` and `args.2.fields.your-message` to the same names, add `args.0.title` as `form_title` and `args.2.meta.url` as `page_url`, and attach the header credential. Or import the [ready-made build](https://wpwebhooks.org/automations/qualify-contact-form-7-leads-with-gemini-hubspot-and-slack/) with exactly this setup. A short PHP snippet that does the same is under Additional info.
7. Activate the workflow and send a realistic enquiry through your form. A message that only says "test" is sorted as spam and stops at **Ignore Spam**, which you can see in the execution list.

## Requirements
- WordPress with Contact Form 7
- A Gemini API key, a HubSpot account (a free CRM account works) and a Slack workspace

## Customization
- Change what counts as a lead, support or spam by editing the category descriptions in **Qualify Lead**'s schema, for example to add a "job application" category and a fourth output on **Route Lead**.
- Swap **Gemini Chat Model** for OpenAI, Anthropic or a local model; **Qualify Lead** works with any chat model node.
- Store the score in HubSpot: create a custom contact property and set it in **Save to HubSpot** from `score`.
- Send support requests to your help desk instead of Slack by replacing **Notify Support**; `ai_summary` and `summary` are ready to use.

## Additional info
**Who is this for.** Small businesses and agencies whose leads arrive through a Contact Form 7 form on WordPress, and who are tired of sorting sales enquiries from support questions and SEO pitches by hand. Contact Form 7 saves nothing to the database, so there is no list to poll: without a webhook, the notification email is the only copy of a lead.

**Why before_send_mail.** Contact Form 7 validates the fields and runs its spam check first, then fires `wpcf7_before_send_mail`, and only then sends the email. Hooking in there means obvious spam never reaches the workflow, and a broken mail setup no longer loses leads. Gemini then catches the human-written spam that gets past Contact Form 7.

**WordPress side without a plugin.** Put this in `functions.php` or a custom plugin. List your form's field names in `$fields`, and replace the URL and the token with yours (the token must match the Header Auth credential in n8n):

```php
add_action( 'wpcf7_before_send_mail', function () {
    // Contact Form 7 has validated the fields and passed its spam check by now.
    $fields  = [ 'your-name', 'your-email', 'your-subject', 'your-message' ];
    $payload = [];
    foreach ( $fields as $field ) {
        $payload[ $field ] = sanitize_textarea_field( wp_unslash( $_POST[ $field ] ?? '' ) );
    }
    $payload['form_id']  = absint( $_POST['_wpcf7'] ?? 0 );
    $payload['page_url'] = get_permalink( absint( $_POST['_wpcf7_container_post'] ?? 0 ) ) ?: '';

    $args                               = [];
    $args['headers']['Content-Type']    = 'application/json';
    $args['headers']['X-Webhook-Token'] = 'YOUR-TOKEN';
    $args['body']                       = wp_json_encode( $payload );
    $args['blocking']                   = false; // do not make the visitor wait for n8n
    wp_remote_post( 'https://YOUR-N8N/webhook/wordpress-cf7-lead', $args );
} );
```

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, HubSpot, Google Gemini Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
