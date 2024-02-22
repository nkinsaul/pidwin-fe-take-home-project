export const fetchWord = async (guess) => {
  const url = `http://localhost:8080/api/word?guess=${guess}`
 try {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`${response.status}${response.statusText}`)
  }

  const result = await response.json();
  return result

  } catch (err) {
    throw err
  }
 }  
