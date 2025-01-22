import { useEffect, useState } from "react";

function useOtpDataFromLocalStorage<T>(key: string, initialValue: T | null = null): [T | null, boolean] {
    const [storedValue, setStoredValue] = useState<T | null>(initialValue);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            try {
                const parsedData: T = JSON.parse(storedData);
                setStoredValue(parsedData);
            } catch (error) {
                console.error(`Error parsing ${key} from localStorage`, error);
                setStoredValue(null);
                setIsError(true);
            }
        } else {
            setStoredValue(initialValue);
        }
    }, [key, initialValue]);

    return [storedValue, isError];
}

export default useOtpDataFromLocalStorage;
