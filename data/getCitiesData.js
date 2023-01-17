export const getData = async (city, token) => {
  return await fetch(`https://pfa.foreca.com/api/v1/location/search/${city}?lang=es`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY3Mzk4OTA5MywiZXhwIjoxNjc0MDc1NDkzLCJuYmYiOjE2NzM5ODkwOTMsImp0aSI6ImZlYjUyNTQxM2I1MGY1MjgiLCJzdWIiOiJhbmdlbGl0by1jdWJhMTk4NCIsImZtdCI6IlhEY09oakM0MCtBTGpsWVR0amJPaUE9PSJ9.biJIloEo6_m9A0CiqN4gEq6WtULHg0hHMG-Xr11jSOY';
