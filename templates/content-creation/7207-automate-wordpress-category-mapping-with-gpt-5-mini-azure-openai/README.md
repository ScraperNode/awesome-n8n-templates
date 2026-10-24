# 🎬 Automate WordPress category mapping with GPT-5 Mini (Azure OpenAI)

> ⚡ **480 views** · 🎬 [Content Creation & Video](../)

## Description

Map content topics to the right WordPress categories automatically. WP Category Toolkit reads your WordPress categories via REST API, lets a GPT-5-mini model decide which IDs fit your topic, and hands back a clean mapping. No more copy-paste guesswork, tagging errors drop, and your site stays organized.

![Screenshot 20250810 at 10.51.28.png](fileId:2012)

*Last updated: September 2026.*

## Why Use WP Category Toolkit?

- **Saves time:** Manual category lookup becomes a batch job measured in minutes.
- **Stops messy tagging:** Consistent category assignments, so archives and SEO behave.
- **Measurable improvement:** Faster publish cycles with far fewer category fixes (manual mapping errors down ~90%).
- **Competitive edge:** An LLM reads topic intent, so categories match meaning, not guesswork.

## Perfect For

- **Content Managers:** Keep large WordPress catalogs neat without spreadsheet gymnastics.
- **Agencies:** Onboard client sites faster by automating taxonomy mapping across projects.
- **Developers & Automators:** Drop an LLM-powered mapping step into content pipelines without building custom classifiers.


## How It Works

1. **Trigger:** Manual start. Kick it off when you are ready to map categories.
2. **Process:** Pulls all site categories from your WordPress REST endpoint, aggregates the list, and feeds the source content plus current topic into the mapping step.
3. **Smart Logic:** A Chain LLM node (**Category-Mapping**) uses a small prompt to decide which WordPress category IDs match the content topic (GPT-5-mini handles the reasoning).
4. **Output:** A clean category ID mapping you can paste into your Body Post WordPress node or use to patch posts automatically.


## Quick Setup

1. **Import** JSON file to your [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instances
2. **Add credentials:** WordPress API credential & Azure OpenAI (GPT-5-mini) credential, or you can use the standard OpenAI node
3. **Update:** Replace the WP endpoint URL ([REST API docs](https://developer.wordpress.org/rest-api/)) and any post-body endpoints you will write back to
4. **Test:** Run with a sample post and copy the output mapping into your Body Post WordPress node to confirm IDs match expected categories


## You'll Need

- Active [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) instances
- WordPress REST API access and credentials (`wp-json` access)
- Azure OpenAI account with access to GPT-5-mini
- Integrations: WordPress API node, Chain LLM / Azure OpenAI node
- *(Optional)* Staging WordPress site to test mappings safely



## Level Up Ideas

- Auto-write category descriptions based on mapped content using the LLM.
- Patch posts automatically after mapping so mapping becomes truly zero-touch.
- Add fallback heuristics: if the LLM is uncertain, route to a Slack or Microsoft Teams approval step.

### Quick Answers
**What do I feed it?**  
Your content topic plus your site's category list pulled from the WordPress REST API.  
**What comes back?**  
A clean mapping of WordPress category IDs matched to your topic.  
**Which model decides?**  
GPT-5-mini (Azure OpenAI), guided by a small mapping prompt.  

Made by: **[khmuhtadin](https://khmuhtadin.com)**  
Tags: WordPress, Categories, AI, n8n  
Category: WordPress  
Need custom work? **[Contact me](https://khmuhtadin.com/contact)**

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
