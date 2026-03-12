# 🔬 Prepare CSV files with GPT-4

> ⚡ **7,683 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow generates CSV files containing a list of 10 random users with specific characteristics using OpenAI's GPT-4 model. It then splits this data into batches, converts it to CSV format, and saves it to disk for further use.

1. The execution of the workflow begins from here when triggered manually.
2. "OpenAI" Node. This uses the OpenAI API to generate random user data. The input to the OpenAI API is a fixed string, which asks for a list of 10 random users with some specific attributes. The attributes include a name and surname starting with the same letter, a subscription status, and a subscription date (if they are subscribed). There is also a short example of the JSON object structure. This technique is called one-shot prompting.
3. "Split In Batches" Node. This node is used to handle the OpenAI responses one by one.
4. "Parse JSON" Node. This node converts the content of the message received from the OpenAI node (which is in string format) into a JSON object.
5. "Make JSON Table" Node. This node is used to convert the JSON data into a tabular format, which is easier to handle for further data processing.
6. "Convert to CSV" Node. This node converts the table format data received from the "Make JSON Table" node into CSV format and assigns a file name.
7. "Save to Disk" Node. This node is used to save the CSV generated in the previous node to disk in the ".n8n" directory.

The workflow is designed in a circular manner. So, after saving the file to disk, it goes back to the "Split In Batches" node to process the OpenAI output, until all batches are processed.

## 🔗 Nodes Used

Spreadsheet File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
