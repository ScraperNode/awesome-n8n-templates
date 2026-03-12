# 📱 Convert GitHub code commits to LinkedIn posts with Gemini AI and code image generation

> ⚡ **109 views** · 📱 [Social Media & Email Marketing](../)

## Description

Turn your code commits into engaging social media content automatically. This workflow monitors a GitHub repository, uses AI to write a LinkedIn post about your changes, generates a beautiful "Mac-window" style image of your code, and publishes it all to LinkedIn.

## How it works
1. **GitHub Trigger**: Watches for new `push` events in your selected repository.
2. **AI Analysis**: Passes the code changes to an LLM (via LangChain) to write a professional LinkedIn post and select the best code snippet.
3. **Image Generation**: Creates a custom HTML view of your code (with syntax highlighting and window controls) and converts it to an image using the HCTI API.
4. **Hosting & Posting**: Uploads the generated image back to GitHub for hosting, then combines the text and image to publish a live post on LinkedIn.

## Set up steps
1. **Configure Credentials**: You will need credentials for:
   - GitHub (OAuth2 or Access Token)
   - LinkedIn (OAuth2)
   - OpenRouter (or swap the model node for OpenAI/Anthropic)
   - HCTI.io (for the HTML-to-Image conversion)
2. **Update GitHub Nodes**:
   - In the **Trigger** node: Set your `Owner` and `Repository`.
   - In the **File Download** node: Set the same `Owner` and `Repository`.
   - In the **Upload Image** node: Set the target repo where you want images stored.
3. **Update LinkedIn Node**:
   - Add your LinkedIn Person URN in the `Person` field.

## 🔗 Nodes Used

GitHub, Github Trigger, HTTP Request, LinkedIn, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
