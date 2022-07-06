import React, { useState, useEffect } from 'react'
import styles from "../../../styles/Home.module.css";
import styles1 from "../../../styles/User.module.css";
import axios from 'axios'
import Content from './Content';

const UserContent = ({ date }) => {
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

    //how to make search to kode in nextjs
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        if (search === '') {
            setSearchData(data)
        }
        else {
            setSearchData(data.filter(item => item.kode.toLowerCase().includes(search.toLowerCase())))
        }
    }
        , [search, data])

    const submitSearch = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <div className={styles.contentcontainer}>
                <div className={styles1.row}>
                    
                    <div className="col-md-15">
                        <div className="card">
                            <div className={styles1.cardheader}>
                                <h4 className="card-title">List Inventaris</h4>
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
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h1>LIst Barang Yang di pinjam</h1>
                            </div>
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Kode</th>
                                            <th>Pegawai</th>
                                            <th>Tanggal</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.kode}</td>
                                                    {item.pinjam.map((item, index) => <td key={index}>{item.pegawai}</td>)}
                                                    {item.pinjam.map((item, index) => <td key={index}>{item.tanggal}</td>)}
                                                    {item.pinjam.map((item, index) => <td key={index}>{item.status}</td>)}
                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Content />
        </div>
    )
}

export default UserContent
