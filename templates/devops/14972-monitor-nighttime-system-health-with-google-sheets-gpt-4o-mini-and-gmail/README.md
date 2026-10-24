# ⚙️ Monitor nighttime system health with Google Sheets, GPT-4o-mini and Gmail

> ⚡ **53 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This template automates overnight system health monitoring for DevOps and IT operations teams. It checks your internal services and APIs on a schedule, logs all results to Google Sheets, and sends AI-generated alert emails when something goes wrong.

**Who this is for**
System administrators, DevOps engineers, and IT operations teams who need lightweight, automated overnight monitoring — without setting up a full-scale monitoring platform.

**What's included**
A single workflow that handles the full monitoring loop:

1. **Read Monitor Targets** — Reads active URLs from Google Sheets. Add or disable targets anytime without touching the workflow.
2. **Health Check** — Sends HTTP GET requests with a 3-second timeout to each target.
3. **Response Time Tracking** — Measures and logs response time in milliseconds for every check.
4. **Full Result Logging** — Appends every check result (OK and ERROR) to a Google Sheets log with timestamp, status, status code, response time, error message, and alert status.
5. **AI-Generated Alert** — On failure, GPT-4o-mini generates a structured Japanese alert message with situation summary, urgency level, first steps to check, and escalation guidance.
6. **Gmail Alert** — Sends the alert email to a configured address with a clear subject line.
7. **Alert Status Tracking** — Updates the log to mark when an alert has been sent.

**Key features**
- Manage all monitoring targets in Google Sheets — no workflow edits needed to add or remove URLs
- Monitors both HTTP errors (503 etc.) and connection failures (timeout, ECONNREFUSED)
- Logs every check result for uptime analysis and audit purposes
- AI alert in Japanese with actionable first-response guidance
- Configurable schedule via Cron expression (default: every 10 min, weekdays 1:00–4:59 AM)
- Timezone follows your n8n instance setting — no hardcoded timezone

**Prerequisites**
- Google Sheets (copy link provided in the workflow)
- Gmail account connected to n8n
- OpenAI API key

---

このテンプレートは、DevOpsおよびIT運用チーム向けに夜間のシステム死活監視を自動化します。スケジュールに従って社内サービスやAPIをチェックし、全結果をGoogle Sheetsに記録し、障害検知時にはAIが生成したアラートメールを送信します。

**このワークフローの対象ユーザー**
本格的な監視プラットフォームを導入せずに、軽量で自動化された夜間監視を必要としているシステム管理者・DevOpsエンジニア・IT運用担当者向けです。

**含まれる内容**
監視ループ全体を1つのワークフローで処理します：

1. **Read Monitor Targets** — Google SheetsからアクティブなURLを読み込む。ワークフローを編集せずにいつでも監視対象を追加・無効化できる。
2. **Health Check** — 各URLに3秒タイムアウトのHTTP GETリクエストを送信する。
3. **レスポンスタイム計測** — 全チェックのレスポンスタイムをミリ秒単位で計測・記録する。
4. **全結果ログ** — タイムスタンプ・ステータス・ステータスコード・レスポンスタイム・エラーメッセージ・アラート送信状況を含む全チェック結果（OKおよびERROR）をGoogle Sheetsに記録する。
5. **AIアラート生成** — 障害検知時、GPT-4o-miniが状況・緊急度・まず確認すべき手順・エスカレーション先をまとめた構造化された日本語アラートを生成する。
6. **Gmailアラート送信** — 設定したメールアドレスに、分かりやすい件名でアラートメールを送信する。
7. **アラート送信状況の記録** — アラート送信済みかどうかをログに更新する。

**主な特徴**
- 監視対象のURLはすべてGoogle Sheetsで管理 — URLの追加・削除にワークフローの編集は不要
- HTTPエラー（503等）と接続障害（タイムアウト・ECONNREFUSED）の両方を検知
- 稼働率分析や監査目的のために全チェック結果を記録
- 初動対応に役立つ日本語構造化アラートをAIが生成
- Cron式でスケジュールをカスタマイズ可能（デフォルト：平日1:00〜4:59に10分ごと）
- タイムゾーンはn8nインスタンスの設定に従う — ハードコードなし

**前提条件**
- Google Sheets（ワークフロー内にコピー用リンクあり）
- n8nに接続済みのGmailアカウント
- OpenAI APIキー

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
