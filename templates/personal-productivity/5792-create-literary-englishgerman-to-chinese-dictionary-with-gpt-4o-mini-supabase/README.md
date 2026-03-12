# ⚡ Create literary English/German to Chinese dictionary with GPT-4o-mini & Supabase

> ⚡ **540 views** · ⚡ [Personal Productivity](../)

## Description

## **Description**
This workflow creates a sophisticated bilingual dictionary that provides literary-style definitions and examples for English and German words. The system automatically detects the input language, generates comprehensive definitions in Chinese, creates three literary-style example sentences with translations, and stores everything in a Supabase database for future reference.

## Who Is This For?
- Language Learners & Students: Perfect for those studying English or German who want to understand words in literary contexts with Chinese translations.
- Writers & Content Creators: Ideal for bilingual writers working with English, German, and Chinese who need rich, literary examples for their work.
- Educators & Translators: Excellent tool for language teachers and professional translators who need comprehensive word definitions with contextual examples.
- Literary Enthusiasts: Great for readers of literature who encounter unfamiliar words and want to understand their poetic or literary usage.
## What Problem Does This Workflow Solve?
Traditional dictionaries often provide basic definitions without literary context or cross-language examples. This workflow addresses several key challenges:
- Limited Literary Context: Most dictionaries lack poetic, expressive, or literary-style examples that help understand how words are used in sophisticated writing.
- Cross-Language Learning: Provides seamless translation between English/German and Chinese with culturally appropriate examples.
- Data Persistence: Automatically saves all lookups to a database, creating a personalized vocabulary collection over time.
- API Accessibility: Provides a clean webhook interface that can be integrated into apps, websites, or other tools.

## How It Works
### Main Dictionary Lookup Flow
1. Input Processing: Receives a word via webhook POST request and automatically detects if it's English or German
2. AI Analysis: Uses OpenAI GPT-4o-mini to generate comprehensive definitions with literary context
3. Response Formatting: Processes the AI response to extract structured data (word, meaning, examples)
4. Quality Control: Validates the response and handles unclear or invalid inputs gracefully
5. Database Storage: Saves the word, Chinese meaning, and examples to Supabase for future reference
6. API Response: Returns formatted JSON with the complete dictionary entry
### Data Storage Flow
1. Parallel Processing: Simultaneously returns the dictionary data to the user and saves it to the database
2. Structured Storage: Organizes data in Supabase with fields for words, Chinese meanings, and example arrays
3. Success Confirmation: Provides confirmation when data is successfully stored
## Setup Instructions
### Prerequisites & Accounts
You'll need accounts and API access for:
- n8n (Cloud or self-hosted)
- OpenAI (API key required)
- Supabase (Database and API credentials)
### Webhook Configuration
- The workflow uses two webhook endpoints with the same path for different operations
- Note the webhook URL provided by n8n for API integration
- Test the webhook endpoints to ensure they're accessible
approach
## Customization Options
- Extend to support additional input languages by modifying the AI prompt
- Add support for other target languages beyond Chinese
- Customize the literary style for different cultural contexts

This workflow transforms simple word lookups into rich, contextual learning experiences while building a personalized vocabulary database over time.

## 🔗 Nodes Used

Webhook, Supabase, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
