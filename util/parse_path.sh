#!/bin/bash
FILE="pathing.tsx"
COLUMNS="96"

cat $FILE | egrep '<tile id=.*' | sed -e 's/<tile id="[0-9]*" type="//g' | sed -e 's/">//g' | sed -e 's/[^0-9]//g' | sed -e 's/\n//g' > temp
tr -d '\n' < temp > temp2
awk '{gsub(/.{'"$COLUMNS"'}/,"&\n")}1' temp2 > temp3
cat temp3 | sed -e 's/[0-9]/\0,/g' | sed -e 's/^/[/g' | sed -e 's/$/],/g' | sed -e 's/\[\]//g' > out_path
rm temp temp2 temp3
