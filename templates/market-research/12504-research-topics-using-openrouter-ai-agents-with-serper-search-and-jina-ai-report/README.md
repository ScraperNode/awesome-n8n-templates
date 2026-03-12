# 📊 Research topics using OpenRouter AI agents with Serper search and Jina AI reports

> ⚡ **72 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

This workflow is designed for researchers, analysts, and knowledge workers who need to:
- Gather comprehensive information on complex topics from multiple web sources
- Get AI-synthesized insights rather than raw search results
- Ensure factual accuracy with built-in hallucination detection
- Automate research workflows that would otherwise take hours

It's ideal for animal advocacy researchers, campaign strategists investigating corporate practices, policy analysts tracking animal welfare legislation, and activists conducting due diligence on factory farms, testing labs, or agricultural companies.

## What it does

This multi-agent research system orchestrates a complete research workflow:
1. Accepts a research prompt via webhook or sub-workflow call
2. Uses Serper API to perform multiple strategic web searches
3. Extracts full content from discovered URLs using Jina AI reader
4. Applies AI "thinking" tools for strategic analysis and planning
5. Synthesizes findings into a coherent research report
6. Verifies the report against retrieved documents to detect hallucinations
7. Retries with corrections if fabricated content is detected
8. Returns a verified, source-grounded research report

The workflow includes automatic retry logic if the AI doesn't use its tools properly or produces empty responses, ensuring reliable output.

## How to set up

1. Import the workflow into your n8n instance
2. Configure the required API credentials:
   - **OpenRouter API** for AI analysis (uses auto model selection)
   - **Serper API** for web searches
   - **Jina AI API** for content extraction
3. Test with a simple research prompt
4. Activate the workflow for production use

### Example usage

Call the workflow with a research prompt:
```json
{
  "prompt": "Research the current state of cage-free egg commitments among major food service companies, focusing on compliance deadlines and enforcement mechanisms"
}
```

## Requirements

- OpenRouter API key
- Serper API key (for Google search)
- Jina AI API key (for web content extraction)
- n8n instance with AI/Langchain nodes enabled

## How to customize

- **Adjust AI model**: Change the OpenRouter model from "auto" to a specific model for consistent behavior
- **Modify temperature**: Lower temperature (0.2-0.4) for factual research, higher (0.6-0.8) for creative analysis
- **Add source types**: Integrate additional research tools like academic databases or specialized APIs
- **Change verification strictness**: Adjust the hallucination detection prompt for your accuracy requirements
- **Extend retry logic**: Modify the retry conditions and maximum attempts based on your needs
- **Add caching**: Implement caching for frequently researched topics to reduce API costs

## 🔗 Nodes Used

Webhook, Execute Workflow Trigger, AI Agent, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
