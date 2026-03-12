# 🔬 Simplify medical lab reports with Ollama AI and email delivery system

> ⚡ **562 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This automated n8n workflow streamlines the process of receiving, processing, and delivering patient-friendly lab reports with precautionary advice.

## 🏆 **Minimal But Complete Design:**

### **Node Flow:**
1. **📧 Email Trigger** → Monitors inbox for lab reports
2. **📄 PDF Extract** → Processes attachments & extracts content 
3. **🤖 AI Simplify** → Converts medical jargon to simple language
4. **✨ Format Response** → Creates beautiful patient-friendly layout
5. **📤 Send Report** → Delivers simplified report via email

## 🚀 **Key Features:**

### **✅ Automatic Processing:**
- Monitors email for lab report PDFs
- Extracts content from attachments
- No manual intervention needed

### **✅ AI-Powered Simplification:**
- Converts complex medical terms to plain English
- Explains what each test result means
- Adds ✅/⚠️ indicators for normal/abnormal results

### **✅ Patient-Friendly Output:**
- Professional HTML email formatting
- Clear sections: Summary, Results, Precautions
- Includes next steps and follow-up advice

### **✅ Built-in Safety:**
- Always includes medical disclaimers
- Encourages consulting healthcare providers
- Handles edge cases with fallbacks

## 🛠️ **Setup Requirements:**

### **APIs Needed:**
- **IMAP Email** (Gmail, Outlook, etc.)
- **Ollama AI Model** (Local medical AI)
- **SMTP Email** (Sending service)

### **Quick Configuration:**
1. Import the JSON into n8n
2. Set up email credentials (IMAP + SMTP)
3. Configure Ollama medical model
4. Test with a sample lab report

## 📋 **Sample Output:**
```
🩺 Your Lab Report - Simplified

✅ CHOLESTEROL: 180 mg/dL - Normal! 
   Good job maintaining healthy levels.

⚠️ BLOOD SUGAR: 126 mg/dL - Slightly high
   Normal is under 100. Consider reducing sugar intake.

🔬 VITAMIN D: 25 ng/mL - Low
   You may need supplements. Ask your doctor.

📋 PRECAUTIONS:
• Eat more fruits and vegetables
• Exercise 30 minutes daily  
• Schedule follow-up in 3 months
• Watch for: excessive thirst, fatigue

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, AI Agent, Ollama Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
