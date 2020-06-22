#!/usr/bin/env bash
node zetaconvert events_20191126.jsonl --clicked --url="https://www.allianzlife.com/for-financial-professionals/ria?cmpid=7013g000000LYakAAG-pp-ria-ria-19--ln-191015" --campaign="DEDI: Allianz resend 201911" --output="events_20191126.csv"

node zetaconvert events_20191126.jsonl --clicked --url="white_papers" --campaign="DEDI: Allianz resend 201911" --output="events_20191126.csv" --append

node zetaconvert events_20191127.jsonl --clicked --url="https://www.allianzlife.com/for-financial-professionals/ria?cmpid=7013g000000LYakAAG-pp-ria-ria-19--ln-191015" --campaign="DEDI: Allianz resend 201911" --output="events_20191127-allianzlife.csv"

node zetaconvert events_20191127.jsonl --clicked --url="white_papers" --campaign="DEDI: Allianz resend 201911" --output="events_20191127-whitepaper.csv"

node zetaconvert events_20191128.jsonl --clicked --url="https://www.allianzlife.com/for-financial-professionals/ria?cmpid=7013g000000LYakAAG-pp-ria-ria-19--ln-191015" --campaign="DEDI: Allianz resend 201911" --output="events_20191128-allianzlife.csv"

node zetaconvert events_20191128.jsonl --clicked --url="white_papers" --campaign="DEDI: Allianz resend 201911" --output="events_20191128-whitepaper.csv"

node zetaconvert events_20191129.jsonl --clicked --url="https://www.allianzlife.com/for-financial-professionals/ria?cmpid=7013g000000LYakAAG-pp-ria-ria-19--ln-191015" --campaign="DEDI: Allianz resend 201911" --output="events_20191129-allianzlife.csv"

node zetaconvert events_20191129.jsonl --clicked --url="white_papers" --campaign="DEDI: Allianz resend 201911" --output="events_20191129-whitepaper.csv"

node zetaconvert events_20191129.jsonl --opened  --campaign="DEDI: Allianz resend 201911" --output="events_20191129-opened.csv"