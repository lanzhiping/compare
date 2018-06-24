#!/bin/bash
SERVER="127.0.0.1"

echo push to $SERVER...
rsync -Pav -e "ssh -i ~/.ssh/$PUB" build/* $SERVER:/Users/lanzhiping/Desktop/source/compare/result/
echo done.