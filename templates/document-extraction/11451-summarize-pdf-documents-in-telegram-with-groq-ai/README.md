# 🔬 Summarize PDF documents in Telegram with Groq AI

> ⚡ **62 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### How It Works
```
Telegram Trigger → Sub-Workflow (Separate Text/Files) → IF (Is PDF?)
├── True: Extract PDF → Set Text → Code (Clean) → Done!
└── False: NoOp (Ignore)
```
- **9 nodes**: Lightweight, efficient (no loops).
- **Key Steps**:
  1. Triggers on Telegram messages - downloads files.
  2. Sub-workflow splits text/files. *(Optional but recommended)*
  3. IF node checks MIME type/extension for PDFs.
  4. Extracts text via **"Extract From File"** node.
  5. AI writes summary.
  6. Responds to user.
---
## Setup Instructions
***IMPORTANT*** : Requiring an n8n instance to be configured with public/production webhook !

**Recommendation:** Ngrok or Cloudflare Tunnel

1. **Add the Telegram credential**
   - Go to **Credentials → New Credential → Telegram API**.
   - Paste your Bot Token.
2. **Configure the Trigger**
   - Open the **Telegram Trigger** node.
   - Ensure `Trigger On` contains `Message`.
   - Enable **Download** under *Additional Fields* so file payloads are attached to the node output.
3. (Optional) **Enable the sub‑workflow** [Automate Telegram Message Processing - Separate Text and Files 💬📁](https://n8n.io/workflows/9254-automate-telegram-message-processing-separate-text-and-files/)
   - If you need both message text and attachments, enable the **Automate Telegram Message Processing – Separate Text and Files** node and import the referenced workflow into your workspace.
4. **Deploy** the workflow and activate it.
5. **Testing** Send a message with a PDF attachment to your Telegram bot. There will be a response from the chat that summarizes the PDF content.

## Nodes Used
* **Telegram Trigger**: Listens for incoming messages and downloads attachments.
* **Execute Workflow**: Calls a sub-workflow to separate text and file data (recommended for reliable file handling).
* **If**: Checks MIME type to ensure the file is a PDF.
* **Extract From File**: Converts the PDF binary into text.
* **Set**: Assignments to organize the text data.
* **Code**: Cleans the text (removes excess newlines) to prepare it for the LLM.
* **Basic LLM Chain**: Orchestrates the AI prompt and processing.
* **AI Chat Model**: The specific LLM provider used for high-speed inference.
* **Telegram**: Sends the final summary back to the user.

## Output Example
The bot will reply with a message formatted like this:
&gt; **Title:** Q3 Financial Report
&gt; **Type:** Financial Report
&gt; **Exec Summary:** Revenue increased by 15% due to new product lines...
&gt; **Key Insights:**
&gt; • Growth in APAC region.
&gt; • Reduced operational costs by 5%.

---
## 🙏 Thank You for Trying This Workflow!
Your time and trust mean a lot! I truly appreciate you using this template.
### Your feedback shapes future updates:
- 💡 Suggestions for improvement
- 🆕 Ideas for new features  
- 📝 Requests for other automation workflows
#### Please share your thoughts! Every idea helps shape the next update.
---
### 🙋‍♂️ Join & Follow For More Free Templates!
- #### Discord Community: [We Work Together](https://discord.gg/RFuTXZ4n)
Get help, share builds, collaborate!
Daily tips, tutorials, and updates
### Thank you again for being part of this journey! 🚀
### Together, we automate better! 🤖✨

## 🔗 Nodes Used

Telegram, Telegram Trigger, Basic LLM Chain, Extract from File, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
