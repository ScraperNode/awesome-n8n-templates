# 🎬 AI news research team: 24/7 newsletter automation with citations with Perplexity

> ⚡ **5,880 views** · 🎬 [Content Creation & Video](../)

## Description

[![Building an AI Personal Assistant](https://img.youtube.com/vi/sKJAypXDTLA/sddefault.jpg)](https://youtu.be/sKJAypXDTLA)

**Purpose of workflow:**

This AI-powered workflow automatically generates detailed, well-researched newsletters by monitoring and analyzing specified news topics (like Bitcoin, Nvidia, etc.). It uses a team of AI research agents to gather, analyze, and compile information with automatic citations, saving significant time in newsletter creation.

**How it works:**

Multi-agent system:
- Research Leader: Analyzes topics and creates content outline
- Project Planner: Breaks down research into specific tasks
- Research Assistants: Conduct detailed research on assigned subtopics
- Editor: Combines research and polishes final output

**Key features:**
- Automated daily monitoring of specified news topics
- Real-time information gathering using Perplexity AI
- Auto-citation functionality for source verification
- Flexible time window filtering (day/week/month)
- Options for detailed or simple reports
- Direct email delivery of completed newsletters

**Step-by-step setup:**
1. Perplexity API Setup:
   - Create account at perplexity.ai
   - Navigate to API tab
   - Generate API key
   - Set up credentials with 'Bearer' authentication

2. Workflow Configuration:
   - Connect Google Sheets containing news monitoring topics
   - Configure schedule trigger for daily execution
   - Set up email delivery settings
   - Define report type preferences (detailed/simple)
   - Specify time window for news gathering

3. Integration:
   - Connect with newsletter tools like Kit
   - Import generated content as starting point
   - Edit and customize as needed before publishing

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Markdown, Execute Workflow Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
