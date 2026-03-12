# ⚒️ Create a simple data caching system with no external dependencies

> ⚡ **414 views** · ⚒️ [Engineering](../)

## Description

## Greetings!
If you're in need of a quick and dirty cache that doesn't need anything other than the current version of N8N, boy do I have a dodgy script for you to try!

Presenting a simple template for a cache layer using the new N8N Tables Beta!

This flow can easily be adapted to meet your home lab or enterprise needs by swapping out the n8n tables nodes with a external database like redis or even a google sheet if one was so inclined.

## Why Would You Want This?
It's simple really, ever had your flow crash because one of the API's you're using has a rate limit less than the *10,000 GET requests* you're throwing at it per second (yawn). Well caching can help by adding a small buffer on your side if the data is not likely to change between requests. Simply add a call to this flow to check the cache and if there's nothing there it will throw a error which you can detect and respond to by grabbing fresh data from the API.




## How This Flow Works
This flow does three simple steps in order.
1. Check what you want to do to the cache table, read or write.
2. *If Reading*, lookup the data | *If writing*, write the data.
3. *If Reading*, validate and return | *If writing*, just return data written for chaining.

This subflow will return the JSON.parse() representation of the string currently stored at the key in the cache table. This will be the same value written by the cache write input to this node if it has not expired.

If no value is found in the cache table for the input key, then a error is thrown. Listen for this error by setting your error response mode to be {On Error: "Continue (Using Error Output)"} in the node settings. This is your signal to "refresh" the cache by writing a new value to the cache.

## Inputs
#### Action Read Cache
"cacheKey": {any string}

#### Action Write Cache
"cacheKey": {any string},
"trueToWrite": **true**,
"writeValue": {any value including null. You are limited to data size of the table string field so don't stuff 20MB of JSON here.},
"writeTTLms": {optional, any number above 0 as milliseconds. Defaults to 10000}

<hr />

## Setup
Ok onto the good bit, how to set this up locally for yourself. This flow ***Requires*** the Beta version of N8N Tables to function, so update if you are running a older version.
You will need a table called "cache" &lt;- All lowercase.
That table will need the following columns, again all lowercase:
1. key: string
2. ttl: datetime
3. value: string

Once you create this table, download, import, or copy paste the flow into your N8N. Got to every "table" node in the flow and update the settings of the node to point to your newly created table (Be sure to press the "refresh" icon in the node configuration menu to ensure you're binding to the correct columns in the table. It should appear after you update the table. It's small so keep a eye out).

## How to Use
Call this flow via the Execute Sub-Flow node with the specified inputs.
(Optional) You can also "activate" this flow to enable hourly cleaning of the cache table to help keep data sizes down.
This is a example for a quick cache that **can not / should not** hold onto a large amount of data, be sure to pay attention to the **current 50MB limit** of tables as writing lots of large data blocks will result in limits being hit.

<hr />

## Quick FAQ

#### Why is this a *Example* not a proper cache?
Good Question, glad you asked. This flow is "good enough" for a lot of simple usecases and should be replaced with a more robust caching solution when possible for better performance and memory is going to become a bottleneck.

If you're just checking the weather API for yourself and a few friends to serve on your test app, this will be fine.

If you're trying to create the next twitter (now called X) where there's gigs of data moving at any second, and you need a large cache to make sure your database doesn't go down, perhaps consider not using a N8N flow for that purpose.

#### Ok so when should I use this then?
Well like it was mentioned above, when you have relatively small amounts of data to store and it's not likely to change very often, then this flow should solve your problem.
Quick examples of things to cache include:
1. Checking the weather once daily and storing it.
2. Scraping a webstore to check for a daily price of a product you're looking to buy once it's on sale.
3. Checking google trends to see if your company is trending right now.

#### Those examples seem odd, why'd you choose those?
Because Caching is one of those *hard* things in computer science that no one really gets right
*"cache invalidation, naming things, and off-by-1 errors"*.

Caching should be done on a case by case basis really. For example; the author of this workflow uses it behind some webhook flows for data that takes a long time to grab from the database but only changes 2-5 times a day.

#### Do I have to do things the way you did?
No? This is a example of something I threw together in a afternoon to solve a real problem I had. N8N is very flexible and this happened to work out for me. If you don't like the way the example names things or implements its cache invalidation: try things yourself and experiment, you may find that this example will solve your problems by itself without being overly complex. Only you know what will and wont work to solve your problems.

## 🔗 Nodes Used

Stop and Error, Execute Workflow Trigger, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
