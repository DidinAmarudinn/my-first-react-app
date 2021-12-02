import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(res => {
                console.log(res)
                if (!res.ok) {
                    throw Error('could not fetch the data from resource');
                }
                return res.json();
            }).then(data => {
                console.log(data);
                setData(data);
                setIsLoading(false);
                setIsError(null);
            }).catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsError(err.message);
                    setIsLoading(false);
                }
            });
        }, 1000);
        return () => abortCont.abort();
    }, [url])
    return {
        data, isLoading, isError
    }
}

export default useFetch