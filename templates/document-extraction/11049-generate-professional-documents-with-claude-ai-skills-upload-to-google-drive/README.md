# 🔬 Generate professional documents with Claude AI skills🤹🤖 & upload to Google Drive

> ⚡ **1,142 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

🤹🤖 This workflow (AI Document Generator with Anthropic Agent Skills and Uploading to Google Drive) automates the process of generating, downloading, and storing professionally formatted files (PDF, DOCX, PPTX, XLSX) using the **Anthropic Claude API** and **Google Drive**.

This workflow connects user prompts with the Anthropic API to generate professional documents in multiple formats, automatically retrieves and uploads them to Google Drive — providing a complete AI-powered document automation system.

---

### **Key Advantages**

* **✅ Full Automation**
From user input to file delivery, the entire pipeline — creation, extraction, download, and upload — runs without manual intervention.

* **✅ Multi-Format Support**
Handles four major business document types:
	* PPTX (Presentations)
	* PDF (Reports)
	* DOCX (Documents)
	* XLSX (Spreadsheets)

* **✅ Professional Output**
Each format includes tailored **Claude system prompts** with detailed formatting and design principles:
	* Layout structure
	* Typography
	* Visual hierarchy
	* Consistency and readability

	This ensures that every file produced follows professional standards.

* **✅ Easy Customization**
	You can modify the prompt templates or add new **Skills** using the “Get All Skills” node.
	The form and switch logic make it simple to extend with additional file types or workflows.

* **✅ Seamless Cloud Integration**
	Generated files are automatically uploaded to a **Google Drive folder**, enabling:
	* Centralized storage
	* Easy sharing and access
	* Automatic organization

* **✅ Reusable and Scalable**
	This workflow can be used as a foundation for:
	* Automated report generation
	* Client deliverables
	* Internal documentation systems
	* AI-driven content creation pipelines

---

### How it Works

This n8n workflow enables users to create professional documents using Anthropic's Claude AI and automatically save them to Google Drive. The process works as follows:

1. **Form Trigger**: The workflow starts with a web form where users submit a prompt and select their desired file type (PPTX, PDF, DOCX, or XLSX).

2. **Document Type Routing**: A switch node routes the request based on the selected file type to the appropriate document creation node.

3. **AI Document Generation**: Each document type has a dedicated HTTP Request node that calls Anthropic's Messages API with:
   - Specific system prompts tailored for each document type (PowerPoint, PDF, Word, or Excel)
   - The user's input prompt
   - Appropriate Anthropic skills (pptx, pdf, docx, xlsx) for specialized document creation
   - Code execution capabilities for complex formatting

4. **File ID Extraction**: Custom JavaScript code nodes extract the generated file ID from Anthropic's response using recursive search algorithms to handle nested response structures.

5. **File Download**: HTTP Request nodes download the actual file content from Anthropic's Files API using the extracted file ID.

6. **Cloud Storage**: Finally, the downloaded files are automatically uploaded to a specified Google Drive folder, organized and ready for use.
---


### Set Up Steps

1. **API Configuration**:
   - Set up HTTP Header authentication with Anthropic API
   - Add `x-api-key` header with your Anthropic API key
   - Configure required headers: `anthropic-version` and `anthropic-beta`

2. **Google Drive Integration**:
   - Connect Google Drive OAuth2 credentials
   - Specify the target folder ID where documents will be uploaded
   - Ensure proper permissions for file upload operations

3. **Custom Skills (Optional)**:
   - Use the "Get All Skills" node to retrieve available custom skills
   - Update skill_id fields in JSON bodies if using custom Anthropic skills
   - Modify the form dropdown to include custom skill options if needed

4. **Form Configuration**:
   - The form is pre-configured with prompt field and file type selection
   - No additional setup required for basic functionality

5. **Execution**:
   - Activate the workflow
   - Access the form trigger URL
   - Submit prompts and select desired output formats
   - Generated files will automatically appear in the specified Google Drive folder

The workflow handles the entire process from AI-powered document creation to cloud storage, providing a seamless automated solution for professional document generation.

---


👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
