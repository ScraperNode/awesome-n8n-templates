# 🎬 Fetch random dog images from Dog CEO API via webhook

> ⚡ **323 views** · 🎬 [Content Creation & Video](../)

## Description

This n8n template allows you to instantly fetch a random dog image from the Dog CEO API by simply sending a webhook request. It's a fun and simple way to integrate random dog photos into your projects, whether for websites, applications, or playful automations.

---

# 🔧 How it works
- Trigger Webhook: This node acts as the entry point for the workflow. It listens for any incoming POST request. No specific data is required in the webhook body, as the workflow fetches a random image.
- Fetch Random Dog Image: This node makes an HTTP GET request to https://dog.ceo/api/breeds/image/random. The API responds with a JSON object containing the URL of a random dog image.
- Respond with Image URL: This node sends the URL of the random dog image back to the service that initiated the webhook.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Developers: Quickly integrate random dog images into web applications, bots, or prototypes.
- Content Creators: Get fresh, random dog photos for social media, blogs, or presentations.
- Learning n8n: A straightforward example of using a webhook to trigger an API call and return data.

## Anyone who loves dogs!

---

# 📑 Data Structure
When you trigger the webhook, you can send an empty POST request body.

The workflow will return a JSON response similar to this (the message URL will vary):

```
{
  "message": "https://images.dog.ceo/breeds/hound-walker/n02089867_2626.jpg",
  "status": "success"
}
```

---

# ⚙️ Setup Instructions
- Import Workflow: In your n8n editor, click "Import from JSON" and paste the provided workflow JSON.
- Configure Webhook Path:
  - Double-click the Trigger Webhook node.
  - In the 'Path' field, set a unique and descriptive path (e.g., /get-dog-image).
- Activate Workflow: Save and activate the workflow.

---

# 📝 Tips
- Download the Image: Instead of just returning the URL, you can download the image and then process it. Insert another HTTP Request node after Fetch Random Dog Image to download the image binary.
  - Set the HTTP Request node's 'Response Format' to 'Binary'.
  - Use the expression ={{ $json.message }} for the URL.
- Save to Cloud Storage: After downloading the image (as described above), you can save it to various cloud storage services:
  - Google Drive: Add a Google Drive node. Connect it to the output of the image download node. Configure it to upload the binary data to a specific folder.
  - Amazon S3: Add an AWS S3 node. Configure it to upload the binary data, specifying your bucket and desired filename.
- Dropbox: Use the Dropbox node to upload the image file.
- Send as a Message: Share the dog image directly in a chat or email:
  - Slack/Discord/Telegram: Use the respective integration node to send the image URL or the downloaded image as an attachment.
  - Email: Attach the downloaded image to an email using an Email or Gmail node.
- Display on a Web Page: If you're embedding this into a web application, you can simply use the returned URL in an <img> tag to display the image.
- Error Handling: You can add an Error Trigger node to catch any issues during the image fetching process (e.g., if the Dog CEO API is down) and send notifications.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
