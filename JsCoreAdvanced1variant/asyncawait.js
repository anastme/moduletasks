async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }
  
  (async () => {
    const apiUrl = 'https://api.example.com/data'; 
    try {
      const result = await fetchData(apiUrl);
      console.log(result);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  })();
  
