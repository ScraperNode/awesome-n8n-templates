# 🔬 AI-powered auto-generate exam questions and answers from Google Docs with Gemini

> ⚡ **3,432 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow automates the creation of **exam questions** (***both open-ended and multiple-choice***) from educational content stored in **Google Docs**, using **AI-powered analysis** and vector database retrieval

This workflow **saves educators hours of manual work** while ensuring high-quality, curriculum-aligned assessments. Let me know if you'd like help adapting it for specific subjects!

---

### **Use Cases**  
- **Educators**: Rapidly generate quizzes, midterms, or flashcards.  
- **E-learning platforms**: Automate question banks for courses.  
- **Corporate training**: Create assessments for employee onboarding.  

**Technical Requirements**:  
- **APIs**: Google Gemini, OpenAI, Qdrant, Google Workspace.  
- **n8n Nodes**: LangChain, Google Sheets/Docs, HTTP requests, code blocks.  

This workflow **combines AI efficiency with human-curated quality**, making it a powerful tool for modern education and training.  


---

### **Advantages of This Workflow**

* ✅ **Fully Automated Exam Generation**: From document to fully formatted quiz content with no manual intervention.
* ✅ **Supports Comprehension and Critical Thinking**: Questions are designed to go beyond factual recall, including inference and application.
* ✅ **Uses AI and RAG for Accuracy**: Ensures that answers are grounded in the document content, reducing hallucination.
* ✅ **Seamless Google Integration**: Pulls content from Google Docs and writes outputs to Google Sheets.
* ✅ **Scalable for Any Subject**: Works with any article or content domain as input.
* ✅ **Modular and Customizable**: Can be easily adapted to generate different question types or to use other LLMs or storage systems.

--- 

### **How It Works**  
1. **Document Ingestion**:  
   - The workflow starts by fetching an educational document (e.g., textbook chapter, lecture notes) from **Google Docs**.  
   - Converts the document to **Markdown** for structured processing.  

2. **AI Processing**:  
   - Splits text into chunks and generates **vector embeddings** (via OpenAI) for semantic analysis.  
   - Stores embeddings in **Qdrant** (vector database) for retrieval.  

3. **Question Generation**:  
   - **Open-ended questions**: Google Gemini AI creates 10 critical-thinking questions.  
   - **Multiple-choice questions**: Generates 10 MCQs (1 correct + 3 plausible distractors) using **RAG** to validate answers against the vector DB.  

4. **Answer Validation**:  
   - For open questions: Retrieves context-aware answers from the vector store.  
   - For MCQs: Ensures distractors are incorrect but believable via AI cross-checking.  

5. **Output**:  
   - Saves questions/answers to **Google Sheets** in two tabs:  
     - `Open questions`: Question + AI-generated answer.  
     - `Closed questions`: MCQ + options + correct answer.  

---

### **Set Up Steps**  
1. **Prerequisites**:  
   - **APIs/Accounts**:  
     - Google Workspace (Docs + Sheets).  
     - OpenAI (for embeddings).  
     - Google Gemini (for question generation).  
     - Qdrant (vector DB – self-hosted or cloud).  
   - **n8n Nodes**: Ensure LangChain, Google Sheets/Docs, and HTTP request nodes are installed.  

2. **Configure Connections**:  
   - Link credentials for:  
     - **Google Docs/Sheets** (OAuth2).  
     - **OpenAI** (API key).  
     - **Google Gemini** (API key).  
     - **Qdrant** (URL + API key).  

3. **Customize Input**:  
   - Replace the default **Google Doc ID** in the "Get Doc" node with your source document.  
   - Adjust **chunk size/overlap** (Token Splitter node) for optimal text processing.  

4. **Tweak Question Generation**:  
   - Modify prompts in:  
     - **"Open questions" node**: Adjust criteria (e.g., difficulty, question types).  
     - **"Closed questions" node**: Edit MCQ formatting rules.  

5. **Output Settings**:  
   - Update the **Google Sheet ID** in "Write open" and "Write closed" nodes.  
   - Map columns in Google Sheets to match question/answer formats.  

6. **Run & Automate**:  
   - Trigger manually ("Test workflow") or schedule periodic runs (e.g., for updated content).  

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, AI Agent, Basic LLM Chain, Question and Answer Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
