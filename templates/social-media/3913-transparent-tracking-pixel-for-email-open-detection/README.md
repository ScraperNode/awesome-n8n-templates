# 📱 Transparent tracking pixel for email open detection

> ⚡ **1,033 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📌 Description
This workflow serves a **1x1 transparent PNG image** via a webhook, which can be embedded in an email to **track when the email is opened**. When the image is loaded by the recipient's email client, the webhook is triggered, optionally capturing a `userId` to identify who opened the email.



## 📂 Workflow Steps

1. **Webhook Trigger** (`Request img`)
   - **Path:** `/webhook/change-with-your-id`
   - Triggered by an HTTP request (e.g. when the image is loaded in an email).
   - Accepts a query parameter `id` to identify the recipient.

2. **Set Base64 Data** (`Create data pix`)
   - Creates a variable `data` containing a Base64-encoded transparent PNG image (1x1 pixel).

3. **Convert to Binary** (`Create img bin`)
   - Converts the Base64 `data` string into a binary file.
   - Sets MIME type to `image/png`.

4. **Respond to Webhook** (`Respond to Webhook`)
   - Sends the binary image file in the HTTP response.

5. **Logging** (`Do anything to log`)
   - Placeholder node to log or process the `id` or request metadata.
   - You can access the `id` using `{{$json["query"]["id"]}}`.
   - You can also use any parameter you want



## ✉️ How to Use in Emails

Embed the image in an HTML email like this:

```html
<img src="https://&lt;your-n8n-instance&gt;/webhook/db4880e7-2134-4994-94e5-a4a3aa120440?id=1234" width="1" height="1" alt />
```

When the email is opened and the image is loaded, the workflow will be triggered.



## 🛠️ Notes
- Some email clients block images by default; this may prevent tracking.
- You can enhance the workflow to store open events in a database, log the timestamp, IP, or user agent.
- Make sure to comply with data privacy and consent regulations (e.g. GDPR).

## 🔗 Nodes Used

Webhook, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
