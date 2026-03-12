# 🔬 Generate multi-format documentation with Claude Sonnet & Google Docs

> ⚡ **153 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# [Meta] Multi-Format Documentation Generator for N8N Creators (+More)

## One-Line Description
Transform n8n workflow JSON into five ready-to-publish documentation formats including technical guides, social posts, and marketplace submissions.

## Detailed Description

### What it does:
This workflow takes an exported n8n workflow JSON file and automatically generates a complete documentation package with five distinct formats: technical implementation guide, LinkedIn post, Discord community snippet, detailed use case narrative, and n8n Creator Commons submission documentation. All outputs are compiled into a single Google Doc for easy access and distribution.

### Who it's for:
- **n8n creators** preparing workflows for the template library or community sharing
- **Automation consultants** documenting client solutions across multiple channels
- **Developer advocates** creating content about automation workflows for different audiences
- **Teams** standardizing workflow documentation for internal knowledge bases

### Key Features:
- **Parallel AI generation** - Creates all five documentation formats simultaneously using Claude, saving 2+ hours of manual writing
- **Automatic format optimization** - Each output follows platform-specific best practices (LinkedIn character limits, Discord casual tone, n8n marketplace guidelines)
- **Single Google Doc compilation** - All documentation consolidated with clear section separators and automatic workflow name detection
- **JSON upload interface** - Simple form-based trigger accepts workflow exports without technical setup
- **Smart content adaptation** - Same workflow data transformed into technical depth for developers, engaging narratives for social media, and searchable descriptions for marketplaces
- **Ready-to-publish outputs** - No editing required—each format follows platform submission guidelines and style requirements

### How it works:
1. User uploads exported n8n workflow JSON through a web form interface
2. Five AI agents process the workflow data in parallel, each generating format-specific documentation (technical guide, LinkedIn post, Discord snippet, use case story, marketplace listing)
3. All outputs merge into a formatted document with section headers and separators
4. Google Docs creates a new document with auto-generated title from workflow name and timestamp
5. Final document populates with all five documentation formats, ready for copying to respective platforms

## Setup Requirements

### Prerequisites:
- **Anthropic API** (Claude AI) - Powers all documentation generation; requires paid API access or credits
- **Google Docs API** - Creates and updates documentation; free with Google Workspace account
- **n8n instance** - Cloud or self-hosted with AI agent node support (v1.0+)

### Estimated Setup Time:
20-25 minutes (15 minutes for API credentials, 5-10 minutes for testing with sample workflow)

## Installation Notes

- **API costs**: Each workflow documentation run uses ~15,000-20,000 tokens across five parallel AI calls (approximately $0.30-0.50 per generation at current Claude pricing)
- **Google Docs folder**: Update the `folderId` parameter in the "Create a document" node to your target folder—default points to a specific folder that won't exist in your Drive
- **Testing tip**: Use a simple 3-5 node workflow for your first test to verify all AI agents complete successfully before processing complex workflows
- **Wait node purpose**: The 5-second wait between document creation and content update prevents Google Docs API race conditions—don't remove this step
- **Form URL**: After activation, save the form trigger URL for easy access—bookmark it or share with team members who need to generate documentation

## Customization Options

**Swappable integrations:**
- Replace Google Docs with Notion, Confluence, or file system storage by swapping final nodes
- Switch from Claude to GPT-4, Gemini, or other LLMs by changing the language model node (may require prompt adjustments)
- Add Slack/email notification nodes after completion to alert when documentation is ready

**Adjustable parameters:**
- Modify AI prompts in each agent node to match your documentation style preferences or add company-specific guidelines
- Add/remove documentation formats by duplicating or deleting agent nodes and updating merge configuration
- Change document formatting in the JavaScript code node (section separators, headers, metadata)

**Extension possibilities:**
- Add automatic posting to LinkedIn/Discord by connecting their APIs after doc generation
- Create version history tracking by appending to existing docs instead of creating new ones
- Build approval workflow by adding human-in-the-loop steps before final document creation
- Generate visual diagrams by adding Mermaid chart generation from workflow structure
- Create multi-language versions by adding translation nodes after English generation

## Category
Development

## Tags
- documentation
- n8n
- content-generation
- ai
- claude
- google-docs
- workflow
- automation-publishing

## Use Case Examples

- **Marketplace contributors**: Generate complete n8n template submission packages in minutes instead of hours of manual documentation writing across multiple format requirements

- **Agency documentation**: Automation consultancies can deliver client workflows with professional documentation suite—technical guides for client IT teams, social posts for client marketing, and narrative case studies for portfolio

- **Internal knowledge base**: Development teams standardize workflow documentation across projects, ensuring every automation has consistent technical details, use case examples, and setup instructions for team onboarding

## 🔗 Nodes Used

Google Docs, AI Agent, Anthropic Chat Model, n8n Form Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
