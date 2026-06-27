const { spawnSync } = require('node:child_process');

const runStep = (step) => {
  console.log(`\n=== ${step.name} ===`);

  const result = spawnSync(step.command, step.args, {
    stdio: 'inherit',
    shell: false
  });

  if (result.error) {
    console.error(`\nPipeline abgebrochen: ${step.name} konnte nicht gestartet werden.`);
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`\nPipeline abgebrochen: ${step.name} ist fehlgeschlagen.`);
    process.exit(result.status ?? 1);
  }
};

const steps = [
  {
    name: 'Docker Compose Umgebung bereinigen',
    command: 'docker',
    args: ['compose', 'down', '--remove-orphans']
  },
  {
    name: 'Unit Tests',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', 'unit']
  },
  {
    name: 'Integration Tests',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', 'integration']
  },
  {
    name: 'E2E Tests Chromium',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', 'e2e']
  },
  {
    name: 'Docker Compose Umgebung nach Chromium bereinigen',
    command: 'docker',
    args: ['compose', 'down', '--remove-orphans']
  },
  {
    name: 'E2E Tests Firefox',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', 'e2e-firefox']
  },
  {
    name: 'Docker Compose Umgebung nach Firefox bereinigen',
    command: 'docker',
    args: ['compose', 'down', '--remove-orphans']
  },
  {
    name: 'E2E Tests WebKit',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', 'e2e-webkit']
  },
  {
    name: 'Docker Compose Umgebung nach WebKit bereinigen',
    command: 'docker',
    args: ['compose', 'down', '--remove-orphans']
  },
  {
    name: 'Kategorien lesen Load Test',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', '-e', 'K6_WEB_DASHBOARD_EXPORT=/output/k6/categories-dashboard.html', 'loadtest', 'run', '/scripts/categories.js']
  },
  {
    name: 'Kategorien erstellen Load Test',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', '-e', 'K6_WEB_DASHBOARD_EXPORT=/output/k6/categories-create-dashboard.html', 'loadtest', 'run', '/scripts/categories-create.js']
  },
  {
    name: 'Homepage Load Test',
    command: 'docker',
    args: ['compose', '--profile', 'test', 'run', '--rm', '-e', 'K6_WEB_DASHBOARD_EXPORT=/output/k6/homepage-dashboard.html', 'loadtest', 'run', '/scripts/homepage-loadtest.js']
  },
  {
    name: 'Docker Compose Umgebung stoppen',
    command: 'docker',
    args: ['compose', 'down', '--remove-orphans']
  }
];

for (const step of steps) {
  runStep(step);
}

console.log('\nPipeline erfolgreich abgeschlossen.');
