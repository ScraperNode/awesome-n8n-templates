# ⚒️ Complete AI safety suite: test 9 guardrail layers with Groq LLM

> ⚡ **378 views** · ⚒️ [Engineering](../)

## Description

# Who's It For
AI developers, automation engineers, and teams building chatbots, AI agents, or workflows that process user input. Perfect for those concerned about security, compliance, and content safety.

# What It Does
This workflow demonstrates all 9 guardrail types available in n8n's Guardrails node through real-world test cases. It provides a comprehensive safety testing suite that validates:

- Keyword blocking for profanity and banned terms
- Jailbreak detection to prevent prompt injection attacks
- NSFW content filtering for inappropriate material
- PII detection and sanitization for emails, phone numbers, and credit cards
- Secret key detection to catch leaked API keys and tokens
- Topical alignment to keep conversations on-topic
- URL whitelisting to block malicious domains
- Credential URL blocking to prevent URLs with embedded passwords
- Custom regex patterns for organization-specific rules (employee IDs, order numbers)
- Each test case flows through its corresponding guardrail node, with results formatted into clear pass/fail reports showing violations and sanitized text.
# How to Set Up

- Add your Groq API credentials (free tier works fine)
- Import the workflow
- Click "Test workflow" to run all 9 cases
- Review the formatted results to understand each guardrail's behavior

# Requirements

- n8n version 1.119.1 or later (for Guardrails node)
- Groq API account (free tier sufficient)
- Self-hosted instance (some guardrails use LLM-based detection)

# How to Customize

- Modify test cases in the "Test Cases Data" node to match your specific scenarios
- Adjust threshold values (0.0-1.0) for AI-based guardrails to fine-tune sensitivity
- Add or remove guardrails based on your security requirements
- Integrate individual guardrail nodes into your production workflows
- Use the sticky notes as reference documentation for implementation

This is a plug-and-play educational template that serves as both a testing suite and implementation reference for building production-ready AI safety layers.

## 🔗 Nodes Used

Groq Chat Model, Guardrails

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
