# 🎬 AI blog post generator with scheduled or prompt-based content for WordPress

> ⚡ **1,637 views** · 🎬 [Content Creation & Video](../)

## Description

# This n8n template demonstrates how to automate blog post creation with AI and WordPress

This workflow is designed for creators who want to maintain an active blog without spending hours writing — while still taking advantage of SEO benefits.  
It connects **OpenAI** and **WordPress** to help you **schedule AI-generated posts** or **create content from simple one- or two-word prompts**.

---

## 🧠 Good to know

At the time of writing, each AI-generated post will use your **OpenAI API credits** according to your model and usage tier.  
This workflow requires an active **WordPress site** with API access and your **OpenAI API key**.  
Setup is quick — in less than **5 minutes**, you can have everything running smoothly!

---

## ⚙️ How it works

1. The workflow connects to your **WordPress API** and your **OpenAI account**.  
2. You can choose between two modes:  
   - **Scheduled mode:** AI automatically creates and publishes posts based on your defined schedule.  
   - **Prompt mode:** Enter a short phrase (one or two words) and let AI generate a complete SEO-optimized post.  
3. The generated content is formatted and published directly to your WordPress blog.  
4. You can easily customize prompts, post styles, or scheduling frequency to match your brand and goals.

---

## 🚀 How to use

- Start with the **Manual Trigger** node (as an example) — or replace it with other triggers such as **webhooks**, **cron jobs**, or **form submissions**.  
- Adjust your **OpenAI prompts** to fine-tune the tone, structure, or SEO focus of your posts.  
- You can also extend this workflow to automatically share posts on social media or send notifications when new articles go live.

---

## ✅ Requirements

- Active **OpenAI API key**  
- **WordPress site** with API access  

---

## 🧩 Customising this workflow

AI-powered content creation can be adapted for many purposes. Try using it for:  
- Automated **content calendars**  
- Generating **product descriptions**  
- Creating **newsletter drafts**  
- Building **SEO-focused blogs** effortlessly

## 🔗 Nodes Used

HTTP Request, Wordpress, Schedule Trigger, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
