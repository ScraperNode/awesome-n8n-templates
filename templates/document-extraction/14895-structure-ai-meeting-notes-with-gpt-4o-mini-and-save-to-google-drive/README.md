# 🔬 Structure AI meeting notes with GPT-4o-mini and save to Google Drive

> ⚡ **14 views** · 🔬 [Document Extraction & Analysis](../)

## Description

Paste your raw meeting notes into a simple web form and submit. The workflow sends your notes to GPT-4o-mini, which converts them into a clean 6-section structured document. The finished document saves automatically to your Google Drive folder — ready to share with your team or client. Built for agency teams, consultants, and project managers who spend too much time cleaning up notes after every call.

---

## What This Workflow Does

**Collects meeting details via form** — A built-in web form captures the client name, date, attendees, raw notes, your name, and your Drive folder ID in one submission.

**Auto-builds the document title** — Combines the client name and meeting date into a clean file name automatically — no manual renaming needed.

**Structures messy notes with AI** — GPT-4o-mini reads your rough bullet points or sentences and returns a properly formatted 6-section document every time.

**Enforces consistent output format** — A structured output parser locks GPT-4o-mini into returning exactly the six required fields — no missing sections, no extra content.

**Handles missing data gracefully** — If a section has no relevant content in your notes, the workflow fills it with a clear fallback message instead of leaving it blank or failing.

**Saves directly to Google Drive** — The finished document lands in the exact Drive folder you specify — no copy-pasting, no manual uploads.

---

## Setup Requirements

### Tools and accounts needed:
- n8n instance (self-hosted or cloud)
- OpenAI account with API access (for GPT-4o-mini)
- Google account with Google Drive access (OAuth2 credential)

**Estimated Setup Time: 8–12 minutes**

---

## Step-by-Step Setup

1. **Import the workflow** — Open n8n → Workflows → Import from JSON. Paste the workflow JSON and import. Confirm all 7 nodes are connected in sequence.

2. **Connect your OpenAI API key** — Go to Credentials → New → OpenAI API in n8n. Paste your API key from platform.openai.com. Open the **4. OpenAI — GPT-4o-mini Model** node and select this credential.

3. **Connect your Google Drive credential** — Go to Credentials → New → Google Drive OAuth2 in n8n. Complete the OAuth flow with the Google account that owns the Drive folder where notes should be saved. Open the **7. Google Drive — Save Notes Document** node and select this credential.

   &gt; ⚠️ The **7. Google Drive — Save Notes Document** node ships with no credential connected. The workflow will fail at the final step if you skip this. Connect it before activating.

4. **Find your Google Drive Folder ID** — Open Google Drive in your browser. Navigate to the folder where you want notes saved. Look at the URL — copy the string of characters after `/folders/`. That is your Folder ID. You will paste this into the form each time you submit notes.

5. **Activate the workflow** — Toggle the workflow to Active. Open the **1. Form — Meeting Notes Submission** node and copy the Form URL. Paste this URL into your browser to access the submission form.

---

## How It Works (Step by Step)

**Step 1 — Form Trigger (Meeting Notes Submission)**
You open the form URL in any browser and fill in six fields: client or project name, meeting date, attendees, raw notes, your name, and your Google Drive folder ID. Submitting the form sends all six values to the workflow instantly.

**Step 2 — Set (Extract Form Fields)**
All six form values are mapped into clean named variables. The document title is also built automatically here — it combines the client name and meeting date into the format: `Meeting Notes — [Client Name] — [Meeting Date]`.

**Step 3 — AI Agent (Structure Meeting Notes)**
GPT-4o-mini receives your raw notes alongside a detailed prompt. It reads everything and returns a structured JSON object with exactly six fields: a header block, an overview, key discussion points, decisions made, action items with owner and deadline, and next steps. The AI is instructed to use plain text only — no markdown, no symbols.

**Step 4 — OpenAI Model (GPT-4o-mini)**
This is the language model powering the AI Agent in Step 3. It runs at a temperature of 0.3 for consistent, predictable formatting and has a 1,200-token output limit — enough for a thorough set of meeting notes.

**Step 5 — Parser (Structured Notes Output)**
A structured output parser enforces the exact JSON schema on the AI's response. It ensures all six required fields are present and correctly typed. This prevents the workflow from producing incomplete or malformed output even if the AI response is slightly off.

**Step 6 — Code (Assemble Full Document)**
A short script reads the six structured fields and assembles them into one plain-text document with clear section headings. If any field is empty or missing, a fallback message fills it automatically. The document title and folder ID from Step 2 are also passed forward here.

**Step 7 — Google Drive (Save Notes Document)**
The completed plain-text document is created as a new file in your specified Google Drive folder. The file name is the auto-generated document title from Step 2. Your structured meeting notes are now saved and ready to share.

---

## Key Features

✅ **Web form trigger** — No n8n login needed to submit notes — anyone with the form URL can use it from any browser.

✅ **Auto-generated file name** — Every file is named consistently using the client name and meeting date — your Drive stays organized without extra effort.

✅ **Schema-enforced AI output** — The structured output parser locks GPT-4o-mini to exactly 6 fields — you always get a complete document, never a partial one.

✅ **Action items with owner and deadline** — GPT-4o-mini formats every task as `Task | Owner | Deadline` and writes `Not assigned` or `Not specified` when the information is not in your notes.

✅ **Fallback text for empty sections** — Missing data never breaks the document — each empty section gets a clear placeholder message automatically.

✅ **Dynamic folder routing** — You specify the Drive folder ID in the form, so you can route different clients' notes to different folders from a single workflow.

✅ **Plain-text output** — No markdown, asterisks, or formatting symbols in the final document — it reads cleanly in any viewer and copies cleanly into any tool.

---

## Customisation Options

**Route notes to a fixed folder** — If you always save to the same Drive folder, remove the Google Drive Folder ID field from the form in **1. Form — Meeting Notes Submission** and hardcode your folder ID directly in the **2. Set — Extract Form Fields** node under `folderId`.

**Add a seventh section** — To include a section like "Open Questions" or "Risks Identified", add a new field to the JSON schema in **5. Parser — Structured Notes Output** and add a matching instruction to the prompt in **3. AI Agent — Structure Meeting Notes**, then include it in the assembly script in **6. Code — Assemble Full Document**.

**Send an email confirmation** — Add a Gmail node after **7. Google Drive — Save Notes Document** and use the `docTitle` and `folderId` values already available to send a confirmation email to the person who submitted the form.

**Add a dropdown for meeting type** — In **1. Form — Meeting Notes Submission**, add a dropdown field (e.g., Client Call / Internal Sync / Discovery) and pass that value into the AI prompt in **3. AI Agent — Structure Meeting Notes** to tailor the tone or section focus by meeting type.

**Save as a Google Doc instead of a plain-text file** — In **7. Google Drive — Save Notes Document**, change the file creation settings to use Google Docs MIME type so the output opens natively in Google Docs with editable formatting.

---

## Troubleshooting

**AI Agent produces incomplete or missing sections:**
- Check that the **4. OpenAI — GPT-4o-mini Model** credential is valid and has available API credits
- Open the execution log for **3. AI Agent — Structure Meeting Notes** to see if an OpenAI error was returned
- If the raw notes are very short or vague, GPT-4o-mini may struggle — add more detail to your notes before submitting

**Google Drive node fails and the file is not saved:**
- Confirm the **7. Google Drive — Save Notes Document** node has a Google Drive OAuth2 credential connected — it ships without one
- Re-authenticate the credential if it has expired
- Verify the folder ID you pasted in the form is correct — open the Drive folder in your browser and re-copy the ID from the URL after `/folders/`

**Form submission does not trigger the workflow:**
- Confirm the workflow is toggled to **Active** — the form URL only works when the workflow is active
- Check that you are opening the correct Form URL from the **1. Form — Meeting Notes Submission** node
- If you recently re-imported the workflow, the form URL may have changed — copy it again from the node

**Document title is blank or shows raw placeholders:**
- Confirm the Client or Project Name and Meeting Date fields were filled in before submitting the form — both are required fields
- Open the execution log for **2. Set — Extract Form Fields** to verify the values were received correctly from the form

**Output file contains `Not available` in every section:**
- This means the AI received the raw notes but could not extract meaningful content — check that the Raw Meeting Notes field was filled in with actual content, not left empty
- Confirm the **5. Parser — Structured Notes Output** node did not return an error — if the AI output did not match the schema, all fields fall back to their default messages

---

## Support

Need help setting this up or want a custom version built for your team or agency?

📧 Email:[info@isawow.com](info@isawow.com)
🌐 Website:[https://isawow.com](https://isawow.com)

## 🔗 Nodes Used

Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
