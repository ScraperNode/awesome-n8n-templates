# 📊 Mine user complaints and generate insight reports with Olostep, Gemini and Google Docs

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

# AI Complaint Mining & Insight Extraction  

This n8n template automates **complaint mining** from unstructured text sources and turns raw user feedback into **clear, actionable insights**.  
It uses AI to identify recurring complaints, pain points, and themes, helping teams understand what users are unhappy about and why.

## Who’s it for  
- Product managers identifying recurring user pain points  
- Customer support and success teams  
- Founders validating product-market fit issues  
- UX researchers analyzing qualitative feedback  
- Anyone dealing with large volumes of complaints or negative feedback  

## How it works / What it does  
1. **Trigger**  
   - The workflow starts with a manual trigger, form submission, or imported text source containing user complaints.

2. **Data Preparation**  
   - Raw complaint text is cleaned, normalized, and split into individual complaint entries.  
   - Ensures consistent input for AI processing.

3. **AI Complaint Analysis**  
   - An AI model analyzes each complaint to identify:  
     - Core issue  
     - Complaint category  
     - Emotional tone  
     - Severity or urgency  

4. **Pattern Detection**  
   - Complaints are grouped by similarity to uncover recurring issues and themes.  
   - Highlights the most frequent and impactful problems.

5. **Insight Extraction**  
   - AI summarizes key insights such as:  
     - Top recurring complaints  
     - Root causes  
     - Suggested improvement areas  

6. **Structured Output**  
   - Results are converted into structured data fields.  
   - Ready to be stored, visualized, or shared with stakeholders.

7. **Storage & Reporting**  
   - Extracted complaints and insights are saved to a table or sheet for easy review and analysis.

This workflow transforms unstructured complaint data into a clear feedback loop you can act on.

## How to set up  
1. Import the template into your n8n workspace.  
2. Connect your AI model credentials (OpenAI or Gemini).  
3. Define your input source (text, form, or file).  
4. Connect your storage destination (Google Sheets, Data Table, or database).  
5. Run the workflow to start mining complaints automatically.

## Requirements  
- n8n account (cloud or self-hosted)  
- AI model provider (OpenAI or Gemini)  
- Storage destination (Google Sheets, Data Table, or database)

## How to customize the workflow  
- Adjust complaint categories and severity scoring.  
- Add sentiment analysis or emotion classification.  
- Connect a vector database to track complaints over time.  
- Trigger alerts when critical issues are detected.  
- Generate dashboards or weekly complaint summaries automatically.

---

👉 This template helps you turn complaints into insights — and insights into product improvements.

## 🔗 Nodes Used

Google Docs, AI Agent, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
