import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = ` ${title} -Cute Photography`;
    }, [title])
};
export default useTitle;