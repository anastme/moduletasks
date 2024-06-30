function repeatOperation(operation, interval) {
    return setInterval(operation, interval);
  }
  
  function sampleOperation() {
    console.log('Oперация выполняется');
  }
    const intervalId = repeatOperation(sampleOperation, 2000);
  
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Выполнение приостановлено');
  }, 10000);
  