# ⚡ Practice job interviews with voice-based Google Gemini AI interviewer

> ⚡ **2,017 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What does this workflow do?

This workflow acts as the backend "brain" for a sophisticated AI Voice Interviewer. It receives a user's resume text and a target job description, then uses a Large Language Model (LLM) to conduct a realistic, voice-based interview. The workflow maintains conversation history to ask relevant follow-up questions, creating a dynamic and personalized interview practice experience.

This template is designed to work with a simple HTML frontend that handles the voice-to-text and text-to-speech functionality.

## What services does this workflow use?

- **Google Gemini:** This is the LLM used to generate intelligent interview questions. You can easily swap this out for other models like OpenAI.

## What credentials do you need to have?

You will need one credential:
- A **Google Gemini API Key**. You can get one for free from the [Google AI Studio](https://aistudio.google.com/app/apikey).

## How to use this workflow

This workflow is the backend and requires a frontend to interact with.

1.  **Set up the Frontend:** You can find the complete frontend code and setup instructions in this [GitHub repository](https://github.com/Sarry000/ai-voice-interviewer).
2.  **Configure Credentials:** In this n8n workflow, click on the "Google Gemini Chat Model" node and add your own Gemini API credential.
3.  **Activate the Workflow:** Make sure the workflow is saved and active.
4.  **Connect Frontend to Backend:** Click on the "Webhook" node and copy the **Production URL**. Paste this URL into the `voice-interview.html` page as instructed in the GitHub repository's `README.md` file.
5.  **Start Interviewing:** Fill out the form on the web page to begin your voice interview!

## 🔗 Nodes Used

Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
