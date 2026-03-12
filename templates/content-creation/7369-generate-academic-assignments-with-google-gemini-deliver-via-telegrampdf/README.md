# 🎬 Generate academic assignments with Google Gemini & deliver via Telegram/PDF

> ⚡ **802 views** · 🎬 [Content Creation & Video](../)

## Description

# AI-Powered Academic Assignment Generator

This n8n workflow template automates the complete academic assignment generation process from student queries to professional document delivery. Students submit assignment requests via Telegram, and the workflow generates comprehensive, plagiarism-free academic content using Google Gemini AI, formats it into professional PDF documents, and delivers downloadable links while maintaining complete records.

## What does this workflow do?

- **📱 Telegram Integration**: Receives structured assignment requests from students
- **🤖 AI Content Generation**: Creates comprehensive academic answers (500+ words per question)
- **📄 Professional Formatting**: Generates university-standard HTML/PDF documents
- **☁️ Cloud Storage**: Automatically stores files in organized Google Drive folders
- **📊 Record Keeping**: Maintains complete assignment database in Google Sheets
- **🔄 End-to-End Automation**: Complete pipeline from query to document delivery

## How it works

The workflow processes student assignment requests through 16 interconnected nodes, handling everything from input parsing to final document delivery:

**Input** → **AI Processing** → **Document Generation** → **Storage & Delivery**

## Setup Requirements

### Credentials needed:
- **Telegram Bot Token** (for receiving/sending messages)
- **Google Gemini API Key** (for AI content generation)  
- **Google Sheets API** (for record keeping)
- **Google Drive API** (for file storage)
- **PDFCrowd API** (for PDF conversion)

### Pre-setup steps:
1. Create a Telegram bot and obtain the bot token
2. Set up Google Drive folder structure for file organization
3. Create Google Sheets template with proper column headers
4. Configure API rate limits and usage quotas

## Workflow Breakdown

### 🔌 Input Processing Nodes

**Student Query Intake Bot** (Telegram Trigger)
**Student Query Intake Bot** (Telegram Trigger)
- Listens for incoming student messages with assignment details
- Monitors specific chat ID for authorized users
- Triggers workflow when structured assignment requests are received

**Structured Data Parser** (Code Node)
- Extracts student information using regex patterns
- Parses: Name, Faculty, Department, Level, Course, Registration Number
- Automatically sets current date and handles missing data
- Outputs clean JSON structure for AI processing

### 🤖 AI Processing Nodes

**Student Assignment Auto-Composer** (LangChain Agent)
- Main AI orchestrator for assignment generation
- Uses structured prompts for consistent academic formatting
- Generates 500-word answers per question with APA citations
- Ensures plagiarism-free, original academic content

**Generator Model** (Google Gemini Chat)
- Primary AI model for high-quality content generation
- Handles complex academic writing and formatting requirements

**Fallback Model Generator** (Google Gemini - Gemma)
- Backup AI model ensuring workflow reliability
- Activates when primary model encounters issues

**Structured Output Parser** (LangChain)
- Validates AI-generated content against JSON schema
- Enforces required field compliance and format consistency
- Auto-fixes common formatting issues

### 🔧 Processing & Error Handling

**Error Handler** (Code Node)
- Handles text processing errors and data type issues
- Converts non-string values and provides error recovery
- Ensures workflow continuity even with problematic data

**Wait Node**
- Introduces strategic 2-second delay for processing stability
- Allows AI processing to complete before next steps

### 📊 Data Management Nodes

**Edit Fields** (Set Node)
- Maps AI output to Google Sheets column structure
- Ensures data consistency for database storage

**Long Essay Record Sheet** (Google Sheets)
- Stores complete assignment records with metadata
- Maintains comprehensive student assignment database
- Uses Name field as unique identifier for record updates

### 📄 Document Generation Nodes

**Static HTML Builder** (LangChain Agent)
- Converts structured data into professional HTML documents
- Applies academic formatting: Times New Roman, 12pt, double-spaced
- Creates university-standard document structure

**HTTP Request** (PDF Conversion)
- Converts HTML to high-quality PDF using PDFCrowd API
- Maintains academic formatting and professional appearance
- Uses student name for file identification

### ☁️ Storage & Delivery Nodes

**Upload File** (Google Drive)
- Stores generated PDFs in organized Drive folders
- Creates shareable links for easy access
- Maintains systematic file organization

**Send Text Message** (Telegram)
- Delivers Google Drive download link to student
- Completes the automation cycle with instant access

## Input Format

Students should format their Telegram messages as follows:

```
Name: John Doe
Faculty: Engineering  
Department: Computer Science
Level: 200L
Course: CSC 201 - Data Structures
Reg number: 2024001234

Question:
1. Explain the concept of Big O notation
2. Compare different sorting algorithms
3. Discuss the applications of binary trees
```

## Features

### ✨ Intelligent Processing
- **Smart Input Parsing**: Handles unstructured text inputs automatically
- **Multi-Question Support**: Processes complex assignment requirements
- **Data Validation**: Ensures complete and accurate information capture

### 🎓 Academic Excellence  
- **University Standards**: Professional formatting and citation styles
- **Original Content**: Plagiarism-free AI-generated assignments
- **Comprehensive Answers**: 500+ words per question with detailed explanations

### 🛡️ Reliability & Error Handling
- **Fallback Systems**: Multiple AI models for continuous operation
- **Error Recovery**: Automatic handling of processing issues
- **Data Integrity**: Schema validation and field verification

## Use Cases

This workflow template is perfect for:

- **📚 Educational Institutions**: Automate student assignment processing and grading assistance
- **👨‍🎓 Academic Support Services**: Provide structured learning assistance and content generation  
- **🏫 Online Learning Platforms**: Integrate assignment automation into educational systems
- **📝 Content Creation Services**: Generate academic-quality content for educational purposes
- **🤖 AI Learning Projects**: Implement complex AI workflows with multiple service integrations

## Output Examples

### Generated Assignment Features:
- **Professional formatting** with Times New Roman, 12pt font, double-spacing
- **Complete academic structure** including headers, student information, questions, and references  
- **Comprehensive answers** averaging 500+ words per question with detailed explanations
- **Proper citations** in APA format with authentic academic references
- **PDF delivery** through shareable Google Drive links

### Database Records:
- Complete student information tracking
- Assignment question and answer storage  
- Timestamp and metadata preservation
- Easy retrieval and analysis capabilities

## Performance & Reliability

**Processing Time**: 2-3 minutes per assignment  
**Success Rate**: &gt;95% with fallback mechanisms  
**Content Quality**: University-standard academic writing  
**Scalability**: Handles multiple concurrent requests  
**Error Recovery**: Automatic retry and alternative processing paths

## Customization Options

### Easily configurable elements:
- **Chat IDs**: Modify for different Telegram groups or users
- **AI Models**: Switch between different Google Gemini models
- **Document Formatting**: Adjust academic standards and styling
- **Storage Locations**: Configure Google Drive folders and naming conventions
- **Database Fields**: Modify Google Sheets columns and data structure

### Advanced customizations:
- Add support for different document formats (Word, LaTeX)
- Integrate additional AI providers (OpenAI, Claude, etc.)
- Implement grading and feedback mechanisms
- Add multi-language support
- Create batch processing capabilities

## Getting Started

1. **Import the workflow** into your n8n instance
2. **Configure credentials** for all required services
3. **Set up Telegram bot** and obtain necessary permissions
4. **Create Google Drive folders** and Google Sheets template
[AI-Powered Academic Assignment](https://docs.google.com/spreadsheets/d/1bYOUlc8js7AIz0YZ5f3aLj_VZVueNHR-9hR1mUdrDhY/edit?usp=sharing)
5. **Test with sample data** to ensure proper functionality
6. **Deploy and monitor** for production use

## Tags

`academic` `education` `ai` `telegram` `google-sheets` `pdf-generation` `automation` `langchain` `assignment` `student-support`

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
