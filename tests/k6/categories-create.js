import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 15 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<750']
  }
};

export default function () {
  const categoryName = `k6 Kategorie ${__VU}-${__ITER}-${Date.now()}`;

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
