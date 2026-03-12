# 📱 Post daily tech news on Instagram with Gemini and SerpAPI

> ⚡ **261 views** · 📱 [Social Media & Email Marketing](../)

## Description

### How it Works

* The workflow runs on a daily schedule at a defined time.
* It sets the news topic, content type, and target audience.
* An AI Agent searches for the latest trending news using SerpAPI.
* The AI selects the most engaging story and generates:

  * An image generation prompt
  * An Instagram caption with hashtags
* Google Gemini generates an image based on the AI-created prompt.
* The image is uploaded to a temporary hosting service.
* The image and caption are published automatically to Instagram.

---

### Set-up Steps

* Add credentials for Google Gemini, SerpAPI, and Instagram.
* Customize the news topic and audience in the configuration node.
* Test the workflow once to confirm output quality and posting.
* Enable the scheduled trigger.

**Estimated setup time:** ~30–45 minutes.

## 🔗 Nodes Used

Schedule Trigger, AI Agent, Structured Output Parser, SerpApi (Google Search), Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
