# 🎬 Product marketing assets generator with VEO 3, OpenAI & Airtable

> ⚡ **1,041 views** · 🎬 [Content Creation & Video](../)

## Description

![Screenshot 20250817 at 04.55.08.png](fileId:2143)
---

# AI-Powered Flyer & Video Generator with Airtable, Klie.ai, and n8n

### Who is this for?

This template is perfect for e-commerce entrepreneurs, marketers, agencies, and creative teams who want to turn simple product photos and short descriptions into professional flyers or product videos—automatically and at scale.

If you want to generate polished marketing assets without relying on designers or editors, this is for you.

---

### What problem is this workflow solving?

Creating product ads, flyers, or videos usually involves multiple tools and manual steps:

* Collecting and cleaning product photos
* Writing ad copy or descriptions
* Designing flyers or visuals for campaigns
* Producing animations or video ads
* Managing multiple revisions and approvals

This workflow automates the entire pipeline. Upload a raw product image into Airtable, type a quick description, and receive back a flyer or video animation tailored to your brand and context—ready to use for ads, websites, or campaigns.

---

### What this workflow does

* Uses **Airtable** as the central interface where you upload raw product photos and enter descriptions
* Processes the content automatically via **n8n**
* Generates **flyers and visuals** using **OpenAI Image 1**
* Produces **custom product videos** with **Google’s VEO3**
* Runs through **Klie.ai** to unify the image + video generation process
* Sends the final creative assets back into Airtable for review and download

---

### Setup

1. **Download n8n files** and connect your Airtable token to n8n
2. **Duplicate the Airtable base** and make sure you’re on an Airtable Team plan
3. Add your **API key** on the Airtable interface under **API setup**
4. **Create your agency** inside the interface
5. Start generating **concept images and videos** instantly

---

### How to customize this workflow to your needs

* Edit the prompts to match your **brand voice and ad style**
* Extend Airtable fields to include more creative parameters (colors, layout, target audience)
* Add approval steps via email, Slack, or Airtable statuses before finalizing
* Integrate with publishing platforms (social media, e-commerce CMS) for auto-posting
* Track generated assets inside Airtable for team collaboration

---

🎥 **Demo Video:** [Demo Video](https://youtu.be/J1G3rKBnH7w)

---

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, OpenAI, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
