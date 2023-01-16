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
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY3MzgyOTU5NywiZXhwIjoxNjczOTE1OTk3LCJuYmYiOjE2NzM4Mjk1OTcsImp0aSI6IjE1MzhlOTJiOWFmNmYyM2IiLCJzdWIiOiJhbmdlbGl0by1jdWJhMTk4NCIsImZtdCI6IlhEY09oakM0MCtBTGpsWVR0amJPaUE9PSJ9.uym7irG4wWo2mnA2cgM7EUyPHpmf_MJTDRwZBVQ1zFQ';
