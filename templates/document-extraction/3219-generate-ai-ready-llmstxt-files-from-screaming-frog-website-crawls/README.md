# 🔬 Generate AI-ready llms.txt files from Screaming Frog website crawls

> ⚡ **3,737 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow helps you generate an **llms.txt** file (if you're unfamiliar with it, check out [this article](https://towardsdatascience.com/llms-txt-414d5121bcb3/)) using a **Screaming Frog export**.  

[Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) is a well-known website crawler.  
You can easily crawl a website. Then, export the **"internal_html"** section in CSV format.  

## How It Works: 

A **form** allows you to enter:  
- The **name of the website**  
- A **short description**  
- The **internal_html.csv** file from your Screaming Frog export  


Once the form is submitted, the **workflow is triggered automatically**, and you can **download the llms.txt file directly from n8n**. 

## Downloading the File
Since the last node in this workflow is **"Convert to File"**, you will need to **download the file directly from the n8n UI**.  
However, you can easily **add a node** (e.g., Google Drive, OneDrive) to automatically upload the file **wherever you want**.  

## AI-Powered Filtering (Optional):  
This workflow includes a **text classifier node**, which is **deactivated by default**.  
- You can **activate it** to apply a more **intelligent filter** to select URLs for the `llms.txt` file.  
- Consider modifying the **description** in the classifier node to specify the type of URLs you want to include.  

## How to Use This Workflow  

1. **Crawl the website** you want to generate an `llms.txt` file for using **Screaming Frog**.  
2. **Export the "internal_html"** section in CSV format.  
   ![Screaming Frog internal html export](https://i.imgur.com/M0nJQiV.png)  
3. In **n8n**, click **"Test Workflow"**, fill in the form, and **upload** the `internal_html.csv` file.  
4. Once the workflow is complete, go to the **"Export to File"** node and **download the output**.  

**That's it! You now have your llms.txt file!**  



**Recommended Usage:**  
Use this workflow **directly in the n8n UI by clicking** 'Test Workflow' and uploading the file in the form.

## 🔗 Nodes Used

Filter, OpenAI Chat Model, n8n Form Trigger, Convert to File, Extract from File, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
