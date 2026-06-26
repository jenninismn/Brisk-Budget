# Projektbericht: Web Application Testing
**Projekt:** Brisk Budget Tracker (Personal Money Management)
 
## 1. Projektübersicht
Das Projekt ist eine Full-Stack-Webanwendung zur Verwaltung persönlicher Finanzen. Nutzer können Konten anlegen, Transaktionen erfassen und Kategorien verwalten.
* **Backend:** Node.js
* **Persistenz:** Dateibasiertes Speichersystem (JSON-Dateien) für Konten, Transaktionen und Kategorien.
* **Fokus:** Tests für gewählte Klassen.
 
## 2. Test-Architektur (Die Testpyramide)
Das Projekt implementiert eine moderne Test-Architektur mit Unit-Tests, Integrationstests, E2E-Tests, und Load-Tests.
 
### 2.1 Unit Tests (Logik-Schicht)
* **Tool:** Jest
* **Ziel:** Isolierte Prüfung der reinen Geschäftslogik (z.B. Zinsberechnungen im Modul `mortgage.js`).
* **Umsetzung:** Externe Abhängigkeiten werden vollständig durch Mocks ersetzt. Dies garantiert extrem schnelle, deterministische Tests (White-Box), die mathematische Randfälle und Fehlerbehandlungen prüfen, ohne Seiteneffekte zu erzeugen.
 
### 2.2 Integration Tests (Schnittstellen-Schicht)
* **Tool:** Jest
* **Ziel:** Validierung der Interaktion zwischen verschiedenen Schichten (z.B. `categories.js`).
* **Umsetzung (Bottom-Up):** Es werden *Narrow Integration Tests* sowie *Broad Integration Tests* eingesetzt. Anstatt das Dateisystem zu mocken, operieren diese Tests auf echten temporären JSON-Dateien. Die HTTP-Request- und Response-Objekte (`req`, `res`) werden simuliert. Dies stellt sicher, dass die Datenintegrität über mehrere Dateien hinweg (z.B. Update einer Kategorie spiegelt sich in den Transaktionen wider) in einer realistischen Umgebung gewahrt bleibt.
 
### 2.3 System / End-to-End Tests (UI & Use-Case-Schicht)
* **Tool:** Playwright
* **Ziel:** Black-Box-Testing kompletter User-Flows durch das gesamte System (Frontend -> Backend -> Persistenz).
* **Umsetzung:** Die E2E-Tests validieren kritische Geschäftsprozesse (z.B. "User kann Account und Transaktion erstellen"). Um die Tests wartbar zu halten, wird das **Page Object Model (POM)** Pattern angewendet, welches Test-Logik von UI-Selektoren trennt. Zur Vermeidung von "Flaky Tests" (besonders in der CI) werden dynamische Testdaten (Zeitstempel) und explizite API-Synchronisation (`waitForResponse`) genutzt.
 
## 3. Continuous Integration (CI)
Die gesamte Test-Suite läuft automatisiert in einer CI-Pipeline (GitHub Actions). Bei Code-Änderungen werden die Unit- und Integrationstests ausgeführt, gefolgt von den E2E-Tests in isolierten Browser-Kontexten.