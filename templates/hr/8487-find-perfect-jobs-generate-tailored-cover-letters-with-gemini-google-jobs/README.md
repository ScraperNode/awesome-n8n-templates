# 👥 Find perfect jobs & generate tailored cover letters with Gemini & Google Jobs

> ⚡ **2,245 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

Say goodbye to endless applications and hello to more time for perfecting your interview skills!

The JOB Hunter Agent uses the power of Google Gemini and SerpAPI to find the perfect job match and generate a personalized cover letter. 

Result example:
![Screenshot 20250911 at 23.54.20.png](fileId:2612)

## 💡 Why Use JOB Hunter Agent?
**Save Precious Time:** Stop sifting through countless job boards; this agent does the heavy lifting, saving you hours every week.

**Land Your Dream Job Faster:** Get laser-focused job matches and a custom-crafted cover letter that speaks directly to the hiring manager, increasing your chances of getting noticed.

**Never Miss an Opportunity:** Your personal AI assistant works 24/7, ensuring you're always on top of the latest openings, even while you sleep!

**Stand Out from the Crowd:** A perfectly tailored cover letter generated on the fly gives you an edge over generic applications, making you look like a superstar.

## ⚡ Perfect For
**Job Seekers:** Anyone actively looking for a new role who wants to streamline their application process.
**Busy Professionals:** Those with limited time who need an efficient way to find relevant opportunities.
**Career Changers:** Individuals exploring new industries who need a helping hand in crafting compelling applications.

## 🔧 How It Works
**⏱ Trigger:** You submit your CV and job preferences through a simple n8n form.
**📎 Process:** Your CV is extracted from the PDF, and your preferences (location, job type, salary, email) are neatly organized.
**🤖 Smart Logic:** The "Job Hunter Agent" uses Google Gemini and SerpAPI to find the single best job match for you and then drafts a bespoke cover letter based on your CV and the job description. It's like magic, but with more code!
**💌 Output:** A beautifully formatted HTML email containing your profile summary, the best job match, your personalized cover letter, and handy application tips is sent straight to your inbox.
**🗂 Storage:** All the initial data from your form submission is processed and used to craft your perfect job application package.

## 🔐 Quick Setup
1. Import JSON file to your [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
2. **Add credentials:** Google Gemini (Gemini 2.5 Pro model) and SerpAPI
3. **Customize:** Adjust the system prompt in the "Job Hunter Agent" to fine-tune the cover letter tone or length, update the email footer, and expand job filters.
4. **Update:** Ensure your Gmail OAuth2 credentials are valid for sending emails.
5. **Test:** Run the workflow with your own CV and preferences to see the magic happen!

## 🧩 You'll Need
- Active [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
- Google Gemini API key (for Gemini 2.5 Pro)
- SerpAPI account for Google Jobs search results
- A Gmail account for sending personalized job match emails

## 🛠️ Level Up Ideas
- Integrate with LinkedIn, Jobstreet, or Indeed APIs for a wider range of job sources.
- Allow the agent to find multiple job matches and present them as a curated list.
- Add an option to attach a parsed CV summary as a PDF to the email for quick reference.

---
**Made by:** [khaisa Studio](https://khaisa.studio)  
**Tags:** AI, Gemini, Google Jobs, Job Search, Automation, Cover Letter  
**Category:** `job hunter`  
**Need custom work?** [Contact me](https://khmuhtadin.com/contact)

## 🔗 Nodes Used

Gmail, AI Agent, SerpApi (Google Search), n8n Form Trigger, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
