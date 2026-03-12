# 🔬 Automate Chinese to English translation in Google Slides with Openrouter AI

> ⚡ **206 views** · 🔬 [Document Extraction & Analysis](../)

## Description

---

## Overview of the n8n Workflow

This n8n workflow automates the translation of text in Google Slides presentations from one language to another using AI. It retrieves a specified presentation from Google Drive, extracts text from the slides, translates it in batches, and updates the presentation with the translated text. The workflow includes sticky notes with setup instructions and guidance on editable fields, formatted in Markdown for clarity.

---

## Step-by-Step Execution of the Workflow

Here’s how the workflow operates, node by node, based on the JSON and image descriptions:

1. **Manual Trigger**  
   - **Node**: "When clicking ‘Execute workflow’"  
   - **Function**: Initiates the workflow when the user manually clicks "Execute workflow" in n8n.  


2. **Search for Google Slides Presentation**  
   - **Node**: "Google Drive"  
   - **Function**: Searches Google Drive for a presentation file.  


3. **Retrieve Presentation Data**  
   - **Node**: "Google Slides2"  
   - **Function**: Fetches the full presentation data from Google Slides.  
 

4. **Extract Text from Slides**  
   - **Node**: "Code"  
   - **Function**: Extracts text from the presentation using JavaScript.  
  

5. **Split Text Array**  
   - **Node**: "Split Out"  
   - **Function**: Breaks the `extracted` array into individual items.  
   

6. **Process Text in Batches**  
   - **Node**: "Loop Over Items"  
   - **Function**: Loops over the text items in batches for efficient processing.  
   
7. **Translate Text with AI**  
   - **Node**: "AI Agent"  
   - **Function**: Translates text from Chinese to English using an AI model.  
  
8. **Provide AI Model**  
   - **Node**: "OpenRouter Chat Model"  
   - **Function**: Supplies the AI language model for the "AI Agent".  
  

9. **Replace Text in Slides**  
   - **Node**: "Replace text"  
   - **Function**: Updates the Google Slides presentation with translated text.  
  
10. **Delay Between Batches**  
    - **Node**: "Wait"  
    - **Function**: Adds a delay to prevent overwhelming the system.  
    

---

## Sticky Notes: Setup and Customization Guidance

The workflow includes three sticky notes with Markdown formatting, providing essential instructions:


---

## How to Set Up the Workflow

To use this workflow in n8n:

1. **Import the JSON**: Copy the provided JSON into n8n to load the workflow.  
2. **Configure Credentials**:  
   - **Google Drive**: Set up OAuth2 credentials ("Google Drive Auth") with access to the folder containing your presentation.  
   - **Google Slides**: Set up OAuth2 credentials ("Google Slides Auth") with edit permissions for the presentation.  
   - **OpenRouter**: Create an account at [openrouter.ai](https://openrouter.ai/) and add the API credentials to the "OpenRouter Chat Model" node.  
3. **Customize the Google Drive Query**: Update the "Google Drive" node’s `queryString` to match your presentation’s name or ID (default is "slides").  
4. **Test the Workflow**: Click "Execute workflow" to run it manually and verify each step.

---

## Potential Customizations

You can adapt the workflow for different needs:

- **Change Language Pair**:  
  Modify the "AI Agent" node’s system message, e.g., replace "convert all of them into English" with "convert all of them into French" to translate Chinese to French.  
- **Use a Different AI Model**:  
  Replace the "OpenRouter Chat Model" node with another AI provider (e.g., OpenAI) by updating the node type and credentials.  
- **Expand Text Extraction**:  
  Edit the "Code" node’s JavaScript to extract text from tables or other elements, not just shapes.  
- **Adjust Batch Processing**:  
  Change the "Loop Over Items" node’s `batchSize` (e.g., to 10) or the "Wait" node’s `amount` (e.g., to 1 second) for performance tuning.  
- **Process Multiple Presentations**:  
  Remove the `limit: 1` in the "Google Drive" node and add a loop to handle multiple files.

---

## Considerations and Improvements

- **Error Handling**: The workflow lacks explicit error handling. Add "If" nodes or error outputs to manage failures (e.g., if no presentation is found).  
- **Text Coverage**: The "Code" node may miss text in non-shape elements (e.g., tables). Test with your presentation to confirm coverage.  
- **Performance**: For large presentations, the 2-second wait per batch of 5 may slow things down. Adjust based on your needs and API limits.  
- **Permissions**: Ensure your Google credentials have edit access to the presentation, or replacements will fail.

---

## Conclusion

This n8n workflow efficiently automates the translation in Google Slides, leveraging Google Drive, Google Slides, and AI via OpenRouter. It’s well-documented with sticky notes and easy to set up with proper credentials. While robust for its purpose, it could benefit from error handling and broader text extraction. You can customize it for different languages, models, or file types by tweaking the relevant nodes as outlined.

If you have a specific question or need help with a modification, let me know! [OptiLever](www.linkedin.com/in/sebastian-lew-9ab9b9242)

## 🔗 Nodes Used

Google Drive, Google Slides, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
