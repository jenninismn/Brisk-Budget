import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '10s', target: 50 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 500 },
    { duration: '10s', target: 1000 },
    { duration: '10s', target: 2500 },
    { duration: '10s', target: 5000 },
    { duration: '10s', target: 75000 },
    { duration: '10s', target: 10000 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_failed: [
      {
        threshold: 'rate<0.01',
        abortOnFail: true,
        delayAbortEval: '10s'
      }
    ],
    http_req_duration: [
      {
        threshold: 'p(95)<500',
        abortOnFail: true,
        delayAbortEval: '10s'
      }
    ]
  }
};

export default function () {
  const response = http.get(`${baseUrl}/api/categories`);

  check(response, {
    'Status ist 200': (res) => res.status === 200,
    'Antwort ist ein Kategorien-Array': (res) => {
      try {
        return Array.isArray(res.json());
      } catch {
        return false;
      }
    }
  });

  sleep(1);
}
