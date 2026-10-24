# 👥 Find perfect jobs & generate tailored cover letters with Gemini & Google Jobs

> ⚡ **3,114 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop drowning in job applications. The JOB Hunter Agent uses Google Gemini and SerpAPI to find your best job match and writes a cover letter tailored to it, so you can spend your energy preparing for interviews instead.

Result example:
![Screenshot 20250911 at 23.54.20.png](fileId:2612)

*Last updated: September 2026.*

## Why Use JOB Hunter Agent?
**Save Precious Time:** Skip endless job boards. This agent does the searching for you and saves hours every week.

**Land Your Dream Job Faster:** Focused job matches plus a custom cover letter written for the hiring manager help you get noticed.

**Never Miss an Opportunity:** Your personal AI assistant works 24/7, so the latest openings reach you even while you sleep.

**Stand Out from the Crowd:** A tailored cover letter beats generic applications every time.

## Perfect For
**Job Seekers:** Anyone actively applying who wants a faster, smoother process.
**Busy Professionals:** People with limited time who still want relevant opportunities.
**Career Changers:** Anyone moving industries who needs help writing compelling applications.

## How It Works
* **Trigger:** You submit your CV and job preferences through a simple [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin) form.
* **Process:** Your CV is extracted from the PDF, and your preferences (location, job type, salary, email) are neatly organized.
* **Smart Logic:** The "Job Hunter Agent" uses Google Gemini and SerpAPI to find the single best job match for you, then drafts a cover letter based on your CV and the job description.
* **Output:** A formatted HTML email with your profile summary, the best job match, your personalized cover letter, and application tips, sent straight to your inbox.
* **Storage:** Your form data is processed and used to build the application package.

## Quick Setup
1. Import JSON file to your [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
2. **Add credentials:** Google Gemini (Gemini 2.5 Pro model) and SerpAPI
3. **Customize:** Adjust the system prompt in the "Job Hunter Agent" to fine-tune the cover letter tone or length, update the email footer, and expand job filters.
4. **Update:** Ensure your Gmail OAuth2 credentials are valid for sending emails.
5. **Test:** Run the workflow with your own CV and preferences to see it in action.

## You'll Need
- Active [n8n instances](https://n8n.partnerlinks.io/creator-khmuhtadin)
- Google Gemini API key (for Gemini 2.5 Pro)
- SerpAPI account for Google Jobs search results
- A Gmail account for sending personalized job match emails

## Level Up Ideas
- Integrate with LinkedIn, Jobstreet, or Indeed APIs for a wider range of job sources.
- Allow the agent to find multiple job matches and present them as a curated list.
- Add an option to attach a parsed CV summary as a PDF to the email for quick reference.

### Quick Answers
**What do I need to provide?**  
Your CV and job preferences through the built-in form. That is all it takes to start.  
**Which AI writes the cover letter?**  
Google Gemini (2.5 Pro model), guided by your CV and the job description.  
**Where does the result go?**  
An HTML email with your profile summary, best match, and cover letter lands in your inbox.  

---
**Made by:** [khmuhtadin](https://khmuhtadin.com)  
**Tags:** AI, Gemini, Google Jobs, Job Search, Automation, Cover Letter  
**Category:** Job Hunter  
**Need custom work?** [Contact me](https://khmuhtadin.com/contact)

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Gmail, AI Agent, SerpApi (Google Search), n8n Form Trigger, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
