# 🎬 Generate product photos and videos from a reference image with OpenAI and RunwayML

> ⚡ **582 views** · 🎬 [Content Creation & Video](../)

## Description

What This Workflow Does
A user submits a form with an existing product photo, a name, a vision prompt, and their email. The workflow generates a brand-new AI product image from that photo, turns it into a short marketing video, and emails both back to the user — fully automated after submission.

How It Flows
The form submission kicks things off. The original photo is saved to Google Drive as a backup, then GPT-4.1 takes the user's vision prompt and rewrites it into a professional image generation prompt. That prompt plus the original photo go to OpenAI's image editor (gpt-image-1) to produce a new AI-generated product image. That image gets uploaded to ImgBB to create a public URL, which is then handed off to RunwayML to render a product marketing video. Because video rendering takes time, the workflow checks back every 30 seconds until it's done. Once complete, Gmail sends the user a link to the photo and the video.

Credentials to Swap In
-OpenAI — HTTP Header Auth. Header name: Authorization. Value: Bearer YOUR_OPENAI_API_KEY. Connect this to the Chat GPT 4.1 node and the OpenAi Create Image node.
-Google Drive — Google Drive OAuth2. Authorize via the OAuth flow in n8n, then open the Upload to Google Drive node and update the Folder ID to your own Drive folder. You can find the folder ID in the URL when you open the folder in Google Drive.
-ImgBB — HTTP Query Auth. Parameter name: key. Value: YOUR_IMGBB_API_KEY. Free account at imgbb.com. Connect to the Get URL node.
-RunwayML — HTTP Header Auth. Header name: Authorization. Value: Bearer YOUR_RUNWAYML_API_KEY. Connect this to both the Create Video node and the HTTP Request polling node.
-Gmail — Gmail OAuth2. Authorize via the OAuth flow in n8n. The email will send from whichever Google account you connect. Connect to the Send a Message node.

One Thing to Know
Do not change the X-Runway-Version header inside the RunwayML nodes. It must stay set to 2024-11-06 or the API call will fail. Also make sure your OpenAI account has image generation access enabled — gpt-image-1 requires it and you can verify this at platform.openai.com.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
