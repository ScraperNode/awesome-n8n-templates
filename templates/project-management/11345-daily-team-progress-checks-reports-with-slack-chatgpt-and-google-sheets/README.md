# 📋 Daily team progress checks & reports with Slack, ChatGPT and Google Sheets

> ⚡ **37 views** · 📋 [Project Management](../)

## Description

## Overview

This workflow is a **daily progress check flow that runs automatically at 17:00**. It integrates Google Sheets, Slack, and ChatGPT to automate progress inquiries to team members and generate daily reports.

---
## Overall Workflow Steps
* Triggered **every day at 17:00**.
* Reads the specified WBS management sheet.
* Automatically sends a Slack DM to each member based on their Slack ID.
* After 30 minutes, retrieves and aggregates progress information for the day.
* Sending Report to Slack Channel (e.g., "#daily-report").
* The report includes the date, each member’s progress, comments, etc.

---
## Sample Output
* **Individual Member DM**  
  “Hello Sato-san, could you briefly share today’s progress?”

* **Team Report Sample**

```
📅 2025/10/20 Daily Progress Report
✅ Sato: Task A completed, B at 80%
✅ Suzuki: Design review completed
⚠️ Tanaka: API test delayed (Reason: data not received)
```

---
## Maintenance Tips
* To avoid Slack rate limits, it is recommended to add a few seconds delay between messages
* Update node settings when Google Sheets column names change
* When using ChatGPT API, adjust `temperature` and `max_tokens` as needed

---
## Setup Instructions
1. **Google Sheets API** authenticated (OAuth2)  
   * Obtain the Spreadsheet ID of the target sheet.
2. **Slack Bot Token** with `chat:write`, `users:read`, `im:write` permissions
3. **OpenAI API Key** registered
4. WBS sheet must include the following columns:
   * `Name`
   * `Slack ID` or `Email`
   * `Today Progress`
   * `Remarks`

---
---
# 日次進捗チェック自動化フロー

## 概要

本ワークフローは、**毎日 17:00 に自動実行される日次進捗チェックフロー** です。Google Sheets・Slack・ChatGPT を連携させ、チームメンバーへの進捗確認と報告作成を自動化します。

---
## フロー全体の流れ
* トリガーは **毎日 17:00 に実行**。
* 指定された WBS 管理シートを読み込み。
* 各メンバーの Slack ID を元に、Slack の DM を自動送信。
* 全メンバーへの送信完了後、**30分間待機**。
* メンバーが Slack 上で進捗を入力する時間を確保。
* Slack グループへの報告送信（例：「#daily-report」など）。
* 投稿には日付・メンバーごとの進捗・コメントなどが含まれます。
---

## 実行結果のイメージ

* **メンバー個別DM**
  「こんにちは佐藤さん、今日の進捗を簡単に教えてくださいね😊」
* **チーム報告投稿（例）**

```
  📅 2025/10/20 日次進捗報告
  ✅ 佐藤：タスクA完了、Bは80%
  ✅ 鈴木：設計レビュー完了
  ⚠️ 田中：APIテスト遅延（原因：データ未受領）
```

---
## メンテナンスTips
* Slack rate limit 回避のため、メッセージ間に数秒の遅延を設定推奨
* Google Sheets の列名変更時はノード設定を更新
* ChatGPT API 使用時は `temperature` や `max_tokens` を調整可

---
## セットアップ手順
1. **Google Sheets API** 認証済み（OAuth2）

   * 対象シートの Spreadsheet ID を取得しておく。
2. **Slack Bot Token**（`chat:write`, `users:read`, `im:write` 権限付与）
3. **OpenAI API Key** 登録済み。
4. WBS シートに以下の列が存在すること：

   * `Name`
   * `Slack ID` または `Email`
   * `Today Progress`
   * `Remarks`

## 🔗 Nodes Used

Cron, Function, Google Sheets, Slack, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
