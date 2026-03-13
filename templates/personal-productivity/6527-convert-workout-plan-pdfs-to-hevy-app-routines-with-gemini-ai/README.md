# ⚡ Convert workout plan PDFs to Hevy App routines with Gemini AI

> ⚡ **689 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Scan Any Workout Plan into the Hevy App with AI

This workflow automates the creation of workout routines in the [Hevy app](https://www.hevyapp.com) by extracting exercise information from an uploaded PDF or Image using AI.

***

## What problem does this solve?
Tired of manually typing workout plans into the Hevy app? Whether your coach sends them as Google Docs, PDFs, or you have a screenshot of a routine, entering every single exercise, set, and rep is a tedious chore.

This workflow ends the madness. It uses AI to instantly scan your workout plan from any file, intelligently extract the exercises, and automatically create the routine in your Hevy account. What used to take 15 minutes of mind-numbing typing now happens in seconds.

## How it works

1.  **Trigger:** The workflow starts when a PDF file is submitted through an n8n form.
2.  **Data Extraction:** The PDF is converted to a Base64 string and sent to an AI model to extract the raw text of the workout plan.
3.  **Context Gathering:** The workflow fetches a complete list of available exercises directly from the Hevy API. This list is then consolidated.
4.  **AI Processing:** A Google Gemini model analyzes the extracted text, compares it against the official Hevy exercise list, and transforms the raw text into a structured JSON format that matches the Hevy API requirements.
5.  **Routine Creation:** The final structured data is sent to the Hevy API to create the new workout routine in your account.

## Set up steps

*   **Estimated set up time:** 15 minutes.
1.  Configure the **On form submission** trigger or replace it with your preferred trigger (e.g., Webhook). Ensure it's set up to receive a file upload.
2.  Add your API credentials for the AI service (in this case, OpenRouter.ai) and the [Hevy app](https://api.hevyapp.com/docs/). You will need to create 'Hevy API' and [OpenRouter API](https://openrouter.ai/docs/quickstart) credentials in your n8n instance.
3.  In the **Structured Data Extraction** node, review the prompt and the json schema in the `Structured Output Parser`. You may need to adjust the prompt to better suit the types of files you are uploading.
4.  Activate the workflow. Test it by uploading a sample workout plan document.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Extract from File, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
