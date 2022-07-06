import React, { useState, useEffect } from 'react'
import styles from "../../styles/Home.module.css";
import styles1 from "../../styles/User.module.css";
import Router, { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import axios from 'axios'

const UserList = () => {
    const [data, setData] = useState([])

    const getAllInventaris = () => {
        axios.get('http://localhost:5000/inventaris')
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }
    useEffect(() => {
        getAllInventaris()
    }
        , [])

    const [messge, setMessge] = useState('')
    const router = useRouter()

    async function deleteInventaris(kode) {
        try {
            const res = await axios.delete(`http://localhost:5000/inventaris/${kode}`)
            console.log(res)
            if (res.data.message) {
                setMessge(res.data.message)
            }
            alert(`Data kode barang ${kode} berhasil dihapus`)
        }
        catch (err) {
            console.log(err)
        }
        router.push('/')
    }
    
    
            return (
                <div>
                    <div className={styles.contentcontainer}>
                        <div className={styles1.row}>
                            <div className="col-md-15">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">List Inventaris</h4>
                                        <button className='btn btn-success text-align-right'>
                                            <Link href='/admin/Add'>
                                                <a className='text-white'>Tambah Inventaris</a>
                                            </Link>
                                        </button>
                                        

                                    </div>
                                    <div className="card-body">
                                        <div className={styles1.tableresposif}>
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Kode_Barang</th>
                                                        <th>Nama</th>
                                                        <th>Merk</th>
                                                        <th>Jumlah</th>
                                                        <th>Foto</th>
                                                        <th>Keterangan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.map((item, index) => (
                                                        <tr key={item._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{item.kode}</td>
                                                            <td>{item.nama}</td>
                                                            <td>{item.merk}</td>
                                                            <td>{item.jumlah}</td>
                                                            <td>{item.foto}</td>
                                                            <td>{item.keterangan}</td>
                                                            <td>
                                                                <button className="btn btn-primary"><Link href={`/admin/Edit?id=${item._id}&kode=${item.kode}&nama=${item.nama}&merk=${item.merk}&jumlah=${item.jumlah}&foto=${item.foto}&keterangan=${item.keterangan
                                                                    }`}>Edit</Link></button>
                                                                <button className="btn btn-danger" onClick={() => deleteInventaris(item.kode)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

export default UserList
