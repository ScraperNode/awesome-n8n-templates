# 📋 Audio-to-Trello task bot

> ⚡ **3,234 views** · 📋 [Project Management](../)

## Description

Telegram Tasker Bot — это сценарий n8n, который принимает голосовые сообщения в Telegram, автоматически превращает их в текст, извлекает из него ключевые поля задачи и создаёт карточку в нужной доске Trello. Пользователь просто говорит задачу — бот сам оформляет её и присылает ссылку на готовую карточку. 

Для использования вам потребуется telegram bot.
Его можно создать через бота [BotFather](https://web.telegram.org/k/#@BotFather)

Так же понадобится доступ к API chatgpt - он используется только для транскрибции аудио в речь. Вы можете использовать любой другой сервис, по вашему выбору.

И аккаунт в trello, с доступом к API.

**!Внимание!**
ID доски в trello можно взять из url
ID столбца на доске трелло можно взять через инструменты разработчика (по крайней мере я так получал эти данные)

## 🔗 Nodes Used

Trello, Telegram, Telegram Trigger, Stop and Error, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
