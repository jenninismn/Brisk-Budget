import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '10s', target: 25 },
    { duration: '10s', target: 50 },
    { duration: '10s', target: 100 },
    { duration: '10s', target: 250 },
    { duration: '10s', target: 500 },
    { duration: '10s', target: 1000 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_failed: [
      {
        threshold: 'rate<0.05',
        abortOnFail: true,
        delayAbortEval: '10s'
      }
    ],
    http_req_duration: [
      {
        threshold: 'p(95)<750',
        abortOnFail: true,
        delayAbortEval: '10s'
      }
    ]
  }
};

export default function () {
  const categoryName = `k6 Threshold ${__VU}-${__ITER}-${Date.now()}`;

  const response = http.post(
    `${baseUrl}/api/categories`,
    JSON.stringify({
      name: categoryName,
      emoji: '🧪',
      subcategories: []
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  check(response, {
    'Kategorie wurde erstellt': (res) => res.status === 201,
    'Antwort enthält den Kategorienamen': (res) => {
      try {
        return res.json('name') === categoryName;
      } catch {
        return false;
      }
    }
  });

  sleep(1);
}
