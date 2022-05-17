import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url,{ signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json(); /// this passes the json into a javascript object for us
      })
      .then(data => {  /// the parameter is the actuall data that the res.json() return
        setIsPending(false);
        setData(data);  /// place the returned response to the variable
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        if(err.name === 'AbortError'){
          console.log('fetch aborted');
        }else{
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 100);

    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;