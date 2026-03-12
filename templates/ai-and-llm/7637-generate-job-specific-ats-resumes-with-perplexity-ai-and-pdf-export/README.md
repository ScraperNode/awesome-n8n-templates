# ✨ Generate Job-Specific ATS Resumes with Perplexity AI and PDF Export

> ⚡ **1,588 views** · ✨ [AI & LLMs](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# ATS Resume Maker Workflow Explanation

## Aim
The **aim** of the *ATS Resume Maker according to JD* workflow is to automate the creation of an **ATS-friendly resume** by tailoring a candidate’s resume to a specific job description (JD). It streamlines the process of aligning resume content with JD requirements, producing a professional, scannable PDF resume that can be stored in Google Drive.

## Goal
The **goal** is to:
- Allow users to input their resume (text or PDF) and a JD (PDF) via a web form.
- Extract and merge the text from both inputs.
- Use AI to customize the resume, prioritizing JD keywords while maintaining the candidate’s truthful information.
- Generate a clean, ATS-optimized HTML resume and convert it to a downloadable PDF.
- Upload the final PDF to Google Drive for easy access.

This ensures the resume is optimized for **Applicant Tracking Systems (ATS)**, which are used by employers to screen resumes, by incorporating relevant keywords and maintaining a simple, scannable format.

## Requirements
The workflow relies on specific components and configurations:
- **n8n Platform**: The automation tool hosting the workflow.
- **Node Requirements**:
  1. **Form Trigger**: A web form to collect user inputs (resume text/PDF, JD PDF).
  2. **Process one binary file1**: JavaScript to rename and organize PDF inputs.
  3. **Extracting resume1**: Extracts text from PDF files.
  4. **Merge Resume + JD1**: Combines resume and JD text into a single string.
  5. **Customize resume1**: Uses Perplexity AI to generate an ATS-friendly HTML resume.
  6. **HTML format1**: Cleans the HTML output by removing newlines.
  7. **HTML3**: Processes HTML for potential display or validation.
  8. **HTML to PDF**: Converts the HTML resume to a PDF file.
  9. **Upload file**: Saves the PDF to a specified Google Drive folder.
- **Credentials**:
  - *CustomJS account* for the HTML-to-PDF conversion API.
  - *Google Drive account* for file uploads.
  - *Perplexity account* for AI-driven resume customization.
- **Input Requirements**:
  - Resume (plain text or PDF).
  - Job description (PDF).
- **Output**: A tailored, ATS-friendly resume in PDF format, uploaded to Google Drive.

## API Usage
The workflow integrates multiple APIs to achieve its functionality:
- **Perplexity API**: Used in the *Customize resume1* node to leverage the *sonar-reasoning* model for generating an ATS-optimized HTML resume. The API processes the merged resume and JD text, aligning content with JD keywords while adhering to strict HTML and CSS guidelines (e.g., Arial font, no colors, single-column layout). [Ref: Workflow JSON]
- **CustomJS API**: Used in the *HTML to PDF* node to convert the cleaned HTML resume into a PDF file. This API ensures the resume is transformed into a downloadable format suitable for ATS systems. [Ref: Workflow JSON]
- **Google Drive API**: Used in the *Upload file* node to store the final PDF in a designated Google Drive folder (*Resume* folder in *My Drive*). This API handles secure file uploads using OAuth2 authentication. [Ref: Workflow JSON]

These APIs are critical for AI-driven customization, PDF generation, and cloud storage, ensuring a seamless end-to-end process.

## HTML to PDF Conversion
The HTML-to-PDF conversion is a key step in the workflow, handled by the **HTML to PDF** node:
- **Process**: The node takes the cleaned HTML resume (`$json.cleanedResponse`) from the *HTML format1* node and uses the `@custom-js/n8n-nodes-pdf-toolkit.html2Pdf` node to convert it into a PDF.
- **API**: Relies on the *CustomJS API* for high-fidelity conversion, ensuring the PDF retains the ATS-friendly structure (e.g., no graphics, clear text hierarchy).
- **Output**: A binary PDF file passed to the *Upload file* node.
- **Relevance**: This step ensures the resume is in a widely accessible format, suitable for downloading or sharing with employers. The use of a dedicated API aligns with industry practices for HTML-to-PDF conversion, as seen in services like PDFmyURL or PDFCrowd, which offer similar REST API capabilities for converting HTML to PDF with customizable layouts. [Ref:,][](https://pdfmyurl.com/)[](https://pdfcrowd.com/api/html-to-pdf-api/)

## Download from Community Link
The workflow does not explicitly include a community link for downloading the final PDF, but the **Upload file** node stores the PDF in Google Drive, making it accessible via a shared folder or link. To enable direct downloads:

## Workflow Summary
The *ATS Resume Maker according to JD* workflow automates the creation of a tailored, ATS-friendly resume by:
1. Collecting user inputs via a web form (*Form Trigger*).
2. Processing and extracting text from PDFs (*Process one binary file1*, *Extracting resume1*).
3. Merging and customizing the content using *Perplexity AI* (*Merge Resume + JD1*, *Customize resume1*).
4. Formatting and converting the resume to PDF (*HTML format1*, *HTML3*, *HTML to PDF*).
5. Uploading the PDF to Google Drive (*Upload file*).

The workflow leverages APIs for AI processing, PDF conversion, and cloud storage, ensuring a professional output optimized for ATS systems. Community sharing can be enabled via Google Drive links or external platforms, as discussed in related web resources. [Ref:,,][](https://pdfmyurl.com/)[](https://www.servicenow.com/community/servicenow-ai-platform-forum/allow-user-to-download-a-pdf-file-on-click-of-a-button/td-p/1082457)

*Timestamp*: 02:54 PM IST, Wednesday, August 20, 2025

## 🔗 Nodes Used

Google Drive, n8n Form Trigger, Extract from File, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
