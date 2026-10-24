# 🎬 Generate blog drafts from Tally content briefs with OpenAI and Google Docs

> ⚡ **54 views** · 🎬 [Content Creation & Video](../)

## Description

## Description

This workflow turns a simple content brief into a full blog post draft, saved as a Google Doc ready for editing. It helps marketing teams go from idea to first draft in under a minute.

## Overview

A marketer fills out a Tally form with a topic, target audience, tone, keywords, CTA, and optional competitor URLs. Three AI agents work in sequence: one structures the brief, one builds a detailed outline (factoring in competitor angles if URLs were provided), and one expands the outline into a complete blog post. The finished draft is automatically created as a new Google Doc in the team's Drive.

## Tools Used

- **n8n**: The automation platform that orchestrates the workflow.
- **Tally**: Free form builder used as the content brief intake form. Create forms at [tally.so](https://tally.so).
- **OpenAI (GPT-5.4)**: Powers three chained AI agents for brief parsing, outline generation, and full draft writing.
- **Google Docs**: The finished blog draft is saved as a new Google Doc, ready for human editing and review.

## How it works

1. A marketer submits a Tally form with the blog topic, target audience, tone of voice (dropdown), target keywords, desired CTA, and optional competitor URLs.
2. Agent 1 parses the raw Tally payload into clean structured fields: topic, audience, tone, keywords, CTA, and competitor URLs.
3. Agent 2 builds a detailed blog post outline with section headings and 3-5 bullet points per section. If competitor URLs were provided, it factors their content angles into the outline.
4. Agent 3 expands the outline into a complete blog post draft with intro, body sections, conclusion, and CTA, written in the specified tone using HTML formatting.
5. The Prepare Doc Content node strips HTML to plain text and formats the output for Google Docs.
6. The workflow creates a new Google Doc with the post title and inserts the full draft body.

## How to Install

1. **Import the Workflow**: Download the .json file and import it into your n8n instance.
2. **Configure Tally**: Add your Tally API key in n8n credentials (get it from Tally &gt; Settings &gt; Integrations &gt; API). Select your Tally form in the Tally Trigger dropdown.
3. **Configure OpenAI**: Add your OpenAI API key in n8n credentials.
4. **Configure Google Docs**: Add Google Docs OAuth2 credentials using the same Google account where you want drafts saved.
5. **Create a Tally Form**: Create a content brief form in Tally with these fields:
   - Blog Topic (short text)
   - Target Audience (short text)
   - Tone (dropdown: Professional, Casual, Technical, Conversational)
   - Target Keywords (long text or tags)
   - Desired CTA (short text)
   - Competitor URLs (long text, optional)
6. **Test**: Submit a test brief through your Tally form and verify a new Google Doc is created in your Drive.

## Use Cases

- **Content Marketing Teams**: Go from brief to first draft in under a minute instead of hours.
- **Freelance Writers**: Use the outline agent to structure client briefs before writing.
- **SEO Teams**: Generate keyword-targeted drafts at scale, then human-edit for quality.
- **Agency Content Departments**: Standardize the brief-to-draft pipeline across multiple clients.
- **Founders and Solopreneurs**: Produce blog content consistently without hiring a full-time writer.

## Notes

- Edit Agent 3's system prompt to enforce your specific brand voice or word count target.
- Tally's conditional logic lets you show/hide the competitor URLs field based on a checkbox.
- GPT-5.4 costs approximately $2.50 per million input tokens and $15 per million output tokens. A typical blog draft generation uses roughly 3 API calls, costing approximately $0.01-0.03 per draft depending on length.
- The workflow outputs HTML-formatted blog posts. If you prefer Markdown, edit Agent 3's system prompt formatting instructions.

## Connect with Me

- Website: https://www.nofluff.online
- YouTube: https://www.youtube.com/@YaronBeen/videos
- LinkedIn: https://www.linkedin.com/in/yaronbeen/

#n8n #automation #tally #openai #gpt5 #contentmarketing #blogwriting #contentautomation #googledocs #aiwriting #contentbrief #marketingautomation #n8nworkflow #workflow #nocode #contentcreation #aicontent #blogdrafts #seo #contentops #tallyforms

## 🔗 Nodes Used

Google Docs, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
