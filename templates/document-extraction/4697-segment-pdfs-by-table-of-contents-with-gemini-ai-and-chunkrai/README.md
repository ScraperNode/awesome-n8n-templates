# 🔬 Segment PDFs by table of contents with Gemini AI and Chunkr.ai

> ⚡ **662 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Intelligently Segment PDFs by Table of Contents

This workflow empowers you to automatically process PDF documents, intelligently identify or generate a hierarchical Table of Contents (ToC), and then segment the entire document's content based on these ToC headings. It effectively breaks down a large PDF into its constituent sections, each paired with its corresponding heading and hierarchical level.

### Why It's Useful

Unlock the true structure of your PDFs for granular access and advanced processing:

* **AI Agent Tool:** A key use case is to provide this workflow as a tool to an AI agent. The agent can then use the segmented output to "read" and navigate to specific sections of a document to answer questions, extract information, or perform tasks with much greater accuracy and efficiency.
* **Targeted Content Extraction:** Programmatically pull out specific chapters or subsections for focused analysis, summarization, reporting, or repurposing content.
* **Enhanced RAG Systems:** Improve your Retrieval Augmented Generation (RAG) pipelines by feeding them well-defined, contextually relevant document sections instead of entire, monolithic PDFs. This leads to more precise AI-generated responses.
* **Modular Document Processing:** Process different parts of a document using distinct logic in subsequent n8n workflows by acting on individual sections.
* **Data Preparation:** Seamlessly convert lengthy PDFs into a structured format where each section (including its heading, level, and content in multiple formats) becomes a distinct, manageable item.

### How It Works

1.  **Ingestion & Advanced Parsing:** The workflow ingests a PDF (via a provided URL or a pre-set one for manual runs). It then utilizes **Chunkr.ai** to perform Optical Character Recognition (OCR) and parse the document into detailed structural elements, extracting text, HTML, and Markdown for each segment.
2.  **AI-Powered Table of Contents Generation:** A **Google Gemini** AI model analyzes the initial pages of the document (where a ToC often resides) along with section headers extracted by Chunkr as a fallback. This allows it to construct an accurate, hierarchical Table of Contents in a structured JSON format, even if the PDF lacks an explicit ToC or if it's poorly formatted.
3.  **Precise Content Segmentation:** Sophisticated custom code then meticulously maps the AI-generated ToC headings to their corresponding content within the parsed document from Chunkr. It intelligently determines the precise start and end of each section.
4.  **Structured & Flexible Output:**
    * The primary output provides each identified section as an individual n8n item. Each item includes the heading text, its hierarchical level (e.g., 1, 1.1, 2), and the full content of that section in Text, HTML, and Markdown formats.
    * Optionally, the workflow can also reconstruct the entire document into a single, navigable HTML file or a clean Markdown file.

### What You Need

To run this workflow, you'll need:

* **Input PDF:**
    * When triggered by another workflow: A `URL` pointing to the PDF document.
    * When triggered manually: The workflow uses a pre-configured sample PDF from Google Drive for demonstration (this can be customized).
* **Chunkr.ai API Key:** Required for the initial parsing and OCR of the PDF document. You'll need to insert this into the relevant HTTP Request nodes.
* **Google Gemini API Credentials:** Necessary for the AI model to intelligently generate the Table of Contents. This should be configured in the Google Gemini Chat Model nodes.

### Outputs

The workflow primarily generates:

* **Individual Document Sections:** A series of n8n items. Each item represents a distinct section of the PDF and contains:
    * `heading`: The text of the section heading.
    * `headingLevel`: The hierarchical level of the heading (e.g., 1 for H1, 2 for H2).
    * `sectionText`: The plain text content of the section.
    * `sectionHTML`: The HTML content of the section.
    * `sectionMarkdown`: The Markdown content of the section.

Alternatively, you can configure the workflow to output:

* **Full Reconstructed Document:**
    * A single HTML file representing the entire processed document.
    * A single Markdown file representing the entire processed document.

This workflow is ideal for anyone looking to deconstruct PDFs into meaningful, manageable parts for advanced automation, AI integration, or detailed content analysis.

## 🔗 Nodes Used

HTTP Request, Google Drive, Convert to/from binary data, Stop and Error, Execute Workflow Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
