# 🎬 Auto-generate and post social media content to Bluesky using Groq LLM

> ⚡ **1,414 views** · 🎬 [Content Creation & Video](../)

## Description

### Automatically Generate Content and Post to Bluesky with LLM Workflow

Unlock the power of automation with the **Automatically Generate Content and Post to Bluesky with LLM Workflow**, an n8n-powered solution that uses Large Language Model (LLM) APIs to create engaging content and seamlessly posts it to Bluesky. Say goodbye to manual content creation and posting—streamline your social media presence in minutes!

---

#### How It Works
This workflow harnesses an LLM API (like Openai or your preferred model) to generate tailored content based on your input prompts. Once the content is created, it’s formatted to fit Bluesky’s requirements (e.g., under 300 characters), authenticated via the Bluesky API, and posted automatically. Built-in checks ensure error-free execution, making your content strategy seamless and efficient.

---

#### Set Up Steps (10-15 Minutes)
1. **Authenticate Bluesky**: Add your Bluesky API credentials (username and app password in your Bluesky settings).
2. **Configure LLM API**: Connect your chosen LLM API (e.g., Groq) with your API key.
3. **Set Prompt**: Define a system prompt in the LLM node (e.g., “Write a witty Bluesky post about AI automation”).
4. **Test Workflow**: Run it manually to verify content generation and posting.
5. **Schedule (Optional)**: Set a cron node to automate posts (e.g., daily at 9 AM).

Total setup time: 10-15 minutes, depending on familiarity with n8n.

---

#### Features
- **LLM-Powered Content**: Generate unique, high-quality posts using any LLM API.
- **Bluesky Automation**: Posts directly to Bluesky with proper formatting and authentication.
- **Character Limit Safety**: Ensures posts stay under 300 characters with built-in validation.
- **Error Handling**: Stops execution on errors to prevent unwanted posts.
- **Customizable Scheduling**: Post instantly or schedule content at your preferred intervals.
- **Scalable Design**: Easily adapt for multiple platforms or content types.

---

#### Perfect for Creators Who Want To
- Save time by automating content creation and posting.
- Maintain a consistent Bluesky presence without manual effort.
- Experiment with AI-generated content tailored to their brand.
- Focus on strategy and engagement rather than repetitive tasks.

---

#### Suggested Enhancements
- **Multi-Platform Support**: Extend the workflow to post to Twitter, Mastodon, or LinkedIn simultaneously.
- **Content Variety**: Add nodes to generate images (e.g., via DALL-E) alongside text for richer posts.
- **Analytics Integration**: Track post performance with a Bluesky API feedback loop.
- **Dynamic Prompts**: Incorporate trending topics or keywords from the web for timely content.
- **Approval Step**: Add a manual review node before posting for extra control.

## 🔗 Nodes Used

HTTP Request, Stop and Error, Schedule Trigger, Basic LLM Chain, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
