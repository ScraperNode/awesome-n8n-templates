# 🎯 Auto-generate meeting minutes with GPT and share from Google Drive to Slack

> ⚡ **223 views** · 🎯 [AI Summarization & Classification](../)

## Description

### Who’s it for
Teams who want to **automatically generate structured meeting minutes** from uploaded transcripts and instantly share them in Slack. Perfect for startups, project teams, or any company that collects meeting transcripts in Google Drive.

---

### How it works / What it does
This workflow automatically turns raw meeting transcripts into well-structured minutes in Markdown and posts them to Slack:

1. **Google Drive Trigger** – Watches a specific folder. Any new transcript file added will start the workflow.  
2. **Download File** – Grabs the transcript.  
3. **Prep Transcript** – Converts the file into plain text and passes the transcript downstream.  
4. **Message a Model** – Sends the transcript to OpenAI GPT for summarization using a structured system prompt (action items, decisions, N/A placeholders).  
5. **Make Minutes** – Formats GPT’s response into a Markdown file.  
6. **Slack: Send a message** – Posts a Slack message announcing the auto-generated minutes.  
7. **Slack: Upload a file** – Uploads the full Markdown minutes file into the chosen Slack channel.  

End result: your Slack channel always has clear, standardized minutes right after a meeting.

---

### How to set up
1. **Google Drive**  
   - Create a folder where you’ll drop transcript files.  
   - Configure the folder ID in the Google Drive Trigger node.  
2. **OpenAI**  
   - Add your OpenAI API credentials in the *Message a Model* node.  
   - Select a supported GPT model (e.g., `gpt-4o-mini` or `gpt-4`).  
3. **Slack**  
   - Connect your Slack account and set the target channel ID in the Slack nodes.  
4. **Run the workflow** and drop a transcript file into Drive. Minutes will appear in Slack automatically.

---

### Requirements
- Google Drive account (for transcript upload)  
- OpenAI API key (for text summarization)  
- Slack workspace (for message posting and file upload)

---

### How to customize the workflow
- **Change summary structure**: Adjust the system prompt inside *Message a Model* (e.g., shorter summaries, language other than English).  
- **Different output format**: Modify *Make Minutes* to output plain text, PDF, or HTML instead of Markdown.  
- **New destinations**: Add more nodes to send minutes to email, Notion, or Confluence in parallel.  
- **Multiple triggers**: Replace Google Drive trigger with Webhook if you want to integrate with Zoom or MS Teams transcript exports.

---

### Good to know
- OpenAI API calls are billed separately. See [OpenAI pricing](https://openai.com/pricing).  
- Files must be text-based (.txt or .md). For PDFs or docs, add a conversion step before summarization.  
- Slack requires the bot user to be a member of the target channel, otherwise you’ll see a `not_in_channel` error.

## 🔗 Nodes Used

Slack, Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
