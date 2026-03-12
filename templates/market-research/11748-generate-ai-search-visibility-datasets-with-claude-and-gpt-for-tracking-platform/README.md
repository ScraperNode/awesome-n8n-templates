# 📊 Generate AI search visibility datasets with Claude and GPT for tracking platforms

> ⚡ **106 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automatically generates a comprehensive dataset of 50 AI search prompts tailored to a specific company.

It combines AI-powered company research with structured prompt generation to create monitoring queries for tracking brand visibility across AI search engines like ChatGPT, Perplexity, Claude, and Gemini.

The dataset is ready for use and can be uploaded to any major AI search analytics platforms (like ALLMO.ai,...) or used in your own model.

**Who's it for & Use Cases**
SEO/GEO Marketing teams, Growth Managers, GTM engineers and Founders who want to:
- Create custom prompt datasets for visibility tracking platforms like ALLMO.ai
- Generate industry-specific search queries for AI model monitoring


### **How It Works**

**Phase 1: Company Research**

1. Start the workflow via the form and input your company name and website URL
2. GPT-5 Mini with web search collects company information, including buyer personas, key features, and value proposition

**Phase 2: Prompt Generation**

3. Claude Sonnet 4.5 generates and refines natural language prompts based on Phase 1 findings 
4. English prompts are automatically translated into German

**Phase 3: Export & Implementation**

5. Wait for processing (~total of 2-5 minutes depending on website complexity) 
6. English and German prompt sets are merged with metadata and structured into table format 
7. Download the CSV file containing 50 prompts ready for import into AI Search monitoring systems (allmo.ai, etc.)

### **How to Setup**
- Just enter your API credentials in the Claude and ChatGPT Nodes.

### **How to Expand**

You can update the system prompts for the "prompt writing engine" to create more prompts. 
You can update or add more translations.

**Output Structure:**
- 25 English prompts + 25 German prompts (can be changed flexibly).
- Each prompt tagged with: company name, industry, category, language, and AI model for simple tracking.
- Ready for direct import into any GEO/ALLMO visibility tracking system.

### **Requirements**

**API Credentials:**
- Anthropic API (Claude Sonnet 4.5)
- OpenAI API (GPT-5 Mini with web search capability)

**Data Input:**
- Valid company website URL (publicly accessible)
- Company name as it should appear in tracking

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
