exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ valid: false, msg: 'Method Not Allowed' })
    };
  }

  let code = '';
  try {
    const body = JSON.parse(event.body || '{}');
    code = String(body.code || '').trim();
  } catch (e) {
    code = '';
  }

  const VALID_CODES = [
    '11442255',
    '22558866',
    '11224488',
    '55447788'
  ];

  const valid = VALID_CODES.includes(code);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ valid })
  };
};
