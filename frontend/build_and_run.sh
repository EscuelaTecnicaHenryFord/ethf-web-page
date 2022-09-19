FILE=.next
if [ -d "$FILE" ]; then
    echo "$FILE exists."
else
    echo "$FILE don't exist."
    echo "Waiting 30 seconds to build next app"
    sleep 30
    npm run build
fi
npm run next_start

