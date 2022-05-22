import { useState, useEffect } from 'react';

const useFetch = (url) => { /// custom in react needs to start with "use" otherwise it won't work
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); /// cleanup function

    setTimeout(() => {
      fetch(url,{ signal: abortCont.signal }) /// adding parameter / an option of the fetch / stop fetch
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
        if(err.name === 'AbortError'){ /// if the abort occurred it won't update the states
          console.log('fetch aborted');
        }else{
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 100);

    return () => abortCont.abort(); /// pause/ abort the fetch when the second argument occurred
  }, [url]) /// I used url as dependencies so that whenever inside the url changes it rerun to get the data

  return { data, isPending, error }; /// to return the data to specific components
}
 
export default useFetch;