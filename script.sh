#!/bin/bash

echo "Rozpoczynanie budowy i uruchamiania kontenerów Docker..."

docker-compose up --build -d

echo "Kontenery zostały uruchomione. Aplikacja jest dostępna na porcie 8080."

echo "Testowanie połączenia z aplikacją..."
sleep 5
if curl -s http://localhost:8080; then
    echo "Test połączenia z aplikacją zakończony sukcesem."
else
    echo "Test połączenia z aplikacją nie powiódł się."
fi