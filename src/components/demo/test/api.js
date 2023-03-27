import React from 'react'


const API = () =>
{
    React.useEffect(() => {
        async function fetchData()
        {
            var result = await React.$api.ProductIndex()
            console.log(result)
        }

        fetchData()
    }, [])

    return (
        <>
            接口调用示例
        </>
    )
}

export default API