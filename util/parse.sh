#!/bin/bash

FILE="map.tsx"
COLUMNS="96"

cat $FILE | egrep '<tile id=.*' | sed -e 's/<tile id="[0-9]*" type="//g' | sed -e 's/">//g' | sed -e 's/[^a-z]//g' | sed -e 's/\n//g' > temp
tr -d '\n' < temp > temp2
awk '{gsub(/.{'"$COLUMNS"'}/,"&\n")}1' temp2 > out
rm temp temp2
