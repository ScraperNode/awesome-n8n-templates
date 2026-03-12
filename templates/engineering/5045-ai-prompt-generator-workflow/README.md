# ⚒️ Ai prompt generator workflow

> ⚡ **51,745 views** · ⚒️ [Engineering](../)

## Description

# 🧠 AI Prompt Generator Workflow – n8n Documentation

## Who is this for?

This workflow is for **AI builders, prompt engineers, developers, marketers, and no-code creators** who want to convert rough user input into structured, high-quality prompts for LLMs. It’s especially useful for tools that rely on precision prompting and want to automate the discovery of intent and constraints.

---

## What problem is this workflow solving? / Use case

Many users struggle to write effective prompts due to vague ideas or unclear formatting needs. This workflow:
- Collects structured user input.
- Dynamically generates clarifying questions.
- Returns a well-formatted AI prompt based on the user's intent and context.

This ensures the generated prompt is useful for downstream AI agents without requiring technical understanding from the end user.

---

## What this workflow does

1. **Start with a branded form UI**  
   The user is shown a styled form with questions like:
   - What do you want to build?
   - What tools can you access?
   - What input can be expected?
   - What output do you expect?

2. **Analyze and generate relevant follow-up questions**  
   The workflow sends the user's answers to **Google Gemini (via LangChain)** which outputs 1–3 clarifying questions. These questions are parsed into a dynamic form.

3. **Loop through and collect follow-up answers**  
   Each follow-up question is shown in a form one at a time to capture additional context.

4. **Merge all inputs**  
   The base intent and follow-up responses are merged into a single context block.

5. **Generate a final AI-ready prompt**  
   The prompt generator node formats everything into a clean, six-section structure:
   - &lt;constraints&gt;
   - &lt;role&gt;
   - &lt;inputs&gt;
   - &lt;tools&gt;
   - &lt;instructions&gt;
   - &lt;conclusions&gt;

6. **Display the final result**  
   The finished prompt is shown in a clean UI where users can easily copy and reuse it.

---

## Setup

1. **Credentials Required**
   - Google Gemini (PaLM) API credentials (already integrated as `Google Gemini(PaLM) Api account 2`).

2. **Form Trigger**
   - Ensure the `On form submission` trigger is exposed via a webhook or public endpoint (e.g. using [ngrok](https://ngrok.com/) or deployed server).

3. **Styling**
   - Custom CSS is included in all form nodes for a beautiful UI. You can modify this to match your branding.

4. **Environment**
   - This workflow is compatible with **self-hosted n8n** or **n8n.cloud**.
   - Webhooks must be accessible to users who will fill out the form.

---

## How to customize this workflow to your needs

- **Change the base questions**  
  Update the `BaseQuestions` form node to add or remove fields depending on your use case.

- **Modify Gemini prompts**  
  You can edit the system prompt inside `PromptGenerator` to change tone, output structure, or AI instructions.

- **Change prompt formatting**  
  If you use a different AI agent (like GPT, Claude, or Mistral), adjust the section labels and formatting to suit that agent’s expected input.

- **Send results elsewhere**  
  Add integration nodes after `PromptGenerator`, such as:
  - Google Docs / Notion (to log prompts)
  - Gmail / Slack (to notify your team)
  - Zapier / Make (to push to other automation flows)

- **Skip follow-up questions (optional)**  
  If your base form collects all needed info, you can bypass the `RelevantQuestions` form section by modifying conditional logic.

---

## Example Output Prompt (Structure)

&lt;role&gt; You are an AI assistant that converts videos into LinkedIn posts with a witty tone. &lt;/role&gt; &lt;inputs&gt; - A short video (max 5 minutes) - Desired tone: witty - Style: both summary and quotes - Audience: general network &lt;/inputs&gt; &lt;tools&gt; You do not have access to APIs or web search. &lt;/tools&gt; &lt;instructions&gt; 1. Parse transcript. 2. Extract insights and quotes. 3. Write an engaging, witty LinkedIn post under 3000 characters. &lt;/instructions&gt; &lt;constraints&gt; Avoid technical jargon. No generic intros. Make it platform-native. &lt;/constraints&gt; &lt;conclusions&gt; Return a LinkedIn-ready post that starts with a hook and ends with hashtags.

## 🔗 Nodes Used

Basic LLM Chain, Auto-fixing Output Parser, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
