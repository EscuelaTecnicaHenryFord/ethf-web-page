FILE=.next
if [[ -d "$FILE" ]]; then
    echo "$FILE exists."
else
    echo "$FILE don't exist."
    sleep 5
    echo $'\n'127.0.0.1$'\t'cms.henryford.edu.ar >> /etc/hosts
    npm run build
fi
cd frontend
npm run next_start

