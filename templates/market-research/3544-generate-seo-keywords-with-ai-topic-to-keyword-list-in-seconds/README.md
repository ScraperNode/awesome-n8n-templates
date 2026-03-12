# 📊 Generate SEO keywords with AI: topic to keyword list in seconds

> ⚡ **3,064 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this template for?
This **AI Keyword Generator** workflow template is designed for **marketers**, **SEO specialists**, and **content creators** who need to quickly generate high-quality keyword lists for their content strategy. Instead of spending hours researching keywords manually, this AI-powered tool delivers targeted keyword suggestions based on your specific criteria.

![979shots_so.jpg](fileId:1109)

## What problem does this workflow solve?
Keyword research is a time-consuming but essential part of SEO and content marketing. Many professionals struggle with:
* Finding relevant keywords that match specific search intents
* Balancing between short-tail and long-tail keywords
* Generating comprehensive keyword lists that cover different aspects of a topic
* Consistently identifying high-potential keywords for content creation

## What this workflow does
This n8n workflow leverages AI to automatically generate a customized list of 15-20 high-potential keywords based on three simple inputs:
* **Topic** - The main subject area you want keywords for
* **Search Intent** - Choose between Navigational, Informational, Commercial, or Transactional
* **Keyword Type** - Select Short-Tail or Long-Tail keywords

The workflow processes your input through an AI language model that follows SEO best practices to generate relevant keywords. It then formats the results and delivers them directly to your email inbox, ready for use in your SEO strategy.

## Setup
Setting up this workflow is straightforward:

1. **Add your credentials** for the AI language model in the "Select your Chat Model" node
   * Click on the node and connect your Groq account (and choose any LLM you want, like: *OpenAI*, *Claude AI* or *Llama*)  or replace with another LLM provider
   
2. **Configure email delivery** in the "Send Result" node
   * Update the "sendTo" parameter with your email address
   * Add your Gmail credentials or replace with your preferred email service

3. **Test your workflow** by clicking the "Test Workflow" button
   * Use the form to enter your topic, search intent, and keyword type
   * Check your email for the generated keyword report

4. **Activate the workflow** once testing is complete

## How to customize this workflow
The template is highly adaptable to fit your specific needs:

* **Replace the email node** with a database or spreadsheet node to store keywords
* **Modify the AI prompts** in the "AI Keyword Agent" to adjust the keyword generation strategy
* **Add additional filtering nodes** to further refine keywords based on custom criteria
* **Integrate with other SEO tools** to analyze competition or search volume for generated keywords

This workflow serves as a powerful starting point for automating your keyword research process, saving you valuable time while delivering consistent, high-quality results.

## 🔗 Nodes Used

Gmail, AI Agent, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
