# 🎬 Generate multi-format social visuals with Abyssale and publish via Blotato

> ⚡ **358 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

# 💥 Automate multi-format design creation in Abyssale and publish via Blotato
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Automate-multi-format-design-creation-in-Abyssale-and-publish-via-Blotato-3053d6550fd98094a291f106966ca092?source=copy_link)

![Workflow Overview](https://www.dr-firas.com/workflow-abyssale.png)


This workflow automates the creation of multi-format social media visuals using Abyssale and publishes them directly to social platforms via Blotato. It includes AI-based product image generation, background removal, dynamic design customization, and multi-channel distribution.

---

### Who is this for?

- Marketers and growth teams managing multiple social platforms  
- E-commerce brands launching product campaigns  
- Agencies producing multi-format creatives at scale  
- Automation builders who want end-to-end design + publishing in one workflow  

---

### What problem is this workflow solving? / Use case

Creating platform-specific visuals manually is time-consuming.  
Each social network requires different dimensions and formats.  
Design → Export → Resize → Upload → Publish quickly becomes repetitive and inefficient.

This workflow solves that by:

- Generating a clean product image (PNG with transparent background)
- Injecting it automatically into an Abyssale design template
- Generating all required social media formats
- Publishing each format to the correct platform automatically

---

### What this workflow does

1. **Generate product image (AI)**
   - Creates a high-quality product image
   - Ensures single product rendering unless otherwise requested
   - Removes background and outputs transparent PNG

2. **Customize design in Abyssale**
   - Loads selected template
   - Builds editable form dynamically
   - Allows image and text updates
   - Generates multiple formats (Facebook, Instagram, LinkedIn, etc.)

3. **Dispatch by format**
   - Uses a Switch node to route each format
   - Each format is sent to a dedicated Blotato node

4. **Publish to social platforms**
   - Facebook post
   - Facebook feed
   - Instagram post
   - Instagram story
   - LinkedIn feed
   - Twitter/X post
   - Pinterest pins
   - Tiktok post

Each format is automatically matched with its corresponding publishing node.

---

### Setup
1. **Credentials required**
   - **[Abyssale](https://abyssale.cello.so/wXzGGKBcrTl)** API credentials
   - **[Blotato](https://blotato.com/?ref=firas)** API credentials
   - **[AtlasCloud](https://www.atlascloud.ai?ref=8QKPJE)** API (NanoBanana) + Background remover API

2. **Configure template**
   - Select your Abyssale template ID
   - Ensure all required formats are enabled in the template

3. **Set publishing destinations**
   - Connect Blotato accounts to your social platforms
   - Map each format to the correct channel

4. **Optional**
   - Adjust polling timing for image generation
   - Modify default caption input

---

### How to customize this workflow to your needs

- Replace the AI image generation model
- Modify the prompt rules (e.g., product style, realism, lighting)
- Add or remove social platforms
- Change the Abyssale template
- Add approval step before publishing
- Add scheduling instead of instant publishing
- Insert analytics tracking after posting

You can also extend it by:
- Adding email notifications
- Storing generated images in cloud storage
- Logging posts in a database
- Creating A/B variations automatically

---

This workflow enables a fully automated pipeline from product idea to published multi-platform campaign with minimal manual work.

### 🎥 [Watch This Tutorial](https://youtu.be/T9gNqXRH8nE)

![SORA2 logo](https://www.dr-firas.com/abyssale-youtube.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)


### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
