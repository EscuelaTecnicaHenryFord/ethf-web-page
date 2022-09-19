FILE=.next
if [[ -d "$FILE" ]]; then
    echo "$FILE exists."
else
    echo "$FILE don't exist."
    sleep 30
    npm run build
fi
cd frontend
npm run next_start

