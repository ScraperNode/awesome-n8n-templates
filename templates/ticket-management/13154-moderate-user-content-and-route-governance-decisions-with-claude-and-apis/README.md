# 🎫 Moderate user content and route governance decisions with Claude and APIs

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## How It Works
This workflow automates intelligent content moderation and governance enforcement through multi-model AI validation. Designed for social media platforms, online communities, and user-generated content platforms, it solves the critical challenge of scaling content review while maintaining consistent policy enforcement and human oversight for edge cases. The system receives content submissions via webhook, processing them through a dual-agent AI framework for content validation and governance orchestration. It employs specialized AI models for policy violation detection, moderation API enforcement checks, and governance decision-making. The workflow intelligently routes content based on severity classification, escalating high-risk submissions for human moderator review while auto-processing clear-cut decisions. By merging parallel validation paths and maintaining comprehensive audit logs, it ensures consistent policy application across all content while preserving human judgment for nuanced cases requiring contextual understanding.

## Setup Steps
1. Configure Content Submission Webhook trigger endpoint
2. Connect Workflow Configuration node with content policy parameters
3. Set up Content Validation Agent with Claude/OpenAI API credentials
4. Configure parallel AI processing nodes
5. Connect Governance Orchestration Agent with AI API credentials
6. Set up multi-model validation 
7. Configure Route by Severity node with classification thresholds
 
## Prerequisites
Claude/OpenAI API credentials for content validation, moderation API access for policy enforcement
## Use Cases
Social media platforms moderating user posts and comments, online marketplaces reviewing product listings
## Customization
Adjust severity thresholds for platform-specific risk tolerance
## Benefits
Reduces content review time by 85%, ensures consistent policy enforcement across all submissions

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Anthropic Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
