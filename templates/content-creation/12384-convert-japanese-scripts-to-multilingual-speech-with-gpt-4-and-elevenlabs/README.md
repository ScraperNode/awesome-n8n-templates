# 🎬 Convert Japanese scripts to multilingual speech with GPT-4 and ElevenLabs

> ⚡ **63 views** · 🎬 [Content Creation & Video](../)

## Description

## How It Works
This workflow provides enterprise-grade translation and text-to-speech automation for international communication teams, content publishers, and localization services. It addresses producing high-quality multilingual audio content with consistent accuracy and natural delivery at scale. An AI orchestrator analyzes source content to determine optimal translation strategy, selecting specialized agents based on content type, complexity, and target languages. The translation agent processes text with contextual awareness, generating structured output that feeds into ElevenLabs' neural text-to-speech engine. Each audio file undergoes automated quality validation checking pronunciation accuracy, natural flow, and technical specifications. High-quality outputs proceed to standardized formatting for delivery, while failures trigger dedicated error handling with diagnostic reporting, ensuring reliable production of professional multilingual audio assets.

## Setup Steps
1. Configure OpenAI API key in "Translation Orchestrator" 
2. Set up ElevenLabs credentials in "Text-to-Speech" 
3. Define source and target languages in "Workflow Configuration" 
4. Customize orchestration logic based on content types and complexity
5. Set quality thresholds in "Audio Quality Validation" matching output 

## Prerequisites
OpenAI API access with GPT-4 capabilities, active ElevenLabs subscription.
## Use Cases
Enterprise content localization, multilingual customer communications
## Customization
Add language-specific translation agents, modify orchestration routing logic
## Benefits
Delivers consistent translation quality through intelligent routing

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, AI Agent Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
