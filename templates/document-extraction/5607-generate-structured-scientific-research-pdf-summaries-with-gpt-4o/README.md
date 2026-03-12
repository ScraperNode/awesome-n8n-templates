# 🔬 Generate structured scientific research PDF summaries with GPT-4o

> ⚡ **12,239 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Disclaimer
This workflow contains a community node.
![PDF n8n.png](fileId:1662)

# What It Does
Leverage the power of GPT-4o to seamlessly summarize a scientific research PDF of your choosing. By simply downloading a PDF of a scientific research article into a folder on your computer this powerful workflow will automatically read the article and produce a detailed summarization of the article. The workflow will then save this summarization onto your computer for future convenience.
# Who Is This For?
The workflow is the perfect tool for all types of self-learners attempting to improve their knowledge base as efficiently as possible. It is a way to rapidly improve your knowledge base using peer reviewed scientific articles in a quick and efficient way. This workflow will provide a more detailed summary of the scientific research article than a typical abstract, while taking a fraction of the time it would take to read an entire paper. It will provide you with enough information to have a firm grasp on the information provided within the scientific article and will allow you to determine if you would like to dive deeper into the article.  This workflow is perfect for professionals who need to stay current on the most recent literature in their field, as well as the self-learners who enjoy diving deep into a specific topic. It can aid anyone who is performing academic research, a literature review, or attempting to increase their knowledge base in a field using peer reviewed sources.
# How It Works
Utilizing the power of GPT-4o, the moment you save a PDF of a scientific research article to a predesignated folder it will being to read the article and produce a summary that will be saved into another designated folder on your computer via the following steps below.
- Search the internet and your favorite journal databases for a scientific article that interests you.
- With the n8n workflow activated, download a PDF of the scientific article and save it to a specific designated folder.
- Saving the scientific article to this folder will trigger the workflow to initiate.
- The workflow will then extract the contents of the PDF and pass the data along to an AI agent utilizing the power of GPT-4o.
- This AI agent will produce a detailed summary of the scientific article.
 	- This summary will include the following:
	- **Introduction heading** discussing the importance of the article and the specific aims of the study
	- **Methods heading** detailing how the study was conducted, what variables they evaluated, what their inclusion and exclusion criteria were, and what their measurement standards were.
	- **Results heading** providing specific data provided in the study for all variables tested as well as the statistical significance of each result.
	- **Summary heading** evaluating the importance of the results, how it compares to other scientific articles in the same field, as well as the recommendations of the authors on how to interpret the data provided by the results.
	- **Conclusion heading** summarizing the strengths and weaknesses of the scientific article as well as providing deficiencies in knowledge on the subject that would be a good topic for future studies.
- After the AI agent has completed its summary, it will convert the summary to text and save it to a designated folder on your computer for future viewing.
# Set Up Steps
1.  You will need to create a folder on your computer where you would like to save your scientific article PDFs. You will then copy the pathway to this folder into the local file trigger node.
2.  You will need to obtain an Open AI API key from platform.openai.com/api-keys
3.  After you obtain this Open AI API key you will need to connect it to the Open AI Chat Model connected to the Summarizer Tools Agent.
4.  You will now need to fund your Open AI account. GPT-4o costs ~$0.01 to run the workflow.
5.  Finally, create a folder on your computer you wish to have the summarizations saved to. Copy the pathway to this folder into the Save to Folder node.
# Customization
This workflow is easy to customize to a specific area of research to provide the best possible summarization. If you have a specific expertise in a field of study, you can customize the output to provide data at a higher level of understanding for that field. For example, if you are a marine biologist, you can change the portion of the text prompt in the summarizer tool from "You are a research expert who is providing data to another researcher." to "You are a marine biologist expert who is providing data to another marine biologist."
# Disclaimer
If the pdf is too large, open AI will not be able to summarize it and will provide the error that you have reached your limit of requests.

## 🔗 Nodes Used

Local File Trigger, AI Agent, OpenAI Chat Model, Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
