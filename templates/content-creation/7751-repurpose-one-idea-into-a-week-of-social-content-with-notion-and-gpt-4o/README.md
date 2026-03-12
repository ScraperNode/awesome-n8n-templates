# 🎬 Repurpose one idea into a week of social content with Notion and GPT-4o

> ⚡ **122 views** · 🎬 [Content Creation & Video](../)

## Description

📦 **n8n Template Submission – “7-Day Content Bloom”**  
*by Shelly-Ann Davy, The Workflow Muse*

---

### 🌸 What it does  
Drop **one article URL or brain-dump idea** into this workflow and watch it blossom into **a week of graceful, feminine content** for Instagram, X/Twitter, Pinterest, and your Sunday-email love-note.  
AI writes every caption, tweet, pin title, FAQ, and CTA in **my signature warm-neuroscience tone**—then tucks everything into a clean Notion page for your final approval.  
Optional one-click scheduling to Tailwind & Pinterest keeps your feed blooming while you sip tea.

---

### 👩‍🎨 Who it’s for  
Creators, moms, and gentle-growth entrepreneurs who crave **consistent visibility without hustle energy**.

---

### 🪄 How it works  
1. **Trigger** – Webhook or Notion row status = “Ready to Repurpose”.  
2. **AI Muse** – `gpt-4o` crafts platform-specific copy in strict JSON.  
3. **Notion Oasis** – Every caption, tweet, pin, and FAQ lands in a single, beautiful page.  
4. **Optional Bloom** – Auto-schedule IG & Pinterest via Tailwind (toggle on/off).  
5. **Whisper notification** – Slack/Discord ping when the bouquet is ready.

---

### 🛠️ One-time setup (5 min)  
| Asset | Where to find | Notes |
|---|---|---|
| **Notion database** | [Duplicate template](https://muse.notion.site/Content-Repurposing-OS-Template) | pastel palette included |
| **OpenAI key** | n8n → Credentials → OpenAI | no keys hard-coded |
| **Tailwind & Pinterest tokens** | Optional; HTTP Header Auth credentials | only if you want autopilot |

---

### 🧪 Quick test  
Send this to your webhook URL:

```json
{
  "source_url": "https://yourblog.com/neuroscience-productivity",
  "idea_text": ""
}
```

…or flip any Notion row to **Ready to Repurpose** and watch the magic.

---

### 📊 Privacy & cost  
Data stays in **your** Notion, Tailwind, and Pinterest accounts.  
OpenAI charges only for the tokens you use (~$0.04 per run on average).

---

### 🎨 Brand voice baked in  
Elegant, feminine, neuroscience-backed, and always ending with a gentle CTA to your free Sunday-reset Notion template.


---

Ready to let your next big idea bloom across the internet—stress-free?  
Activate the workflow, and let the Muse do the rest. 🌷

## 🔗 Nodes Used

Function, HTTP Request, Webhook, Notion, Notion Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
