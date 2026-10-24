# 🎬 Convert natural language to video JSON prompts with GPT and Gemini for Veo 3

> ⚡ **2,622 views** · 🎬 [Content Creation & Video](../)

## Description

Turn plain-language video ideas into ready-to-use Veo 3 JSON prompts. This workflow takes your free-text prompt, refines it with Langchain AI and Google Gemini, and returns structured JSON tuned for Veo 3 video generation. No manual formatting, no guessing parameters.

*Last updated: September 2026.*

## Why Use Prompt Converter?

**Save time:** Complex video prompts become structured JSON automatically. No more manual formatting headaches.

**Avoid guesswork:** Vague ideas turn into detailed, cinematic descriptions that match Veo 3 specs.

**Improve output quality:** Every parameter is optimized for Veo 3, so results look realistic and stunning.

**Gain a creative edge:** Rough concepts become vivid video prompts with AI enhancement.

## Perfect For

**Video creators:** Developers and creators who want quick, precise prompt formatting without coding.

**AI enthusiasts:** Hobbyists and developers exploring Langchain and Google Gemini for media generation.

**Marketing teams:** Professionals making video ads or visuals with consistent, time-saving prompt structuring.

## How It Works

* **Trigger:** You submit a free-text prompt via message or webhook.
* **Process:** An AI model reads your text and reworks it into detailed JSON parameters for Veo 3.
* **Smart Logic:** Langchain nodes add cinematic detail, set sensible defaults, and structure the data.
* **Output:** The refined JSON prompt goes to Google Gemini for video generation with optimized settings.

## Quick Setup

1. Import the JSON file to your [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
2. **Add credentials:** Azure OpenAI, Gemini API ([AI Studio docs](https://ai.google.dev/)), OpenRouter API
3. **Customize:** Adjust prompt templates or default parameters in the Prompt converter node
4. **Test:** Run your workflow with sample text prompts to see videos come to life

## You'll Need

- Active [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
- Azure OpenAI API
- Gemini API Key
- OpenRouter API (alternative AI option)

## Level Up Ideas

- Add integration with video hosting platforms to auto-upload generated videos


## Nodes Used

- **Prompt Input** (Chat Trigger)
- **OpenAI** (Azure OpenAI GPT model)
- **Alternative** (OpenRouter API)
- **Prompt converter** (Langchain chain LLM for JSON conversion)
- **JSON parser** (structured output extraction)
- **Generate a video** (Google Gemini video generation)

### Quick Answers
**How do I submit a prompt?**  
Send free text through a message or a webhook call.  
**What do I get back?**  
Structured JSON parameters tuned for Veo 3, ready for video generation.  
**Which AI services are involved?**  
Azure OpenAI, Google Gemini, and optionally OpenRouter.  

---
**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tags:** video generation, AI, Langchain, automation, Google Gemini  
**Category:** Video Production  
**Need custom work?** [Contact me](https://khmuhtadin.com/contact)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Basic LLM Chain, Structured Output Parser, Chat Trigger, Azure OpenAI Chat Model, OpenRouter Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
