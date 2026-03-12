# 🔬 Convert tour PDFs to vector database using Google Drive, LangChain & OpenAI

> ⚡ **1,389 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# **🧩 Workflow:** 
Process Tour PDF from Google Drive to Pinecone Vector DB with OpenAI Embeddings

## **Overview**
This workflow automates the process of extracting tour information from PDF files stored in a Google Drive folder, processes and vectorizes the extracted data, and stores it in a Pinecone vector database for efficient querying. This is especially useful for building AI-powered search or recommendation systems for travel packages.

## **Setup:** 

### Prerequisites
A folder in Google Drive with PDF tour package brochures.

Pinecone account + API key

OpenAI API key

n8n cloud or self-hosted instance

## **Workflow Setup Steps**
#### Trigger
Manual Trigger (When clicking 'Test workflow'): Used for manual testing and execution of the workflow.

#### Google Drive Integration
**Step 1: Store Tour Packages in PDF Format**

Upload your curated tour packages containing the tours, activities and sight-seeings in PDF format into a designated Google Drive folder.

**Step 2: Search Folder**

Node: PDF Tour Package Folder (Google Drive)

This node searches the designated folder for files (filter by MIME type = application/pdf if needed).

**Step 3: Download PDFs**

Node: Download Package Files (Google Drive)

Downloads each matching PDF file found in the previous step.

#### Process Each PDF File
**Step 4: Loop Through Files**

Node: Loop Over each PDF file

Iterates through each downloaded PDF file to extract, clean, split, and embed.

#### Data Preparation & Embedding
**Step 5: Data Loader**

Node: Data Loader

Reads each PDF’s content using a compatible loader. It passes clean raw text to the next node.

Often integrated with document loaders like pdf-loader, Unstructured, or pdfplumber.

**Step 6: Recursive Text Splitter**

Node: Recursive Character Text Splitter

Splits large chunks of text into manageable segments using overlapping window logic (e.g., 500 tokens with 50 token overlap).

This ensures contextual preservation for long documents during embedding.

**Step 7: Generate Embeddings**

Node: Embeddings OpenAI

Uses text-embedding-3-small model to vectorize the split chunks.

Outputs vector representations for each content chunk.

#### Store in Pinecone
**Step 8: Pinecone Vector Store**

Node: Pinecone Vector Store - Store...

Stores each embedding along with its metadata (source PDF name, chunk ID, etc.).

This becomes the basis for fast, semantic search via RAG workflows or agents.


## **🛠️ Tools & Nodes Used**
Google Drive (Search & Download)

Searches for all PDF files in a specified Google Drive folder.
Downloads each file for processing.
SplitInBatches (Loop Over Items)

Loops through each file found in the folder, ensuring each is processed individually.
Default Data Loader (LangChain)

Reads and extracts text from the PDF files.
Recursive Character Text Splitter (LangChain)

Splits the extracted text into manageable chunks for embedding.
OpenAI Embeddings (LangChain)

Converts each text chunk into a vector using OpenAI’s embedding model.
Pinecone Vector Store (LangChain)

Stores the resulting vectors in a Pinecone index for fast similarity search and querying.

## **🔗 Workflow Steps Explained**
### **Trigger:** 
The workflow starts manually for testing or can be scheduled.
### **Google Drive Search:** 
Finds all PDF files in the specified folder.

### **Loop Over Files:** 
Each file is processed one at a time using the SplitInBatches node.

### Download File: 
Downloads the current PDF file from Google Drive.

### **Extract Text:** 
The Default Data Loader node reads the PDF and extracts its text content.

### **Text Splitting: **
The Recursive Character Text Splitter breaks the text into chunks (e.g., 1000 characters with 50 overlap) to optimize embedding quality.

### **Vectorization: 
**Each chunk is sent to the OpenAI Embeddings node to generate vector representations.

### **Store in Pinecone:** 
The vectors are inserted into a Pinecone index, making them available for semantic search and recommendations.

## **🚀 What Can Be Improved in the Next Version?**

#### **Error Handling: **
Add error handling nodes to manage failed downloads or extraction issues gracefully.
#### **File Type Filtering:** 
Ensure only PDF files are processed by adding a filter node.
#### **Metadata Storage:** 
Store additional metadata (e.g., file name, tour ID) alongside vectors in Pinecone for richer search results.
#### **Parallel Processing: **
Optimize for large folders by processing multiple files in parallel (with care for API rate limits).
#### **Automated Triggers:** 
Replace manual trigger with a time-based or webhook trigger for full automation.
#### **Data Validation:** 
Add checks to ensure extracted text contains valid tour data before vectorization.
#### **User Feedback:** 
Integrate notifications (e.g., email or Slack) to inform when processing is complete or if issues arise.

## **💡 Summary**
This workflow demonstrates how n8n can orchestrate a powerful AI data pipeline using Google Drive, LangChain, OpenAI, and Pinecone. It’s a great foundation for building intelligent search or recommendation features for travel and tour data.

Feel free to ask for more details or share your improvements!


Let me know if you want to see a specific part of the workflow or need help with a particular node!

## 🔗 Nodes Used

Google Drive, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
