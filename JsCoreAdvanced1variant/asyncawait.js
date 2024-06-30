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
  
  // Example usage of the function
  (async () => {
    const apiUrl = 'https://api.example.com/data'; // Replace with the actual API URL
    try {
      const result = await fetchData(apiUrl);
      console.log(result);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  })();
  