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

export const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY3MzczMzg2MywiZXhwIjoxNjczODIwMjYzLCJuYmYiOjE2NzM3MzM4NjMsImp0aSI6IjdiMGUwMzYwNmY1MDIzZWQiLCJzdWIiOiJhbmdlbGl0by1jdWJhMTk4NCIsImZtdCI6IlhEY09oakM0MCtBTGpsWVR0amJPaUE9PSJ9.SSPT1O0UkP4MmcXNKL64LTL3K44_c5_T_6DSRnrgD6Y'