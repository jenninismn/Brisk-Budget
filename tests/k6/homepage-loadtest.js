import http from 'k6/http';
import { check, sleep } from 'k6';

const baseUrl = __ENV.BASE_URL || 'http://localhost:3000';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 50 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500']
  }
};

export default function () {
  const response = http.get(baseUrl);

  check(response, {
    'Status ist 200': (res) => res.status === 200,
    'Antwortzeit ist unter 500ms': (res) => res.timings.duration < 500
  });

  sleep(1);
}
