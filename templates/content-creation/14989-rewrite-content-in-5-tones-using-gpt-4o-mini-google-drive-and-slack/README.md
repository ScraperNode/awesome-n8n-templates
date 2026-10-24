# 🎬 Rewrite content in 5 tones using GPT-4o-mini, Google Drive and Slack

> ⚡ **46 views** · 🎬 [Content Creation & Video](../)

## Description

## Description

Paste any text into a simple form — an email, social caption, blog paragraph, or proposal — and submit. GPT-4o-mini rewrites it simultaneously in five distinct tones: Professional, Casual, Persuasive, Concise, and Empathetic. All five versions are saved as a single document in your Google Drive folder, and your Slack channel gets an instant preview of the Concise version. Built for content teams, copywriters, and agencies who write the same message repeatedly for different audiences.

---

## What This Workflow Does

- **Rewrites in five tones at once** — sends your text to GPT-4o-mini and gets back five complete versions in one AI call, saving you from rewriting manually
- **Enforces structured output** — uses a schema parser to guarantee all five tones are always returned, even if the AI tries to skip one
- **Saves everything to Google Drive** — assembles all five versions into one clearly labeled document and uploads it to your chosen Drive folder automatically
- **Names files by project and date** — every document is titled with your project name and today's date so you can find it instantly later
- **Sends a Slack preview** — posts the Concise version to your team channel the moment the document is ready, no waiting, no manual sharing
- **Defaults gracefully** — fills in missing audience fields automatically so the workflow never fails due to a blank optional field

---

## Setup Requirements

### Tools you need:
- n8n instance (self-hosted or n8n Cloud)
- OpenAI account with API access
- Google account with Google Drive
- Slack workspace with a bot app

**Estimated Setup Time: 15–20 minutes**

---

## Step-by-Step Setup

1. **Update your config values** — Open the node named **2. Set — Config Values**. Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID` with the ID of your Drive folder (open the folder in Google Drive, look at the URL bar, and copy the string after `/folders/`). Replace `#YOUR-SLACK-CHANNEL` with your Slack channel name including the `#` symbol. Replace `YOUR COMPANY NAME` with your company or team name.

&gt; ⚠️ All three placeholder values are in **2. Set — Config Values** — you must update all three before activating.

2. **Connect your OpenAI credential** — Open the node named **4. OpenAI — GPT-4o-mini Model**. Click the credential dropdown and connect your OpenAI API key. If you do not have one, go to platform.openai.com, sign in, click your account name, select API Keys, and create a new key.

3. **Connect your Google Drive credential** — Open the node named **8. Google Drive — Upload Tone Doc**. Click the credential dropdown and connect your Google account using OAuth2. n8n will prompt you to sign in and grant Drive access.

4. **Connect your Slack credential** — Open the node named **9. Slack — Send Concise Preview**. Click the credential dropdown and connect your Slack OAuth2 app. After connecting, invite the Slack bot to your target channel by typing `/invite @your-bot-name` inside that channel.

5. **Activate the workflow** — Click Activate in the top right of n8n. Copy the form URL from node **1. Form — Content Tone Rewriter** and bookmark it or share it with your team.

---

## How It Works (Step by Step)

**Step 1 — Form Trigger: Content Tone Rewriter**
You open the form in your browser and fill in four fields: your original text, the content type (Email, Social Media Caption, Blog Paragraph, Client Proposal, Product Description, or Other), your name or project name, and an optional target audience. When you submit, the workflow starts immediately.

**Step 2 — Set: Config Values**
This step loads your configuration and maps every form field into clean variables. It sets the Drive folder ID, Slack channel, and company name from your placeholders. It also builds the document title automatically — combining your project name with today's date — and records the exact time the workflow ran.

**Step 3 — AI Agent: Tone Rewriter (with GPT-4o-mini and Structured Output Parser)**
This step sends your original text to GPT-4o-mini along with the content type, target audience, and company name. The AI is instructed to return exactly five rewrites: Professional, Casual, Persuasive, Concise, and Empathetic. The **5. Parser — Structured Tone Output** enforces a strict schema on the AI response, so if any tone version is missing or malformed, the parser catches it. All five versions must be present before the workflow moves forward.

**Step 4 — Code: Assemble Document Content**
This step takes the five AI-generated versions and combines them into one complete document. It adds a header showing the project name, content type, target audience, and run timestamp. Each tone version is separated by a clear divider line and labelled. It also prepares the Slack message, which shows the Concise version as a quick preview along with the project name and date.

**Step 5 — Code: Convert to Binary**
This step converts the assembled text document into a binary file that Google Drive can accept. It encodes the content and sets the filename to match the document title with a `.txt` extension. This step also passes the Slack channel and preview message forward for the parallel Slack step.

**Step 6 — Google Drive Upload: Upload Tone Doc**
This step uploads the binary file to the Google Drive folder you configured. The file is named with your project name and today's date. After this step, the complete five-version document is permanently saved in your Drive.

**Step 7 — Slack: Send Concise Preview**
This step runs in parallel with the Drive upload. It posts the Concise tone version to your configured Slack channel. The message includes the project name, content type, run time, and the full Concise rewrite. Your team can read and use the shortest version immediately without opening Drive.

---

## Key Features

✅ **Five tones in one submission** — no need to run the form five times or manually rewrite anything yourself  
✅ **Schema-enforced AI output** — the structured parser guarantees all five versions are always returned, preventing incomplete results  
✅ **Auto-dated Drive documents** — files are named with project name and date so your library stays organized with zero manual effort  
✅ **Parallel delivery** — Drive upload and Slack notification run at the same time, so your team gets the preview while the document is saving  
✅ **Configurable defaults** — target audience falls back to "General audience" if left blank, so the workflow never breaks on optional fields  
✅ **Any content type** — the form dropdown covers six common content types so GPT-4o-mini adapts its rewrites appropriately to each format  
✅ **Single config node** — all three configuration values live in one place (**2. Set — Config Values**), making updates fast and error-free

---

## Customisation Options

**Add more content types to the dropdown** — Open node **1. Form — Content Tone Rewriter**, find the Content Type field, and add new options such as "LinkedIn Post", "Press Release", or "SMS Message".

**Change the AI temperature** — Open node **4. OpenAI — GPT-4o-mini Model** and adjust the temperature value (currently 0.7). Lower it to 0.3 for more consistent, conservative rewrites. Raise it to 0.9 for more creative variation between versions.

**Swap GPT-4o-mini for a different model** — Open node **4. OpenAI — GPT-4o-mini Model** and change the model to `gpt-4o` if you want higher-quality rewrites and your usage allows the extra cost.

**Save to a dated subfolder in Drive** — Add a Google Drive "Create Folder" step before node **8. Google Drive — Upload Tone Doc** that creates a folder named by month, then pass that new folder's ID into the upload step instead of the static `folderId`.

**Email the document link after upload** — Add a Gmail node after node **8. Google Drive — Upload Tone Doc** to send the Drive file link to yourself or a client automatically after every submission.

**Add a sixth tone** — In node **3. AI Agent — Tone Rewriter**, add a sixth instruction inside the prompt (for example, "humorous"). Then update the schema in **5. Parser — Structured Tone Output** to include the new key, and update node **6. Code — Assemble Document Content** to include the sixth version in the document.

---

## Troubleshooting

**OpenAI credential not connecting:**
- Confirm the API key is active and has not expired in your OpenAI account
- Make sure your OpenAI account has credit available — the workflow calls the API on every submission
- Re-enter the credential in **4. OpenAI — GPT-4o-mini Model** if the connection shows an error

**Google Drive upload failing:**
- Confirm the folder ID in **2. Set — Config Values** is correct — open the Drive folder, look at the URL, and copy only the string after `/folders/`
- Reconnect your Google Drive OAuth2 credential in **8. Google Drive — Upload Tone Doc** if access was revoked
- Make sure the Google account you connected has edit access to that folder

**Slack message not appearing:**
- Confirm the channel name in **2. Set — Config Values** includes the `#` symbol
- Make sure you invited the Slack bot to the target channel using `/invite @your-bot-name`
- Reconnect the Slack OAuth2 credential in **9. Slack — Send Concise Preview** if it shows as disconnected

**AI returning incomplete tone versions:**
- The **5. Parser — Structured Tone Output** enforces all five keys — if the AI skips one, the parser will throw an error visible in the execution log
- Check the prompt in **3. AI Agent — Tone Rewriter** has not been accidentally edited to remove any of the five tone instructions
- Reduce the temperature in **4. OpenAI — GPT-4o-mini Model** to 0.5 for more reliable structured responses

**Form submits but workflow does not run:**
- Confirm the workflow is Activated — the toggle must be on in the top right of n8n
- Check that the form URL you are using matches the active webhook URL shown in node **1. Form — Content Tone Rewriter**

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email: [info@incrementors.com](info@incrementors.com)  
🌐 Website: [https://incrementors.com/](https://incrementors.com/)

## 🔗 Nodes Used

Slack, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
