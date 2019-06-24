const ObjectPool = ({create, reset, starting_num}) => {
    let pool_result, i
    const pool = []

    for (i = 0; i < starting_num; ++i) {
        pool.push(create())
    }

    return {
        getObj: data => {
            if (pool.length > 0) {
                pool_result = pool.pop()
                reset(pool_result, data)
            } else {            
                pool_result = create(data)
            }

            return pool_result
        },

        putObj: obj => {
            pool.push(obj)
        },
    }
}

export default ObjectPool
