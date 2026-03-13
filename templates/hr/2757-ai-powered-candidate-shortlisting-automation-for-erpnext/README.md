# 👥 AI-powered candidate shortlisting automation for ERPNext

> ⚡ **5,593 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

### **Template Guide for Employee Shortlisting AI Agent Automation**

#### **Overview**
This template automates the process of shortlisting job applicants using ERPNext, n8n, and AI-powered decision-making tools like Google Gemini and OpenAI. It reduces manual effort, ensures fast evaluations, and provides justifiable decisions about applicants. This is ideal for businesses aiming to streamline their recruitment process while maintaining accuracy and professionalism.

- **YouTube Tutorial:** For a full walkthrough of this template, visit:  

  [Integrate AI in ERPNext: Automate Recruitment Job Applicant Shortlisting in Seconds!](https://youtu.be/JsRCryrSAn0)

---

### **What Does This Template Do?**
1. **Webhook Integration with ERPNext:** Automatically triggers the workflow when a job application is created in ERPNext.
2. **Resume Validation:** Ensures resumes are attached and correctly processes various file formats like PDF and DOC.
3. **AI-Powered Evaluation:** Uses AI to compare resumes against job descriptions and provides a:
   - Fit Level (Strong, Moderate, or Weak)
   - Score (0–100)
   - Justification for the decision.
4. **Automated Decision Making:** Based on AI-generated scores:
   - Candidates with a score of 80 or higher are **Accepted**.
   - Candidates below 80 are **Rejected**.
   - Applications missing required fields or attachments are put **On Hold**.
5. **ERPNext Integration:** Updates applicant records in ERPNext, including custom fields such as justification, fit level, and scores.
6. **Notifications:** Notifies candidates via email, WhatsApp, or SMS about their application status.

---

### **Step-by-Step Guide**

#### **Step 1: Set Up ERPNext Webhook**
- Go to **Webhooks** in ERPNext.
- Create a webhook for the **Job Applicant** DocType.
- Set the trigger to **Insert**.
- Pin and test the webhook to ensure proper data flow.

#### **Step 2: Import the Template into n8n**
- Open your n8n instance.
- Import the provided workflow template.
- Check all nodes for proper configuration.

#### **Step 3: Configure Credentials**
- Add your ERPNext API credentials to the **ERPNext nodes**.
- Add credentials for AI services like OpenAI or Google Gemini.
- Configure additional services like WhatsApp or email if you plan to use them for notifications.

#### **Step 4: Test Resume Validation**
- Test how the workflow handles different file types (e.g., PDF, DOC, JPG).
- Ensure resumes without the proper format or attachment are flagged and rejected.

#### **Step 5: AI Evaluation**
- The AI model (Google Gemini or OpenAI) will evaluate resumes against job descriptions.
- Customize the AI prompt to suit your job evaluation needs.
- The output will include a Fit Level, Score, Rating, and Justification.

#### **Step 6: Decision Automation**
- The workflow automatically categorizes applicants:
  - **Accepted** for scores ≥ 80.
  - **Rejected** for scores &lt; 80.
  - **On Hold** if essential fields or attachments are missing.

#### **Step 7: Update ERPNext Records**
- The workflow updates the **Job Applicant** record in ERPNext with:
  - Status (Accepted, Rejected, On Hold)
  - AI-generated Fit Level, Score, Rating, and Justification.

#### **Step 8: Notify Candidates**
- Configure notification nodes (email, WhatsApp, or SMS).
- Inform candidates about their application status and include feedback if required.

---

### **How It Works**
1. **Trigger:** The workflow starts when a job application is submitted in ERPNext.
2. **Validation:** Checks if the resume is attached and in the correct format.
3. **AI Evaluation:** Compares the resume with the job description and generates a decision.
4. **ERPNext Update:** Updates the applicant's record with the decision and justification.
5. **Notification:** Sends a personalized notification to the candidate.

---

### **Dos and Don’ts**

#### **Dos:**
- **Customize Prompts:** Tailor the AI prompt to match your specific job evaluation requirements.
- **Test the Workflow:** Run sample data to ensure the process works as intended.
- **Secure Your Credentials:** Keep your API credentials safe and do not share them publicly.
- **Optimize for Different Formats:** Ensure the workflow can handle all types of resumes you expect.

#### **Don’ts:**
- **Avoid Manual Intervention:** Let the workflow handle most of the tasks to ensure efficiency.
- **Do Not Skip Testing:** Always test the workflow with various scenarios to avoid errors.
- **Do Not Overlook Notifications:** Ensure candidates are notified promptly to maintain professionalism.

---

### **Customization Options**
- Add logic for more file types (e.g., scanned images using OCR).
- Enhance the AI prompts to analyze more complex resume data.
- Integrate additional tools like Slack or Trello for recruitment tracking.

---

### **Resources**
### [GET n8n Now](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

### [N8N COURSE](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
### [n8n Book](https://lms.syncbricks.com/books/n8n/)  

- **YouTube Tutorial:** For a full walkthrough of this template, visit:  
  [SyncBricks YouTube Channel](https://youtube.com/@syncbricks)
- **Detailed Guides and Courses:** Learn more about ERPNext and AI-driven automation at:  
  [SyncBricks LMS](http://lms.syncbricks.com)

---

### **Support**
If you encounter issues or want to explore more possibilities with AI-driven automation, feel free to reach out:  
- **Email:** amjid@amjidali.com  
- **Website:** [ERPNext and Other Courses](https://lms.syncbricks.com)  
- **LinkedIn:** [Amjid Ali](https://linkedin.com/in/amjidali)

---

Let me know if you'd like further details or modifications to the guide!

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft Outlook, ERPNext, WhatsApp Business Cloud, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
