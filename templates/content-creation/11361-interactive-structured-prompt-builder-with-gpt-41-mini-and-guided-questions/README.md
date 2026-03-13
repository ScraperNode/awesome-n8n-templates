# 🎬 Interactive structured prompt builder with GPT-4.1-mini and guided questions

> ⚡ **35 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.

## Description

## Who is this for?
This workflow is designed for content creators, prompt engineers, AI developers, and anyone who needs to create effective, structured prompts for AI agents. It helps transform vague ideas into detailed, well-formatted prompts by guiding users through a structured question-and-answer process that captures all necessary details.

## What this Workflow Does / Key Features
- Interactive form interface that collects initial project information from users
- AI-powered question generation that identifies information gaps and creates relevant follow-up questions
- Sequential question presentation with a clean, user-friendly interface
- Intelligent merging of all user responses into a comprehensive dataset
- Structured prompt generation with role, inputs, tools, instructions, constraints, and conclusions
- Final prompt display in a clean, ready-to-use format
- Automatic output parsing to ensure consistent formatting

## Requirements
- OpenAI API credentials (GPT-4.1-mini model)
- Basic understanding of prompt engineering concepts

## How to Use — Step-by-Step (Short Version)
1. **Credentials**
   * Add your OpenAI API credentials in n8n (e.g., “OpenAI account 2”).
   * Make sure webhook endpoints are publicly accessible.
2. **Initial Form Setup**
   * The **BaseQuestions** form collects core project details.
   * Adjust fields as needed for your use case.
   * It asks about goals, tools, inputs, and desired outputs.
3. **AI Follow-Up Questions**
   * **RelatedQuestionAI** generates 3 follow-up questions via OpenAI.
   * Edit the prompt if you want different styles of questions.
   * A **Structured Output** node formats the questions cleanly.
4. **Final Prompt Creation**
   * **PromptGenerator** builds the final structured prompt from all inputs.
   * Customize the template to change style or format.
   * The **Output Parser** ensures everything is well-structured.

## Useful Links
- **LangChain Integration**: [Docs...](https://docs.n8n.io/integrations/langchain/)
- **OpenAI API**: [Docs...](https://platform.openai.com/docs)

## Support & Help
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/8801322827799)
- **Discord**: [SpaGreen Community](https://discord.gg/SsCChWEP)
- **Facebook Group**: [SpaGreen Support](https://www.facebook.com/groups/spagreenbd)
- **Website**: [https://spagreen.net](https://spagreen.net)
- **Developer Portfolio**: [Codecanyon SpaGreen](https://codecanyon.net/user/spagreen/portfolio)

## 🔗 Nodes Used

Basic LLM Chain, OpenAI Chat Model, Auto-fixing Output Parser, Structured Output Parser, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
