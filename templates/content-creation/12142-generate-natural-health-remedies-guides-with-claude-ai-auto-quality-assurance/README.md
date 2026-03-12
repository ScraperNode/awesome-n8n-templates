# 🎬 Generate natural health remedies guides with Claude AI & auto quality assurance

> ⚡ **42 views** · 🎬 [Content Creation & Video](../)

## Description

## DESCRIPTION
This workflow automates the creation of personalized natural health guides using Claude AI with built-in quality assurance. It generates comprehensive, medically-informed content tailored to specific diseases and patient demographics, featuring prevention strategies, natural remedies, and healing recipes. The workflow includes an intelligent quality loop that automatically refines content until it meets professional standards, eliminating generic templates and placeholders. Perfect for healthcare practitioners, wellness coaches, and health content creators who need accurate, personalized medical information at scale.

## KEY FEATURES

**AI-Powered Content Generation:**
Creates disease-specific health guides with natural remedies, prevention strategies, and healing recipes
**Automated Quality Assurance:**
Intelligent evaluator reviews content for completeness and accuracy
**Iterative Improvement Loop:**
Automatically refines content through AI optimization until quality standards are met
**Patient Customization:**
Tailors information based on disease, age, and gender
**Dual Timezone Display:**
Shows timestamps in both local time and UTC for global users
**Professional Google Docs Export:** 
Generates formatted documents with consistent styling and emoji section markers
**Execution Tracking:**
Logs metrics including tokens used, processing time, and quality iterations
**Template-Free Output:** 
Eliminates placeholders through strict prompt engineering

## HOW IT WORKS

The workflow automates health content creation through intelligent AI agents: Users submit patient information via web form, triggering comprehensive content generation including medical information, natural remedies, and healing recipes. An automated quality evaluator reviews output for completeness and accuracy, initiating refinement loops as needed (max 5 iterations). Approved content is professionally formatted with dual timezone timestamps and exported to Google Docs, while execution metrics are logged for performance tracking.

## HOW TO USE

**Setup:** Configure LLM's API key and Google account credentials.
**Customize:** Optionally adjust AI prompts, quality criteria, and timezone settings.
**Run:** Submit patient information (disease, age, gender) via web form.
**Access:** Download generated health guide from Google Docs.
**Track:** Monitor execution metrics and performance in data table.

## REQUIREMENTS
**Essential:**

•	LLM's API account with OpenAI/Claude
•	Google account for Google Docs export
•	N8N data table to track and store the   
   metrics(Alternate option if Google sheets)
•	n8n version 1.0+

## 🔗 Nodes Used

Google Docs, n8n Form Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
