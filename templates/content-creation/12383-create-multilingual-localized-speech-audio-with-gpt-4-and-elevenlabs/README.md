# 🎬 Create multilingual localized speech audio with GPT-4 and ElevenLabs

> ⚡ **161 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow delivers intelligent multilingual audio content creation for global marketing teams, e-learning providers, and content production studios. It solves the complex challenge of generating culturally adapted, professionally voiced translations optimized for each target language. The system begins with AI-powered localization that adapts source content for cultural context, idioms, and regional preferences rather than literal translation. Specialized AI agents then optimize speech parameters (pace, tone, emphasis) and voice characteristics (pitch, timbre, style) specific to each language's phonetic requirements. The workflow prepares language arrays and loops through each target language, generating optimized audio via ElevenLabs with customized voice parameters. All audio files are processed, formatted with metadata, and aggregated into a complete deliverable package, transforming single-source content into publication-ready multilingual audio assets.

## Setup Steps
1. Configure OpenAI API credentials in all AI agent nodes  
2. Set up ElevenLabs account, obtain API key 
3. Define target languages list in "Workflow Configuration" node using ISO language codes
4. Customize localization prompts in AI agents to match brand voice and content type
5. Adjust voice parameter ranges and optimization criteria based on audio requirements
6. Configure output formatting in "Aggregate Results" node  

## Prerequisites
OpenAI API access with GPT-4 capabilities, active ElevenLabs subscription with multi-voice access. 
## Use Cases
Global product launch campaigns, international e-learning course production
## Customization
Modify AI prompts for industry-specific terminology, add quality validation checkpoints
## Benefits
Achieves native-quality audio across languages, reduces production time by 80%

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
