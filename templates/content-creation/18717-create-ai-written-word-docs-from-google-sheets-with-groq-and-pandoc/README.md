# 🎬 Create AI-written Word docs from Google Sheets with Groq and Pandoc

> ⚡ **22 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow pulls article topics and reference links from Google Sheets, uses a Groq-powered LangChain agent to generate long-form Markdown articles, converts them to Word documents with Pandoc on the local machine, and uploads the final .docx files to Google Drive.

## How it works
1. Manually starts the workflow.
2. Reads rows from a Google Sheets spreadsheet to get the topic, reference links, and an article ID for naming.
3. Processes the sheet rows one at a time and sends each topic plus links to a LangChain agent backed by the Groq Chat Model to generate a 1500+ word Markdown article.
4. Saves the generated Markdown as a local .md file using the article ID as the filename.
5. Converts the saved Markdown file into a .docx using a Pandoc command executed on the same machine.
6. Loads the converted .docx from local storage and uploads it to Google Drive.

## Setup
1. Add credentials for Google Sheets, Google Drive, and the Groq API used by the LangChain agent.
2. Update the Google Sheets document and sheet selection, and ensure your sheet contains the expected fields (for example, TOPICS, AHREFLINKS, and an ART-001 value used for filenames).
3. Run n8n on a machine that can write to the configured local folder (D:\n8n-files\), or change the path and Pandoc command to match your OS and directories.
4. Install Pandoc on the n8n host and ensure it is available on the system PATH so the conversion command can run.
5. Choose the destination Google Drive folder (and optionally the Drive) in the upload step.

## Additional info
## How To Customize Nodes

* **AI System Prompt:** Open the **AI Article Generator (LangChain Agent)** node to tweak the AI's instructions. You can change the tone, adjust the target word count, or modify the strict styling directives to better fit your brand voice.
* **Pandoc Styling:** If you have a specific corporate template for Word documents, you can customize the **Prepare Pandoc Conversion Command** node to include a reference document. Update the command to look something like this: `=pandoc /tmp/{{ $json.file_name }}.md --reference-doc=/tmp/custom-template.docx -o /tmp/{{ $json.file_name }}.docx`.
* **Batch Size:** The **Batch Processor** node is set up to loop through items one by one. If you have complex workflows, leaving it at a batch size of 1 is recommended to avoid rate limits and timeout issues with the AI model.


## Add‑ons

You can easily extend this workflow to make it even more powerful:

* **Team Notifications:** Add a Slack or Discord node at the end of the loop to send a message to your team with a direct link to the newly generated Google Doc.
* **Direct CMS Publishing:** Instead of (or in addition to) saving a Word document, add a WordPress or Webflow node to push the Markdown content directly to your website as a draft.
* **Plagiarism & AI Checking:** Integrate an API like Copyscape or Originality.ai right after the text is generated to score the content before it gets converted to a Word document.


## Use Case Examples

While built for articles, this workflow structure is highly adaptable. There can be many more use cases of this workflow, including:

1. **Bulk Blog Post Generation:** Feed a sheet of 50 long-tail keywords and let the workflow run overnight, waking up to a folder full of formatted articles ready for review.
2. **Standard Operating Procedure (SOP) Drafting:** Provide bullet points of a process in the Google Sheet and have the AI expand them into step-by-step instructional Word documents.
3. **Product Description Catalogs:** Generate highly detailed, formatted product specifications and user guides by feeding product names and core features into the sheet.
4. **SEO Content Silos:** Automatically draft a pillar page and supporting cluster articles, injecting internal links perfectly using the spreadsheet data.
5. **Newsletter Archives:** Convert plain text email drafts into beautifully formatted Word documents for your internal company archives.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **"Execute Command" node fails or is missing** | The node is disabled by your environment's security settings. | Ensure you have correctly configured your `docker-compose.yml` to allow command execution and restart your container. |
| **Pandoc command not found** | Pandoc is missing from the n8n container. | Verify that your Docker container built successfully using the custom Dockerfile that installs `pandoc` via `apk add`. |
| **File path or "File not found" errors** | The workflow is trying to save to `D:\n8n-files\` which doesn't exist on your Docker system. | Update the directory paths in the "Set File Metadata" and "Prepare Pandoc Conversion Command" nodes to a valid path inside the container, like `/tmp/`. |
| **Google Drive Upload fails** | Invalid Folder ID or incorrect permissions. | Check the Drive node settings. Ensure the selected folder exists and the authenticated Google account has editing permissions. |
| **Blank or missing Word documents** | The `Convert to MD File` node didn't receive text from the AI agent. | Check the output of the LangChain agent to ensure it successfully generated the article before passing it to the file converter. |


## Need Help?

Setting up custom Dockerfiles, configuring environment variables for shell commands and tuning AI prompts can sometimes get a little technical. If you need a helping hand to set up this workflow, configure advanced Add-Ons, or if you want to build custom, enterprise-grade automations tailored specifically to your business processes, we are here to help! 

Please reach out to **WeblineIndia** for expert assistance in taking your n8n automations to the next level. Let's build something great together!

## 🔗 Nodes Used

Google Sheets, Google Drive, AI Agent, Read/Write Files from Disk, Convert to File, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
