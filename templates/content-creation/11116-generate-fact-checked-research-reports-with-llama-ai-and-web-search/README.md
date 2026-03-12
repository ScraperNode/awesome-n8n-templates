# 🎬 Generate fact-checked research reports with Llama AI and Web search

> ⚡ **195 views** · 🎬 [Content Creation & Video](../)

## Description

# **Who’s it for**

This template is designed for creators, researchers, freelance writers, founders, and automation professionals who want a reliable way to generate structured, citation-backed research content without doing manual data collection. Anyone creating blog posts, reports, briefs, or research summaries will benefit from this system.

# What it does

This workflow turns a simple form submission into a complete research pipeline. It accepts a topic, determines what needs to be researched, gathers information from the web, writes content, fact-checks it against the collected sources, edits the draft for clarity, and compiles a final report.
It behaves like a small agentic research team inside n8n.

# How it works

- A form collects the research topic, depth, and desired output format.

- A research agent generates focused search queries.

- SERP API retrieves real-time results for each query.

- The workflow aggregates and structures all findings.

- A writing agent creates the first draft based on the data.

- A fact-checking agent verifies statements against the sources.
- An editor agent improves tone, flow, and structure.
- A final review agent produces the completed research document with citations.
- This workflow includes annotated sticky notes to explain each step and guide configuration.

# Requirements

- Groq API key for running the Llama 3.3 model.
- SERP API key for performing web searches.
- An n8n instance (cloud or self-hosted).
- No additional dependencies are required.

# How to set up

- Add your Groq and SERP API credentials using n8n’s credential manager.
- Update the form fields if you want custom depth or output formats.
- Follow the sticky notes for detailed configuration.
- Run the workflow and submit a topic through the form to generate your first research report.

# How to customize

- Replace the writer agent with a different model if you prefer a specific writing style.
- Adjust the number of search queries or SERP results for deeper research.
- Add additional steps such as PDF generation, sending outputs to Notion, or publishing to WordPress.
- Modify the form to suit industry-specific content needs.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, n8n Form Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
