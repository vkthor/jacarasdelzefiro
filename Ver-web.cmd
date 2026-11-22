@echo off
rem Abre la web de Jácaras del Zéfiro en el navegador (vista previa local).
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias, sólo la primera vez...
  call npm install
)
start "Web Jacaras del Zefiro" cmd /k npm run dev
timeout /t 5 /nobreak >nul
start "" http://localhost:4321/
