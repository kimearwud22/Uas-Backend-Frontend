import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'


const InventarisByKode =(date)=> {
    const router = useRouter()
    const [kode, setKode] = useState('')
    const getByKode =(e)=>{
        e.preventDefault()
        router.push({
            pathname:'inventaris',
            query:{
                'kode':kode
            }
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <form action="" onSubmit={getByKode}>
                        <div className="col flex-reserse">
                            <input type="text" className="form-control" placeholder="Kode" value={kode} onChange={(e)=>setKode(e.target.value)}>
                            </input>
                            {kode}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InventarisByKode
