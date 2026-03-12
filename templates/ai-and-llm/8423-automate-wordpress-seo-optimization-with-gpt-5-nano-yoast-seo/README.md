# ✨ Automate WordPress SEO optimization with GPT-5 nano + Yoast SEO

> ⚡ **175 views** · ✨ [AI & LLMs](../)

## Description

Optimize your WordPress titles and meta descriptions with AI (OpenAI), update them directly in Yoast SEO, log results in Google Sheets, and receive a styled report by email.
All from your own n8n instance.

---

## ✨ Why this workflow?

Forget spending hours editing metadata manually: this flow automates SEO generation and updates with the help of AI.

* **Fully documented**: every block includes notes so you can easily understand how it works.
* **Error-proof**: reinforced with alternatives and clear alerts if something fails (nested sitemaps, blocks, etc).
* **Flexible and easy to modify**: change language, keywords, or domain in one single node (`OPTIONS`).
* **Basic support included**: designed so anyone can set it up without being an expert.

---

## 🧠 What does the workflow do?

* Reads the sitemap or internal WordPress URLs (posts or pages).
* The website content is sent to **ChatGPT (GPT-5-nano)**, which analyzes it and generates a **personalized SEO title and meta description for higher precision**.
* Updates the **Yoast SEO fields** in WordPress automatically.
* Logs each result (URL, TITLE, META) into **Google Sheets**.
* Sends a **professional HTML email report** with a summary of the updates.

---

## 🛠️ Technologies & APIs Used

* **n8n** (cloud or self-hosted instance).
* **OpenAI** (GPT-5-nano / GPT-4o-mini).
* **Google Sheets API** (to store results).
* **Gmail/SMTP** (for notifications).
* **Yoast SEO plugin in WordPress** (required to update meta fields).

---

## ⚡ Who is it for?

* **Agencies & SEOs** managing multiple sites.
* **Freelancers** delivering extra value to clients.
* **Businesses with WordPress** wanting to improve SEO without expensive SaaS.
* **Webmasters & marketers** needing clear, automated reporting.
* Curious in the world of n8n

---

## 🎯 Problems solved

* No more manual editing of metadata for each post or page.
* Eliminates dependence on overpriced third-party tools.
* Creates an automatic SEO history of your site in Google Sheets.
* Sends clear, professional reports of every update.

---

## 📝 Quick Setup

1. Import the `.json` into your n8n.
2. Add your credentials:

   * **WordPress API** (Yoast SEO installed required).
   * **OpenAI API Key**.
   * **Google Sheets** (optional).
   * **Email (SMTP or Gmail)**.
3. Adjust language, keywords, and domain in the `OPTIONS` node.
4. Run manually or via webhook.

---

## 💡 Tips

* Change the language in `OPTIONS` to adapt SEO outputs to your target market.
* If an error occurs (invalid sitemap, blocked URLs, etc.), the workflow catches it and gives you instructions.
* 100% customizable: extend it to Notion, Slack, or other outputs.

---

## 📦 What’s included?

* **n8n workflow file (.json)**.
* Internal documentation notes inside the flow.
* Basic email support.

---

👉 This workflow is your **SEO co-pilot**: fast, automated, documented, and robust.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Gmail, Stop and Error, Markdown

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
