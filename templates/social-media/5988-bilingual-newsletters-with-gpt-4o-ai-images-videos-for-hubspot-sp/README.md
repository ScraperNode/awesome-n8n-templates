# 📱 Bilingual newsletters with GPT-4o, AI images & videos for HubSpot & SP

> ⚡ **321 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Who’s it for  
Marketing, growth, and automation teams that need to ship polished bilingual newsletters—complete with images, optional video, and multi-channel distribution—without writing a line of code.

## How it works / What it does  
1. A **Webhook** receives a plain-language request (e.g. “Create a newsletter about XYZ and store it in SharePoint”). The **Webhook** can be changed to another trigger, fr example **Manual Trigger**.
2. An **AI Agent** (OpenAI GPT-4o) drafts German & English newsletter copy following a strict JSON schema.  
3. **SharePoint** fetches an HTML template; a **Code** node injects AI copy into the placeholders.  
4. Optional creative assets:  
   - **Pollinations AI** → image (resolution check & frame overlay)  
   - **FAL AI** → short video + Lyria2 audio → merged via FFmpeg API  
5. A **Gmail Approval** step sends the draft to an approver; the flow continues only on “Approve”.  
6. Depending on user intent the workflow:  
   - Emails the newsletter to **HubSpot** contacts, and/or  
   - Saves HTML (+ JPG/Video URL) to a **SharePoint** library.  

## How to set up  
1. Import the template
2. Open the yellow sticky note and follow the checklist 
   - Create credentials for OpenAI, HubSpot (App Token), Microsoft 365, Gmail, and FAL AI.  
   - Enter them in n8n Credential Manager (never in the HTTP node).  
3. Edit the **Configuration Settings** Set node with your ENV_* variables.   
4. Activate the workflow, copy the production Webhook URL, and trigger it with JSON body `{ "text": "…" }` or with a desired trigger.

## Requirements  
- OpenAI account
- Microsoft 365 tenant (SharePoint & Outlook)  
- HubSpot App Token  
- FAL AI API Key (video & audio generation)  

## How to customize  
- Want a different language? Tweak the AI prompt inside **AI Agent**.  
- Want a different storage provider? Change the SharePoint nodes to Google Drive or Dropbox.
- Skip video generation: set `include_video` to `false` in the incoming prompt.  
- Change the distribution logic by adjusting the **WF Result** Switch node.  
- Add more channels (e.g. Slack) by inserting additional branches after the Switch and modifying the intent determination at the beginning of the workflow.

## 🔗 Nodes Used

HTTP Request, Webhook, HubSpot, Gmail, Microsoft Outlook, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
