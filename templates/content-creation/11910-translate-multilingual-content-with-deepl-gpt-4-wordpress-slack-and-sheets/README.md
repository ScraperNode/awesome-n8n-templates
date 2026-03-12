# 🎬 Translate multilingual content with DeepL, GPT-4, WordPress, Slack and Sheets

> ⚡ **177 views** · 🎬 [Content Creation & Video](../)

## Description

#Multi-Language Content Translation Pipeline with AI Quality Control

This workflow provides a professional-grade translation pipeline that combines the speed of DeepL with the intelligent reasoning of OpenAI's GPT-4. It is designed to help teams scale their global content reach without sacrificing linguistic accuracy or cultural nuance.

## Who’s it for
This template is ideal for content managers, digital marketing teams, and global publishers who need to localize high volumes of articles or documentation while maintaining a "human-in-the-loop" quality standard.

## How it works
The workflow automates the entire translation lifecycle through the following steps:
1. **Trigger:** Content is ingested via a Webhook or a recurring Schedule.
2. **Translation:** The source text is translated into multiple target languages simultaneously using the DeepL API.
3. **AI Quality Guard:** An OpenAI agent evaluates each translation, assigning a quality score based on accuracy and fluency.
4. **Automated Publishing:** Content that meets your quality threshold is automatically uploaded as a draft to WordPress.
5. **Manual Review:** Any translations that fall below the threshold are flagged in Slack for human intervention.
6. **Data Logging:** All results are saved to Google Sheets to build a searchable translation memory.

## How to set up
1. **Credentials:** Connect your DeepL, OpenAI, WordPress, Slack, and Google Sheets accounts.
2. **Configuration:** In the 'Translation Configuration' node, define your source language and a list of target languages (e.g., DE, FR, JA).
3. **Google Sheets:** Create a sheet with headers: `contentId`, `title`, `sourceLanguage`, `targetLanguage`, `translatedText`, and `qualityScore`.
4. **Slack:** Choose the notification channels for alerts and summary reports.

## Requirements
- DeepL API key
- OpenAI API key (GPT-4o or GPT-4o-mini recommended)
- WordPress site with Application Passwords enabled
- A Slack workspace and a Google Sheets account

## How to customize the workflow
- **Adjust Quality Standards:** Change the `qualityThreshold` value in the configuration node to make the AI verification more or less strict.
- **Add Platforms:** Replace the WordPress node with other CMS nodes like Ghost, Strapi, or Contentful to match your stack.
- **Advanced QA:** Modify the AI Quality Reviewer’s prompt to focus on specific brand guidelines or industry terminology.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Wordpress, DeepL, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
