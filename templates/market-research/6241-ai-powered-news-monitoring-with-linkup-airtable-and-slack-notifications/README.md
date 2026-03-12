# 📊 AI-powered news monitoring with Linkup, Airtable, and Slack notifications

> ⚡ **1,098 views** · 📊 [Market Research & Insights](../)

## Description

This template provides a fully automated system for monitoring news on any topic you choose. It leverages Linkup's AI-powered web search to find recent, relevant articles, extracts key information like the title, date, and summary, and then neatly organizes everything in an Airtable base.

Stop manually searching for updates and let this workflow deliver a curated news digest directly to your own database, complete with a Slack notification to let you know when it's done. This is the perfect solution for staying informed without the repetitive work.


## **Who is this for?**

* **Marketing & PR professionals:** Keep a close eye on industry trends, competitor mentions, and brand sentiment.
* **Analysts & researchers:** Effortlessly gather source material and data points on specific research topics.
* **Business owners & entrepreneurs:** Stay updated on market shifts, new technologies, and potential opportunities without dedicating hours to reading.
* **Anyone with a passion project:** Easily follow developments in your favorite hobby, field of study, or area of interest.


## **What problem does this solve?**

* **Eliminates manual searching:** Frees you from the daily or weekly grind of searching multiple news sites for relevant articles.
* **Centralizes information:** Consolidates all relevant news into a single, organized, and easily accessible Airtable database.
* **Provides structured data:** Instead of just a list of links, it extracts and formats key information (title, summary, URL, date) for each article, ready for review or analysis.
* **Keeps you proactively informed:** The automated Slack notification ensures you know exactly when new information is ready, closing the loop on your monitoring process.

## **How it works**

1.  **Schedule:** The workflow runs automatically based on a schedule you set (the default is weekly).
2.  **Define topics:** In the **Set news parameters** node, you specify the topics you want to monitor and the time frame (e.g., news from the last 7 days).
3.  **AI web search:** The **Query Linkup for news** node sends your topics to Linkup's API. Linkup's AI searches the web for relevant news articles and returns a structured list containing each article's title, URL, summary, and publication date.
4.  **Store in Airtable:** The workflow loops through each article found and creates a new record for it in your Airtable base.
5.  **Notify on Slack:** Once all the news has been stored, a final notification is sent to a Slack channel of your choice, letting you know the process is complete and how many articles were found.


## **Setup**

1.  **Configure the trigger:** Adjust the **Schedule Trigger** node to set the frequency and time you want the workflow to run.
2.  **Set your topics:** In the **Set news parameters** node, replace the example topics with your own keywords and define the news freshness that you'd like to set.
3.  **Connect your accounts:**
    * **Linkup:** Add your Linkup API key in the **Query Linkup for news** node. Linkup's free plan includes €5 of credits monthly, enough for about 1,000 runs of this workflow.
    * **Airtable:** In the **Store one news** node, select your Airtable account, then choose the Base and Table where you want to save the news.
    * **Slack:** In the **Notify in Slack** node, select your Slack account and the channel where you want to receive notifications.
4.  **Activate the workflow:** Toggle the workflow to "Active", and your automated news monitoring system is live!


## **Taking it further**

* **Change your database:** Don't use Airtable? Easily swap the **Airtable** node for a **Notion**, **Google Sheets**, or any other database node to store your news.
* **Customize notifications:** Replace the **Slack** node with a **Discord**, **Telegram**, or **Email** node to get alerts on your preferred platform.
* **Add AI analysis:** Insert an AI node after the Linkup search to perform sentiment analysis on the news summaries, categorize articles, or generate a high-level overview before saving them.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
