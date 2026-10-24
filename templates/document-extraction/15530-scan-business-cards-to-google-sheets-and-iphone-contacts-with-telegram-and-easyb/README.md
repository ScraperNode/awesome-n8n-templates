# 🔬 Scan business cards to Google Sheets and iPhone contacts with Telegram and easybits

> ⚡ **126 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### What This Workflow Does

Snap a photo of a business card – or a whole stack laid out on a desk – and get back a Google Sheets row for every contact plus a `.vcf` file you can tap to add directly to your iPhone

Built for the moment you come back from a conference with 30 cards in your pocket. Lay them out, take one photo, and your contacts are in your phone before you finish your coffee.

---

### How it works

1. **Telegram bot** receives a photo of one or more business cards
2. **easybits Extractor** reads every card in the image and returns structured contact data (name, title, company, email, phone, website, address, notes)
3. **Deduplication check** compares each new contact against existing rows in the sheet – already-saved contacts are filtered out automatically
4. **Google Sheets** gets a new row for every new contact
5. **Individual vCard files** are sent back via Telegram, one per new contact – tap any of them to add directly to your phone

---

### What you need

- An n8n instance (Cloud or self-hosted)
- A Telegram bot (free, takes 2 minutes to create via @BotFather)
- A Google Sheet with these column headers: `timestamp` · `name` · `title` · `company` · `email` · `phone` · `website` · `address` · `notes`
- An easybits account at [easybits.tech](https://easybits.tech) – your Pipeline ID and API Key from the pipeline details page

---

### Setting up the easybits Extractor in n8n

The easybits Extractor is a **verified community node**, so it's available on n8n Cloud out of the box – just search for "easybits Extractor" in the node panel and start using it. No installation needed.

On a **self-hosted instance**, go to **Settings → Community Nodes → Install** and enter: `@easybits/n8n-nodes-extractor`

Once added to your canvas, you only need two values from your easybits pipeline details page:

- **Pipeline ID**
- **API Key**

Leave **Input Type** on `Binary Files` (the default) – it reads the photo binary directly from the Telegram node, no encoding step needed.

---

### Dedup logic

Contacts are matched by **email** when available, otherwise by **name + company**. If a contact already exists in the sheet, it won't be re-added or sent back as a vCard – only genuinely new contacts come through.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
