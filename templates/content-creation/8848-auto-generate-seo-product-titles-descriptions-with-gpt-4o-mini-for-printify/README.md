# 🎬 Auto-generate SEO product titles & descriptions with GPT-4o-mini for Printify

> ⚡ **592 views** · 🎬 [Content Creation & Video](../)

## Description

### **N8N Workflow: Printify Automation - Update Title and Description - AlexK1919**

This workflow automates the process of getting products from Printify, generating new titles and descriptions using OpenAI, and updating those products.

#### **How it Works**

This workflow automatically retrieves a list of products from a Printify store, processes them to generate new titles and descriptions based on brand guidelines and custom instructions, and then updates the products on Printify with the new information. It also interacts with Google Sheets to track the status of the products being processed. The workflow can be triggered both manually or by an update in a Google Sheet.

#### **Use Cases**

- **E-commerce Automation**: Automating content updates for a Printify store.

- **Marketing & SEO**: Generating SEO-friendly or seasonal content for products using AI.

- **Product Management**: Batch-updating product titles and descriptions without manual effort.

#### **Setup Instructions**

1. **Printify API Credentials**: Set up httpHeaderAuth credentials for Printify to allow the workflow to get and update products.

2. **OpenAI API Credentials**: Provide an API key for OpenAI in the openAiApi credentials.

3. **Google Sheets Credentials**: The workflow requires two separate Google Sheets credentials: one for the trigger (googleSheetsTriggerOAuth2Api) and another for appending/updating data (googleSheetsOAuth2Api).

4. **Google Sheets Setup**: You need a Google Sheet to store product information and track the status of the updates. The workflow is linked to a specific spreadsheet.

5. **Brand Guidelines**: The **Brand Guidelines + Custom Instructions** node must be updated with your specific brand details and any custom instructions for the AI.

#### **Workflow Logic**

1. **Trigger**: The workflow can be triggered manually or by an update in a Google Sheet when the upload column is changed to "yes".

2. **Get Product Info**: It fetches the shop ID and then a list of all products from Printify.

3. **Process Products**: The product data is split, and the workflow loops through each product.

4. **AI Content Generation**: For each product, the **Generate Title and Desc** node uses OpenAI to create a new title and description based on the original content, brand guidelines, and custom instructions.

5. **Google Sheets Update**: The workflow appends the product information and a "Product Processing" status to a Google Sheet. It then updates the row with the newly generated title and description, and changes the status to "Option added".

6. **Printify Update**: The **Printify - Update Product** node sends a PUT request to the Printify API to apply the new title and description to the product.

#### **Node Descriptions**

| Node Name | Description |
|-----------|-------------|
| **When clicking 'Test workflow'** | A manual trigger for testing the workflow. |
| **Google Sheets Trigger** | An automated trigger that starts the workflow when the upload column in the Google Sheet is updated. |
| **Printify - Get Shops** | Fetches the list of shops associated with the Printify account. |
| **Printify - Get Products** | Retrieves all products from the specified Printify shop. |
| **Brand Guidelines + Custom Instructions** | A Set node to store brand guidelines and custom instructions for the AI. |
| **Generate Title and Desc** | An OpenAI node that generates a new title and description based on the provided inputs. |
| **GS - Add Product Option** | Appends a new row to a Google Sheet to track the processing status of a product. |
| **Update Product Option** | Updates an existing row in the Google Sheet with the new product information and status. |
| **Printify - Update Product** | A PUT request to the Printify API to update a product with new information. |

#### **Customization Tips**

- You can swap out the Printify API calls with similar services like Printful or Vistaprint.

- Modify the Brand Guidelines + Custom Instructions node to change the brand name, tone, or specific instructions for the AI.

- Change the number of options the workflow should generate by modifying the Number of Options node.

- You can change the OpenAI model used in the **Generate Title and Desc** node, for example, from gpt-4o-mini to another model.

#### **Suggested Sticky Notes for Workflow**

- "Update your Brand Guidelines before running this workflow. You can also add custom instructions for the AI node."

- "You can swap out the API calls to similar services like Printful, Vistaprint, etc."

- "Set the Number of Options you'd like for the Title and Description"

#### **Required Files**

- 1V1gcK6vyczRqdZC_Printify_Automation_-_Update_Title_and_Description_-_AlexK1919.json: The main n8n workflow export for this automation.

- The Google Sheets template for this workflow.

#### **Testing Tips**

- Run the workflow with the manual trigger to see the flow from start to finish.

- Change the upload column in the Google Sheet to "yes" to test the automated trigger.

- Verify that the new titles and descriptions are correctly updated on Printify.

#### **Suggested Tags & Categories**

- Printify

- OpenAI

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Sheets Trigger, Calculator, Wikipedia, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
