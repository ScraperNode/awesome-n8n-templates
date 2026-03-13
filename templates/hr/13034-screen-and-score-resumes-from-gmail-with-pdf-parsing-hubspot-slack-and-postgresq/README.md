# 👥 Screen and score resumes from Gmail with PDF parsing, HubSpot, Slack and PostgreSQL

> ⚡ **49 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Talent Sovereign: AI-Powered Resume Screener & Recruitment Hub

## 🎯 Description
This is an elite enterprise-grade solution for **Talent Acquisition** and **HR Ops** teams. It automates the high-volume task of resume screening by transforming unstructured PDF applications into structured candidate profiles. Leveraging an advanced **PDF-to-JSON** parsing engine and a multi-factor scoring algorithm, it ensures only the highest-quality candidates reach your CRM while maintaining a professional feedback loop for all applicants.



### ✨ The Sovereign Lifecycle
1. **Intelligent Intake & Validation** - Monitors **Gmail** for new submissions. A pre-validation layer ensures only healthy PDF binaries under 10MB enter the stream, filtering out noise and irrelevant attachments.
2. **Atomic Data Extraction** - Utilizes the **HTML to PDF (Parse PDF to JSON)** node to decompose resumes into structured text data.
3. **Advanced AI Resume Parser** - A sophisticated Code Node acts as a virtual Recruiter. It extracts contact info, LinkedIn URLs, and maps 45+ specific skills across 7 categories (Programming, Cloud, Data, etc.). It even calculates "Total Years of Experience" by analyzing date ranges within the text.
4. **Multi-Factor Scoring & Tiering** - Candidates are automatically ranked on a 100-point scale:
    - **A+ Tier (90+):** Exceptional talent; priority alerts.
    - **Qualified (70+):** Standard qualified candidates.
    - **Below Threshold:** Automatically prepared for the rejection track.
5. **Smart Routing Matrix** - 
    - **Green Track:** Qualified leads are created in **HubSpot CRM**, archived in a "Qualified" **Google Drive** folder, and announced via **Slack**.
    - **Red Track:** Unqualified candidates receive a personalized **Gmail** rejection including constructive feedback on skills they could improve.
6. **Closed-Loop Analytics** - Logs every data point to **PostgreSQL**, calculating funnel metrics such as skill-match percentages and processing latency for continuous hiring strategy optimization.

### 💡 Key Technical Features
- **Heuristic Skill Detection:** Uses NLP pattern matching to identify technical competencies even if they are phrased differently.
- **Personalized Rejection Engine:** Automatically suggests specific skill areas (e.g., Cloud or Certifications) for candidates to work on based on what was missing from their resume.
- **Forensic Archival:** Maintains a clean, searchable archive of all applicants in a hierarchical cloud structure.

### 🚀 Benefits
✅ **90% Faster Screening** - Moves from manual reading to high-level candidate oversight instantly.
✅ **Professional Employer Brand** - Ensures every applicant receives a timely, personalized response.
✅ **Data-Driven Hiring** - Track exactly which sources and skill sets are performing best in your funnel.

---
**Tags:** #recruitment #hr-tech #resume-parser #ai #hubspot #automation #pdf-to-json

**Category:** Human Resources | **Difficulty:** Advanced

## 🔗 Nodes Used

Postgres, Slack, Google Drive, HubSpot, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
