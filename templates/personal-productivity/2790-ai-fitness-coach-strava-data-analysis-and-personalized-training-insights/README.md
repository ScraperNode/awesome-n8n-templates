# ⚡ Ai fitness coach Strava data analysis and personalized training insights

> ⚡ **13,207 views** · ⚡ [Personal Productivity](../)

## Description

### Detailed Title
**"Triathlon Coach AI Workflow: Strava Data Analysis and Personalized Training Insights using n8n"**

---

### **Description**
This n8n workflow enables you to build an AI-driven virtual triathlon coach that seamlessly integrates with Strava to analyze activity data and provide athletes with actionable training insights. The workflow processes data from activities like swimming, cycling, and running, delivers personalized feedback, and sends motivational and performance improvement advice via email or WhatsApp.

---

### **Workflow Details**

#### **Trigger: Strava Activity Updates**
- **Node:** `Strava Trigger`
- **Purpose:** Captures updates from Strava whenever an activity is recorded or modified. The data includes metrics like distance, pace, elevation, heart rate, and more.
- **Integration:** Uses Strava API for real-time synchronization.

#### **Step 1: Data Preprocessing**
- **Node:** `Code`
- **Purpose:** Combines and flattens the raw Strava activity data into a structured format for easier processing in subsequent nodes.
- **Logic:** A recursive function flattens JSON input to create a clean and readable structure.

#### **Step 2: AI Analysis with Google Gemini**
- **Node:** `Google Gemini Chat Model`
- **Purpose:** Leverages Google Gemini's advanced language model to analyze the activity data. 
- **Functionality:**
  - Identifies key performance metrics.
  - Provides feedback and insights specific to the type of activity (e.g., running, swimming, or cycling).
  - Offers tailored recommendations and motivational advice.

#### **Step 3: Generate Structured Output**
- **Node:** `Structure Output`
- **Purpose:** Processes the AI-generated response to create a structured format, such as headings, paragraphs, and bullet lists.
- **Output:** Formats the response for clear communication.

#### **Step 4: Convert to HTML**
- **Node:** `Convert to HTML`
- **Purpose:** Converts the structured output into an HTML format suitable for email or other presentation methods.
- **Output:** Ensures the response is visually appealing and easy to understand.

#### **Step 5: Send Email with Training Insights**
- **Node:** `Send Email`
- **Purpose:** Sends a detailed email to the athlete with performance insights, training recommendations, and motivational messages.
- **Integration:** Utilizes Gmail or SMTP for secure and efficient email delivery.

#### **Optional Step: WhatsApp Notifications**
- **Node:** `WhatsApp Business Cloud`
- **Purpose:** Sends a summary of the activity analysis and key recommendations via WhatsApp for instant access.
- **Integration:** Connects to WhatsApp Business Cloud for automated messaging.

---

### **Additional Notes**
1. **Customization:**  
   - You can modify the AI prompt to adapt the recommendations to the athlete's specific goals or fitness levels.
   - The workflow is flexible and can accommodate additional nodes for more advanced analysis or output formats.

2. **Scalability:**  
   - Ideal for individual athletes or coaches managing multiple athletes.  
   - Can be expanded to include additional metrics or insights based on user preferences.

3. **Performance Metrics Handled:**  
   - **Swimming:** SWOLF, stroke count, pace.  
   - **Cycling:** Cadence, power zones, elevation.  
   - **Running:** Pacing, stride length, heart rate zones.

---

### **Implementation Steps**
1. **Set Up Strava API Key:**
   - Log in to [Strava Developers](https://developers.strava.com/) to generate your API key.
   - Integrate the API key into the `Strava Trigger` node.

2. **Configure Google Gemini Integration:**
   - Use your Google Gemini (PaLM) API credentials in the `Google Gemini Chat Model` node.

3. **Customize Email and WhatsApp Messaging:**
   - Update the `Send Email` and `WhatsApp Business Cloud` nodes with the recipient’s details.

4. **Automate Execution:**
   - Deploy the workflow and use n8n's scheduling features or cron jobs for periodic execution.

---
### [GET n8n Now](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

### [N8N COURSE](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
### [n8n Book](https://lms.syncbricks.com/books/n8n/)  


### **Developer Notes**
- **Author:** Amjid Ali  
improvements.
- **Resources:**
- See in Action: [Syncbricks Youtube](http://youtube.com/@syncbricks)  
  - PayPal: [Support the Developer](http://paypal.me/pmptraining)  
  - Courses : [SyncBricks LMS](http://lms.syncbricks.com)

By using this workflow, triathletes and coaches can elevate training to the next level with AI-powered insights and actionable recommendations.

## 🔗 Nodes Used

Send Email, Gmail, Strava Trigger, WhatsApp Business Cloud, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
