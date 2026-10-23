# 🔬 Generate interactive MCQ quizzes from PDF textbooks with Google Gemini, UploadToURL and Gmail

> ⚡ **90 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow transforms any textbook PDF into a fully interactive quiz — automatically.

Users upload a PDF, choose difficulty & number of questions, and the system:
- Extracts content  
- Generates MCQs using AI  
- Builds an interactive quiz webpage  
- Uploads it online  
- Sends a shareable link via email  

---

## ✨ Key Features  

- 📥 Form-based PDF upload  
- 🤖 AI-generated MCQs (with explanations)  
- 🎯 Custom difficulty & question count  
- 🌐 Interactive HTML quiz (instant feedback)  
- 🔗 Public shareable link  
- 📧 Automated email delivery  
- ⚡ Fully automated workflow  

---

## 🧩 Workflow Breakdown (Node-by-Node)

---

### 🟢 1. Get-Details (Form Trigger)

**What it does:**  
Acts as the entry point of the workflow.

**How it works:**  
- Displays a form to the user  
- Collects:
  - Name  
  - Email  
  - PDF file  
  - Number of questions (10 / 20 / 30)  
  - Difficulty (Easy / Medium / Hard)  
- Once submitted → triggers the workflow  

---

### 🟣 2. Extract from File

**What it does:**  
Extracts text from the uploaded PDF.

**How it works:**  
- Takes the uploaded PDF (binary data)  
- Uses n8n’s built-in PDF parser  
- Converts PDF → plain text  
- Passes extracted text to the AI node  

---

### 🔵 3. Generate-MCQ (AI Node)

**What it does:**  
Converts textbook content into MCQs using AI.

**How it works:**  
- Receives extracted text  
- Reads user inputs:
  - Number of questions  
  - Difficulty level  
- Sends structured prompt to Google Gemini  
- Forces AI to return **strict JSON format**  
- Output includes:
  - Question  
  - 4 options  
  - Correct answer  
  - Explanation  

---

### 🟡 4. Template (Code Node)

**What it does:**  
Builds a fully interactive quiz webpage.

**How it works:**  

**1. JSON Parsing**
- Cleans AI response  
- Converts string → JavaScript object  
- Handles parsing errors safely  

**2. Personalization**
- Fetches user's name  
- Adds it to quiz header  

**3. HTML Generation**
- Creates styled quiz layout  
- Includes:
  - Questions  
  - Multiple choice options  
  - Answer + explanation  

**4. Interactivity (JavaScript)**
- User clicks an option →  
  - Shows correct/incorrect  
  - Displays explanation  
  - Locks answer  

**Output:**  
- Generates a `.html` file  

---

### 🟢 5. Upload a File (UploadToURL) ⭐

**What it does:**  
Uploads the generated quiz and creates a public shareable link.

**How it works:**  
- Takes the HTML file from previous node  
- Uploads it to the internet  
- Instantly returns a public URL  

**🔥 Why this node is powerful:**  
- No hosting required  
- No backend setup  
- Instant file sharing  
- Perfect for automation workflows  


👉 [UploadToURL - Turn Files into Shareable Links](https://uploadtourl.com/)

- Turn any file into a live URL  
- Share instantly with anyone  

---

### 🟠 6. Send a Message (Gmail)

**What it does:**  
Sends the quiz link directly to the user.

**How it works:**  
- Uses email collected from form  
- Personalizes message with user name  
- Inserts public quiz URL  
- Sends a clean, clickable email  

**Result:**  
User receives their interactive quiz instantly 📧  

---

## 🎯 Use Cases  

- 📚 Students → Practice from textbooks  
- 👨‍🏫 Teachers → Generate quizzes instantly  
- 🧠 EdTech → Build learning tools  
- 📈 Creators → Convert content into interactive experiences

## 🔗 Nodes Used

Gmail, Basic LLM Chain, n8n Form Trigger, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
