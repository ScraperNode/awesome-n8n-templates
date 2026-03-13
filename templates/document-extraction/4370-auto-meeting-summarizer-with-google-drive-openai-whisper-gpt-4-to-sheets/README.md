# 🔬 Auto meeting summarizer with Google Drive, OpenAI Whisper & GPT-4 to Sheets

> ⚡ **5,369 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.

## Description

# 🎤 Audio-to-Insights: Auto Meeting Summarizer

Transform your meeting recordings into actionable insights automatically. This powerful n8n workflow monitors your Google Drive for new audio files, transcribes them using OpenAI's Whisper, generates intelligent summaries with ChatGPT, and logs everything in Google Sheets - all without lifting a finger.

## 🔄 How It Works

This workflow operates as a seamless 6-step automation pipeline:

**Step 1: Smart Detection**
The workflow continuously monitors a designated Google Drive folder (polls every minute) for newly uploaded audio files.

**Step 2: Secure Download**
When a new audio file is detected, the system automatically downloads it from Google Drive for processing.

**Step 3: AI Transcription**
OpenAI's Whisper technology converts your audio recording into accurate text transcription, supporting multiple audio formats.

**Step 4: Intelligent Summarization**
ChatGPT processes the transcript using a specialized prompt that extracts:
- Key discussion points and decisions
- Action items with assigned persons and deadlines
- Priority levels and follow-up tasks
- Clean, professional formatting

**Step 5: Timestamp Generation**
The system automatically adds the current date and formats it consistently for tracking purposes.

**Step 6: Automated Logging**
The final summary is appended to your Google Sheets document with the date, creating a searchable archive of all meeting insights.

## ⚙️ Setup Steps

### Prerequisites
Before setting up the workflow, ensure you have:
- Active Google Drive account
- OpenAI API key with credits
- Google Sheets access
- n8n instance (cloud or self-hosted)

### Configuration Steps

**1. Credential Setup**
- **Google Drive OAuth2**: Required for folder monitoring and file downloads
- **OpenAI API Key**: Needed for both transcription (Whisper) and summarization (ChatGPT)
- **Google Sheets OAuth2**: Essential for writing summaries to your spreadsheet

**2. Google Drive Configuration**
- Create a dedicated folder in Google Drive for meeting recordings
- Copy the folder ID from the URL (the long string after `/folders/`)
- Update the `folderToWatch` parameter in the workflow

**3. Google Sheets Preparation**
- Create a new Google Sheet or use an existing one
- Ensure it has columns: `Date` and `Meeting Summary`
- Copy the spreadsheet ID from the URL
- Update the `documentId` parameter in the workflow

**4. Audio Requirements**
- **Supported Formats**: MP3, WAV, M4A, MP4
- **Recommended Size**: Under 100MB for optimal processing
- **Language**: Optimized for English (customizable for other languages)
- **Quality**: Clear audio produces better transcriptions

**5. Workflow Activation**
- Import the workflow JSON into your n8n instance
- Configure all credential connections
- Test with a sample audio file
- Activate the workflow trigger

## 🚀 Use Cases

### **Project Management**
- **Team Standup Summaries**: Convert daily standups into actionable task lists
- **Sprint Retrospectives**: Extract improvement points and action items
- **Stakeholder Updates**: Generate concise reports for leadership

### **Sales & Customer Success**
- **Discovery Call Notes**: Capture prospect pain points and requirements
- **Demo Follow-ups**: Track questions, objections, and next steps
- **Customer Check-ins**: Monitor satisfaction and expansion opportunities

### **Consulting & Professional Services**
- **Client Strategy Sessions**: Document recommendations and implementation plans
- **Requirements Gathering**: Organize complex project specifications
- **Progress Reviews**: Track deliverables and milestone achievements

### **HR & Training**
- **Interview Debriefs**: Standardize candidate evaluation notes
- **Training Sessions**: Create searchable knowledge bases
- **Performance Reviews**: Document development plans and goals

### **Research & Development**
- **Brainstorming Sessions**: Capture innovative ideas and concepts
- **Technical Reviews**: Log decisions and architectural choices
- **User Research**: Organize feedback and insights systematically

## 💡 Advanced Customization Options

**Enhanced Summarization**
Modify the ChatGPT prompt to focus on specific elements:
```
- Add speaker identification for multi-person meetings
- Include sentiment analysis for customer calls
- Generate department-specific summaries (technical, sales, legal)
- Extract financial figures and metrics automatically
```

**Integration Expansions**
- **Slack Integration**: Auto-post summaries to relevant channels
- **Email Notifications**: Send summaries to meeting participants
- **CRM Updates**: Push action items directly to Salesforce/HubSpot
- **Calendar Integration**: Schedule follow-up meetings based on action items

**Quality Improvements**
- **Audio Preprocessing**: Add noise reduction before transcription
- **Multi-language Support**: Configure for international teams
- **Custom Templates**: Create industry-specific summary formats
- **Approval Workflows**: Add human review before final storage

## 🛠️ Troubleshooting & Best Practices

**Common Issues**
- **Large File Processing**: Split recordings over 100MB into smaller segments
- **Poor Audio Quality**: Use noise reduction tools before uploading
- **API Rate Limits**: Implement delay nodes for high-volume usage
- **Formatting Issues**: Adjust ChatGPT prompts for consistent output

**Optimization Tips**
- Upload files in supported formats only
- Ensure stable internet connection for cloud processing
- Monitor OpenAI API usage and costs
- Regularly backup your Google Sheets data
- Test workflow changes with sample files first

## 📊 Expected Outputs

**Sample Summary Format:**
```
**Meeting Summary - March 15, 2024**

**Key Discussion Points:**
- Q1 budget review and allocation decisions
- New product launch timeline and milestones
- Team restructuring and role assignments

**Action Items:**
- John: Finalize budget proposal by March 20th (High Priority)
- Sarah: Schedule product demo sessions for March 25th
- Team: Submit org chart feedback by March 18th

**Decisions Made:**
- Approved additional marketing budget of $50K
- Delayed product launch to April 15th for quality assurance
- Promoted Lisa to Senior Developer role
```

## 📞 Questions & Support

For any questions, customizations, or technical support regarding this workflow:

**📧 Email Support**
- **Primary Contact**: Yaron@nofluff.online
- **Response Time**: Within 24 hours on business days
- **Best For**: Setup questions, customization requests, troubleshooting

**🎥 Learning Resources**
- **YouTube Channel**: [https://www.youtube.com/@YaronBeen/videos](https://www.youtube.com/@YaronBeen/videos)
  - Step-by-step setup tutorials
  - Advanced customization guides  
  - Workflow optimization tips

**🔗 Professional Network**
- **LinkedIn**: [https://www.linkedin.com/in/yaronbeen/](https://www.linkedin.com/in/yaronbeen/)
  - Connect for ongoing support
  - Share your workflow success stories
  - Get updates on new automation ideas

**💡 What to Include in Your Support Request**
- Describe your specific use case
- Share any error messages or logs
- Mention your n8n version and setup type
- Include sample audio file characteristics (if relevant)

---

*Ready to transform your meeting chaos into organized insights? Download the workflow and start automating your meeting summaries today!*

## 🔗 Nodes Used

Google Sheets, Google Drive, Google Drive Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
