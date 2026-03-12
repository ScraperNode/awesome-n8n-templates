# 📖 Slack slash commands AI chat bot

> ⚡ **3,792 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This is a response chatbot in public channels through slash commands. I explain more in detail through the [YouTube video](https://www.youtube.com/watch?v=UpudYFCWaIM), but it's only available in Korean.

## How it works?

When you request the created slash command in Slack, the request comes to the webhook. Then, the Switch Node branches appropriately according to each slash command request. Here, a slash command called `/ask` is connected to the chatbot, and the chatbot generates answers to the questions asked. The final node responds to the channel.

## Set up steps

1. Create a Slack app.
2. Add `chat:write` permission in Slack OAuth&Permissions&gt;Scopes.
3. Create a Command in Slack Slash Commands menu and enter the n8n Webhook node's URL.
4. Complete creating the Slash Commands.
5. Enter the created command in the Switch node.

<br />

---

<br />

슬래시 커맨드를 통한 공개 채널에서의 응답 챗봇 입니다. [유튜브 영상](https://www.youtube.com/watch?v=UpudYFCWaIM)에 더 자세하게 설명 드립니다.

## 설명

슬랙에 생성한 슬래시 커맨드를 슬랙에서 요청하면 웹훅에 요청이 들어옵니다. 이후 Switch Node에서 각 슬래시 커맨드의 요청에 따라 알맞게 분기합니다. 여기에서는 `/ask`​라는 슬래시 커맨드가 챗봇으로 연결되어 있고, 챗봇에서 질문한 내용의 답변을 생성합니다. 마지막 노드에서 채널로 응답을 합니다. 

## 설정 방법

1. Slack 앱을 만드세요.
2. Slack OAuth&Permissions&gt;Scopes 에서 `chat:write` 권한을 추가하세요.
3. Slack Slash Commands 메뉴에서 Command를 생성하고, n8n Webhook 노드의 url을 입력하세요.
4. Slash Slash Commands 생성을 완료하세요.
5. Switch 노드에 생성한 커맨드를 입력하세요.

## 🔗 Nodes Used

Slack, Webhook, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
