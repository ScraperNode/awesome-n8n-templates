# 🎬 Generate & rank animal advocacy content with Claude AI, Open Paws & Hugging Face

> ⚡ **402 views** · 🎬 [Content Creation & Video](../)

## Description

# Multi-Version Content Generator with AI Scoring & Advocacy Preference Ranking ✍️

## Who’s it for 🐾  
This workflow is ideal for animal advocates, campaign managers, and content creators who want to generate multiple versions of written content—such as blog posts, emails, or social media captions—and identify the most effective and persuasive options using advanced AI scoring models.

## How it works / What it does ⚙️  
The flow takes user input specifying content type, tone, style, and topic. It calls a powerful research and content generation subworkflow to produce five fully written content variations. These are split and passed to a scoring subworkflow that uses Open Paws AI models trained on real-world social media and email marketing data, combined with evaluations from animal advocacy experts. Finally, it aggregates the content with their performance and prediction scores, outputting a ranked list of content options.

## How to set up 🛠️  
Add the following subworkflows to your n8n instance before running this flow:  
- [Multi-Tool Research Agent for Animal Advocacy](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/)  
- [Evaluate Animal Advocacy Text with Hugging Face & Open Paws AI Models](https://n8n.io/workflows/5587-evaluate-animal-advocacy-text-with-hugging-face-open-paws-ai-models/)  

## Requirements 📋  
- n8n instance  
- API key for OpenRouter
- The linked research and scoring subworkflows installed and accessible

## How to customize the workflow 🎨  
Modify the user input fields to change content type, tone, style, and topic. You can extend the scoring node or integrate this flow as a subworkflow within larger automation pipelines—for example, to schedule posting or feed an AI agent for content selection.

## 🔗 Nodes Used

Execute Sub-workflow, Execute Workflow Trigger, Information Extractor, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
