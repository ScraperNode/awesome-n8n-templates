# ⚡ Extract and log data to Airtable with Google Gemini, ILovePDF, and Google Drive

> ⚡ **197 views** · ⚡ [Personal Productivity](../)

## Description

Who is this workflow template for?
----------------------------------

This workflow template is perfect for freelancers, small business owners, accounting teams, or anyone responsible for managing and recording invoices regularly. If you deal with multiple invoices and spend considerable time manually entering invoice data into a database, this automation will significantly simplify your daily operations and reduce potential errors.

What this workflow does
-----------------------

The workflow automates the entire invoice logging process. It continuously monitors a designated Google Drive folder every minute for new PDF invoice uploads. Once a new invoice is detected, it is automatically converted from PDF to an image format using the ILovePDF API. After conversion, Google's Gemini AI analyzes the image, intelligently extracting essential details such as vendor name, item description, invoice amount, invoice date, payment date, and bank reference numbers. Finally, this structured data is automatically recorded in an Airtable database (or optionally in a Google Sheet), ensuring organized, accessible records.

Detailed Workflow Explanation
-----------------------------

*   **Step 1: Invoice Detection**
    
    *   Monitors Google Drive for newly uploaded PDF invoices.
        
*   **Step 2: PDF to Image Conversion**
    
    *   Converts PDFs into images using ILovePDF.
        
*   **Step 3: Data Extraction via Gemini AI**
    
    *   Uses Gemini AI to analyze the invoice image.
        
    *   Extracts data such as Vendor, Description, Amount, Invoice Date, Paid Date, and Bank Reference.
        
    *   Provides clear descriptions even when original invoice descriptions are vague or missing by analyzing vendor context.
        
*   **Step 4: Structured Data Storage**
    
    *   Automatically sends extracted data to Airtable or Google Sheets.
        
*   **Step 5: File Management**
    
    *   Moves processed PDF files into a separate "Done" folder to clearly differentiate between processed and unprocessed invoices.
        

Step-by-Step Setup Instructions
-------------------------------

1.  **Set Up Google Drive:**
    
    *   Log in to Google Drive and create two folders:
        
        *   One named Invoices (for incoming PDF files)
            
        *   One named Processed (for processed files)
            
2.  **Obtain API Credentials:**
    
    *   **ILovePDF API**:
        
        *   Sign up at ILovePDF Developers.
            
        *   Retrieve your API key from your account dashboard.
            
    *   **Google Gemini AI API**:
        
        *   Register at [Google AI](https://ai.google.dev/) and generate an API key.
            
3.  **Airtable Database Preparation:**
    
    *   Create an Airtable base with the following columns:
        
        *   Vendor (Text)
            
        *   Description (Text)
            
        *   Amount (Number or Text)
            
        *   Invoice Date (Date)
            
        *   Paid Date (Date)
            
        *   Bank Reference (Text)
            
4.  **Import and Configure Workflow in n8n:**
    
    *   Import the provided workflow JSON file into your n8n instance.
        
    *   Connect your Google Drive, ILovePDF, Google Gemini AI, and Airtable accounts by entering your credentials in their respective nodes.
        
5.  **Adjust Workflow Settings:**
    
    *   In the Google Drive nodes, ensure your newly created Invoices and Processed folders are correctly selected.
        
    *   Update the ILovePDF public key in the appropriate HTTP Request node.
        
    *   Customize the Gemini AI prompt to refine or expand data extraction according to your specific needs.
        
6.  **Testing Your Setup:**
    
    *   Upload a sample PDF invoice into the Invoices folder.
        
    *   Execute the workflow by clicking Test Workflow in n8n and verify if data extraction and Airtable logging operate correctly.
        

Airtable Column Specifications
------------------------------

Ensure your Airtable includes the following structure:

*   **Vendor**: Single Line Text
    
*   **Description**: Single Line Text
    
*   **Amount**: Currency or Single Line Text
    
*   **Invoice Date**: Date (formatted as YYYY-MM-DD)
    
*   **Paid Date**: Date (formatted as YYYY-MM-DD)
    
*   **Bank Reference**: Single Line Text
    

How to Customize the Workflow
-----------------------------

*   **System Prompt:**
Adjust the AI instructions by modifying the prompt text to focus on additional or fewer invoice details.
    
*   **Structured Output Parser:**
Modify the JSON schema in the parser node to match the structure and data points your project specifically requires:
    

By following these instructions, you’ll have a fully automated, reliable system for handling and logging invoice data, significantly enhancing your productivity.

## 🔗 Nodes Used

Airtable, HTTP Request, Google Drive, Google Drive Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
